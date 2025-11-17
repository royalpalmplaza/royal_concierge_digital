 // ==========================
 // Utilidades básicas
 // ==========================
 const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
 const yearEl = $('#ano');
 if (yearEl) {
   yearEl.textContent = new Date().getFullYear();
 }
 
 const getInputValue = (selector, { trim = true } = {}) => {
   const el = $(selector);
   if (!el) return '';
   const value = 'value' in el ? el.value : '';
   return trim ? value.trim() : value;
 };
 
 // ==========================
// WhatsApp
 // ==========================
const DEFAULT_PHONE = '5519971614043';
 
 // ==========================
 // Catálogo bilíngue + descrições
 // ==========================
 const itens = [
   // Padaria & Cafés
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Cesta de pães doces e salgados (250g)', nameEn:'Basket of sweet & savory rolls (250g)', descPt:'Variedade de pães da padaria.', descEn:'Assorted bakery breads.', price:34},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Torradas c/ manteiga, geleia, mel e cream cheese (160g)', nameEn:'Toast with butter, jam, honey & cream cheese (160g)', descPt:'Pães torrados com acompanhamentos.', descEn:'Toasted bread with spreads.', price:30},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Fatia de bolo caseiro (230g)', nameEn:'Slice of home‑made cake (230g)', descPt:'Sabor do dia.', descEn:"Chef's daily flavor.", price:20},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Waffle c/ calda de chocolate ou xarope (100g)', nameEn:'Waffle with chocolate or maple syrup (100g)', descPt:'Waffle clássico com calda à escolha.', descEn:'Classic waffle with your choice of topping.', price:29},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Iogurte natural (170g)', nameEn:'Plain yogurt (170g)', descPt:'Iogurte natural individual.', descEn:'Single‑serve plain yogurt.', price:13},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Iogurte de frutas/mel (170g)', nameEn:'Fruit yogurt / honey (170g)', descPt:'Iogurte saborizado.', descEn:'Flavored yogurt.', price:16},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Cereal (Corn Flakes/Sucrilhos/Granola) (250g)', nameEn:'Cereal (Corn Flakes/Frosted/Granola) (250g)', descPt:'Escolha um tipo.', descEn:'Choose one option.', price:32},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Café da manhã Standard', nameEn:'Standard breakfast', descPt:'Pães, croissant, manteiga, geleia, frios e queijos (415g) + café, leite e chá (400ml cada) + suco de laranja (200ml) + fruta (200g) + iogurte (170g) + cereal (50g).', descEn:'Breads, croissant, butter, jam, charcuterie & cheese (415g) + coffee, milk & tea (400ml each) + orange juice (200ml) + fresh fruit (200g) + yogurt (170g) + cereal (50g).', price:106},
   {cat:'Padaria & Cafés / Bakery & Coffee', namePt:'Café da manhã Continental', nameEn:'Continental breakfast', descPt:'4 tipos de pães (250g) + café, leite e chá (400ml cada) + geleias (24g) + manteiga (20g) + 1/2 mamão (150g) + suco de laranja (200ml).', descEn:'4 breads (250g) + coffee, milk & tea (400ml each) + jams (24g) + butter (20g) + half papaya (150g) + orange juice (200ml).', price:83},
 
   // Frutas & Bebidas
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Salada de frutas (250g)', nameEn:'Fruit salad (250g)', descPt:'Frutas frescas da estação.', descEn:'Seasonal fresh fruits.', price:29},
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Prato de abacaxi, melancia e melão (200g)', nameEn:'Pineapple, watermelon & melon plate (200g)', descPt:'Frutas laminadas.', descEn:'Sliced fresh fruit.', price:44},
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Garrafa térmica de café/variedades de chás (400ml)', nameEn:'Coffee/choice of tea in thermal bottle (400ml)', descPt:'Café ou chá servido quente.', descEn:'Hot coffee or tea.', price:22},
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Garrafa térmica de leite quente ou frio – integral/desnatado (400ml)', nameEn:'Hot or cold milk – whole/skim (400ml)', descPt:'Leite integral ou desnatado.', descEn:'Whole or skim milk.', price:21},
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Garrafa térmica de chocolate quente ou frio (400ml)', nameEn:'Hot or cold chocolate (400ml)', descPt:'Bebida de chocolate.', descEn:'Chocolate beverage.', price:27},
   {cat:'Frutas & Bebidas / Fruits & Beverages', namePt:'Suco natural (laranja/abacaxi/melão/melancia) (300ml)', nameEn:'Natural juice (orange/pineapple/melon/watermelon) (300ml)', descPt:'Suco fresco, escolha o sabor.', descEn:'Freshly prepared juice.', price:11},
 
   // Massas
       stepper.appendChild(minus); stepper.appendChild(input); stepper.appendChild(plus);
       row.appendChild(title); row.appendChild(price); row.appendChild(stepper);
       const desc=document.createElement('div'); desc.className='desc'; desc.innerHTML=`<p>${i.descPt}</p><p class="titleEN">${i.descEn}</p>`;
       const wrap=document.createElement('div'); wrap.appendChild(row); wrap.appendChild(desc);
       function sync(){ qty.set(i.namePt, Number(input.value||0)); updateTotal(); desc.style.display = (Number(input. value||0) > 0) ? 'block' : 'none'; }
       input.addEventListener('input', sync);
       minus.addEventListener('click', (ev)=>{ ev.stopPropagation(); input.value = Math.max(0, (Number(input.value||0)-1)); sync(); });
       plus.addEventListener('click', (ev)=>{ ev.stopPropagation(); input.value = (Number(input.value||0)+1); sync(); });
       title.addEventListener('click', ()=>{ desc.style.display=(desc.style.display==='block'?'none':'block'); });
       row.addEventListener('click', (ev)=>{ if(ev.target===minus||ev.target===plus||ev.target===input) return; desc.style.display=(desc.style.display==='block'?'none':'block'); });
       sync();
       box.appendChild(wrap);
     });
     menu.appendChild(box);
   });
 }
 
 function updateTotal(){
   const qty = window.__qty || new Map();
   let t=0;
   itens.forEach(i=>{ t += (qty.get(i.namePt)||0)*i.price; });
   const totalEl = $('#total');
   if (totalEl) {
     totalEl.textContent=currency(t);
   }
  toggleFloatingButton();
 }
 
 const searchInput = $('#busca');
 if (searchInput) {
   searchInput.addEventListener('input', e=>renderMenu(e.target.value));
 }
 renderMenu();
