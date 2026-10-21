// Renderiza cover.png (Omnibus) e cover-vol-1.png a cover-vol-10.png via Puppeteer
const path = require('path');
const fs = require('fs');

const { execFileSync } = require('child_process');

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
  return null;
}

function findBrowserCli() {
  const candidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error('Nem Puppeteer nem navegador Edge/Chrome foram encontrados.');
}

const puppeteer = loadPuppeteer();

const COVERS = [
  {
    file: 'cover.png',
    topMark: 'Manual de Campo · Edição Completa Autocontida (10 Volumes)',
    volBadge: '',
    subtitle: 'O manual operacional do empreendedor brasileiro',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1a00 35%, #c63b00 75%, #ff6b1a 100%)',
  },
  {
    file: 'cover-vol-1.png',
    topMark: 'Coleção IGNIÇÃO · Volume 1 de 10 (Autocontido)',
    volBadge: 'VOL. 1 · IDEAÇÃO E FUNDAÇÃO',
    subtitle: 'Do Pré-Zero à Teoria do Negócio (Fases 0 a 3 e Capítulos 1 a 13)',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1a00 35%, #c63b00 75%, #ff6b1a 100%)',
  },
  {
    file: 'cover-vol-2.png',
    topMark: 'Coleção IGNIÇÃO · Volume 2 de 10 (Autocontido)',
    volBadge: 'VOL. 2 · DESCOBERTA E MERCADO',
    subtitle: 'Customer Discovery, Pesquisa de Campo, Concorrência e Cunha (Fases 4 a 6 e Capítulos 1 a 4)',
    gradient: 'linear-gradient(135deg, #071324 0%, #102a4c 35%, #1d4ed8 75%, #38bdf8 100%)',
  },
  {
    file: 'cover-vol-3.png',
    topMark: 'Coleção IGNIÇÃO · Volume 3 de 10 (Autocontido)',
    volBadge: 'VOL. 3 · HIPÓTESES E PROTÓTIPO',
    subtitle: 'Método Científico, Experimentos, Usabilidade e Modelos de Negócio (Fases 7 a 10 e Capítulos 1 a 10)',
    gradient: 'linear-gradient(135deg, #041f10 0%, #0f3d21 35%, #15803d 75%, #34d399 100%)',
  },
  {
    file: 'cover-vol-4.png',
    topMark: 'Coleção IGNIÇÃO · Volume 4 de 10 (Autocontido)',
    volBadge: 'VOL. 4 · TRAÇÃO E PMF',
    subtitle: 'Do MVP em Produção ao Product-Market Fit, Canais, Vendas e Pricing (Fases 11 a 13 e Capítulos 1 a 16)',
    gradient: 'linear-gradient(135deg, #1f1400 0%, #4d3300 35%, #b45309 75%, #fbbf24 100%)',
  },
  {
    file: 'cover-vol-5.png',
    topMark: 'Coleção IGNIÇÃO · Volume 5 de 10 (Autocontido)',
    volBadge: 'VOL. 5 · FINANÇAS E CAPTAÇÃO',
    subtitle: 'Contabilidade, Tributário, FP&A, Comércio Exterior, Caixa e Venture Capital (Fase 14 e Capítulos 1 a 21)',
    gradient: 'linear-gradient(135deg, #1a093b 0%, #3b147a 35%, #6d28d9 75%, #a855f7 100%)',
  },
  {
    file: 'cover-vol-6.png',
    topMark: 'Coleção IGNIÇÃO · Volume 6 de 10 (Autocontido)',
    volBadge: 'VOL. 6 · RECEITA E PESSOAS',
    subtitle: 'Máquina Comercial Enterprise, RevOps, Franquias, Liderança Executiva, Talentos e ESOP (Fases 15 e 16 e Capítulos 1 a 20)',
    gradient: 'linear-gradient(135deg, #042026 0%, #0c4a56 35%, #0e7490 75%, #22d3ee 100%)',
  },
  {
    file: 'cover-vol-7.png',
    topMark: 'Coleção IGNIÇÃO · Volume 7 de 10 (Autocontido)',
    volBadge: 'VOL. 7 · PRODUTO E ENGENHARIA',
    subtitle: 'Operações em Escala, OKRs, Gestão Técnica, Dívida Técnica e IA (Fase 17 e Capítulos 1 a 11)',
    gradient: 'linear-gradient(135deg, #280606 0%, #5c1111 35%, #b91c1c 75%, #f87171 100%)',
  },
  {
    file: 'cover-vol-8.png',
    topMark: 'Coleção IGNIÇÃO · Volume 8 de 10 (Autocontido)',
    volBadge: 'VOL. 8 · JURÍDICO E SEGURANÇA',
    subtitle: 'Estruturação Societária, Contratos, Trabalhista, LGPD e Cibersegurança (Fase 18 e Capítulos 1 a 14)',
    gradient: 'linear-gradient(135deg, #141f05 0%, #2d470b 35%, #4d7c0f 75%, #a3e635 100%)',
  },
  {
    file: 'cover-vol-9.png',
    topMark: 'Coleção IGNIÇÃO · Volume 9 de 10 (Autocontido)',
    volBadge: 'VOL. 9 · MATURIDADE, EXIT E FAMILY OFFICE',
    subtitle: 'Segunda Curva, Conselho (Board), Crise, Spin-offs, M&A, IPO, Cash Cow e Family Office (Fases 19 e 20 e Capítulos 1 a 23)',
    gradient: 'linear-gradient(135deg, #180828 0%, #3b0764 35%, #86198f 75%, #e879f9 100%)',
  },
  {
    file: 'cover-vol-10.png',
    topMark: 'Coleção IGNIÇÃO · Volume 10 de 10 (Autocontido)',
    volBadge: 'VOL. 10 · ECONOMIA DA INOVAÇÃO E 37 VERTICAIS',
    subtitle: 'Atores da Inovação, Hubs Globais e Brasileiros, Regulação, 37 Verticais e Dicionário (Capítulos 1 a 43)',
    gradient: 'linear-gradient(135deg, #090d16 0%, #1e293b 40%, #334155 75%, #94a3b8 100%)',
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
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 5px;
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
    <div class="meta">2026 · v4.0 · EDIÇÃO AUTOCONTIDA</div>
  </div>
</body>
</html>`;
}

(async () => {
  if (puppeteer) {
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
  } else {
    const browserExe = findBrowserCli();
    const tmpHtml = path.resolve(__dirname, '_tmp_cover.html');
    for (const c of COVERS) {
      const html = buildHtml(c);
      fs.writeFileSync(tmpHtml, html, 'utf8');
      const outputPath = path.resolve(__dirname, c.file);
      const fileUrl = 'file:///' + tmpHtml.replace(/\\/g, '/');
      execFileSync(
        browserExe,
        [
          '--headless=new',
          '--disable-gpu',
          '--hide-scrollbars',
          '--window-size=1600,2400',
          '--force-device-scale-factor=1',
          '--virtual-time-budget=3000',
          `--screenshot=${outputPath}`,
          fileUrl,
        ],
        { stdio: 'pipe' }
      );
      const stats = fs.statSync(outputPath);
      console.log(`Cover gerada (CLI): ${c.file} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
    if (fs.existsSync(tmpHtml)) fs.unlinkSync(tmpHtml);
  }
})();
