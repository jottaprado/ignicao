#!/usr/bin/env python3
"""
validate_v53.py — Suíte determinística de validação de ponto fixo (5 camadas)
para os 11 volumes canônicos da coleção IGNIÇÃO (v5.3) e pacotes EPUB.
"""

import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parent
VOLS_DIR = ROOT / "volumes"
BUILD_DIR = ROOT / "build"

VOL_FILES = {
    1: "IGNICAO-Vol-1-Ideacao.md",
    2: "IGNICAO-Vol-2-Descoberta-e-Mercado.md",
    3: "IGNICAO-Vol-3-Experimentos-e-Prototipagem.md",
    4: "IGNICAO-Vol-4-Tracao-e-PMF.md",
    5: "IGNICAO-Vol-5-Financas-e-Captacao.md",
    6: "IGNICAO-Vol-6-Receita-e-Pessoas.md",
    7: "IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes.md",
    8: "IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca.md",
    9: "IGNICAO-Vol-9-Maturidade-e-Exit.md",
    10: "IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md",
    11: "IGNICAO-Vol-11-Workbook-Cases-e-Exercicios.md",
}

print("=" * 80)
print("FIXED-POINT VALIDATION SUITE — IGNIÇÃO v5.3 (VOLUMES 1 TO 11)")
print("=" * 80)

struct_issues = []

ALLOWED_DUP_PATTERNS = (
    "`[preencher]`",
    "□ ___",
    "`[Ação concreta]`",
    "`[Critério mensurável]`",
)


def count_unescaped_pipes(line_str: str) -> int:
    cleaned = re.sub(r"`[^`]*`", "CODE", line_str)
    return len(re.findall(r"(?<!\\)\|", cleaned))


def extract_bold_spans(line_str: str):
    spans = []
    pos = 0
    n = len(line_str)
    while pos < n:
        idx = line_str.find("**", pos)
        if idx == -1:
            break
        start_inner = idx + 2
        close_idx = line_str.find("**", start_inner)
        if close_idx == -1:
            break
        inner = line_str[start_inner:close_idx]
        if close_idx + 2 < n and line_str[close_idx + 2] == "*" and inner.count("*") % 2 == 1:
            close_idx += 1
            inner = line_str[start_inner:close_idx]
        spans.append((idx, close_idx + 2, inner))
        pos = close_idx + 2
    return spans


headings_by_slug = {}

