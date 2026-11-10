/* Portfólio de Gabriel Carvalho de Sá - sem coleta de dados nem analytics. */
(() => {
  'use strict';
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.primary-nav');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Abrir menu');
    }));
  }

  const input = document.getElementById('cert-search');
  const filter = document.getElementById('cert-filter');
  const list = document.getElementById('cert-list');
  const summary = document.getElementById('catalogue-summary');
  const count = document.getElementById('catalogue-count');
  const more = document.getElementById('show-more');
  let all = [];
  let shown = 12;

  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const normalize = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

  function render() {
    const query = normalize(input.value.trim());
    const category = filter.value;
    const matching = all.filter(item => (category === 'todos' || item.categoria === category) &&
      normalize(`${item.titulo} ${item.categoria} ${item.observacao}`).includes(query));
    const visible = matching.slice(0, shown);
    list.innerHTML = visible.length ? visible.map(item => `
      <a class="cert-row" target="_blank" rel="noopener noreferrer" href="${escapeHTML(item.url)}">
        <span class="cert-row-icon" aria-hidden="true">↗</span>
        <span class="cert-row-main"><strong>${escapeHTML(item.titulo)}</strong><small>${escapeHTML(item.categoria)}${item.observacao ? ' · '+escapeHTML(item.observacao) : ''}</small></span>
        <span class="cert-row-open" aria-hidden="true">↗</span>
      </a>`).join('') : '<p class="empty-state">Nenhum documento corresponde à busca.</p>';
    count.textContent = `${matching.length} ${matching.length === 1 ? 'DOCUMENTO' : 'DOCUMENTOS'}`;
    summary.textContent = `${matching.length} de ${all.length} registros do acervo exibidos nesta seleção.`;
    more.hidden = visible.length >= matching.length;
  }
  if (list && input && filter && more) {
    fetch('data/certificados.json').then(r => {if (!r.ok) throw new Error('Falha na leitura do catálogo'); return r.json();})
      .then(data => {
        if (!Array.isArray(data)) throw new Error('Formato de catálogo inválido');
        all = data;
        [...new Set(all.map(e => e.categoria))].sort((a,b)=>a.localeCompare(b,'pt-BR')).forEach(cat => {
          const option = document.createElement('option');option.value=cat;option.textContent=cat;filter.appendChild(option);
        });
        render();
      }).catch(() => {list.innerHTML='<p class="empty-state">Não foi possível carregar o catálogo. Consulte o PDF do portfólio para acessar os documentos.</p>'; count.textContent='CATÁLOGO INDISPONÍVEL';});
    input.addEventListener('input',()=>{shown=12;render();});
    filter.addEventListener('change',()=>{shown=12;render();});
    more.addEventListener('click',()=>{shown+=18;render();});
  }
})();
