// Utilidades simples
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// Modal reusável
const Modal = (() => {
  let backdrop, titleEl, bodyEl, closeBtn;
  function ensure() {
    if (backdrop) return;
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h3 id="modal-title" class="modal-title">Título</h3>
          <button class="modal-close" aria-label="Fechar (Esc)">Fechar ✕</button>
        </div>
        <div class="modal-body"></div>
      </div>`;
    document.body.appendChild(backdrop);
    titleEl = $('#modal-title', backdrop);
    bodyEl = $('.modal-body', backdrop);
    closeBtn = $('.modal-close', backdrop);
    closeBtn.addEventListener('click', hide);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) hide();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hide();
    });
  }
  function show(title, html) {
    ensure();
    titleEl.textContent = title || 'Informações';
    bodyEl.innerHTML = html || '';
    backdrop.classList.add('show');
    closeBtn.focus();
  }
  function hide() {
    backdrop?.classList.remove('show');
  }
  return { show, hide };
})();

// Carrega um SVG externo e injeta no container
async function injectSVG(url, container) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Falha ao carregar SVG');
    const svgText = await res.text();
    container.innerHTML = svgText;
    return $('svg', container);
  } catch (e) {
    console.warn(e);
    return null;
  }
}

// Delegação de clique para paths com id padronizado (br-XX)
function bindMapInteractions(svgRoot, dataset, countryPrefix) {
  if (!svgRoot) return;
  svgRoot.setAttribute('tabindex','-1');
  const clickable = $$('path[id^="'+countryPrefix+'-"], g[id^="'+countryPrefix+'-"]', svgRoot);
  clickable.forEach(el => {
    el.classList.add('state');
    el.setAttribute('tabindex', '0');
    
    // Remove outline azul ao clicar
    el.style.outline = 'none';
    
    // Remove estilos inline de fill para permitir CSS
    if (el.hasAttribute('fill')) {
      el.removeAttribute('fill');
    }
    if (el.hasAttribute('style')) {
      const style = el.getAttribute('style');
      // Remove apenas fill do style, mantém outros atributos
      const newStyle = style.replace(/fill:[^;]+;?/g, '');
      if (newStyle.trim()) {
        el.setAttribute('style', newStyle);
      } else {
        el.removeAttribute('style');
      }
    }
    
    // Para elementos <g>, limpa os paths internos também
    if (el.tagName === 'g') {
      $$('path', el).forEach(path => {
        if (path.hasAttribute('fill')) path.removeAttribute('fill');
        if (path.hasAttribute('style')) {
          const style = path.getAttribute('style');
          const newStyle = style.replace(/fill:[^;]+;?/g, '');
          if (newStyle.trim()) {
            path.setAttribute('style', newStyle);
          } else {
            path.removeAttribute('style');
          }
        }
      });
    }
    
    el.addEventListener('click', () => openState(el.id, dataset));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openState(el.id, dataset); }
    });
  });
}

// Abre o modal com dados do estado
function openState(elementId, dataset){
  // elementId ex: "br-SP" ou "usa-TX"
  const prefix = elementId.split('-')[0]; // 'br' ou 'usa'
  const code = elementId.split('-')[1]?.toUpperCase();
  const data = dataset[code] || { name: code, alfabetizacao: "Dados não disponíveis" };

  // Detecta país para labels corretos
  const isBrazil = (prefix === 'br');
  const isUSA = (prefix === 'us' || prefix === 'usa');
  
  // Labels específicos por país
  const labels = {
    taxaTitulo: isBrazil ? 'Taxa de Alfabetização' : isUSA ? 'Taxa de Proficiência' : 'Taxa',
    faixaEtaria: isBrazil ? '(15+)' : isUSA ? '(16-74)' : '',
    moeda: isBrazil ? 'R$' : isUSA ? 'US$' : '',
    evolucaoLabel: isBrazil ? 'Evolução 2010-2022' : isUSA ? 'Nível Educacional (% com Ensino Superior)' : 'Evolução',
    evolucaoIcon: isBrazil ? '📈' : isUSA ? '🎓' : '📈'
  };

  // Se não tem dados completos (estrutura antiga), exibe mensagem simples
  if (!data.populacao) {
    const html = `<p>${data.intro || "Em breve adicionaremos os detalhes deste estado."}</p>`;
    Modal.show(data.name || code, html);
    return;
  }

  // Card principal - Taxa de Alfabetização/Proficiência com destaque visual
  const taxaCard = `
    <div class="alfabetizacao-destaque">
      <div class="taxa-principal">${data.alfabetizacao}</div>
      <div class="taxa-label">${labels.taxaTitulo} ${labels.faixaEtaria}</div>
    </div>
  `;
  
  // Grid de informações 2x2 com ícones
  const infoGrid = `
    <div class="info-grid">
      <div class="info-item">
        <span class="info-icon">👥</span>
        <span class="info-label">População</span>
        <span class="info-value">${data.populacao}</span>
      </div>
      <div class="info-item">
        <span class="info-icon">💰</span>
        <span class="info-label">Renda per capita</span>
        <span class="info-value">${data.renda}</span>
      </div>
      <div class="info-item">
        <span class="info-icon">📊</span>
        <span class="info-label">IDH (2021)</span>
        <span class="info-value">${data.idh}</span>
      </div>
      <div class="info-item">
        <span class="info-icon">${labels.evolucaoIcon}</span>
        <span class="info-label">${labels.evolucaoLabel}</span>
        <span class="info-value">${isUSA ? data.nivelEducacional : data.variacao}</span>
      </div>
    </div>
  `;
  
  // Barra comparativa com média nacional (colorida)
  const comparativoClass = data.comparativoValor >= 0 ? 'positivo' : 'negativo';
  const comparativoIcon = data.comparativoValor > 0 ? '▲' : data.comparativoValor < 0 ? '▼' : '●';
  
  // Média nacional por país
  const mediaNacional = isBrazil ? '93,0%' : isUSA ? '46,9%' : '-';
  
  const comparativo = `
    <div class="comparativo-nacional">
      <div class="comparativo-label">Comparativo com média nacional (${mediaNacional})</div>
      <div class="comparativo-valor ${comparativoClass}">
        ${comparativoIcon} ${data.comparativo}
      </div>
    </div>
  `;
  
  const html = taxaCard + infoGrid + comparativo;
  Modal.show(data.name || code, html);
}

// Calcula stroke-width proporcional ao tamanho do viewBox/elemento
function _calculateStrokeWidth(svgRoot, element) {
  try {
    // Tenta obter o viewBox do SVG
    const viewBox = svgRoot.viewBox.baseVal;
    const viewBoxWidth = viewBox.width;
    
    // Se o viewBox for muito grande (Brasil), usar proporção maior
    if (viewBoxWidth >= 10000) {
      return viewBoxWidth * 0.0015; // 0.15% do viewBox (para Brasil ~330)
    } else {
      // Para viewBox menor (EUA), usar valor fixo
      return 8;
    }
  } catch {
    // Fallback: usar largura do elemento
    try {
      const bbox = element.getBBox();
      return Math.max(bbox.width * 0.02, 8);
    } catch {
      return 8;
    }
  }
}

// Calcula blur proporcional para drop-shadow
function _calculateBlur(svgRoot) {
  try {
    const viewBox = svgRoot.viewBox.baseVal;
    const viewBoxWidth = viewBox.width;
    
    if (viewBoxWidth >= 10000) {
      // Brasil: blur proporcional ao viewBox
      return {
        small: Math.round(viewBoxWidth * 0.001),   // ~220
        medium: Math.round(viewBoxWidth * 0.002),  // ~440
        large: Math.round(viewBoxWidth * 0.003),   // ~660
        xlarge: Math.round(viewBoxWidth * 0.004)   // ~880
      };
    } else {
      // EUA: valores fixos menores
      return {
        small: 20,
        medium: 40,
        large: 60,
        xlarge: 80
      };
    }
  } catch {
    return { small: 20, medium: 40, large: 60, xlarge: 80 };
  }
}

// Filtro de busca por nome (destaca e foca o 1º resultado)
function bindSearch(inputSel, svgRoot, dataset, prefix){
  const input = $(inputSel);
  if(!input || !svgRoot) {
    console.warn('bindSearch: input ou svgRoot não encontrado', {input, svgRoot});
    return;
  }
  
  console.log(`✓ Busca vinculada para ${prefix}, dataset tem ${Object.keys(dataset).length} estados`);
  
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const nodes = $$('path[id^="'+prefix+'-"], g[id^="'+prefix+'-"]', svgRoot);
    
    // Limpa todos os filtros e estilos de destaque
    nodes.forEach(n => {
      n.style.filter = '';
      n.style.stroke = '';
      n.style.strokeWidth = '';
      n.classList.remove('state-found');
      
      // Se for um grupo <g>, limpar também os paths internos
      if (n.tagName === 'g') {
        const paths = n.querySelectorAll('path');
        paths.forEach(path => {
          path.style.stroke = '';
          path.style.strokeWidth = '';
          path.style.filter = '';
        });
      }
    });
    
    if (!q){ 
      console.log('Busca limpa');
      return; 
    }
    
    // Debug do dataset
    console.log('📊 Dataset info:', {
      totalEstados: Object.keys(dataset).length,
      primeiroEstado: Object.entries(dataset)[0],
      buscando: q
    });
    
    // Busca nos dados
    const found = Object.entries(dataset)
      .filter(([code, v]) => {
        const match = (v.name || '').toLowerCase().includes(q);
        if (match) {
          console.log(`✓ Match encontrado: ${code} = ${v.name}`);
        }
        return match;
      });
    
    console.log(`Buscando "${q}": encontrados ${found.length} estados`);
    
    if (found.length){
      const code = found[0][0];
      const el = $('#'+prefix+'-'+code, svgRoot);
      if (el){
        // Adicionar classe com animação
        el.classList.add('state-found');
        
        // Calcular valores proporcionais
        const strokeWidth = _calculateStrokeWidth(svgRoot, el);
        const blur = _calculateBlur(svgRoot);
        
        // Destaque visual SUPER FORTE com valores proporcionais
        el.style.setProperty('stroke', '#22d3ee', 'important');
        el.style.setProperty('stroke-width', strokeWidth, 'important');
        el.style.setProperty('filter', `drop-shadow(0 0 ${blur.small}px #22d3ee) drop-shadow(0 0 ${blur.medium}px #22d3ee) drop-shadow(0 0 ${blur.large}px #22d3ee)`, 'important');
        
        // Se for um grupo <g>, aplicar também aos paths internos com MUITO BRILHO
        if (el.tagName === 'g') {
          const paths = el.querySelectorAll('path');
          paths.forEach(path => {
            path.style.setProperty('stroke', '#22d3ee', 'important');
            path.style.setProperty('stroke-width', strokeWidth, 'important');
            path.style.setProperty('filter', `drop-shadow(0 0 ${blur.small}px #22d3ee) drop-shadow(0 0 ${blur.medium}px #22d3ee) drop-shadow(0 0 ${blur.large}px #22d3ee) drop-shadow(0 0 ${blur.xlarge}px #22d3ee)`, 'important');
            path.style.setProperty('opacity', '1', 'important');
          });
        }
        
        console.log(`✓ Estado destacado: ${found[0][1].name} (${code}) - stroke:${strokeWidth.toFixed(0)} blur:${blur.small}/${blur.medium}/${blur.large}`);
      } else {
        console.warn(`Elemento não encontrado: ${prefix}-${code}`);
      }
    }
  });
}