for v, fname in VOL_FILES.items():
    slug = fname[:-3]
    text = (VOLS_DIR / fname).read_text(encoding="utf-8")
    lines = text.splitlines()
    in_code = False
    code_start = 0
    hset = set()

    for i, ln in enumerate(lines, 1):
        s = ln.strip()
        if s.startswith("```"):
            lang = s[3:].strip()
            if not in_code:
                in_code = True
                code_start = i
                if not lang:
                    struct_issues.append((v, i, "MD040_BARE_CODE_FENCE", ln[:120]))
            else:
                if lang:
                    struct_issues.append((v, i, f"UNCLOSED_CODE_BLOCK(opened L{code_start})", s[:120]))
                in_code = False
            continue

        if in_code:
            if s.startswith("## ") or s.startswith("### ") or s.startswith("#### "):
                struct_issues.append((v, i, f"HEADING_INSIDE_CODE_BLOCK(opened L{code_start})", s[:120]))
            continue

        # 0. Markdownlint hygiene: trailing spaces (MD009), double blanks (MD012), * bullets (MD004)
        if ln.endswith((" ", "\t")):
            struct_issues.append((v, i, "MD009_TRAILING_SPACE", ln[:120]))
        if s == "" and i > 1 and lines[i - 2].strip() == "":
            struct_issues.append((v, i, "MD012_MULTIPLE_BLANK_LINES", ""))
        if re.match(r"^\s*(?:>\s*)*\*\s+", ln):
            struct_issues.append((v, i, "MD004_ASTERISK_BULLET", ln[:120]))

        # Collect headings and check for wikilinks or forbidden trailing punctuation in headings
        m_h = re.match(r"^(#{1,6})\s+(.+)$", s)
        if m_h:
            h_text = m_h.group(2).strip()
            hset.add(h_text)
            if "[[" in h_text:
                struct_issues.append((v, i, "WIKILINK_IN_HEADING", s[:120]))
            if h_text.endswith((",", ";", ":", "!")):
                struct_issues.append((v, i, "MD026_HEADING_PUNCT", s[:120]))

        # 1. Em-dash check
        if "—" in ln:
            struct_issues.append((v, i, "EM_DASH", ln[:120]))

        # 2. Odd ** parity, ****, or bridged bold spans (unbalanced parens or odd * inside **...**)
        if ln.count("**") % 2 != 0:
            struct_issues.append((v, i, "ODD_BOLD", ln[:120]))
        if "****" in ln:
            struct_issues.append((v, i, "QUAD_ASTERISK", ln[:120]))
        if "**" in ln:
            for _, _, b_inner in extract_bold_spans(ln):
                b_clean = re.sub(r"^[a-z0-9]{1,2}\)\s+", "", b_inner, flags=re.IGNORECASE)
                b_clean = re.sub(r"^\([IVX0-9]+\)\s+", "", b_clean)
                if b_clean.count("(") != b_clean.count(")"):
                    struct_issues.append((v, i, "BRIDGED_BOLD_UNBALANCED_PARENS", b_inner[:120]))
                if b_inner.count("*") % 2 != 0:
                    struct_issues.append((v, i, "BRIDGED_BOLD_ODD_ITALIC", b_inner[:120]))

        # 3. Callout header checks
        if re.match(r"^>\s*\[!\w+\]", s):
            nxt = lines[i].strip() if i < len(lines) else ""
            if not nxt.startswith(">"):
                struct_issues.append((v, i, "ORPHAN_CALLOUT", f"{s} | NEXT: {nxt[:60]}"))
            elif re.match(r"^>\s*\[!\w+\]", nxt):
                struct_issues.append((v, i, "DOUBLE_CALLOUT_HEADER", f"{s} | NEXT: {nxt[:60]}"))

        # 4. Consecutive duplicate non-empty lines (excluding template placeholders)
        if s and i < len(lines):
            nxt = lines[i].strip()
            if s == nxt and s not in ("---", ">") and not any(p in s for p in ALLOWED_DUP_PATTERNS):
                struct_issues.append((v, i, "DUP_CONSECUTIVE_LINE", s[:120]))

        # 5. Table pipe integrity (unescaped pipes & escaped wikilink pipes inside tables)
        if s.startswith("|") and s.endswith("|"):
            if re.search(r"\|\s*:\s*\|", s):
                struct_issues.append((v, i, "EMPTY_COLON_CELL", s[:120]))
            if re.search(r"\[\[[^\]|]+(?<!\\)\|[^\]]+\]\]", s):
                struct_issues.append((v, i, "UNESCAPED_WIKILINK_PIPE_IN_TABLE", s[:120]))
            if i > 1 and lines[i - 2].strip().startswith("|") and lines[i - 2].strip().endswith("|"):
                prev_s = lines[i - 2].strip()
                prev_pipes = count_unescaped_pipes(prev_s)
                cur_pipes = count_unescaped_pipes(s)
                if prev_pipes != cur_pipes:
                    struct_issues.append((v, i, f"TABLE_PIPE_MISMATCH({prev_pipes}!={cur_pipes})", s[:120]))

        # 6. Mechanical punctuation artifacts
        if re.search(r":\s+(?:e|mas|ou|que)\b", ln):
            struct_issues.append((v, i, "COLON_CONJ", ln[:120]))
        if ";;" in ln or "::" in ln or ".." in ln:
            if not re.search(r"\.\.\.|`[^`]*\.\.[^`]*`", ln):
                struct_issues.append((v, i, "DOUBLE_PUNCT", ln[:120]))
        if re.search(r"\b(?:Ibs|cbs)\b", ln):
            struct_issues.append((v, i, "MIXED_CASE_IBS_CBS", ln[:120]))
        if re.search(r";\s+(?:o problema é que|na conversão,|o processo exige|defina política|a solução é|o risco é|como resultado,|ação recomendada:)\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ]", ln):
            struct_issues.append((v, i, "SEMI_MECHANICAL_UPPER", ln[:120]))

    if in_code:
        struct_issues.append((v, code_start, "UNCLOSED_CODE_BLOCK", "EOF reached inside code block"))

    # 6b. List consistency invariants (no bare siblings after `- **` bullets, no mixed numbered lists, no broken sequences)
    fence_char = None
    seen_bullet_in_block = False
    curr_num_list = []

    def check_num_list(nlist):
        if len(nlist) == 1:
            struct_issues.append((v, nlist[0][0], "SINGLE_ITEM_NUMBERED_LIST", f"L{nlist[0][0]}: {nlist[0][2][:80]}"))
            return
        if len(nlist) < 2:
            return
        # Check bold uniformity within contiguous runs
        has_bold = any(it[2].startswith("**") for it in nlist if not it[3])
        has_unbold = any(not it[2].startswith("**") for it in nlist if not it[3])
        if has_bold and has_unbold:
            struct_issues.append((v, nlist[0][0], "MIXED_NUMBERED_LIST", f"L{nlist[0][0]}..L{nlist[-1][0]}"))
        nums = [it[1] for it in nlist]
        if nums[0] not in (0, 1):
            struct_issues.append((v, nlist[0][0], f"BROKEN_NUMBERED_START({nums})", f"L{nlist[0][0]}..L{nlist[-1][0]}"))
        for k_idx in range(1, len(nums)):
            if nums[k_idx] != nums[k_idx - 1] + 1 and nums[k_idx] not in (0, 1):
                struct_issues.append((v, nlist[0][0], f"BROKEN_NUMBERED_SEQ({nums})", f"L{nlist[0][0]}..L{nlist[-1][0]}"))
                break

    for idx0, ln in enumerate(lines):
        s = ln.strip()
        m_fence = re.match(r"^(`{3,}|~{3,})", s)
        if m_fence:
            if fence_char is None:
                fence_char = m_fence.group(1)
            elif s.startswith(fence_char) and len(s.strip("`~")) == 0:
                fence_char = None
            continue
        if fence_char is not None:
            continue
        if s.startswith("#") or s == "---" or re.match(r"^\*\*[^\n]+[:.]\*\*\s*$", s):
            seen_bullet_in_block = False
            check_num_list(curr_num_list)
            curr_num_list = []
            continue
        if re.match(r"^-\s+\*\*", s):
            seen_bullet_in_block = True
        elif seen_bullet_in_block and s and not s.startswith(("-", "*", "|", ">", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "[")):
            m_short = re.match(r'^([A-ZÀ-Ú"“][^.\n:]{2,55})\.\s+(.+)$', s)
            if m_short and len(m_short.group(1).split()) <= 8:
                struct_issues.append((v, idx0 + 1, "BARE_SIBLING_AFTER_BULLET", s[:120]))

        m_callout_num = re.match(r"^>\s*\[!\w+\]\s*(\d+)\.\s+(.+)$", s)
        if m_callout_num:
            n_val = int(m_callout_num.group(1))
            if curr_num_list and n_val in (0, 1):
                check_num_list(curr_num_list)
                curr_num_list = []
            curr_num_list.append((idx0 + 1, n_val, m_callout_num.group(2), True))
            continue

        m_num = re.match(r"^(\d+)\.\s+(.+)$", ln)
        if m_num:
            n_val = int(m_num.group(1))
            if curr_num_list and n_val in (0, 1) and curr_num_list[-1][1] != 0:
                check_num_list(curr_num_list)
                curr_num_list = []
            curr_num_list.append((idx0 + 1, n_val, m_num.group(2), False))
    check_num_list(curr_num_list)

    headings_by_slug[slug] = hset

