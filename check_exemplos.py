#!/usr/bin/env python3
"""
check_exemplos.py — detecta exemplos práticos que não seguem o template da seção.

Para cada arquivo com ### EXEMPLO PRÁTICO, o script:
1. Extrai campos do bloco ```text``` mais próximo (o template formal da seção).
2. Extrai os rótulos usados no exemplo.
3. Reporta campos do template ausentes no exemplo e rótulos no exemplo
   que não correspondem a nenhum campo do template.

Uso:
    py check_exemplos.py           # verifica todos os arquivos
    py check_exemplos.py fase-02   # filtra por nome de arquivo
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DIRS = [ROOT / "fases", ROOT / "apendices"]

# Campos que são metadados, não parte do framework de conteúdo
META_FIELDS = {"data", "versão", "versao", "nome de trabalho", "nome"}


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
    """Extrai rótulos usados no exemplo (linhas que começam com 'Rótulo:' ou '**Rótulo.**').
    Só considera rótulos curtos (até 6 palavras) para evitar capturar frases normais.
    """
    labels = []
    for line in section.split("\n"):
        # "Campo: conteúdo real" ou "**Campo.** conteúdo" ou "Campo. conteúdo"
        m = re.match(r"^\*?\*?([A-Za-záéíóúãõâêîôûàèçñÇÃÕÂÊÎÔÛÀÈ\s()/,]+?)[\.\:](?:\*\*)?\s+\S", line)
        if m:
            label = m.group(1).strip().lower()
            word_count = len(label.split())
            # Máximo 6 palavras e mínimo 2 caracteres; ignora linhas iniciadas por artigos
            if 2 <= len(label) <= 60 and word_count <= 6 and not label.startswith("http"):
                labels.append(label)
    return labels


def normalize(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip().lower())


def check_file(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    problems = []

    # Divide em seções delimitadas por ### EXEMPLO PRÁTICO
    parts = re.split(r"(?m)^### EXEMPLO PRÁTICO", text)
    if len(parts) < 2:
        return []

    # Pré-exemplo: onde está o template
    pre = parts[0]
    # Limita o exemplo ao conteúdo antes do próximo heading ### ou ---
    raw_example = parts[1]
    boundary = re.search(r"(?m)^(###\s|---\s*$)", raw_example)
    example = raw_example[: boundary.start()] if boundary else raw_example

    # Extrai campos do template (```text``` block)
    template_fields = extract_template_fields(pre)
    if not template_fields:
        return []  # Sem template formal, não há como comparar

    # Extrai rótulos usados no exemplo
    example_labels = extract_example_labels(example)
    example_labels_norm = {normalize(l) for l in example_labels}

    template_fields_norm = [normalize(f) for f in template_fields]

    missing = []
    for field in template_fields_norm:
        if field in META_FIELDS:
            continue
        # Verifica se algum rótulo do exemplo contém o campo (match parcial tolerante)
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

    return problems


def main():
    filter_name = sys.argv[1] if len(sys.argv) > 1 else None
    any_problem = False

    for d in DIRS:
        for path in sorted(d.glob("*.md")):
            if filter_name and filter_name not in path.name:
                continue
            problems = check_file(path)
            if problems:
                any_problem = True
                print(f"\n{path.name}")
                for p in problems:
                    print(p)

    if not any_problem:
        print("Nenhum problema encontrado: todos os exemplos seguem o template.")

    return 1 if any_problem else 0


if __name__ == "__main__":
    sys.exit(main())