// Navegação pelos botões de país na home (acessível)
function bindFlagLinks(){
  $$('.flag-btn').forEach(a=>{
    a.addEventListener('keydown', (e)=>{
      if(e.key===' '){ e.preventDefault(); a.click(); }
    });
  });
}

// === RÓTULOS DE ESTADOS (siglas) ==========================================
// Adiciona labels "XX" no centro de cada estado (br-XX), sem bloquear clique.
(function(){
  function _labelForId(id, prefix){
    // id: br-XX ou usa-XX
    if (!id || !id.startsWith(prefix + "-")) return null;
    // Remove o prefixo + hífen (ex: "br-" ou "usa-")
    return id.slice(prefix.length + 1).toUpperCase();
  }

  function _bboxCenter(el){
    try {
      const b = el.getBBox();
      return { x: b.x + b.width/2, y: b.y + b.height/2, w: b.width, h: b.height };
    } catch {
      return null;
    }
  }

  function _fontSizeForBox(w){
    // Para SVGs com viewBox muito grande (como br-map.svg com 220000)
    // calculamos proporcionalmente - precisa ser GRANDE!
    if (w >= 10000) return w * 0.25;  // 25% da largura do estado
    if (w >= 5000) return w * 0.28;
    if (w >= 2000) return w * 0.30;
    if (w >= 1000) return w * 0.35;
    if (w >= 500) return w * 0.40;
    
    // Para SVGs pequenos (escala normal)
    if (w >= 250) return 24;
    if (w >= 180) return 20;
    if (w >= 120) return 18;
    if (w >= 80)  return 16;
    if (w >= 55)  return 14;
    return 12;
  }

  // Ajustes finos para UFs muito pequenas (evita encostar no mar/limites)
  const BR_OFFSETS = {
    "DF":[0,4], "ES":[4,0], "SE":[4,0], "AL":[2,0], "RJ":[-2,2]
  };

  function _createText(x, y, text, sizePx, prefix){
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("dominant-baseline", "central");
    t.setAttribute("data-label", prefix);
    const fontSize = sizePx;  // Já calculado proporcionalmente
    
    // ✅ CORREÇÃO: Formatação diferenciada por país
    // Brasil: stroke mais grosso para melhor visibilidade
    // EUA: stroke muito fino (apenas contorno sutil) para evitar "fundo preto"
    const strokeWidth = prefix === 'usa' 
      ? Math.max(fontSize * 0.02, 8)    // EUA: stroke mínimo, apenas 2% do tamanho
      : Math.max(fontSize * 0.10, 300); // BR: mantém o original
    
    // Opacity normal para ambos
    const opacity = '1';
    
    t.setAttribute("fill", "#ffffff");
    t.setAttribute("stroke", "#000000");
    t.setAttribute("stroke-width", strokeWidth);
    t.setAttribute("font-size", fontSize);
    t.setAttribute("font-weight", "900");
    t.setAttribute("font-family", "Arial, sans-serif");
    t.setAttribute("opacity", opacity);
    
    // Estilo inline com ajustes específicos
    const styles = [
      "fill:#ffffff !important",
      "stroke:#000000 !important",
      `stroke-width:${strokeWidth} !important`,
      "paint-order:stroke",
      "font-weight:900",
      "font-family:Arial,sans-serif",
      `font-size:${fontSize}px !important`,
      "pointer-events:none",
      "user-select:none",
      `opacity:${opacity} !important`,
      "visibility:visible !important"
    ];
    
    // ✅ Para EUA: adiciona text-shadow para legibilidade sem fundo pesado
    if (prefix === 'usa') {
      styles.push("filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8))");
    }
    
    t.setAttribute("style", styles.join(";"));
    t.textContent = text;
    
    console.log(`Criando label "${text}" em (${x.toFixed(0)}, ${y.toFixed(0)}) tamanho ${fontSize.toFixed(0)}px stroke ${strokeWidth.toFixed(0)}`);
    return t;
  }

  function _removePreviousLabels(svgRoot, prefix){
    svgRoot.querySelectorAll(`text[data-label='${prefix}']`).forEach(n => n.remove());
  }

  function addStateLabels(svgRoot, prefix /* 'br' */){
    if (!svgRoot) {
      console.error('SVG root não encontrado para labels');
      return;
    }
    
    _removePreviousLabels(svgRoot, prefix);

    const nodes = svgRoot.querySelectorAll(`[id^='${prefix}-']`);
    console.log(`Encontrados ${nodes.length} estados com ID ${prefix}-*`);
    
    if (!nodes.length) {
      console.warn(`Nenhum elemento com id="${prefix}-*" encontrado no SVG`);
      return;
    }

    let labelCount = 0;
    nodes.forEach(el => {
      const code = _labelForId(el.id, prefix);
      if (!code) return;

      const box = _bboxCenter(el);
      if (!box) {
        console.warn(`Não foi possível obter BBox para ${el.id}`);
        return;
      }

      const size = _fontSizeForBox(box.w);
      let lx = box.x, ly = box.y;

      if (prefix === 'br' && BR_OFFSETS[code]) {
        lx += BR_OFFSETS[code][0]; ly += BR_OFFSETS[code][1];
      }

      const label = _createText(lx, ly, code, size, prefix);
      svgRoot.appendChild(label); // mantém labels por cima dos paths
      labelCount++;
    });
    
    console.log(`✓ ${labelCount} siglas adicionadas ao mapa ${prefix.toUpperCase()}`);
  }

  // expõe na namespace do app
  window._amostra = window._amostra || {};
  window._amostra.addStateLabels = addStateLabels;
})();

// Exports "globais" simples
window._amostra = window._amostra || {};
Object.assign(window._amostra, { injectSVG, bindMapInteractions, bindSearch, bindFlagLinks, openState, Modal });