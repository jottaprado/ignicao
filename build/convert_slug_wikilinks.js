#!/usr/bin/env node
// convert_slug_wikilinks.js
// Converte wikilinks slug-based em wikilinks anchor-based no canonical do livro.
// [[apendice-X|alias]]      -> [[#APÊNDICE X — TÍTULO|alias]]
// [[fases/fase-XX|alias]]   -> [[#FASE XX — TÍTULO|alias]]

const fs = require('fs');
const path = require('path');

const CANONICAL = 'c:/Users/joaop/ignition-community/ignicao-br/IGNIÇÃO - Manual de Campo do Empreendedor  - João Prado (2026).md';

const text = fs.readFileSync(CANONICAL, 'utf8');

// 1. Construir dicionario codigo -> titulo via parsing dos cabecalhos
const apendiceMap = new Map(); // slug-suffix-lowercase -> "APÊNDICE X — TITULO"
const fasesMap = new Map();    // slug-suffix-lowercase -> "FASE N — TITULO"

const headerLines = text.split(/\r?\n/);
for (const line of headerLines) {
  // Apendices com letra: "## APÊNDICE BJ — ..."
  let m = line.match(/^## (APÊNDICE\s+([A-Z]{1,3})\s+—\s+.+)$/);
  if (m) {
    const fullTitle = m[1].trim();
    const code = m[2].toLowerCase();
    if (!apendiceMap.has(code)) apendiceMap.set(code, fullTitle);
    continue;
  }
  // Apendices nomeados: "## APÊNDICE — ..." ou "## APÊNDICE: ..."
  m = line.match(/^## (APÊNDICE\s*[—:]\s*.+)$/);
  if (m) {
    const fullTitle = m[1].trim();
    // mapear pelo nome (sem letra), mas nao usado neste script (sem slugs especiais)
    continue;
  }
  // Fases: "## FASE 0 — ..." | "## FASE 2B — ..." | "## FASE 14 — ..."
  m = line.match(/^## (FASE\s+([0-9]+[A-Z]?)\s+—\s+.+)$/);
  if (m) {
    const fullTitle = m[1].trim();
    const num = m[2].toLowerCase();
    // Slug usa zero-padding (fase-00, fase-01, fase-02b)
    let slugKey;
    if (/^[0-9]+$/.test(num)) {
      slugKey = num.padStart(2, '0');
    } else {
      // ex: "2b" -> "02b"
      const numPart = num.match(/^([0-9]+)([a-z]+)$/);
      if (numPart) slugKey = numPart[1].padStart(2, '0') + numPart[2];
      else slugKey = num;
    }
    if (!fasesMap.has(slugKey)) fasesMap.set(slugKey, fullTitle);
    continue;
  }
}

console.log(`Apendices mapeados: ${apendiceMap.size}`);
console.log(`Fases mapeadas: ${fasesMap.size}`);
for (const [k, v] of fasesMap) console.log(`  fase-${k} -> ${v}`);

// 2. Replace
let updated = text;
let countApendice = 0;
let countFases = 0;
const warnings = new Set();

// Match [[apendice-XYZ|alias]] (alias obrigatorio aqui, mas tornar opcional)
updated = updated.replace(/\[\[apendice-([a-z0-9-]+?)(\|([^\]]+))?\]\]/g, (full, code, _pipe, alias) => {
  const title = apendiceMap.get(code);
  if (!title) {
    warnings.add(`apendice-${code}`);
    return full;
  }
  countApendice++;
  if (alias !== undefined) return `[[#${title}|${alias}]]`;
  return `[[#${title}]]`;
});

// Match [[fases/fase-XX|alias]]
updated = updated.replace(/\[\[fases\/fase-([a-z0-9]+?)(\|([^\]]+))?\]\]/g, (full, code, _pipe, alias) => {
  const title = fasesMap.get(code);
  if (!title) {
    warnings.add(`fases/fase-${code}`);
    return full;
  }
  countFases++;
  if (alias !== undefined) return `[[#${title}|${alias}]]`;
  return `[[#${title}]]`;
});

console.log(`\nConversoes:`);
console.log(`  [[apendice-X|...]] convertidos: ${countApendice}`);
console.log(`  [[fases/fase-XX|...]] convertidos: ${countFases}`);
console.log(`  Total: ${countApendice + countFases}`);
if (warnings.size) {
  console.log(`\nAvisos (slugs sem mapeamento, deixados como estao):`);
  for (const w of warnings) console.log(`  ${w}`);
} else {
  console.log(`\nSem avisos.`);
}

fs.writeFileSync(CANONICAL, updated, 'utf8');
console.log(`\nCanonical atualizado: ${CANONICAL}`);
