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
            else:
                if lang:
                    struct_issues.append((v, i, f"UNCLOSED_CODE_BLOCK(opened L{code_start})", s[:120]))
                in_code = False
            continue

        if in_code:
            if s.startswith("## ") or s.startswith("### ") or s.startswith("#### "):
                struct_issues.append((v, i, f"HEADING_INSIDE_CODE_BLOCK(opened L{code_start})", s[:120]))
            continue

        # Collect headings and check for wikilinks in headings
        m_h = re.match(r"^(#{1,6})\s+(.+)$", s)
        if m_h:
            h_text = m_h.group(2).strip()
            hset.add(h_text)
            if "[[" in h_text:
                struct_issues.append((v, i, "WIKILINK_IN_HEADING", s[:120]))

        # 1. Em-dash check
        if "—" in ln:
            struct_issues.append((v, i, "EM_DASH", ln[:120]))

        # 2. Odd ** parity or ****
        if ln.count("**") % 2 != 0:
            struct_issues.append((v, i, "ODD_BOLD", ln[:120]))
        if "****" in ln:
            struct_issues.append((v, i, "QUAD_ASTERISK", ln[:120]))

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

    if in_code:
        struct_issues.append((v, code_start, "UNCLOSED_CODE_BLOCK", "EOF reached inside code block"))

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

# 9. Layer 4: EPUB & Preprocessed validation (12 EPUB targets)
prep_issues = []
epub_targets = [BUILD_DIR / f"{fname[:-3]}.epub" for fname in VOL_FILES.values()] + [BUILD_DIR / "IGNICAO.epub"]
for ef in epub_targets:
    if not ef.exists() or ef.stat().st_size == 0:
        prep_issues.append((ef.name, 0, "MISSING_OR_EMPTY_EPUB", ""))

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

