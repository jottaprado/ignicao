#!/usr/bin/env python3
"""
audit.py — valida se cada fase e apêndice modular está presente no livro canônico.

Uso:
    py audit.py                   # relatório completo
    py audit.py --fix             # substitui seções desatualizadas no canônico
    py audit.py --only-problems   # mostra só divergências
"""

import re
import sys
import os
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


def audit(fix: bool = False, only_problems: bool = False):
    canon_text = read_utf8(CANON)
    index = build_canon_index(canon_text)

    problems = []
    ok = 0
    fixed = 0

    def check(key: str, mod_path: Path, end_marker_key: str | None = None):
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


if __name__ == "__main__":
    fix = "--fix" in sys.argv
    only_problems = "--only-problems" in sys.argv
    success = audit(fix=fix, only_problems=only_problems)
    sys.exit(0 if success else 1)