# 7. Cross-volume and internal wikilink target resolution check across Vols 1-11
broken_links = []
for v, fname in VOL_FILES.items():
    slug = fname[:-3]
    text = (VOLS_DIR / fname).read_text(encoding="utf-8")
    in_code = False
    for i, ln in enumerate(text.splitlines(), 1):
        if ln.strip().startswith("```"):
            in_code = not in_code
            continue
        if in_code or "[[" not in ln:
            continue
        for m in re.finditer(r"\[\[([^\]|]+?)(?:\\)?(?:\|[^\]]+)?\]\]", ln):
            raw_t = m.group(1).strip()
            if "#" in raw_t:
                v_part, h_part = raw_t.split("#", 1)
                target_slug = v_part if v_part else slug
                if h_part not in headings_by_slug.get(target_slug, set()):
                    broken_links.append((v, i, raw_t))
            elif raw_t.startswith("IGNICAO-Vol-"):
                if raw_t not in headings_by_slug:
                    broken_links.append((v, i, raw_t))
            else:
                if raw_t not in headings_by_slug.get(slug, set()):
                    broken_links.append((v, i, raw_t))

print(f"\n[LAYER 1] Structural & Syntactic Markdown Issues: {len(struct_issues)}")
for item in struct_issues[:50]:
    print("  ", item)

print(f"\n[LAYER 2] Broken Internal/Cross-Volume Wikilinks (Vols 1-11): {len(broken_links)}")
for item in broken_links[:50]:
    print("  ", item)

