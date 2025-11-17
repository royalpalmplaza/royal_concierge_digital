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
// Configuração fixa de WhatsApp
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
  {cat:'Massas / Pastas', namePt:'Fettuccine ao molho Alfredo (240g)', nameEn:'Fettuccine Alfredo (240g)', descPt:'Servido com parmesão ralado.', descEn:'Served with grated parmesan.', price:65},
  {cat:'Massas / Pastas', namePt:'Penne ao molho Bolonhesa ou Sugo (290g)', nameEn:'Penne with Bolognese or tomato sauce (290g)', descPt:'Escolha entre bolonhesa ou sugo.', descEn:'Choose Bolognese or tomato sauce.', price:72},

  // Sanduíches
  {cat:'Sanduíches / Sandwiches', namePt:'Panini Caprese (350g)', nameEn:'Caprese panini (350g)', descPt:'Ciabatta, pesto de tomate seco, muçarela de búfala, presunto cru e rúcula.', descEn:'Ciabatta, sundried tomato pesto, buffalo mozzarella, raw ham & arugula.', price:72},
  {cat:'Sanduíches / Sandwiches', namePt:'Club Royal Palm (260g)', nameEn:'Royal Palm Club (260g)', descPt:'Pão integral, frango grelhado, ovo frito, queijo suíço, alface e tomate.', descEn:'Whole-grain bread, grilled chicken, fried egg, Swiss, lettuce & tomato.', price:72},
  {cat:'Sanduíches / Sandwiches', namePt:'Hambúrguer gourmet (350g)', nameEn:'Gourmet burger (350g)', descPt:'Carne, bacon crocante, cebola roxa, cheddar e anéis de cebola no brioche.', descEn:'Beef patty, crispy bacon, red onion, cheddar & onion rings on brioche.', price:76},
  {cat:'Sanduíches / Sandwiches', namePt:'Baguete multigrãos de queijo Minas (330g)', nameEn:'Hot Minas cheese multigrain baguette (330g)', descPt:'Com tomate e pesto.', descEn:'With tomato & pesto.', price:51},

  // Ovos & Omeletes
  {cat:'Ovos & Omeletes / Eggs & Omelets', namePt:'Dois ovos: fritos/poché/mexidos (120g)', nameEn:'Two eggs: fried/poached/scrambled (120g)', descPt:'Modo de preparo à escolha.', descEn:'Cooked to your preference.', price:32},
  {cat:'Ovos & Omeletes / Eggs & Omelets', namePt:'Omelete natural (180g)', nameEn:'Plain omelet (180g)', descPt:'Ovos batidos, sem recheio.', descEn:'Eggs only, no filling.', price:34},
  {cat:'Ovos & Omeletes / Eggs & Omelets', namePt:'Omelete c/ presunto, ervas ou queijo (220g)', nameEn:'Ham, herbs or cheese omelet (220g)', descPt:'Escolha o recheio.', descEn:'Choose your filling.', price:46},

  // Frios & Queijos
  {cat:'Frios, Queijos & Variados / Cold cuts, cheese & sides', namePt:'Presunto e peito de peru (90g)', nameEn:'Ham & turkey breast (90g)', descPt:'Frios fatiados.', descEn:'Sliced cold cuts.', price:39},
  {cat:'Frios, Queijos & Variados / Cold cuts, cheese & sides', namePt:'Queijo Minas (120g)', nameEn:'“Minas” cheese (120g)', descPt:'Queijo branco tradicional.', descEn:'Brazilian fresh cheese.', price:34},
  {cat:'Frios, Queijos & Variados / Cold cuts, cheese & sides', namePt:'Queijos muçarela e prato (120g)', nameEn:'Assorted sliced cheeses (120g)', descPt:'Seleção fatiada.', descEn:'Assorted sliced cheeses.', price:34},
  {cat:'Frios, Queijos & Variados / Cold cuts, cheese & sides', namePt:'Bacon grelhado (150g)', nameEn:'Grilled bacon (150g)', descPt:'Bacon crocante.', descEn:'Crispy bacon.', price:29},
  {cat:'Frios, Queijos & Variados / Cold cuts, cheese & sides', namePt:'Mini salsichas (150g)', nameEn:'Mini sausages (150g)', descPt:'Salsichas grelhadas.', descEn:'Grilled mini sausages.', price:26},

  // Saladas, Sopas & Cremes
  {cat:'Saladas, Sopas & Cremes / Salads, Soups & Creams', namePt:'Salada de folhas com tomate caqui, muçarela de búfala e palmito (450g)', nameEn:'Mixed greens with tomato, buffalo mozzarella & heart of palm (450g)', descPt:'Salada fresca completa.', descEn:'Fresh mixed salad.', price:71},
  {cat:'Saladas, Sopas & Cremes / Salads, Soups & Creams', namePt:'Salada Caesar com frango grelhado (330g)', nameEn:'Caesar salad with grilled chicken (330g)', descPt:'Croutons de ervas e molho cremoso de parmesão.', descEn:'Herb croutons & creamy parmesan dressing.', price:63},
  {cat:'Saladas, Sopas & Cremes / Salads, Soups & Creams', namePt:'Sopa/creme do dia (500ml)', nameEn:'Soup/cream of the day (500ml)', descPt:'Inclui 80g de pães/torradas.', descEn:'Includes 80g of bread/toast.', price:51},
  {cat:'Saladas, Sopas & Cremes / Salads, Soups & Creams', namePt:'Canja de frango com arroz e legumes (500ml)', nameEn:'Brazilian chicken broth with rice & vegetables (500ml)', descPt:'Caldo reconfortante.', descEn:'Comforting chicken soup.', price:51},

  // Pratos Quentes
  {cat:'Pratos Quentes / Hot dishes', namePt:'Medalhões de filé mignon ao gorgonzola (370g)', nameEn:'Beef medallions with blue cheese sauce (370g)', descPt:'Com batata country e arroz com brócolis.', descEn:'With country potatoes & rice with broccoli.', price:112},
  {cat:'Pratos Quentes / Hot dishes', namePt:'Escalopes de filé com penne Alfredo (380g)', nameEn:'Beef escalope with penne Alfredo (380g)', descPt:'Massa ao molho Alfredo.', descEn:'Pasta in Alfredo sauce.', price:117},
  {cat:'Pratos Quentes / Hot dishes', namePt:'Escalopes de frango ao molho campanha (370g)', nameEn:'Chicken escalope, campagne sauce (370g)', descPt:'Com batatas fritas e arroz com brócolis.', descEn:'With fries & rice with broccoli.', price:96},
  {cat:'Pratos Quentes / Hot dishes', namePt:'Salmão grelhado (400g)', nameEn:'Grilled salmon (400g)', descPt:'Com arroz e legumes no azeite extra virgem.', descEn:'With rice & vegetables in EVOO.', price:120},
  {cat:'Pratos Quentes / Hot dishes', namePt:'Omelete de presunto, queijo e tomate (400g)', nameEn:'Ham, cheese & tomato omelet (400g)', descPt:'Servido com batatas fritas.', descEn:'Served with French fries.', price:66},

  // Acompanhamentos
  {cat:'Acompanhamentos / Side orders', namePt:'Arroz branco (120g)', nameEn:'Plain white rice (120g)', descPt:'Guarnição individual.', descEn:'Single side portion.', price:15},
  {cat:'Acompanhamentos / Side orders', namePt:'Legumes no vapor (160g)', nameEn:'Steamed vegetables (160g)', descPt:'Legumes frescos.', descEn:'Seasonal vegetables.', price:19},
  {cat:'Acompanhamentos / Side orders', namePt:'Purê de batata (150g)', nameEn:'Mashed potatoes (150g)', descPt:'Purê cremoso.', descEn:'Creamy mash.', price:18},
  {cat:'Acompanhamentos / Side orders', namePt:'Batatas fritas (150g)', nameEn:'French fries (150g)', descPt:'Crocantes.', descEn:'Crispy fries.', price:18},

  // Sobremesas
  {cat:'Sobremesas / Desserts', namePt:'Cheesecake de frutas vermelhas (120g)', nameEn:'Red berries cheesecake (120g)', descPt:'Calda artesanal de frutas.', descEn:'Homemade berry coulis.', price:32},
  {cat:'Sobremesas / Desserts', namePt:'Mousse de chocolate meio amargo (110g)', nameEn:'Dark chocolate mousse (110g)', descPt:'Chocolate 54%.', descEn:'54% cacao chocolate.', price:28},
  {cat:'Sobremesas / Desserts', namePt:'Pudim de leite condensado (130g)', nameEn:'Brazilian flan (130g)', descPt:'Clássico com calda de caramelo.', descEn:'Classic with caramel sauce.', price:24},

  // Menu Infantil
  {cat:'Menu Infantil (24h) / Kids menu (24h)', namePt:'Mini hambúrguer com queijo e batatas sorriso', nameEn:'Mini cheeseburger with smile fries', descPt:'Porção para crianças.', descEn:'Kid-friendly portion.', price:39},
  {cat:'Menu Infantil (24h) / Kids menu (24h)', namePt:'Espaguete ao sugo com almôndegas', nameEn:'Spaghetti with tomato sauce & meatballs', descPt:'Molho de tomate caseiro.', descEn:'House tomato sauce.', price:36},

  // Mini Bar
  {cat:'Mini Bar / Mini bar', namePt:'Água Prata (300ml)', nameEn:'Water (300ml)', descPt:'Garrafa individual.', descEn:'Single bottle.', price:12},
  {cat:'Mini Bar / Mini bar', namePt:'Refrigerantes (350ml)', nameEn:'Soft drinks (350ml)', descPt:'Lata 350ml.', descEn:'350ml can.', price:11},
  {cat:'Mini Bar / Mini bar', namePt:'Heineken (330ml)', nameEn:'Heineken (330ml)', descPt:'Cerveja longneck.', descEn:'Longneck beer.', price:23},
  {cat:'Mini Bar / Mini bar', namePt:'Amendoim', nameEn:'Peanuts', descPt:'Snack salgado.', descEn:'Savory snack.', price:8},
  {cat:'Mini Bar / Mini bar', namePt:'Batata Chips', nameEn:'Potato chips', descPt:'Snack crocante.', descEn:'Crispy snack.', price:17},
  {cat:'Mini Bar / Mini bar', namePt:'Castanha de Caju', nameEn:'Cashew nuts', descPt:'Snack crocante.', descEn:'Crispy snack.', price:17},
  {cat:'Mini Bar / Mini bar', namePt:'Chocolate', nameEn:'Chocolate', descPt:'Barra/unidade.', descEn:'Bar/unit.', price:9},

  // Bebidas Diversas
  {cat:'Bebidas Diversas / Other drinks', namePt:'Chá gelado artesanal (350ml)', nameEn:'House iced tea (350ml)', descPt:'Chá preto com frutas cítricas.', descEn:'Black tea with citrus.', price:18},
  {cat:'Bebidas Diversas / Other drinks', namePt:'Limonada suíça (350ml)', nameEn:'Brazilian limeade (350ml)', descPt:'Limonada cremosa.', descEn:'Creamy limeade.', price:16},

  // Cervejas
  {cat:'Cervejas / Beers', namePt:'Heineken longneck (330ml)', nameEn:'Heineken longneck (330ml)', descPt:'Cerveja lager.', descEn:'Lager beer.', price:23},

  // Caipirinhas
  {cat:'Caipirinhas (400ml) / Caipirinhas (400ml)', namePt:'Caipirinha de Cachaça Seleta', nameEn:'Cachaça Seleta caipirinha', descPt:'Sabores: limão, abacaxi, frutos vermelhos (inclui ingredientes).', descEn:'Flavors: lemon, pineapple, red fruits (includes ingredients).', price:35},
  {cat:'Caipirinhas (400ml) / Caipirinhas (400ml)', namePt:'Caipirinha de Vodka Smirnoff', nameEn:'Smirnoff vodka caipirinha', descPt:'Sabores: limão, abacaxi, frutos vermelhos (inclui ingredientes).', descEn:'Flavors: lemon, pineapple, red fruits (includes ingredients).', price:35},
  {cat:'Caipirinhas (400ml) / Caipirinhas (400ml)', namePt:'Caipirinha de Saquê Azuma Kirin', nameEn:'Azuma Kirin sake caipirinha', descPt:'Sabores: limão, abacaxi, frutos vermelhos (inclui ingredientes).', descEn:'Flavors: lemon, pineapple, red fruits (includes ingredients).', price:40},

  // Destilados
  {cat:'Destilados / Spirits', namePt:'Johnnie Walker Red Label – dose (50ml)', nameEn:'Johnnie Walker Red Label – shot (50ml)', descPt:'Dose individual.', descEn:'Single shot.', price:35},
  {cat:'Destilados / Spirits', namePt:'Johnnie Walker Red Label – garrafa (750ml)', nameEn:'Johnnie Walker Red Label – bottle (750ml)', descPt:'Garrafa 750ml.', descEn:'750ml bottle.', price:490},
  {cat:'Destilados / Spirits', namePt:'Johnnie Walker Black Label – dose (50ml)', nameEn:'Johnnie Walker Black Label – shot (50ml)', descPt:'Dose individual.', descEn:'Single shot.', price:47},
  {cat:'Destilados / Spirits', namePt:'Johnnie Walker Black Label – garrafa (750ml)', nameEn:'Johnnie Walker Black Label – bottle (750ml)', descPt:'Garrafa 750ml.', descEn:'750ml bottle.', price:690},
];

