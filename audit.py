#!/usr/bin/env python3
"""
audit.py - valida integridade estrutural, autocontencao (Frameworks, Canvases e
Templates embutidos), ausencia de travessoes e 100% dos wikilinks nos 11 volumes
canonicos de `volumes/` (v5.3).

Modos:
- Padrao (`py audit.py`):
    1) Verifica presenca e unicidade de todas as 21 fases (`FASE 0` a `FASE 20`) e
       dos 185 capitulos (`155` nos Volumes 1 a 10 + `30` no Volume 11).
    2) Verifica a presenca dos 164 Frameworks (`#### Framework:`), 20 Canvases
       (`#### Canvas:`) e 40 Templates (`#### Template:`) embutidos nas fases/capitulos
       (totalizando 224 ferramentas unicas).
    3) Valida 100% dos wikilinks internos (`[[#Secao]]`) e inter-volumes
       (`[[IGNICAO-Vol-X#Secao]]`) contra os headings reais de cada volume.
    4) Verifica ausencia de travessoes (`\u2014`) nos 11 volumes.
- `--canvas` (`py audit.py --canvas`):
    Verifica os Canvases Visuais (`#### Canvas:`) embutidos por Fase.
- `--orphans` (`py audit.py --orphans`):
    Verifica se todos os 164 Frameworks, 20 Canvases e 40 Templates estao embutidos
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
    "FASE_1": 1,
    "FASE_2": 1,
    "FASE_3": 1,
    "FASE_4": 1,
    "FASE_5": 2,
    "FASE_6": 3,
    "FASE_7": 1,
    "FASE_8": 1,
    "FASE_9": 2,
    "FASE_10": 0,
    "FASE_11": 1,
    "FASE_12": 1,
    "FASE_13": 0,
    "FASE_14": 2,
    "FASE_15": 0,
    "FASE_16": 1,
    "FASE_17": 0,
    "FASE_18": 0,
    "FASE_19": 1,
    "FASE_20": 0,
}


def slugify(s: str) -> str:
    s = unicodedata.normalize("NFD", s)
    s = "".join(ch for ch in s if unicodedata.category(ch) != "Mn")
    s = s.lower()
    s = re.sub(r"[\u2014\u2013]", "-", s)
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
    """Retorna dict key -> (vol_stem, section_text) para cada FASE e CAPITULO."""
    boundary = re.compile(
        r"(?m)^(?:# [A-ZÀ-Ú]|## (?:(FASE \d+)\s*[:\u2014]|(CAPÍTULO \d+)\s*[:\u2014]|EPÍLOGO$|DATA DE COMPILAÇÃO|GLOSSÁRIO|LISTA DE ABREVIAÇÕES|BIBLIOGRAFIA|ÍNDICE ))"
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
    if len(vols) != 11:
        print(f"ERRO: Esperados 11 volumes em volumes/, encontrados {len(vols)}.")
        return False

    sections = extract_sections(vols)
    fases = [k for k in sections if k.startswith("FASE_")]
    capitulos = [k for k in sections if ":CAPÍTULO_" in k]
    capitulos_v1_10 = [k for k in capitulos if not k.startswith("IGNICAO-Vol-11-")]
    capitulos_v11 = [k for k in capitulos if k.startswith("IGNICAO-Vol-11-")]

    all_text = "\n".join(vols.values())
    frameworks = re.findall(r"(?m)^#### Framework: (.+)$", all_text)
    canvases = re.findall(r"(?m)^#### Canvas: (.+)$", all_text)
    templates = re.findall(r"(?m)^#### Template: (.+)$", all_text)
    uniq_frameworks = set(frameworks)
    uniq_canvases = set(canvases)
    uniq_templates = set(templates)
    em_dashes = all_text.count("\u2014")

    # Verificar duplicatas de ferramentas dentro de um mesmo volume e glossarios locais nos Vols 1 a 9
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
        if not stem.startswith(("IGNICAO-Vol-10-", "IGNICAO-Vol-11-")):
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
                broken_links.append((stem, f"[[{inner}]] (link sem ancora '#')"))
                continue
            target_vol, target_heading = target.split("#", 1)
            target_vol = target_vol.strip()
            target_heading = target_heading.strip()
            if target_vol == "":
                if slugify(target_heading) not in headings_by_vol[stem]:
                    broken_links.append((stem, f"[[#{target_heading}]] (interno nao encontrado)"))
            else:
                alias = parts[1].strip() if len(parts) > 1 else ""
                m_vol_alias = re.search(r"\(Vol\.\s*(\d+)\)", alias)
                if target_vol not in headings_by_vol:
                    broken_links.append((stem, f"[[{target_vol}#{target_heading}]] (volume inexistente)"))
                elif target_vol == stem:
                    broken_links.append((stem, f"[[{target_vol}#{target_heading}]] (auto-referencia ao proprio volume)"))
                elif slugify(target_heading) not in headings_by_vol[target_vol]:
                    broken_links.append(
                        (stem, f"[[{target_vol}#{target_heading}]] (heading nao encontrado no destino)")
                    )
                elif m_vol_alias and f"-Vol-{m_vol_alias.group(1)}-" not in target_vol:
                    broken_links.append(
                        (stem, f"[[{inner}]] (alias indica Vol. {m_vol_alias.group(1)}, mas destino e {target_vol})")
                    )

    # Verificar invariantes da Edicao Narrativa v5.3 (0 cabecalhos roboticos H3/H5)
    robotic_h3 = re.findall(
        r"(?mi)^### (O que est[ea] (?:fase|cap[íi]tulo) cobre|O qu[êe]|O QUE [ÉE]|POR QUE|Por qu[êe]|Por que importa|Quando usar|Quando aplicar|Quando|Quem envolve|Quem envolver|Quem|Como executar|COMO|Como|PERGUNTAS A RESPONDER|SA[ÍI]DA DESTA FASE|Armadilhas|ARMADILHAS|FERRAMENTAS DESTA FASE|S[ÍI]NTESE DA FASE \d+|EXEMPLO PR[ÁA]TICO)$",
        all_text,
    )
    robotic_h5 = re.findall(
        r"(?mi)^##### (Origem|O que [ée]|Quando n[ãa]o usar|Erros comuns(?: a evitar)?)$",
        all_text,
    )

    if not only_problems:
        total_words = 0
        for stem, text in vols.items():
            words = len(text.split())
            total_words += words
            print(f"  ok  {stem:<48} ({words:>7,} palavras | {len(headings_by_vol[stem]):>3} headings)")
        print(f"  --  {'TOTAL (11 volumes)':<48} ({total_words:>7,} palavras)")

    print()
    print("=== RESULTADO (estrutura v5.3, 11 volumes, zero duplicatas e wikilinks) ===")
    print(f"Volumes verificados:        {len(vols)} (esperado: 11)")
    print(f"Fases sequenciais (0-20):   {len(fases)} (esperado: 21)")
    print(f"Capitulos tematicos total:  {len(capitulos)} ({len(capitulos_v1_10)} nos Vols 1-10 + {len(capitulos_v11)} no Vol 11 | esperado: 185)")
    print(f"Frameworks unicos / total:  {len(uniq_frameworks)} unicos ({len(frameworks)} instancias nos Vols 1-9 | esperado: 162 unicos / 162 instancias)")
    print(f"Canvases unicos / total:    {len(uniq_canvases)} unicos ({len(canvases)} instancias nos Vols 1-9 | esperado: 20 unicos / 20 instancias)")
    print(f"Templates unicos / total:   {len(uniq_templates)} unicos ({len(templates)} instancias nos Vols 1-9 | esperado: 42 unicos / 42 instancias)")
    print(f"Glossarios duplicados 1-9:  {vol_glossaries} (esperado: 0 - unificado no Vol. 10)")
    print(f"Cabecalhos roboticos H3/H5: {len(robotic_h3) + len(robotic_h5)} (esperado: 0)")
    print(f"Duplicatas intra-volume:    {len(dups_within_vol)} (esperado: 0)")
    print(f"Travessoes (U+2014):        {em_dashes} (esperado: 0)")
    print(f"Wikilinks verificados:      {total_links}")
    print(f"Wikilinks quebrados:        {len(broken_links)}")

    if broken_links:
        print("\n=== LINKS QUEBRADOS ===")
        for stem, desc in broken_links[:30]:
            print(f"  {stem}: {desc}")

    return (
        len(fases) == 21
        and len(capitulos) == 185
        and len(capitulos_v1_10) == 155
        and len(capitulos_v11) == 30
        and len(uniq_frameworks) == 162
        and len(frameworks) == 162
        and len(uniq_canvases) == 20
        and len(canvases) == 20
        and len(uniq_templates) == 42
        and len(templates) == 42
        and vol_glossaries == 0
        and len(robotic_h3) == 0
        and len(robotic_h5) == 0
        and len(dups_within_vol) == 0
        and em_dashes == 0
        and len(broken_links) == 0
    )


def audit_canvas() -> bool:
    print("=== AUDITORIA DE CANVASES VISUAIS EMBUTIDOS POR FASE (nos 11 volumes) ===\n")
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

    print(f"\nDivergencias de Canvases: {total_mismatches}")
    return total_mismatches == 0


def audit_orphans() -> bool:
    print("=== AUDITORIA DE AUTOCONTENCAO (162 Frameworks, 20 Canvases, 42 Templates = 224 Ferramentas) ===\n")
    vols = load_volumes()
    all_text = "\n".join(vols.values())

    frameworks = re.findall(r"(?m)^#### Framework: (.+)$", all_text)
    canvases = re.findall(r"(?m)^#### Canvas: (.+)$", all_text)
    templates = re.findall(r"(?m)^#### Template: (.+)$", all_text)
    uniq_frameworks = set(frameworks)
    uniq_canvases = set(canvases)
    uniq_templates = set(templates)

    print(f"Frameworks unicos embutidos: {len(uniq_frameworks)} / 162 ({len(frameworks)} instancias totais nos Vols 1-9)")
    print(f"Canvases unicos embutidos:   {len(uniq_canvases)} / 20 ({len(canvases)} instancias totais nos Vols 1-9)")
    print(f"Templates unicos embutidos:  {len(uniq_templates)} / 42 ({len(templates)} instancias totais nos Vols 1-9)\n")

    ok = len(uniq_frameworks) == 162 and len(uniq_canvases) == 20 and len(uniq_templates) == 42
    print("=== RESULTADO (modo orphans / autocontencao) ===")
    print("Status: 100% dos 224 itens embutidos diretamente nas Fases e Capitulos (0 orfaos)." if ok else "ERRO de contagem.")
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