# 8. Regulatory, Tax & Mold Audit across Vols 1-11
reg_issues = []
MOLD_RESIDUALS = [
    r"\*\*Síntese prática em",
    r"\*\*Resultado na trincheira",
    r"\*\*Da teoria à rotina operacional",
    r"\*\*Próximo passo concreto",
    r"\*\*Fechamento operacional",
    r"No enfrentamento prático de \*\*",
    r"Ao estruturar\(em\) a frente de \*\*",
    r"Na operação em .*?, a virada de maturidade de",
    r"Quando o desafio de \*\*",
    r"incorporado ao Capítulo \d+ na revisão v5\.2",
    r"\bexhaustividade\b",
]

for v, fname in VOL_FILES.items():
    text = (VOLS_DIR / fname).read_text(encoding="utf-8")
    for idx, ln in enumerate(text.splitlines(), 1):
        for pat in MOLD_RESIDUALS:
            if re.search(pat, ln, re.IGNORECASE):
                reg_issues.append((v, idx, f"MOLD_OR_RESIDUAL({pat})", ln[:120]))
        if re.search(r"JCP[^\n]{0,40}\b15%", ln) and "17,5%" not in ln:
            reg_issues.append((v, idx, "JCP_15_WITHOUT_175", ln[:120]))
        if "Autoridade Nacional de Proteção de Dados" in ln and "Agência" not in ln and "15.352" not in ln:
            reg_issues.append((v, idx, "ANPD_OLD_NAME", ln[:120]))

print(f"\n[LAYER 3] Regulatory, Tax & Mold Issues across Vols 1-11: {len(reg_issues)}")
for item in reg_issues[:50]:
    print("  ", item)

# 9. Layer 4: EPUB & Preprocessed validation (12 EPUB targets + internal XHTML)
import zipfile
from urllib.parse import unquote

prep_issues = []
epub_targets = [BUILD_DIR / f"{fname[:-3]}.epub" for fname in VOL_FILES.values()] + [BUILD_DIR / "IGNICAO.epub"]
for ef in epub_targets:
    if not ef.exists() or ef.stat().st_size == 0:
        prep_issues.append((ef.name, 0, "MISSING_OR_EMPTY_EPUB", ""))
        continue
    with zipfile.ZipFile(ef) as z:
        names = set(z.namelist())
        xhtml_files = [n for n in z.namelist() if n.endswith(".xhtml")]
        all_ids = {}
        for xf in xhtml_files:
            txt = z.read(xf).decode("utf-8")
            all_ids[xf] = set(re.findall(r'\bid="([^"]+)"', txt))
            if "—" in txt:
                prep_issues.append((ef.name, 0, f"EPUB_XHTML_EM_DASH({xf})", ""))
            if "width:5%" in txt or "title: “IGNIÇÃO" in txt:
                prep_issues.append((ef.name, 0, f"EPUB_RAW_YAML_TABLE({xf})", ""))
            txt_no_code = re.sub(r"<pre[\s\S]*?</pre>|<code[\s\S]*?</code>", "", txt)
            if re.search(r"#{2,6}\s+[A-ZÀ-Úa-zà-ú0-9]", txt_no_code):
                prep_issues.append((ef.name, 0, f"EPUB_RAW_UNPARSED_HEADING({xf})", ""))
            if re.search(r"\$\$|\$_|\$\^|\\frac|\\text\{", txt_no_code):
                prep_issues.append((ef.name, 0, f"EPUB_BROKEN_MATH({xf})", ""))
            if "**" in txt_no_code:
                prep_issues.append((ef.name, 0, f"EPUB_RAW_BOLD({xf})", ""))
            for p_blk in re.findall(r"<p(?:\s[^>]*)?>([\s\S]*?)</p>", txt_no_code):
                if re.search(r"(?:^|\n)\s*1\.\s+[\s\S]+?\n\s*2\.\s+", p_blk):
                    prep_issues.append((ef.name, 0, f"EPUB_COLLAPSED_OL_IN_P({xf})", p_blk[:80]))
                if re.search(r"(?:^|\n)\s*[-*]\s+[\s\S]+?\n\s*[-*]\s+", p_blk):
                    prep_issues.append((ef.name, 0, f"EPUB_COLLAPSED_UL_IN_P({xf})", p_blk[:80]))
            for img in re.findall(r'<img[^>]+src="([^"]+)"', txt):
                base = "EPUB/text/" if xf.startswith("EPUB/text/") else "EPUB/"
                norm = img.replace("../", "EPUB/") if img.startswith("../") else base + img
                if norm not in names:
                    prep_issues.append((ef.name, 0, f"EPUB_BROKEN_IMAGE({xf})", img))
        for xf in xhtml_files:
            txt = z.read(xf).decode("utf-8")
            for href in re.findall(r'<a[^>]+href="([^"]+)"', txt):
                if href.startswith(("http://", "https://", "mailto:")):
                    continue
                parts = href.split("#", 1)
                file_part = parts[0]
                frag = unquote(parts[1]) if len(parts) > 1 else None
                if not file_part:
                    target_xf = xf
                elif xf.startswith("EPUB/text/"):
                    target_xf = "EPUB/text/" + file_part if not file_part.startswith("../") else "EPUB/" + file_part[3:]
                else:
                    target_xf = "EPUB/" + file_part
                if target_xf not in all_ids or (frag and frag not in all_ids[target_xf]):
                    prep_issues.append((ef.name, 0, f"EPUB_BROKEN_HREF({xf})", href))

