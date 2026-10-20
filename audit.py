#!/usr/bin/env python3
"""
audit.py — valida integridade estrutural, wikilinks, cobertura de canvases CZ e
itens órfãos (BG, CZ, A) nos 10 volumes canônicos de `volumes/`.

Modos:
- Padrão (`py audit.py`):
    1) Verifica presença e unicidade de todas as 18 fases (0 a 16, incluindo 2B) e
       de todos os apêndices nos 10 volumes.
    2) Valida 100% dos wikilinks internos (`[[#Seção]]`) e inter-volumes
       (`[[IGNICAO-Vol-X#Seção]]`) contra os headings reais de cada volume.
- `--canvas` (`py audit.py --canvas`):
    Para cada fase, valida cobertura de canvases CZ esperados versus efetivamente
    referenciados no corpo da fase.
- `--orphans` (`py audit.py --orphans`):
    Detecta sub-itens definidos nos Vols. 9 e 10 (`BG.X.Y`, `CZ.N`, `A.N`) que não são
    referenciados em nenhuma fase, introdução de domínio ou apêndice.
"""

import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).parent
VOLUMES_DIR = ROOT / "volumes"

EXPECTED_CZ_BY_FASE = {
    "FASE_0": ["CZ.8"],
    "FASE_1": ["CZ.1", "CZ.2", "CZ.4"],
    "FASE_2": ["CZ.1", "CZ.2", "CZ.3", "CZ.5"],
    "FASE_2B": ["CZ.14", "CZ.16"],
    "FASE_3": ["CZ.3", "CZ.6"],
    "FASE_4": ["CZ.3", "CZ.6", "CZ.7"],
    "FASE_5": ["CZ.4", "CZ.15", "CZ.18", "CZ.20"],
    "FASE_6": ["CZ.9", "CZ.14"],
    "FASE_7": ["CZ.9", "CZ.10"],
    "FASE_8": ["CZ.5", "CZ.11"],
    "FASE_9": ["CZ.6"],
    "FASE_10": ["CZ.10", "CZ.11"],
    "FASE_11": ["CZ.10", "CZ.13"],
    "FASE_12": ["CZ.7", "CZ.10"],
    "FASE_13": ["CZ.17"],
    "FASE_14": ["CZ.8", "CZ.10", "CZ.18", "CZ.19"],
    "FASE_15": ["CZ.4", "CZ.20"],
    "FASE_16": ["CZ.12", "CZ.17"],
}

CZ_REF_RE = re.compile(r"CZ\.(\d+)")


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
    """Retorna dict code -> (vol_stem, section_text) para cada FASE e APÊNDICE."""
    boundary = re.compile(
        r"(?m)^(?:# [A-ZÀ-Ú]|## (?:APÊNDICE ([A-Z][\w-]*) —|APÊNDICE —|APÊNDICE:|(FASE \d+B?) —|EPÍLOGO$|GLOSSÁRIO$|ÍNDICE REMISSIVO DE TERMOS-CHAVE$))"
    )
    sections = {}
    duplicates = []

    for stem, text in vols.items():
        matches = list(boundary.finditer(text))
        starts = [m.start() for m in matches]
        for i, m in enumerate(matches):
            code = m.group(1) or (
                m.group(2).replace("FASE ", "FASE_") if m.group(2) else None
            )
            if code is None:
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
    apendices = [k for k in sections if not k.startswith("FASE_")]

    # Mapear todos os headings por volume
    headings_by_vol: dict[str, set[str]] = {}
    for stem, text in vols.items():
        h_set = set()
        for m in re.finditer(r"(?m)^#{1,4}\s+(.+)$", text):
            h_set.add(slugify(m.group(1).strip()))
        headings_by_vol[stem] = h_set

    broken_links = []
    total_links = 0

    for stem, text in vols.items():
        # Ignorar código inline e blocos de código (ex: exemplos de sintaxe `[[#Seção]]`)
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
            print(f"  ok  {stem:<36} ({words:>7,} palavras | {len(headings_by_vol[stem]):>3} headings)")

    print()
    print("=== RESULTADO (estrutura e wikilinks) ===")
    print(f"Volumes verificados:      {len(vols)}")
    print(f"Fases mapeadas:           {len(fases)} (esperado: 18)")
    print(f"Apêndices com código:     {len(apendices)}")
    print(f"Wikilinks verificados:    {total_links}")
    print(f"Wikilinks quebrados:      {len(broken_links)}")

    if broken_links:
        print("\n=== LINKS QUEBRADOS ===")
        for stem, desc in broken_links[:30]:
            print(f"  {stem}: {desc}")

    return len(fases) == 18 and len(broken_links) == 0


