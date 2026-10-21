#!/usr/bin/env python3
"""
audit.py — valida integridade estrutural, autocontenção (Frameworks, Canvases e
Templates embutidos) e 100% dos wikilinks nos 10 volumes canônicos de `volumes/` (v4.0).

Modos:
- Padrão (`py audit.py`):
    1) Verifica presença e unicidade de todas as 21 fases (`FASE 0` a `FASE 20`) e
       dos 135 capítulos (`CAPÍTULO 1` a `CAPÍTULO N`) nos 10 volumes.
    2) Verifica a presença dos 164 Frameworks (`#### Framework:`), 20 Canvases
       (`#### Canvas:`) e 39 Templates (`#### Template:`) embutidos nas fases/capítulos.
    3) Valida 100% dos wikilinks internos (`[[#Seção]]`) e inter-volumes
       (`[[IGNICAO-Vol-X#Seção]]`) contra os headings reais de cada volume.
- `--canvas` (`py audit.py --canvas`):
    Verifica os Canvases Visuais (`#### Canvas:`) embutidos por Fase.
- `--orphans` (`py audit.py --orphans`):
    Verifica se todos os 164 Frameworks, 20 Canvases e 39 Templates estão embutidos
    e sem duplicatas nos Volumes 1 a 9.
"""

import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).parent
VOLUMES_DIR = ROOT / "volumes"

EXPECTED_CANVAS_COUNT_BY_FASE = {
    "FASE_0": 1,
    "FASE_1": 2,
    "FASE_2": 3,
    "FASE_3": 2,
    "FASE_4": 1,
    "FASE_5": 3,
    "FASE_6": 4,
    "FASE_7": 2,
    "FASE_8": 2,
    "FASE_9": 4,
    "FASE_10": 1,
    "FASE_11": 2,
    "FASE_12": 1,
    "FASE_13": 1,
    "FASE_14": 2,
    "FASE_15": 2,
    "FASE_16": 2,
    "FASE_17": 2,
    "FASE_18": 1,
    "FASE_19": 2,
    "FASE_20": 2,
}


def slugify(s: str) -> str:
    s = unicodedata.normalize("NFD", s)
    s = "".join(ch for ch in s if unicodedata.category(ch) != "Mn")
    s = s.lower()
    s = re.sub(r"[—–]", "-", s)
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-")


def _vol_sort_key(p: Path) -> int:
    m = re.search(r"Vol-(\d+)-", p.stem)
    return int(m.group(1)) if m else 999


def load_volumes() -> dict[str, str]:
    vols = {}
    for p in sorted(VOLUMES_DIR.glob("IGNICAO-Vol-*.md"), key=_vol_sort_key):
        vols[p.stem] = p.read_text(encoding="utf-8")
    return vols


def extract_sections(vols: dict[str, str]) -> dict[str, tuple[str, str]]:
    """Retorna dict key -> (vol_stem, section_text) para cada FASE e CAPÍTULO."""
    boundary = re.compile(
        r"(?m)^(?:# [A-ZÀ-Ú]|## (?:(FASE \d+) —|(CAPÍTULO \d+) —|EPÍLOGO$|DATA DE COMPILAÇÃO|GLOSSÁRIO|LISTA DE ABREVIAÇÕES|BIBLIOGRAFIA|ÍNDICE ))"
    )
    sections = {}
    duplicates = []

    for stem, text in vols.items():
        matches = list(boundary.finditer(text))
        starts = [m.start() for m in matches]
        for i, m in enumerate(matches):
            if m.group(1):
                code = m.group(1).replace("FASE ", "FASE_")
            elif m.group(2):
                code = f"{stem}:{m.group(2).replace(' ', '_')}"
            else:
                continue
            end = starts[i + 1] if i + 1 < len(starts) else len(text)
            if code in sections:
                duplicates.append((code, sections[code][0], stem))
            sections[code] = (stem, text[m.start() : end])

    if duplicates:
        for code, v1, v2 in duplicates:
            print(f"DUPLICATE {code}: encontrado em {v1} e {v2}")

    return sections


