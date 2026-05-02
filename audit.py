#!/usr/bin/env python3
"""
audit.py — valida se cada fase e apêndice modular está presente no livro canônico.

Modos:
- Padrão (rápido): compara contagem de linhas de cada seção. Triagem grosseira.
- --content: compara parágrafo a parágrafo. Reporta cada parágrafo do modular
  que não aparece no canônico (após normalização de espaço em branco). É a
  validação que confirma que cada texto das partes está no livro completo.
- --canvas: para cada fase, valida cobertura de canvases CZ esperados versus
  efetivamente referenciados no corpo da fase. Reporta gaps e surplus.

Uso:
    py audit.py                       # triagem por contagem de linhas
    py audit.py --content             # validação parágrafo a parágrafo
    py audit.py --content --only-problems
    py audit.py --canvas              # cobertura de canvases CZ por fase
    py audit.py --fix                 # substitui seções desatualizadas no canônico
    py audit.py --only-problems       # mostra só divergências
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
CANON = ROOT / "IGNIÇÃO - Manual de Campo do Empreendedor  - João Prado (2026).md"
FASES_DIR = ROOT / "fases"
APENDICES_DIR = ROOT / "apendices"

SKIP_MODULAR = {
    "apendice-data-compilacao",
    "apendice-glossario",
    "apendice-indice-remissivo",
    "apendice-bibliografia",
    "apendice-lista-de-abreviacoes",
}

TOLERANCE = 15  # diferença de linhas considerada ok (frontmatter, whitespace)


def strip_frontmatter(text: str) -> str:
    if text.startswith("---"):
        end = text.find("\n---\n", 3)
        if end != -1:
            return text[end + 5:].lstrip("\n")
    return text


def read_utf8(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def build_canon_index(canon_text: str) -> dict[str, tuple[int, int]]:
    """
    Retorna dict code -> (start_char, end_char) para cada ## APÊNDICE XX e ## FASE X.
    Usa como marcador de fim: próxima seção nomeada OU ## APÊNDICE — (sem código).
    """
    # Boundary markers: named sections + ## APÊNDICE — (Glossário, Bibliografia etc.)
    boundary = re.compile(
        r"(?m)^## (?:APÊNDICE ([A-Z][\w-]*) —|APÊNDICE —|(FASE \d+B?) —)"
    )
    matches = list(boundary.finditer(canon_text))

    boundary_starts = [m.start() for m in matches]

    index = {}
    for i, m in enumerate(matches):
        code = m.group(1) or (m.group(2).replace("FASE ", "FASE_") if m.group(2) else None)
        if code is None:
            continue  # ## APÊNDICE — sem código: só serve como marcador de fim
        end = boundary_starts[i + 1] if i + 1 < len(boundary_starts) else len(canon_text)
        index[code] = (m.start(), end)
    return index


def phase_file_to_key(stem: str) -> str:
    # fase-00 -> FASE_0, fase-02b -> FASE_2B
    stem = stem.replace("fase-", "")
    num = stem.lstrip("0") or "0"
    num = num.upper()
    return f"FASE_{num}"


def appendix_file_to_key(stem: str) -> str:
    return stem.replace("apendice-", "").upper()


def count_lines(text: str) -> int:
    return text.count("\n") + 1


def normalize_paragraph(p: str) -> str:
    """Colapsa espaço em branco e normaliza para comparação tolerante."""
    return re.sub(r"\s+", " ", p.strip())


def split_paragraphs(text: str) -> list[str]:
    """Divide texto em parágrafos não vazios após normalização."""
    raw = re.split(r"\n\s*\n", text)
    out = []
    for p in raw:
        n = normalize_paragraph(p)
        if n:
            out.append(n)
    return out


SECTION_HEADER_RE = re.compile(r"^##\s+(APÊNDICE|FASE)\s")


def filter_section_headers(paragraphs: list[str]) -> list[str]:
    """Remove parágrafos que são cabeçalhos de seção (## APÊNDICE / ## FASE).

    O cabeçalho é a fronteira da seção e não conteúdo a auditar — ele já é validado
    pela busca no índice. Mantemos os demais cabeçalhos (### subseções, etc.).
    """
    return [p for p in paragraphs if not SECTION_HEADER_RE.match(p)]


def content_check(key: str, mod_path: Path, canon_text: str, index: dict) -> list[str]:
    """Compara parágrafo a parágrafo o conteúdo modular contra a seção canônica.

    Retorna lista de parágrafos do modular que não foram localizados no canônico.
    """
    mod_text = read_utf8(mod_path)
    mod_stripped = strip_frontmatter(mod_text)

    if key not in index:
        return [f"MISSING  {key}: seção não existe no canônico"]

    start, end = index[key]
    canon_section = canon_text[start:end]

    canon_paragraphs = set(filter_section_headers(split_paragraphs(canon_section)))
    mod_paragraphs = filter_section_headers(split_paragraphs(mod_stripped))

    missing = [p for p in mod_paragraphs if p not in canon_paragraphs]
    return missing


def audit_content(only_problems: bool = False):
    canon_text = read_utf8(CANON)
    index = build_canon_index(canon_text)

    total_paragraphs = 0
    total_missing = 0
    sections_with_drift = 0
    sections_ok = 0

    def run(key: str, mod_path: Path):
        nonlocal total_paragraphs, total_missing, sections_with_drift, sections_ok
        mod_stripped = strip_frontmatter(read_utf8(mod_path))
        mod_paragraphs = split_paragraphs(mod_stripped)
        total_paragraphs += len(mod_paragraphs)

        missing = content_check(key, mod_path, canon_text, index)

        if not missing:
            sections_ok += 1
            if not only_problems:
                print(f"  ok  {key:<20} ({len(mod_paragraphs)} parágrafos sincronizados)")
            return

        sections_with_drift += 1
        total_missing += len(missing)
        print(f"\nDRIFT  {key}  ({mod_path.name})  {len(missing)}/{len(mod_paragraphs)} parágrafos ausentes do canônico:")
        for p in missing[:10]:
            preview = p[:120] + ("..." if len(p) > 120 else "")
            print(f"    - {preview}")
        if len(missing) > 10:
            print(f"    ... e mais {len(missing) - 10} parágrafos")

    for mod_path in sorted(APENDICES_DIR.glob("apendice-*.md")):
        stem = mod_path.stem
        if stem in SKIP_MODULAR:
            continue
        run(appendix_file_to_key(stem), mod_path)

    for mod_path in sorted(FASES_DIR.glob("fase-*.md")):
        run(phase_file_to_key(mod_path.stem), mod_path)

    print()
    print("=== RESULTADO (modo content) ===")
    print(f"Seções sincronizadas:     {sections_ok}")
    print(f"Seções com drift:         {sections_with_drift}")
    print(f"Parágrafos auditados:     {total_paragraphs}")
    print(f"Parágrafos não-encontrados: {total_missing}")
    return sections_with_drift == 0


def audit(fix: bool = False, only_problems: bool = False):
    canon_text = read_utf8(CANON)
    index = build_canon_index(canon_text)

    problems = []
    ok = 0
    fixed = 0

    def check(key: str, mod_path: Path):
        nonlocal ok, fixed, canon_text

        mod_text = read_utf8(mod_path)
        mod_stripped = strip_frontmatter(mod_text)
        mod_lines = count_lines(mod_stripped)

        if key not in index:
            problems.append(f"MISSING  {key:<20} — seção não encontrada no canônico")
            return

        start, end = index[key]
        canon_section = canon_text[start:end]
        canon_lines = count_lines(canon_section)
        diff = mod_lines - canon_lines

        if abs(diff) <= TOLERANCE:
            ok += 1
            if not only_problems:
                print(f"  ok  {key}")
            return

        if diff < 0:
            # Canonical longer than modular: canonical is more complete, not a problem
            ok += 1
            if not only_problems:
                print(f"  ok  {key}  (canon richer: +{-diff} linhas)")
            return

        label = "MOD_LONGER "
        problems.append(
            f"{label} {key:<20} mod={mod_lines} canon={canon_lines} diff={diff:+d}"
        )

        if fix and diff > TOLERANCE:
            replacement = "\n" + mod_stripped.strip() + "\n"
            canon_text = canon_text[:start] + replacement + canon_text[end:]
            # Rebuild index after mutation
            index.update(build_canon_index(canon_text))
            fixed += 1
            problems[-1] += "  [FIXED]"

    # Apêndices
    for mod_path in sorted(APENDICES_DIR.glob("apendice-*.md")):
        stem = mod_path.stem
        if stem in SKIP_MODULAR:
            continue
        key = appendix_file_to_key(stem)
        check(key, mod_path)

    # Fases
    for mod_path in sorted(FASES_DIR.glob("fase-*.md")):
        key = phase_file_to_key(mod_path.stem)
        check(key, mod_path)

    print()
    print(f"=== RESULTADO ===")
    print(f"OK:       {ok}")
    print(f"Problemas:{len(problems)}")
    if fixed:
        print(f"Corrigidos: {fixed}")
    print()

    if problems:
        print("=== PROBLEMAS ===")
        for p in problems:
            print(f"  {p}")

    if fix and fixed:
        CANON.write_text(canon_text, encoding="utf-8")
        print(f"\nCanônico atualizado ({fixed} seções corrigidas).")

    return len(problems) == 0


# Mapeamento curado de CZ canvases por fase. Atualize quando a editorial decisão
# mudar (ex.: novo canvas adicionado, fase reestruturada). Cada entrada lista os
# CZ.N que DEVEM estar referenciados no corpo da fase.
EXPECTED_CZ_BY_FASE = {
    "fase-00": ["CZ.8"],
    "fase-01": ["CZ.1", "CZ.2", "CZ.4"],
    "fase-02": ["CZ.1", "CZ.2", "CZ.3", "CZ.5"],
    "fase-02b": ["CZ.14", "CZ.16"],
    "fase-03": ["CZ.3", "CZ.6"],
    "fase-04": ["CZ.3", "CZ.6", "CZ.7"],
    "fase-05": ["CZ.4", "CZ.15", "CZ.18", "CZ.20"],
    "fase-06": ["CZ.9", "CZ.14"],
    "fase-07": ["CZ.9", "CZ.10"],
    "fase-08": ["CZ.5", "CZ.11"],
    "fase-09": ["CZ.6"],
    "fase-10": ["CZ.10", "CZ.11"],
    "fase-11": ["CZ.10", "CZ.13"],
    "fase-12": ["CZ.7", "CZ.10"],
    "fase-13": ["CZ.17"],
    "fase-14": ["CZ.8", "CZ.10", "CZ.18", "CZ.19"],
    "fase-15": ["CZ.4", "CZ.20"],
    "fase-16": ["CZ.12", "CZ.17"],
}

CZ_REF_RE = re.compile(r"CZ\.(\d+)")


def audit_canvas() -> bool:
    """Valida cobertura de CZ canvases por fase contra EXPECTED_CZ_BY_FASE."""
    print("=== AUDITORIA DE COBERTURA CZ -> FASE ===\n")
    total_gaps = 0
    total_extras = 0
    fases_with_gaps = 0

    for stem in sorted(EXPECTED_CZ_BY_FASE.keys()):
        path = FASES_DIR / f"{stem}.md"
        if not path.exists():
            print(f"  MISSING FILE  {stem}.md")
            continue
        text = path.read_text(encoding="utf-8")
        actual = {f"CZ.{m.group(1)}" for m in CZ_REF_RE.finditer(text)}
        expected = set(EXPECTED_CZ_BY_FASE[stem])
        gaps = expected - actual
        extras = actual - expected

        if not gaps and not extras:
            print(f"  ok  {stem:<10} ({len(expected)} esperados, todos presentes)")
            continue

        fases_with_gaps += 1
        total_gaps += len(gaps)
        total_extras += len(extras)
        marker = "GAP   " if gaps else "EXTRA "
        print(f"  {marker}{stem:<10}", end="")
        if gaps:
            print(f"  faltando: {sorted(gaps)}", end="")
        if extras:
            print(f"  extras: {sorted(extras)}", end="")
        print()

    print()
    print(f"=== RESULTADO (modo canvas) ===")
    print(f"Fases com cobertura completa: {len(EXPECTED_CZ_BY_FASE) - fases_with_gaps}")
    print(f"Fases com gaps ou extras:     {fases_with_gaps}")
    print(f"CZ esperados ausentes:         {total_gaps}")
    print(f"CZ extras (não esperados):     {total_extras}")
    return total_gaps == 0


if __name__ == "__main__":
    fix = "--fix" in sys.argv
    only_problems = "--only-problems" in sys.argv
    content = "--content" in sys.argv
    canvas = "--canvas" in sys.argv
    if canvas:
        success = audit_canvas()
    elif content:
        success = audit_content(only_problems=only_problems)
    else:
        success = audit(fix=fix, only_problems=only_problems)
    sys.exit(0 if success else 1)