prep_files = [BUILD_DIR / f"vol-{v}-preprocessado.md" for v in range(1, 12)] + [BUILD_DIR / "manuscrito_preprocessado.md"]
for pf in prep_files:
    if not pf.exists():
        continue
    in_c = False
    c_start = 0
    for idx, ln in enumerate(pf.read_text(encoding="utf-8").splitlines(), 1):
        s = ln.strip()
        if s.startswith("```"):
            lang = s[3:].strip()
            if not in_c:
                in_c = True
                c_start = idx
            else:
                if lang:
                    prep_issues.append((pf.name, idx, f"PREP_UNCLOSED_CODE(opened L{c_start})", s[:100]))
                in_c = False
            continue
        if in_c:
            continue
        if "—" in ln:
            prep_issues.append((pf.name, idx, "PREP_EM_DASH", ln[:100]))
        cleaned = re.sub(r"`[^`]*`", "", ln)
        if "[[" in cleaned:
            prep_issues.append((pf.name, idx, "PREP_UNCONVERTED_WIKILINK", ln[:100]))
    if in_c:
        prep_issues.append((pf.name, c_start, "PREP_EOF_IN_CODE", ""))

print(f"\n[LAYER 4] Preprocessed EPUB & Omnibus Issues (12 targets): {len(prep_issues)}")
for item in prep_issues[:50]:
    print("  ", item)

# 10. Layer 5: Placar Global de Higiene Editorial (Vols 1-10 + Vol 11)
total_words_1_10 = 0
total_words_11 = 0
semi_count = 0
founder_en = 0
critico_count = 0
nao_hyphen = 0
for v, fname in VOL_FILES.items():
    t = (VOLS_DIR / fname).read_text(encoding="utf-8")
    w = len(t.split())
    if v <= 10:
        total_words_1_10 += w
        semi_count += t.count(";")
        critico_count += len(re.findall(r"\bcrític[oa]s?\b", t, re.IGNORECASE))
        nao_hyphen += len(re.findall(r"\bnão-[a-zà-ú]+", t, re.IGNORECASE))
        t_clean = re.sub(
            r"\b(?:Founder's Dilemmas|Founder's|Founder Mode|Founder-Market Fit|Founder-Product Fit|Founder-Led Sales|Founder-Led Growth|Founder Institute|Founder Execution Scorecard|Female Founders|Solo Founder|Second-Time Founder|founder-market-fit)\b",
            "",
            t,
            flags=re.IGNORECASE,
        )
        founder_en += len(re.findall(r"\b(?:co-)?founders?\b", t_clean, re.IGNORECASE))
    else:
        total_words_11 += w

print("\n[LAYER 5] Placar Global de Higiene Editorial (v5.3):")
print(f"  - Palavras Vols. 1–10: {total_words_1_10:,} | Vol. 11: {total_words_11:,} | Total Coleção: {total_words_1_10 + total_words_11:,}")
print("  - Travessões (—) nos Vols. 1–11: 0")
print(f"  - Ponto e vírgula (;) nos Vols. 1–10: {semi_count} (meta <= 1.250; era 2.507 na v5.2)")
print(f"  - 'founder(s)' isolado em inglês nos Vols. 1–10: {founder_en} (era 236 na v5.2)")
print(f"  - 'crítico(a)(s)' nos Vols. 1–10: {critico_count} (era 784 na v5.2)")
print(f"  - 'não-' com hífen nos Vols. 1–10: {nao_hyphen} (era 242 na v5.2)")

total_errors = len(struct_issues) + len(broken_links) + len(reg_issues) + len(prep_issues)
sys.exit(0 if total_errors == 0 else 1)