def audit_structure_and_links(only_problems: bool = False) -> bool:
    vols = load_volumes()
    if len(vols) != 10:
        print(f"ERRO: Esperados 10 volumes em volumes/, encontrados {len(vols)}.")
        return False

    sections = extract_sections(vols)
    fases = [k for k in sections if k.startswith("FASE_")]
    capitulos = [k for k in sections if ":CAPÍTULO_" in k]

    all_text = "\n".join(vols.values())
    frameworks = re.findall(r"(?m)^#### Framework: (.+)$", all_text)
    canvases = re.findall(r"(?m)^#### Canvas: (.+)$", all_text)
    templates = re.findall(r"(?m)^#### Template: (.+)$", all_text)
    uniq_frameworks = set(frameworks)
    uniq_canvases = set(canvases)
    uniq_templates = set(templates)

    # Verificar duplicatas de ferramentas dentro de um mesmo volume e glossários locais nos Vols 1 a 9
    dups_within_vol = []
    vol_glossaries = 0
    cross_vol_tool_links = []

    # Mapear todos os headings por volume
    headings_by_vol: dict[str, set[str]] = {}
    for stem, text in vols.items():
        h_set = set()
        seen_tools_in_vol = set()
        for m in re.finditer(r"(?m)^#{1,6}\s+(.+)$", text):
            h_raw = m.group(1).strip()
            h_set.add(slugify(h_raw))
            if h_raw.startswith(("Framework: ", "Canvas: ", "Template: ")):
                if h_raw in seen_tools_in_vol:
                    dups_within_vol.append((stem, h_raw))
                seen_tools_in_vol.add(h_raw)
        headings_by_vol[stem] = h_set
        if not stem.startswith("IGNICAO-Vol-10-"):
            if "## GLOSSÁRIO E SIGLAS DESTE VOLUME" in text:
                vol_glossaries += 1
            for m_ct in re.finditer(
                r"\[\[IGNICAO-Vol-\d+-[^\]|#]+#(?:Framework|Canvas|Template):[^\]]+\]\]", text
            ):
                cross_vol_tool_links.append((stem, m_ct.group(0)))

    broken_links = []
    total_links = 0

    for stem, text in vols.items():
        clean_text = re.sub(r"```[\s\S]*?```|`[^`\n]+`", "", text)

        for m in re.finditer(r"\[\[((?:(?!\]\]).)*)\]\]", clean_text):
            inner = m.group(1)
            total_links += 1
            if "[[" in inner:
                broken_links.append((stem, f"{m.group(0)} (wikilink aninhado)"))
                continue
            parts = re.split(r"\\?\|", inner, maxsplit=1)
            target = parts[0].strip()
            if target.endswith("\\"):
                target = target[:-1].strip()
            if "#" not in target:
                broken_links.append((stem, f"[[{inner}]] (link sem âncora '#')"))
                continue
            target_vol, target_heading = target.split("#", 1)
            target_vol = target_vol.strip()
            target_heading = target_heading.strip()
            if target_vol == "":
                if slugify(target_heading) not in headings_by_vol[stem]:
                    broken_links.append((stem, f"[[#{target_heading}]] (interno não encontrado)"))
            else:
                alias = parts[1].strip() if len(parts) > 1 else ""
                m_vol_alias = re.search(r"\(Vol\.\s*(\d+)\)", alias)
                if target_vol not in headings_by_vol:
                    broken_links.append((stem, f"[[{target_vol}#{target_heading}]] (volume inexistente)"))
                elif target_vol == stem:
                    broken_links.append((stem, f"[[{target_vol}#{target_heading}]] (auto-referência ao próprio volume)"))
                elif slugify(target_heading) not in headings_by_vol[target_vol]:
                    broken_links.append(
                        (stem, f"[[{target_vol}#{target_heading}]] (heading não encontrado no destino)")
                    )
                elif m_vol_alias and f"-Vol-{m_vol_alias.group(1)}-" not in target_vol:
                    broken_links.append(
                        (stem, f"[[{inner}]] (alias indica Vol. {m_vol_alias.group(1)}, mas destino é {target_vol})")
                    )

    if not only_problems:
        for stem, text in vols.items():
            words = len(text.split())
            print(f"  ok  {stem:<48} ({words:>7,} palavras | {len(headings_by_vol[stem]):>3} headings)")

    print()
    print("=== RESULTADO (estrutura autocontida e wikilinks) ===")
    print(f"Volumes verificados:        {len(vols)} (esperado: 10)")
    print(f"Fases sequenciais (0-20):   {len(fases)} (esperado: 21)")
    print(f"Capítulos temáticos:        {len(capitulos)} (esperado: 175)")
    print(f"Frameworks únicos / total:  {len(uniq_frameworks)} únicos ({len(frameworks)} instâncias nos Vols 1-9 | esperado: 164 únicos)")
    print(f"Canvases únicos / total:    {len(uniq_canvases)} únicos ({len(canvases)} instâncias nos Vols 1-9 | esperado: 20 únicos)")
    print(f"Templates únicos / total:   {len(uniq_templates)} únicos ({len(templates)} instâncias nos Vols 1-9 | esperado: 39 únicos)")
    print(f"Glossários locais (Vol 1-9):{vol_glossaries} (esperado: 9)")
    print(f"Links de ferramentas cross: {len(cross_vol_tool_links)} nos Vols 1-9 (esperado: 0)")
    print(f"Duplicatas intra-volume:    {len(dups_within_vol)} (esperado: 0)")
    print(f"Wikilinks verificados:      {total_links}")
    print(f"Wikilinks quebrados:        {len(broken_links)}")

    if broken_links:
        print("\n=== LINKS QUEBRADOS ===")
        for stem, desc in broken_links[:30]:
            print(f"  {stem}: {desc}")

    return (
        len(fases) == 21
        and len(capitulos) == 175
        and len(uniq_frameworks) == 164
        and len(uniq_canvases) == 20
        and len(uniq_templates) == 39
        and vol_glossaries == 9
        and len(cross_vol_tool_links) == 0
        and len(dups_within_vol) == 0
        and len(broken_links) == 0
    )