toggleFloatingButton();
 
 // ==========================
 // Mensagens (WhatsApp)
 // ==========================
 function buildMessage({ quarto, hora, nome, sobrenome, obs }){
   const linhas = [];
   linhas.push('Olá! / Hello!');
   linhas.push('Gostaria de fazer um pedido de serviço de quarto. / I would like to place a room service order.');
   if (quarto) linhas.push(`Quarto/Apto • Room: ${quarto}`);
   const fullName = [nome, sobrenome].filter(Boolean).join(' ');
   if (fullName) linhas.push(`Hóspede • Guest: ${fullName}`);
   if (hora) linhas.push(`Entrega • Delivery: ${hora}`);
   const qty = window.__qty || new Map();
   const sel = itens.filter(i => (qty.get(i.namePt)||0) > 0);
   if (sel.length){
     linhas.push('Itens / Items:');
     sel.forEach(i=>{ const q=qty.get(i.namePt)||0; linhas.push(`• ${q}x ${i.namePt} (${i.nameEn}) – ${currency(i.price)}`); });
     const total = sel.reduce((acc,i)=>acc+(qty.get(i.namePt)||0)*i.price,0);
     linhas.push(`Total estimado • Estimated total: ${currency(total)}`);
   }
   if (obs) linhas.push(`Observações / Notes: ${obs}`);
   linhas.push('Obrigado! / Thank you!');
   return linhas.join('\n');
 }
 
 function openWhatsApp(text){
  const url=`https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(text)}`;
   window.open(url,'_blank','noopener');
   const ok = $('#okMsg'); if(ok) ok.style.display='block';
 }
 
 const pedidoForm = $('#pedidoForm');
 if (pedidoForm) {
   pedidoForm.addEventListener('submit', (e)=>{
     e.preventDefault();
     const quarto=getInputValue('#quarto');
     const hora=getInputValue('#hora', { trim: false });
     const nome=getInputValue('#nome');
     const sobrenome=getInputValue('#sobrenome');
    const obs=getInputValue('#obsRestaurante');
     const msg=buildMessage({quarto,hora,nome,sobrenome,obs});
     openWhatsApp(msg);
   });
 }
 
