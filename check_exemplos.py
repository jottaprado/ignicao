#!/usr/bin/env python3
"""
check_exemplos.py — detecta exemplos práticos que não seguem o template da seção
dentro dos 10 volumes canônicos em `volumes/`.

Para cada seção (FASE ou APÊNDICE) com ### EXEMPLO PRÁTICO, o script:
1. Extrai campos do bloco ```text``` mais próximo (o template formal da seção).
2. Extrai os rótulos usados no exemplo.
3. Reporta campos do template ausentes no exemplo e rótulos no exemplo
   que não correspondem a nenhum campo do template.

Uso:
    py check_exemplos.py           # verifica todas as seções dos 10 volumes
    py check_exemplos.py FASE 2    # filtra por nome da seção
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
VOLUMES_DIR = ROOT / "volumes"

META_FIELDS = {
    "data",
    "versão",
    "versao",
    "nome de trabalho",
    "nome",
    "resultado",
    "decisão",
    "decisao",
}


def extract_template_fields(text: str) -> list[str]:
    """Extrai campos de blocos ```text``` no formato 'Campo: [placeholder]'."""
    fields = []
    in_block = False
    for line in text.split("\n"):
        stripped = line.strip()
        if stripped.startswith("```text"):
            in_block = True
            continue
        if in_block and stripped == "```":
            in_block = False
            continue
        if in_block:
            m = re.match(r"^([^:\[\]]{3,50}):\s*\[", line)
            if m:
                fields.append(m.group(1).strip().lower())
    return fields


def extract_example_labels(section: str) -> list[str]:
    """Extrai rótulos usados no exemplo (linhas que começam com 'Rótulo:' ou '**Rótulo.** Texto')."""
    labels = []
    for line in section.split("\n"):
        if line.lstrip().startswith("-"):
            continue
        m = re.match(
            r"^\*?\*?([^\.\:\n\*\[\]{}]{2,60}?)(?::(?:\*\*)?(?:\s+\S|\s*$)|\.(?:\*\*)?\s+\S)",
            line,
        )
        if m:
            label = re.sub(r"\s*\([^)]*\)", "", m.group(1)).strip().lower()
            word_count = len(label.split())
            if 2 <= len(label) <= 60 and word_count <= 6 and not label.startswith("http"):
                labels.append(label)
    return labels


def normalize(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip().lower())


def check_section_text(text: str) -> tuple[bool, list[str]]:
    problems = []
    parts = re.split(r"(?m)^#{3,4} EXEMPLO PRÁTICO", text)
    if len(parts) < 2:
        return False, []

    pre = parts[0]
    raw_example = parts[1]
    boundary = re.search(r"(?m)^(#{3,4}\s|---\s*$|\*\*Contraste\s)", raw_example)
    example = raw_example[: boundary.start()] if boundary else raw_example

    template_fields = extract_template_fields(pre)
    if not template_fields:
        return False, []

    example_labels = extract_example_labels(example)
    example_labels_norm = {normalize(l) for l in example_labels}
    template_fields_norm = [normalize(f) for f in template_fields]

    missing = []
    for field in template_fields_norm:
        if field in META_FIELDS:
            continue
        found = any(field in label or label in field for label in example_labels_norm)
        if not found:
            missing.append(field)

    wrong = []
    for label in example_labels_norm:
        if label in META_FIELDS:
            continue
        found = any(label in field or field in label for field in template_fields_norm)
        if not found:
            wrong.append(label)

    if missing:
        problems.append(f"  CAMPO DO TEMPLATE AUSENTE NO EXEMPLO: {missing}")
    if wrong:
        problems.append(f"  ROTULO NO EXEMPLO SEM CORRESPONDENCIA NO TEMPLATE: {wrong}")

    return True, problems


def _vol_sort_key(p: Path) -> int:
    m = re.search(r"Vol-(\d+)-", p.stem)
    return int(m.group(1)) if m else 999


def main():
    filter_name = " ".join(sys.argv[1:]).lower() if len(sys.argv) > 1 else None
    boundary = re.compile(r"(?m)^## ((?:FASE|APÊNDICE)\s+[^\n]+)")

    total_checked = 0
    total_compared = 0
    total_without_template = 0
    total_with_problems = 0

    for vol_path in sorted(VOLUMES_DIR.glob("IGNICAO-Vol-*.md"), key=_vol_sort_key):
        vol_text = vol_path.read_text(encoding="utf-8")
        matches = list(boundary.finditer(vol_text))
        starts = [m.start() for m in matches]
        for i, m in enumerate(matches):
            sec_title = m.group(1).strip()
            if filter_name and filter_name not in sec_title.lower():
                continue
            end = starts[i + 1] if i + 1 < len(starts) else len(vol_text)
            sec_text = vol_text[m.start() : end]
            if not re.search(r"(?m)^#{3,4} EXEMPLO PRÁTICO", sec_text):
                continue
            total_checked += 1
            has_template, problems = check_section_text(sec_text)
            if not has_template:
                total_without_template += 1
                print(f"  sem template comparável  [{vol_path.stem}] {sec_title[:55]}")
            elif problems:
                total_compared += 1
                total_with_problems += 1
                print(f"\n[{vol_path.stem}] {sec_title}:")
                for p in problems:
                    print(p)
            else:
                total_compared += 1
                print(f"  ok                       [{vol_path.stem}] {sec_title[:55]}")

    print(f"\n=== RESULTADO ===")
    print(f"Seções com exemplo encontradas: {total_checked}")
    print(f"Seções com template comparadas: {total_compared}")
    print(f"Seções sem template comparável: {total_without_template}")
    print(f"Seções com divergências:        {total_with_problems}")
    sys.exit(0 if total_with_problems == 0 else 1)


if __name__ == "__main__":
    main()