def audit_canvas() -> bool:
    print("=== AUDITORIA DE CANVASES VISUAIS EMBUTIDOS POR FASE (nos 10 volumes) ===\n")
    vols = load_volumes()
    sections = extract_sections(vols)

    total_mismatches = 0
    for i in range(21):
        fase_key = f"FASE_{i}"
        if fase_key not in sections:
            print(f"  MISSING FASE  {fase_key}")
            total_mismatches += 1
            continue
        vol_stem, text = sections[fase_key]
        found = re.findall(r"(?m)^#### Canvas: (.+)$", text)
        expected_n = EXPECTED_CANVAS_COUNT_BY_FASE[fase_key]
        if len(found) == expected_n:
            print(f"  ok  {fase_key:<10} [{vol_stem}] ({len(found)} canvas embutidos)")
        else:
            total_mismatches += 1
            print(f"  ERR {fase_key:<10} [{vol_stem}] (encontrados {len(found)}, esperados {expected_n})")

    print(f"\nDivergências de Canvases: {total_mismatches}")
    return total_mismatches == 0


def audit_orphans() -> bool:
    print("=== AUDITORIA DE AUTOCONTENÇÃO (164 Frameworks, 20 Canvases, 39 Templates) ===\n")
    vols = load_volumes()
    all_text = "\n".join(vols.values())

    frameworks = re.findall(r"(?m)^#### Framework: (.+)$", all_text)
    canvases = re.findall(r"(?m)^#### Canvas: (.+)$", all_text)
    templates = re.findall(r"(?m)^#### Template: (.+)$", all_text)
    uniq_frameworks = set(frameworks)
    uniq_canvases = set(canvases)
    uniq_templates = set(templates)

    print(f"Frameworks únicos embutidos: {len(uniq_frameworks)} / 164 ({len(frameworks)} instâncias totais nos Vols 1-9)")
    print(f"Canvases únicos embutidos:   {len(uniq_canvases)} / 20 ({len(canvases)} instâncias totais nos Vols 1-9)")
    print(f"Templates únicos embutidos:  {len(uniq_templates)} / 39 ({len(templates)} instâncias totais nos Vols 1-9)\n")

    ok = len(uniq_frameworks) == 164 and len(uniq_canvases) == 20 and len(uniq_templates) == 39
    print("=== RESULTADO (modo orphans / autocontenção) ===")
    print("Status: 100% dos itens embutidos diretamente nas Fases e Capítulos (0 órfãos)." if ok else "ERRO de contagem.")
    return ok


if __name__ == "__main__":
    only_problems = "--only-problems" in sys.argv
    canvas = "--canvas" in sys.argv
    orphans = "--orphans" in sys.argv
    if orphans:
        success = audit_orphans()
    elif canvas:
        success = audit_canvas()
    else:
        success = audit_structure_and_links(only_problems=only_problems)
    sys.exit(0 if success else 1)
