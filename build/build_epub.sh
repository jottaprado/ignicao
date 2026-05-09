#!/usr/bin/env bash
set -e

PANDOC="/c/Users/joaop/AppData/Local/Microsoft/WinGet/Packages/JohnMacFarlane.Pandoc_Microsoft.Winget.Source_8wekyb3d8bbwe/pandoc-3.9.0.2/pandoc.exe"
INPUT="build/manuscrito_preprocessado.md"
OUTPUT="build/IGNICAO.epub"

"$PANDOC" "$INPUT" -o "$OUTPUT" \
  --from=markdown-tex_math_dollars-tex_math_single_backslash \
  --toc \
  --toc-depth=2 \
  --metadata title="IGNIÇÃO" \
  --metadata subtitle="Manual de Campo do Empreendedor" \
  --metadata author="João Prado" \
  --metadata language="pt-BR" \
  --metadata date="2026" \
  --resource-path="build;build/mermaid;." \
  --epub-chapter-level=2

echo "EPUB gerado: $OUTPUT"
ls -lh "$OUTPUT"