// ==========================
// Renderização do menu (ordem premium 4–5*)
// ==========================
function currency(v){
  return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}

function groupBy(arr,key){
  return arr.reduce((acc,item)=>{
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  },{});
}

function renderMenu(filter=''){
  const menu = $('#menu');
  if (!menu) return;
  menu.innerHTML='';
  const filtered = filter ? itens.filter(i => `${i.namePt} ${i.nameEn} ${i.cat}`.toLowerCase().includes(filter.toLowerCase())) : itens;
  const grouped = groupBy(filtered,'cat');
  const order = [
    'Bebidas Diversas / Other drinks',
    'Cervejas / Beers',
    'Caipirinhas (400ml) / Caipirinhas (400ml)',
    'Destilados / Spirits',
    'Padaria & Cafés / Bakery & Coffee',
    'Frutas & Bebidas / Fruits & Beverages',
    'Ovos & Omeletes / Eggs & Omelets',
    'Sanduíches / Sandwiches',
    'Massas / Pastas',
    'Saladas, Sopas & Cremes / Salads, Soups & Creams',
    'Pratos Quentes / Hot dishes',
    'Acompanhamentos / Side orders',
    'Sobremesas / Desserts',
    'Menu Infantil (24h) / Kids menu (24h)',
    'Mini Bar / Mini bar'
  ];
  const qty = window.__qty || (window.__qty = new Map());

  order.forEach(cat=>{
    if(!grouped[cat] || !grouped[cat].length) return;
    const box=document.createElement('details');
    box.className='box';
    box.open=true;
    const sum=document.createElement('summary');
    sum.textContent=cat;
    box.appendChild(sum);

    grouped[cat].forEach(i=>{
      const row=document.createElement('div'); row.className='grid clickable';
      const title=document.createElement('div');
      title.innerHTML=`<div class="titlePT">${i.namePt}</div><div class="titleEN">${i.nameEn}</div>`;
      const price=document.createElement('div'); price.className='item-price'; price.textContent=currency(i.price);
      const stepper=document.createElement('div'); stepper.className='stepper';
      const minus=document.createElement('button'); minus.type='button'; minus.textContent='−';
      const input=document.createElement('input'); input.type='number'; input.min='0'; input.step='1'; input.placeholder='0'; input.className='qty'; input.value = qty.get(i.namePt) || 0;
      const plus=document.createElement('button'); plus.type='button'; plus.textContent='+';
      stepper.appendChild(minus); stepper.appendChild(input); stepper.appendChild(plus);
      row.appendChild(title); row.appendChild(price); row.appendChild(stepper);
      const desc=document.createElement('div'); desc.className='desc'; desc.innerHTML=`<p>${i.descPt}</p><p class="titleEN">${i.descEn}</p>`;
      const wrap=document.createElement('div'); wrap.appendChild(row); wrap.appendChild(desc);
      function sync(){ qty.set(i.namePt, Number(input.value||0)); updateTotal(); desc.style.display = (Number(input.value||0) > 0) ? 'block' : 'none'; }
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
      linha.style.display = linha.textContent.toLowerCase().includes(termo) ? '' : 'none';
    });
  });
}
