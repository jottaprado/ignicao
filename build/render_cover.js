// Renderiza cover.png (Omnibus) e cover-vol-1.png a cover-vol-6.png via Puppeteer
const path = require('path');
const fs = require('fs');

function loadPuppeteer() {
  const candidates = [
    'puppeteer',
    path.join(
      process.env.APPDATA || '',
      'npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer'
    ),
  ];
  for (const c of candidates) {
    try {
      return require(c);
    } catch (_) {
      /* try next */
    }
  }
  throw new Error('Puppeteer não encontrado.');
}

const puppeteer = loadPuppeteer();

const COVERS = [
  {
    file: 'cover.png',
    topMark: 'Manual de Campo · Edição Completa',
    volBadge: '',
    subtitle: 'O manual operacional do empreendedor brasileiro',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1a00 35%, #c63b00 75%, #ff6b1a 100%)',
  },
  {
    file: 'cover-vol-1.png',
    topMark: 'Coleção IGNIÇÃO · Volume 1 de 6',
    volBadge: 'VOL. 1 · IDEAÇÃO',
    subtitle: 'Do Pré-Zero à Tese de Negócio (Fases 0 a 2B)',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1a00 35%, #c63b00 75%, #ff6b1a 100%)',
  },
  {
    file: 'cover-vol-2.png',
    topMark: 'Coleção IGNIÇÃO · Volume 2 de 6',
    volBadge: 'VOL. 2 · VALIDAÇÃO',
    subtitle: 'Da Descoberta do Problema ao Protótipo Testado (Fases 3 a 9)',
    gradient: 'linear-gradient(135deg, #071324 0%, #102a4c 35%, #1d4ed8 75%, #38bdf8 100%)',
  },
  {
    file: 'cover-vol-3.png',
    topMark: 'Coleção IGNIÇÃO · Volume 3 de 6',
    volBadge: 'VOL. 3 · TRAÇÃO',
    subtitle: 'Do MVP ao Product-Market Fit (Fases 10 a 12)',
    gradient: 'linear-gradient(135deg, #041f10 0%, #0f3d21 35%, #15803d 75%, #34d399 100%)',
  },
  {
    file: 'cover-vol-4.png',
    topMark: 'Coleção IGNIÇÃO · Volume 4 de 6',
    volBadge: 'VOL. 4 · ESCALA',
    subtitle: 'Da Estruturação ao Hipercrescimento (Fases 13 e 14)',
    gradient: 'linear-gradient(135deg, #1a093b 0%, #3b147a 35%, #6d28d9 75%, #a855f7 100%)',
  },
  {
    file: 'cover-vol-5.png',
    topMark: 'Coleção IGNIÇÃO · Volume 5 de 6',
    volBadge: 'VOL. 5 · MATURIDADE',
    subtitle: 'Ciclo Longo, Governança, Crise e Exit (Fases 15 e 16)',
    gradient: 'linear-gradient(135deg, #280606 0%, #5c1111 35%, #b91c1c 75%, #f87171 100%)',
  },
  {
    file: 'cover-vol-6.png',
    topMark: 'Coleção IGNIÇÃO · Volume 6 de 6',
    volBadge: 'VOL. 6 · REFERÊNCIA',
    subtitle: 'Ferramentário, Canvases, Templates, Verticais Setoriais e Glossário',
    gradient: 'linear-gradient(135deg, #090d16 0%, #1e293b 40%, #334155 75%, #64748b 100%)',
  },
];

function buildHtml(c) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Cover</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Inter:wght@400;500;700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1600px;
    height: 2400px;
    background: ${c.gradient};
    color: #fff;
    font-family: 'Inter', -apple-system, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 180px 140px;
    position: relative;
    overflow: hidden;
  }
  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1400px;
    height: 1400px;
    background: radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 60%);
    pointer-events: none;
  }
  .top-mark {
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255,255,255,0.72);
    z-index: 1;
  }
  .center {
    z-index: 1;
    text-align: left;
  }
  .vol-badge {
    display: ${c.volBadge ? 'inline-block' : 'none'};
    font-size: 42px;
    font-weight: 800;
    letter-spacing: 6px;
    text-transform: uppercase;
    padding: 16px 36px;
    border: 3px solid rgba(255,255,255,0.75);
    border-radius: 12px;
    margin-bottom: 48px;
    background: rgba(0,0,0,0.22);
  }
  .title {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 270px;
    line-height: 0.9;
    letter-spacing: -4px;
    color: #fff;
    text-shadow: 0 8px 60px rgba(0,0,0,0.4);
  }
  .subtitle {
    font-size: 54px;
    font-weight: 400;
    line-height: 1.25;
    margin-top: 56px;
    color: rgba(255,255,255,0.92);
    max-width: 1180px;
  }
  .accent-bar {
    width: 240px;
    height: 8px;
    background: #fff;
    margin-top: 76px;
  }
  .bottom {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .author {
    font-size: 64px;
    font-weight: 700;
    color: #fff;
  }
  .meta {
    font-size: 36px;
    font-weight: 400;
    color: rgba(255,255,255,0.7);
    letter-spacing: 4px;
  }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="top-mark">${c.topMark}</div>
  <div class="center">
    <div class="vol-badge">${c.volBadge}</div>
    <div class="title">IGNIÇÃO</div>
    <div class="subtitle">${c.subtitle}</div>
    <div class="accent-bar"></div>
  </div>
  <div class="bottom">
    <div class="author">João Prado</div>
    <div class="meta">2026 · v3.4 · LIVING DOCUMENT</div>
  </div>
</body>
</html>`;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 2400, deviceScaleFactor: 1 });

  for (const c of COVERS) {
    const html = buildHtml(c);
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.evaluateHandle('document.fonts.ready');
    const outputPath = path.resolve(__dirname, c.file);
    await page.screenshot({ path: outputPath, type: 'png', omitBackground: false, fullPage: false });
    const stats = fs.statSync(outputPath);
    console.log(`Cover gerada: ${c.file} (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  await browser.close();
})();
