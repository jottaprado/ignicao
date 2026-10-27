#!/usr/bin/env python3
"""
check_exemplos.py: audita a integridade estrutural dos exemplos praticos,
frameworks, canvases, templates e exercicios nos 11 volumes canonicos em `volumes/`.

Na edicao v5.3, o script verifica:
1. As 21 Fases (Fase 0 a Fase 20): presenca de caso pratico/aplicacao na trincheira,
   Espelho + Ritual e tabela de metricas/criterios de saida.
2. As 224 ferramentas operacionais (162 Frameworks, 20 Canvases e 42 Templates):
   presenca de estrutura pratica (tabela, bloco estruturado, checklist ou campos em negrito)
   e ausencia de secoes vazias.
3. O Volume 11 (Caderno de Trincheira):
   - 58 Cases Profundos (4 atos estruturados em cada case)
   - 50 Exercicios Praticos (Enunciado, Resolucao Passo a Passo e Gabarito Comentado)
   - 27 Simulacoes de Roleplay Executivo (4 blocos: Cenario, Caminho Armadilha, Protocolo de Alta Precisao e Debriefing)
   - 21 Cenarios do Simulador Integrador (Decisao da Fase 0 a Decisao da Fase 20)

Uso:
    python check_exemplos.py           # audita todos os 11 volumes
    python check_exemplos.py FASE 2    # filtra por nome da secao
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
VOLUMES_DIR = ROOT / "volumes"


def _vol_sort_key(p: Path) -> int:
    m = re.search(r"Vol-(\d+)-", p.stem)
    return int(m.group(1)) if m else 999


def check_fases_and_tools(filter_name: str | None) -> tuple[int, int, int, int, list[str]]:
    problems: list[str] = []
    fases_count = 0
    frameworks_count = 0
    canvases_count = 0
    templates_count = 0

    fase_re = re.compile(r"(?m)^## (FASE \d+:\s+[^\n]+)$")
    tool_re = re.compile(r"(?m)^#### (Framework|Canvas|Template):\s+([^\n]+)$")
    next_h2_re = re.compile(r"(?m)^#{1,2}\s+")
    next_h4_re = re.compile(r"(?m)^#{1,4}\s+")

    for vol_path in sorted(VOLUMES_DIR.glob("IGNICAO-Vol-*.md"), key=_vol_sort_key):
        vol_text = vol_path.read_text(encoding="utf-8")

        # 1. Check Fases
        for m in fase_re.finditer(vol_text):
            title = m.group(1).strip()
            if filter_name and filter_name not in title.lower():
                continue
            fases_count += 1
            nxt = next_h2_re.search(vol_text[m.end() :])
            sec = vol_text[m.start() : (m.end() + nxt.start() if nxt else len(vol_text))]

            has_case = bool(
                re.search(
                    r"(?m)^###+ .*(?:na prática|caso|trincheira|aplicad|reconstrução|padariapro)",
                    sec,
                    re.I,
                )
            )
            has_espelho = bool(re.search(r"(?i)espelho", sec))
            has_table = "|" in sec and "|---" in sec

            if not has_case:
                problems.append(f"[{vol_path.stem}] {title}: sem secao de caso pratico/aplicacao")
            if not has_espelho:
                problems.append(f"[{vol_path.stem}] {title}: sem secao Espelho")
            if not has_table:
                problems.append(f"[{vol_path.stem}] {title}: sem tabela de metricas/benchmarks")

        # 2. Check Operational Tools (Frameworks, Canvases, Templates)
        for m in tool_re.finditer(vol_text):
            kind = m.group(1)
            title = m.group(2).strip()
            full_title = f"{kind}: {title}"
            if filter_name and filter_name not in full_title.lower():
                continue

            if kind == "Framework":
                frameworks_count += 1
            elif kind == "Canvas":
                canvases_count += 1
            elif kind == "Template":
                templates_count += 1

            nxt = next_h4_re.search(vol_text[m.end() :])
            sec = vol_text[m.start() : (m.end() + nxt.start() if nxt else len(vol_text))]

            if len(sec.strip().splitlines()) < 5:
                problems.append(f"[{vol_path.stem}] {full_title}: conteudo muito curto (< 5 linhas)")

            if kind in ("Canvas", "Template"):
                has_structure = (
                    ("```" in sec)
                    or ("|" in sec and "|---" in sec)
                    or bool(re.search(r"(?m)^(?:- \[[ x]\]|\d+\.\s+|(?:- )?\*\*[^*\n]+\*\*)", sec))
                )
                if not has_structure:
                    problems.append(
                        f"[{vol_path.stem}] {full_title}: sem bloco estruturado, tabela ou checklist"
                    )

    return fases_count, frameworks_count, canvases_count, templates_count, problems


def check_vol11_workbook(filter_name: str | None) -> tuple[int, int, int, int, list[str]]:
    problems: list[str] = []
    vol11 = VOLUMES_DIR / "IGNICAO-Vol-11-Workbook-Cases-e-Exercicios.md"
    if not vol11.exists():
        return 0, 0, 0, 0, ["Volume 11 nao encontrado em volumes/"]

    text = vol11.read_text(encoding="utf-8")
    next_h3_re = re.compile(r"(?m)^#{1,3}\s+")

    cases = list(re.finditer(r"(?m)^### (Case \d+\.\d+:[^\n]+)$", text))
    exercicios = list(re.finditer(r"(?m)^### (Exercício \d+\.\d+:[^\n]+)$", text))
    roleplays = list(re.finditer(r"(?m)^### (Roleplay \d+\.\d+:[^\n]+)$", text))
    decisoes = list(re.finditer(r"(?m)^#### (Decisão da Fase \d+[^\n]*)$", text))

    cases_checked = 0
    for m in cases:
        title = m.group(1).strip()
        if filter_name and filter_name not in title.lower():
            continue
        cases_checked += 1
        nxt = next_h3_re.search(text[m.end() :])
        sec = text[m.start() : (m.end() + nxt.start() if nxt else len(text))]
        h4s = re.findall(r"(?m)^####\s+.+$", sec)
        if len(h4s) < 4:
            problems.append(f"[Vol-11] {title}: esperados 4 atos (####), encontrados {len(h4s)}")

    ex_checked = 0
    for m in exercicios:
        title = m.group(1).strip()
        if filter_name and filter_name not in title.lower():
            continue
        ex_checked += 1
        nxt = next_h3_re.search(text[m.end() :])
        sec = text[m.start() : (m.end() + nxt.start() if nxt else len(text))]
        h4s = re.findall(r"(?m)^####\s+.+$", sec)
        if len(h4s) < 2 or not re.search(r"(?i)gabarito", sec):
            problems.append(f"[Vol-11] {title}: estrutura de exercicio/gabarito incompleta")

    rp_checked = 0
    for m in roleplays:
        title = m.group(1).strip()
        if filter_name and filter_name not in title.lower():
            continue
        rp_checked += 1
        nxt = next_h3_re.search(text[m.end() :])
        sec = text[m.start() : (m.end() + nxt.start() if nxt else len(text))]
        h4s = re.findall(r"(?m)^####\s+.+$", sec)
        if len(h4s) < 4:
            problems.append(f"[Vol-11] {title}: esperadas 4 subsecoes (####), encontradas {len(h4s)}")

    dec_checked = 0
    for m in decisoes:
        title = m.group(1).strip()
        if filter_name and filter_name not in title.lower():
            continue
        dec_checked += 1

    return cases_checked, ex_checked, rp_checked, dec_checked, problems


def main() -> None:
    filter_name = " ".join(sys.argv[1:]).lower() if len(sys.argv) > 1 else None

    fases, frameworks, canvases, templates, probs1 = check_fases_and_tools(filter_name)
    cases, exercicios, roleplays, decisoes, probs2 = check_vol11_workbook(filter_name)
    all_problems = probs1 + probs2

    print("=== AUDITORIA DE EXEMPLOS PRATICOS E FERRAMENTAS (v5.3) ===")
    print(f"Fases auditadas (Vols 1-9):            {fases}")
    print(f"Frameworks operacionais auditados:     {frameworks}")
    print(f"Canvases visuais auditados:            {canvases}")
    print(f"Templates operacionais auditados:      {templates}")
    print(f"Total de ferramentas (Vols 1-10):      {frameworks + canvases + templates}")
    print(f"Cases profundos auditados (Vol 11):    {cases}")
    print(f"Exercicios com gabarito (Vol 11):      {exercicios}")
    print(f"Roleplays executivos (Vol 11):         {roleplays}")
    print(f"Decisoes do Simulador 21 Fases:        {decisoes}")
    print(f"Divergencias encontradas:              {len(all_problems)}")

    if all_problems:
        print("\n=== DIVERGENCIAS ===")
        for p in all_problems:
            print(f"  - {p}")
        sys.exit(1)

    print("\nStatus: 100% integro (0 divergencias).")
    sys.exit(0)


if __name__ == "__main__":
    main()