def audit_canvas() -> bool:
    print("=== AUDITORIA DE COBERTURA CZ -> FASE (nos 10 volumes) ===\n")
    vols = load_volumes()
    sections = extract_sections(vols)

    total_gaps = 0
    total_extras = 0
    fases_with_gaps = 0

    for fase_key in sorted(EXPECTED_CZ_BY_FASE.keys()):
        if fase_key not in sections:
            print(f"  MISSING FASE  {fase_key}")
            total_gaps += 1
            continue
        vol_stem, text = sections[fase_key]
        actual = {f"CZ.{m.group(1)}" for m in CZ_REF_RE.finditer(text)}
        expected = set(EXPECTED_CZ_BY_FASE[fase_key])
        gaps = expected - actual
        extras = actual - expected

        if not gaps and not extras:
            print(f"  ok  {fase_key:<10} [{vol_stem}] ({len(expected)} esperados, todos presentes)")
            continue

        fases_with_gaps += 1
        total_gaps += len(gaps)
        total_extras += len(extras)
        marker = "GAP   " if gaps else "EXTRA "
        print(f"  {marker}{fase_key:<10} [{vol_stem}]", end="")
        if gaps:
            print(f"  faltando: {sorted(gaps)}", end="")
        if extras:
            print(f"  extras: {sorted(extras)}", end="")
        print()

    print()
    print("=== RESULTADO (modo canvas) ===")
    print(f"Fases com cobertura completa: {len(EXPECTED_CZ_BY_FASE) - fases_with_gaps}")
    print(f"Fases com gaps ou extras:     {fases_with_gaps}")
    print(f"CZ esperados ausentes:        {total_gaps}")
    print(f"CZ extras (não esperados):    {total_extras}")
    return total_gaps == 0


def audit_orphans() -> bool:
    print("=== AUDITORIA DE ITENS ÓRFÃOS (definidos nos Vols. 9 e 10 mas não referenciados) ===\n")
    vols = load_volumes()
    sections = extract_sections(vols)

    bg_text = sections.get("BG", ("", ""))[1]
    cz_text = sections.get("CZ", ("", ""))[1]
    a_text = sections.get("A", ("", ""))[1]

    bg_codes = re.findall(r"(?m)^### (BG\.\d+\.\d+)\b", bg_text)
    if not bg_codes:
        bg_codes = re.findall(r"(?m)^#{2,4} (BG\.\d+\.\d+)\b", bg_text)
    cz_codes = re.findall(r"(?m)^#{2,4} (CZ\.\d+)\b", cz_text)
    a_codes = re.findall(r"(?m)^#{2,4} (A\.\d+)\b", a_text)

    print(f"Definidos nos Vols. 9 e 10: {len(bg_codes)} BG, {len(cz_codes)} CZ, {len(a_codes)} A.\n")

    search_chunks = [
        text for stem, text in vols.items() if not stem.startswith(("IGNICAO-Vol-9-", "IGNICAO-Vol-10-"))
    ]
    for code, (stem, sec_text) in sections.items():
        if stem.startswith(("IGNICAO-Vol-9-", "IGNICAO-Vol-10-")) and code not in {"BG", "CZ", "A"}:
            search_chunks.append(sec_text)
    other_sections_text = "\n".join(search_chunks)

    def check(codes: list[str], label: str) -> list[str]:
        orphans = []
        for code in codes:
            pattern = re.compile(r"\b" + re.escape(code) + r"\b")
            if not pattern.search(other_sections_text):
                orphans.append(code)
        if orphans:
            print(f"{label} órfãos ({len(orphans)} de {len(codes)}):")
            for code in orphans:
                print(f"  - {code}")
            print()
        else:
            print(f"{label}: 0 órfãos (todos os {len(codes)} sub-itens são referenciados).\n")
        return orphans

    bg_orphans = check(bg_codes, "BG")
    cz_orphans = check(cz_codes, "CZ")
    a_orphans = check(a_codes, "A")

    total = len(bg_orphans) + len(cz_orphans) + len(a_orphans)
    print("=== RESULTADO (modo orphans) ===")
    print(f"Total de órfãos:  {total}")
    return total == 0


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