const floatingButton = $('#finalizarPedido');

function toggleFloatingButton(){ 
  if (!floatingButton) return;
  const qty = window.__qty || new Map();
  const hasItems = Array.from(qty.values()).some(value => Number(value) > 0);
  floatingButton.hidden = !hasItems;
}

floatingButton?.addEventListener('click', ()=>{
  if (pedidoForm?.reportValidity()) {
    pedidoForm.requestSubmit();
  }
});

// ==========================
// Formulário de manutenção
// ==========================
const manutencaoForm = $('#manutencaoForm');
if (manutencaoForm) {
  manutencaoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const quarto = getInputValue('#quartoManutencao');
    const nome = getInputValue('#nomeManutencao');
    const obs = getInputValue('#obsManutencao');
    const issues = Array.from(manutencaoForm.querySelectorAll('input[name="issue"]:checked')).map(el=>el.value);
    const linhas = [
      'Solicitação de manutenção / Maintenance request',
       quarto?`Quarto/Apto • Room: ${quarto}`:'',
      nome?`Hóspede • Guest: ${nome}`:'',
      issues.length?`Problemas selecionados • Selected issues: ${issues.join(', ')}`:'',
      obs?`Observações • Notes: ${obs}`:'',
      'Agradeço o pronto atendimento. / Thank you for the prompt support.'
     ].filter(Boolean).join('\n');
    openWhatsApp(linhas);
  });
}

// ==========================
// Menu hambúrguer & navegação
// ==========================
const menuToggle = $('.menu-toggle');
const menuDrawer = $('#mainMenu');
const menuOverlay = document.querySelector('[data-menu-overlay]');

const setMenuState = (open) => {
  if (!menuDrawer || !menuToggle || !menuOverlay) return;
  menuDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuOverlay.classList.toggle('is-visible', open);
  if (open) {
    menuDrawer.setAttribute('tabindex', '-1');
    const closeBtn = menuDrawer.querySelector('.menu-close');
    setTimeout(()=> closeBtn?.focus(), 10);
  } else {
    menuToggle.focus();
  }
};

const closeMenu = () => setMenuState(false);

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuState(!expanded);
});

menuOverlay?.addEventListener('click', closeMenu);
menuDrawer?.querySelector('.menu-close')?.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuDrawer?.getAttribute('aria-hidden') === 'false') {
    closeMenu();
  }
});

const scrollToTarget = (sel) => {
  if (!sel) return;
  const target = document.querySelector(sel);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

$$('#mainMenu [data-target]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetSel = btn.dataset.target;
    closeMenu();
    setTimeout(()=>scrollToTarget(targetSel), 120);
  });
});

$$('.hero-links [data-anchor]').forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    const targetSel = btn.getAttribute('data-anchor');
    scrollToTarget(targetSel);
  });
});

// ==========================
// Filtro de canais
// ==========================
const filtroCanais = $('#filtroCanais');
const canalLinhas = Array.from(document.querySelectorAll('.channels-table tbody tr'));
if (filtroCanais && canalLinhas.length) {
  filtroCanais.addEventListener('input', (event)=>{
    const termo = event.target.value.toLowerCase();
    canalLinhas.forEach((linha)=>{
+      linha.style.display = linha.textContent.toLowerCase().includes(termo) ? '' : 'none';
    });
   });
 }
