// Royal Concierge Digital – lógica principal

(() => {
  const PHONE = '5519971614043';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // Ano no rodapé
  const anoEl = $('#ano');
  if (anoEl) anoEl.textContent = String(new Date().getFullYear());

  const menuEl = $('#menu');
  const buscaEl = $('#busca');
  const totalEl = $('#total');
  const floatingBtn = $('#finalizarPedido');

  const pedidoForm = $('#pedidoForm');
  const manutencaoForm = $('#manutencaoForm');

  const filtroCanaisInput = $('#filtroCanais');

  const menuToggle = $('.menu-toggle');
  const menuDrawer = $('#mainMenu');
  const menuOverlay = document.querySelector('[data-menu-overlay]');
  const menuClose = $('.menu-close');

  const languageButtons = $$('.language-option');
  let currentLang = 'pt';

  const translations = {
    pt: {
      menuOpen: 'Abrir menu',
      quickMenu: 'Menu rápido',
      menuRestaurant: 'Restaurante',
      menuMaintenance: 'Manutenção',
      menuGuestService: 'Guest Service',
      menuExtensions: 'Ramais',
      menuChannels: 'Canais',
      heroTitle: 'Serviço de quarto refinado em poucos toques.',
      heroLead:
        'Seu Royal concierge digital, pronto para encantar você com atenção personalizada, comunicação imediata e experiências inesquecíveis.',
      startOrder: 'Começar pedido',
      quickRestaurant: 'Restaurante',
      quickMaintenance: 'Manutenção',
      quickGuestService: 'Guest Service',
      quickExtensions: 'Ramais',
      quickChannels: 'Canais',
      orderTitle: 'Peça sem complicações',
      orderLead:
        'Selecione pratos e bebidas, informe preferências e finalize o atendimento em um clique.',
      roomNumber: 'Número do quarto/apto',
      roomPlaceholder: 'Ex.: 201',
      deliveryTime: 'Preferência de entrega (opcional)',
      firstName: 'Nome',
      firstNamePlaceholder: 'Maria',
      lastName: 'Sobrenome',
      lastNamePlaceholder: 'Silva',
      searchItems: 'Pesquisar itens',
      searchPlaceholder: 'Ex.: omelete, suco, salada…',
      restaurantNotes: 'Observações do restaurante',
      restaurantNotesPlaceholder: 'Ex.: Café sem açúcar; sem cebola; 2 talheres extras.',
      estimatedTotal: 'Total estimado',
      whatsAppHint: 'Link aberto no WhatsApp.',
      maintenanceTitle: 'Manutenção imediata',
      maintenanceLead: 'Informe o problema encontrado no apartamento para atendimento ágil.',
      maintenanceRoom: 'Número do quarto/apto',
      maintenanceRoomPlaceholder: 'Ex.: 201',
      maintenanceName: 'Nome (opcional)',
      maintenanceNamePlaceholder: 'Maria',
      issueLegend: 'Selecione o problema',
      issueBulb: 'Lâmpada queimada',
      issueToilet: 'Vaso sanitário entupido',
      issueFlush: 'Descarga com problema',
      issueTv: 'Televisão não funciona',
      issueShower: 'Chuveiro com problema',
      issuePhone: 'Telefone não funciona',
      issueLeak: 'Vazamento',
      maintenanceNotes: 'Observações para a equipe',
      maintenanceNotesPlaceholder: 'Detalhe o local do problema, acesso ou horários ideais.',
      extensionsTitle: 'Ramais úteis',
      extensionsLead: 'Conecte-se rapidamente com os principais setores do Royal Palm Resort.',
      extensionsList: 'Ramais do Royal Palm Resort',
      channelsTitle: 'Relação de canais',
      channelsLead:
        'Os apartamentos contam com canais abertos e por assinatura. Confira abaixo a grade disponível nas TVs.',
      channelsPlaceholder: 'Buscar canal por número ou nome',
      channelNumber: 'Nº',
      channelName: 'Canal',
      channelHint: 'Outras opções de canais podem estar disponíveis na sala de TV coletiva.',
      guestLead:
        'Equipe pronta para atender solicitações especiais, passeios, informações e serviços personalizados durante toda a estadia.',
      guestParagraph:
        'O Guest Service está disponível a qualquer momento para apoiar suas necessidades. Ao necessitar de itens como toalhas adicionais, adaptadores, amenities especiais ou suporte com passeios e transporte, ligue para o ramal <strong>620</strong>.',
      guestItem1: 'Pedidos de room service e frigobar.',
      guestItem2: 'Toalhas, roupas de cama e amenities extras.',
      guestItem3: 'Adaptação do berço ou cama extra (mediante disponibilidade).',
      guestItem4: 'Orientação sobre passeios, transporte, eventos e atrações na região.',
      guestItem5: 'Informações sobre horários de serviços, piscinas, clube e atividades.',
      footerTitlePt: 'Experiências impecáveis',
      footerTextPt: 'Serviço de quarto 24h e equipe dedicada para tornar sua estadia mais confortável.',
      footerTitleEn: 'Memorable stays',
      footerTextEn: '24/7 room service and a dedicated team to make your stay more comfortable.',
      floatingButton: 'Finalizar pedido'
    },
    en: {
      menuOpen: 'Open menu',
      quickMenu: 'Quick menu',
      menuRestaurant: 'Restaurant',
      menuMaintenance: 'Maintenance',
      menuGuestService: 'Guest Service',
      menuExtensions: 'Extensions',
      menuChannels: 'Channels',
      heroTitle: 'Refined room service in a few taps.',
      heroLead:
        'Your digital Royal concierge, ready to delight you with personal attention, instant communication and unforgettable experiences.',
      startOrder: 'Start order',
      quickRestaurant: 'Restaurant',
      quickMaintenance: 'Maintenance',
      quickGuestService: 'Guest Service',
      quickExtensions: 'Extensions',
      quickChannels: 'Channels',
      orderTitle: 'Order with ease',
      orderLead:
        'Select dishes and drinks, share preferences and finish the request with one click.',
      roomNumber: 'Room number',
      roomPlaceholder: 'E.g., 201',
      deliveryTime: 'Preferred delivery time (optional)',
      firstName: 'First name',
      firstNamePlaceholder: 'Mary',
      lastName: 'Last name',
      lastNamePlaceholder: 'Smith',
      searchItems: 'Search items',
      searchPlaceholder: 'E.g., omelet, juice, salad…',
      restaurantNotes: 'Restaurant notes',
      restaurantNotesPlaceholder: 'E.g., No sugar; no onions; 2 extra cutlery.',
      estimatedTotal: 'Estimated total',
      whatsAppHint: 'Link opened in WhatsApp.',
      maintenanceTitle: 'Immediate maintenance',
      maintenanceLead: 'Tell us the issue found in the apartment for quick service.',
      maintenanceRoom: 'Room number',
      maintenanceRoomPlaceholder: 'E.g., 201',
      maintenanceName: 'First name (optional)',
      maintenanceNamePlaceholder: 'Mary',
      issueLegend: 'Select the issue',
      issueBulb: 'Burned-out bulb',
      issueToilet: 'Clogged toilet',
      issueFlush: 'Flush malfunction',
      issueTv: 'TV not working',
      issueShower: 'Shower issue',
      issuePhone: 'Phone not working',
      issueLeak: 'Leak',
      maintenanceNotes: 'Notes for the team',
      maintenanceNotesPlaceholder: 'Detail the problem location, access or best times.',
      extensionsTitle: 'Useful extensions',
      extensionsLead: 'Connect quickly with the main departments of Royal Palm Resort.',
      extensionsList: 'Royal Palm Resort extensions',
      channelsTitle: 'Channel list',
      channelsLead:
        'Apartments include open and subscription channels. Check the available lineup below.',
      channelsPlaceholder: 'Search by channel number or name',
      channelNumber: 'No.',
      channelName: 'Channel',
      channelHint: 'Other channel options may be available in the shared TV room.',
      guestLead:
        'A team ready to handle special requests, tours, information and personalized services throughout your stay.',
      guestParagraph:
        'Guest Service is available anytime to support your needs. When you need items such as extra towels, adapters, special amenities or assistance with tours and transportation, call extension <strong>620</strong>.',
      guestItem1: 'Room service and minibar requests.',
      guestItem2: 'Extra towels, bed linens and amenities.',
      guestItem3: 'Crib or extra bed setup (subject to availability).',
      guestItem4: 'Guidance on tours, transportation, events and attractions in the area.',
      guestItem5: 'Information about service hours, pools, club and activities.',
      footerTitlePt: 'Impeccable experiences',
      footerTextPt: '24/7 room service and a dedicated team to make your stay more comfortable.',
      footerTitleEn: 'Memorable stays',
      footerTextEn: '24/7 room service and a dedicated team to make your stay more comfortable.',
      floatingButton: 'Finish order'
    }
  };

  const state = {
    carrinho: new Map(), // index -> quantidade
    activeForm: null // 'restaurant' | 'maintenance'
  };

  const currency = (v) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  function applyTranslations() {
    const dict = translations[currentLang];
    if (!dict) return;
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-br';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key];
      if (!value) return;

      const labelText = el.querySelector('.label-text');
      if (labelText) {
        labelText.textContent = value;
        return;
      }

      el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = dict[key];
      if (value) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-value]').forEach((el) => {
      const key = el.dataset.i18nValue;
      const value = dict[key];
      if (value) el.value = value;
    });

    languageButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLanguage(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    currentLang = lang;
    applyTranslations();
    renderMenu(buscaEl?.value || '');
  }

  if (languageButtons.length) {
    languageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) setLanguage(lang);
      });
    });
  }

  applyTranslations();

  // -------------------- MENU DE ITENS --------------------

  const itens = [
    // MINI BAR
    {
      categoria: 'Mini Bar',
      nome: 'Água Prata com ou sem gás (300ml)',
      eng: 'Still or sparkling water (300ml)',
      preco: 12,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Refrigerantes (350ml)',
      eng: 'Soft drinks (350ml)',
      preco: 11,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Heineken Longneck (330ml)',
      eng: 'Heineken Longneck (330ml)',
      preco: 23,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Amendoim (porção)',
      eng: 'Peanuts (portion)',
      preco: 8,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Batata Chips',
      eng: 'Potato chips',
      preco: 17,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Castanha de Caju',
      eng: 'Cashew nuts',
      preco: 17,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Mini Bar',
      nome: 'Chocolate',
      eng: 'Chocolate',
      preco: 9,
      descPt: '',
      descEn: ''
    },

    // BEBIDAS ALCOÓLICAS
    {
      categoria: 'Bebidas',
      nome: 'Heineken Longneck (330ml)',
      eng: 'Heineken Longneck (330ml)',
      preco: 23,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Caipirinhas',
      nome: 'Caipirinha – Cachaça Seleta (400ml)',
      eng: 'Caipirinha – Seleta cachaça (400ml)',
      preco: 35,
      descPt: 'Sabores: limão, abacaxi ou frutas vermelhas.',
      descEn: 'Flavors: lemon, pineapple or red fruits.'
    },
    {
      categoria: 'Caipirinhas',
      nome: 'Caipirinha – Saquê Azuma Kirin (400ml)',
      eng: 'Caipirinha – Azuma Kirin sake (400ml)',
      preco: 35,
      descPt: 'Sabores: limão, abacaxi ou frutas vermelhas.',
      descEn: 'Flavors: lemon, pineapple or red fruits.'
    },
    {
      categoria: 'Caipirinhas',
      nome: 'Caipirinha – Vodka Smirnoff (400ml)',
      eng: 'Caipirinha – Smirnoff vodka (400ml)',
      preco: 40,
      descPt: 'Sabores: limão, abacaxi ou frutas vermelhas.',
      descEn: 'Flavors: lemon, pineapple or red fruits.'
    },
    {
      categoria: 'Destilados',
      nome: 'Johnnie Walker Red Label – dose (50ml)',
      eng: 'Johnnie Walker Red Label – shot (50ml)',
      preco: 35,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Destilados',
      nome: 'Johnnie Walker Red Label – garrafa (750ml)',
      eng: 'Johnnie Walker Red Label – bottle (750ml)',
      preco: 490,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Destilados',
      nome: 'Johnnie Walker Black Label – dose (50ml)',
      eng: 'Johnnie Walker Black Label – shot (50ml)',
      preco: 47,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Destilados',
      nome: 'Johnnie Walker Black Label – garrafa (750ml)',
      eng: 'Johnnie Walker Black Label – bottle (750ml)',
      preco: 690,
      descPt: '',
      descEn: ''
    },

    // MENU INFANTIL
    {
      categoria: 'Menu Infantil',
      nome: 'Escalope de filé mignon (120g) com 2 guarnições',
      eng: 'Filet mignon escalope (120g) with 2 sides',
      preco: 59,
      descPt: 'Total 360g. Opções de acompanhamentos: arroz branco, espaguete ao sugo ou batatas fritas.',
      descEn: 'Total 360g. Side options: white rice, spaghetti with tomato sauce or French fries.'
    },
    {
      categoria: 'Menu Infantil',
      nome: 'Escalope de frango (120g) com 2 guarnições',
      eng: 'Chicken escalope (120g) with 2 sides',
      preco: 59,
      descPt: 'Total 360g. Opções de acompanhamentos: arroz branco, espaguete ao sugo ou batatas fritas.',
      descEn: 'Total 360g. Side options: white rice, spaghetti with tomato sauce or French fries.'
    },
    {
      categoria: 'Menu Infantil',
      nome: 'Espaguete ao sugo ou ao molho rosé (100g)',
      eng: 'Spaghetti with tomato or rose sauce (100g)',
      preco: 51,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Menu Infantil',
      nome: 'Espaguete bolonhesa (120g)',
      eng: 'Spaghetti Bolognese (120g)',
      preco: 63,
      descPt: '',
      descEn: ''
    },

    // À LA CARTE 24H – SALADAS, SOPAS, PRATOS, MASSAS, SANDUÍCHES, SOBREMESAS
    {
      categoria: 'Saladas',
      nome: 'Salada de folhas com tomate caqui, muçarela de búfala e palmito (450g)',
      eng: 'Mixed leaves salad with persimmon tomato, buffalo mozzarella and heart of palm (450g)',
      preco: 71,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Saladas',
      nome: 'Salada Caesar com lascas de frango grelhado (330g)',
      eng: 'Caesar salad with grilled chicken breast (330g)',
      preco: 63,
      descPt: 'Com croutons de ervas e molho cremoso de parmesão.',
      descEn: 'With herb croutons and creamy parmesan dressing.'
    },
    {
      categoria: 'Sopas e cremes',
      nome: 'Sopa/creme do dia (500ml)',
      eng: 'Soup/cream of the day (500ml)',
      preco: 51,
      descPt: 'Servido com 80g de pães e torradas da padaria.',
      descEn: 'Served with 80g of bread and toast from our bakery.'
    },
    {
      categoria: 'Sopas e cremes',
      nome: 'Canja brasileira com frango, arroz e brunoise de vegetais (500ml)',
      eng: 'Brazilian chicken broth with rice and vegetables (500ml)',
      preco: 51,
      descPt: 'Servido com 80g de pães e torradas da padaria.',
      descEn: 'Served with 80g of bread and toast from our bakery.'
    },
    {
      categoria: 'Pratos quentes',
      nome: 'Medalhões de filé ao molho gorgonzola com batata country e arroz com brócolis (370g)',
      eng: 'Grilled beef medallions with gorgonzola sauce, country potatoes and rice with broccoli (370g)',
      preco: 112,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Pratos quentes',
      nome: 'Escalopes de filé com penne ao molho Alfredo (380g)',
      eng: 'Beef fillet escalopes with penne Alfredo sauce (380g)',
      preco: 117,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Pratos quentes',
      nome: 'Escalopes de frango grelhado ao molho campanha com batatas fritas e arroz com brócolis (370g)',
      eng: 'Grilled chicken escalopes with campaign sauce, fries and rice with broccoli (370g)',
      preco: 96,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Pratos quentes',
      nome: 'Salmão grelhado com arroz branco e legumes no azeite extra virgem (400g)',
      eng: 'Grilled salmon with white rice and vegetables in extra virgin olive oil (400g)',
      preco: 120,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Pratos quentes',
      nome: 'Omelete de presunto, queijo e tomate com batatas fritas (400g)',
      eng: 'Ham, cheese and tomato omelette with French fries (400g)',
      preco: 66,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Massas',
      nome: 'Fettuccine ao molho Alfredo (240g)',
      eng: 'Fettuccine Alfredo (240g)',
      preco: 65,
      descPt: 'Servido com queijo parmesão ralado.',
      descEn: 'Served with grated parmesan cheese.'
    },
    {
      categoria: 'Massas',
      nome: 'Penne ao molho bolonhesa ou sugo (290g)',
      eng: 'Penne with Bolognese or tomato sauce (290g)',
      preco: 72,
      descPt: 'Servido com queijo parmesão ralado.',
      descEn: 'Served with grated parmesan cheese.'
    },
    {
      categoria: 'Sanduíches',
      nome: 'Panini Caprese (350g)',
      eng: 'Panini Caprese (350g)',
      preco: 72,
      descPt: 'Ciabatta, pesto de tomate seco, muçarela de búfala, presunto cru e rúcula.',
      descEn: 'Ciabatta, sun-dried tomato pesto, buffalo mozzarella, raw ham and arugula.'
    },
    {
      categoria: 'Sanduíches',
      nome: 'Club Royal Palm (260g)',
      eng: 'Club Royal Palm sandwich (260g)',
      preco: 72,
      descPt: 'Pão integral, filé de frango, ovo frito, queijo suíço, alface e tomate. Acompanha 50g de batatas fritas.',
      descEn: 'Whole grain bread, chicken fillet, fried egg, Swiss cheese, lettuce and tomato. Served with 50g French fries.'
    },
    {
      categoria: 'Sanduíches',
      nome: 'Hambúrguer gourmet de carne com bacon crocante (300g)',
      eng: 'Gourmet beef burger with crispy bacon (300g)',
      preco: 76,
      descPt: 'Pão brioche, cebola roxa, queijo cheddar derretido e anéis de cebola. Acompanha 50g de batatas fritas.',
      descEn: 'Brioche bun, red onion, melted cheddar cheese and onion rings. Served with 50g French fries.'
    },
    {
      categoria: 'Sanduíches',
      nome: 'Queijo Minas quente com tomate e molho pesto no baguete multigrãos (330g)',
      eng: 'Hot Minas cheese with tomato and pesto on multigrain baguette (330g)',
      preco: 51,
      descPt: 'Acompanha 50g de batatas fritas.',
      descEn: 'Served with 50g French fries.'
    },

    // ACOMPANHAMENTOS E SOBREMESAS
    {
      categoria: 'Acompanhamentos',
      nome: 'Arroz branco (120g)',
      eng: 'Plain white rice (120g)',
      preco: 24,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Acompanhamentos',
      nome: 'Legumes ao vapor (180g)',
      eng: 'Steamed vegetables (180g)',
      preco: 24,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Acompanhamentos',
      nome: 'Feijão carioca (180g)',
      eng: 'Beans (180g)',
      preco: 24,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Acompanhamentos',
      nome: 'Batatas fritas (150g)',
      eng: 'French fries (150g)',
      preco: 44,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Sobremesas',
      nome: 'Frutas da estação laminadas (200g)',
      eng: 'Sliced fresh fruit (200g)',
      preco: 44,
      descPt: 'Abacaxi, manga, melancia e papaia.',
      descEn: 'Pineapple, mango, watermelon and papaya.'
    },
    {
      categoria: 'Sobremesas',
      nome: 'Quindim (70g)',
      eng: 'Coconut and egg custard (70g)',
      preco: 20,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Sobremesas',
      nome: 'Pudim de leite condensado (80g)',
      eng: 'Condensed milk pudding (80g)',
      preco: 20,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Sobremesas',
      nome: 'Sobremesas do dia (120g)',
      eng: 'Desserts of the day (120g)',
      preco: 29,
      descPt: '',
      descEn: ''
    },

    // FRUTAS, BEBIDAS QUENTES E SUCOS
    {
      categoria: 'Frutas frescas',
      nome: 'Salada de frutas (250g)',
      eng: 'Fruit salad (250g)',
      preco: 29,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Frutas frescas',
      nome: 'Prato de abacaxi, melancia e melão (200g)',
      eng: 'Pineapple, watermelon and melon (200g)',
      preco: 44,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Bebidas quentes',
      nome: 'Garrafa térmica de café/variedade de chás (400ml)',
      eng: 'Thermal bottle of coffee/selection of teas (400ml)',
      preco: 22,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Bebidas quentes',
      nome: 'Garrafa térmica de leite quente ou frio – integral/desnatado (400ml)',
      eng: 'Hot or cold milk – whole/skim (400ml)',
      preco: 21,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Bebidas quentes',
      nome: 'Garrafa térmica de chocolate quente ou frio (400ml)',
      eng: 'Hot or cold chocolate (400ml)',
      preco: 27,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Sucos',
      nome: 'Suco natural – laranja, abacaxi, melão ou melancia (300ml)',
      eng: 'Natural juice – orange, pineapple, melon or watermelon (300ml)',
      preco: 11,
      descPt: '',
      descEn: ''
    },

    // CAFÉ DA MANHÃ NO APTO
    {
      categoria: 'Café da manhã',
      nome: 'Café da manhã Standard',
      eng: 'Standard breakfast',
      preco: 106,
      descPt:
        'Pães salgados e doces, croissant, manteiga, geleia, frios e queijos (415g); café, leite e chá (400ml cada); suco de laranja (200ml); fruta da estação (200g); iogurte (170g); cereal (50g).',
      descEn:
        'Selection of breads, croissant, butter, jam, charcuteries, sliced cheese (415g); coffee, milk and tea (400ml each); orange juice (200ml); fresh fruit (200g); yogurt (170g); cereal (50g).'
    },
    {
      categoria: 'Café da manhã',
      nome: 'Café da manhã Continental',
      eng: 'Continental breakfast',
      preco: 83,
      descPt:
        'Quatro variedades de pães (250g); café, chá e leite (400ml de cada); geleias (24g); manteiga (20g); mamão cortado ao meio (150g); suco de laranja (200ml).',
      descEn:
        'Four kinds of bread (250g); coffee, tea and milk (400ml each); jams (24g); butter (20g); half papaya (150g); orange juice (200ml).'
    },

    // PADARIA / IOGURTES / CEREAIS
    {
      categoria: 'Padaria',
      nome: 'Cesta de pães doces e salgados (250g)',
      eng: 'Basket of sweet and savory rolls (250g)',
      preco: 34,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Padaria',
      nome: 'Torradas com manteiga, geleia, mel e cream cheese (160g)',
      eng: 'Toast with butter, jam, honey and cream cheese (160g)',
      preco: 30,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Padaria',
      nome: 'Fatia de bolo caseiro (230g)',
      eng: 'Slice of homemade cake (230g)',
      preco: 20,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Padaria',
      nome: 'Waffle com calda de chocolate ou xarope (100g)',
      eng: 'Waffle with chocolate or maple syrup (100g)',
      preco: 29,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Iogurtes',
      nome: 'Iogurte natural (170g)',
      eng: 'Plain yogurt (170g)',
      preco: 13,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Iogurtes',
      nome: 'Iogurte de frutas/mel (170g)',
      eng: 'Fruit/honey yogurt (170g)',
      preco: 16,
      descPt: '',
      descEn: ''
    },
    {
      categoria: 'Cereais',
      nome: 'Corn Flakes/Sucrilhos/Granola (250g)',
      eng: 'Corn flakes/frosted flakes/granola (250g)',
      preco: 32,
      descPt: '',
      descEn: ''
    },

    // MENU SUGESTÃO DO CHEF (1 linha)
    {
      categoria: 'Sugestão do Chef',
      nome: 'Sugestão do Chef (370g)',
      eng: "Chef's suggestion (370g)",
      preco: 146,
      descPt:
        'Consultar opções do dia pelo ramal 620: carne, ave ou peixe com dois acompanhamentos, ou sugestão de massa.',
      descEn:
        'Call extension 620 for today’s options: meat, poultry or fish with two side dishes, or a pasta suggestion.'
    }
  ];

  // -------------------- RENDERIZAÇÃO DO CARDÁPIO --------------------

  function renderMenu(filtro = '') {
    if (!menuEl) return;
    const term = filtro.trim().toLowerCase();
    const isEnglish = currentLang === 'en';

    menuEl.innerHTML = '';

    itens
      .map((item, index) => ({ ...item, index }))
      .filter((item) => {
        if (!term) return true;
        const texto =
          `${item.categoria} ${item.nome} ${item.eng}`
            .toLowerCase();
        return texto.includes(term);
      })
      .forEach((item) => {
        const wrapper = document.createElement('div');

        const row = document.createElement('div');
        row.className = 'grid box clickable';
        row.dataset.index = String(item.index);

        const colNome = document.createElement('div');
        const nomePrincipal = isEnglish ? item.eng : item.nome;
        const nomeSecundario = isEnglish ? item.nome : item.eng;
        colNome.innerHTML = nomeSecundario
          ? `<strong>${nomePrincipal}</strong><br><small>${nomeSecundario}</small>`
          : `<strong>${nomePrincipal}</strong>`;

        const colPreco = document.createElement('div');
        colPreco.className = 'price';
        colPreco.dataset.price = 'price';
        colPreco.textContent = currency(item.preco);

        const colStepper = document.createElement('div');
        colStepper.className = 'stepper';

        const btnMenos = document.createElement('button');
        btnMenos.type = 'button';
        btnMenos.textContent = '−';

        const qtdInput = document.createElement('input');
        qtdInput.type = 'number';
        qtdInput.min = '0';
        qtdInput.value = state.carrinho.get(item.index) || 0;
        qtdInput.inputMode = 'numeric';

        const btnMais = document.createElement('button');
        btnMais.type = 'button';
        btnMais.textContent = '+';

        colStepper.append(btnMenos, qtdInput, btnMais);
        row.append(colNome, colPreco, colStepper);
        wrapper.appendChild(row);

        const desc = document.createElement('div');
        desc.className = 'desc';
        const fallback = isEnglish
          ? 'See details with the staff.'
          : 'Veja detalhes com o atendimento.';
        const descricao = isEnglish ? item.descEn : item.descPt;
        const paragrafo = document.createElement('p');
        paragrafo.textContent = descricao || fallback;
        desc.append(paragrafo);
        desc.style.display = 'none';
        wrapper.appendChild(desc);

        // clique no nome abre descrição
        row.addEventListener('click', (ev) => {
          // evitar conflito com os botões do stepper
          if (
            (ev.target instanceof HTMLElement) &&
            (ev.target.tagName === 'BUTTON' || ev.target.tagName === 'INPUT')
          ) {
            return;
          }
          desc.style.display =
            desc.style.display === 'none' ? 'block' : 'none';
        });

        // eventos do stepper
        function setQuantidade(q) {
          const qtd = Math.max(0, Number.isFinite(+q) ? +q : 0);
          qtdInput.value = String(qtd);

          if (qtd > 0) {
            state.carrinho.set(item.index, qtd);
          } else {
            state.carrinho.delete(item.index);
          }

          // atualiza preço da linha: preço unitário ou total
          if (qtd > 0) {
            colPreco.textContent = currency(item.preco * qtd);
          } else {
            colPreco.textContent = currency(item.preco);
          }

          state.activeForm = 'restaurant';
          atualizarTotalEBotao();
        }

        btnMais.addEventListener('click', (e) => {
          e.stopPropagation();
          setQuantidade(Number(qtdInput.value || '0') + 1);
        });

        btnMenos.addEventListener('click', (e) => {
          e.stopPropagation();
          setQuantidade(Number(qtdInput.value || '0') - 1);
        });

        qtdInput.addEventListener('input', (e) => {
          e.stopPropagation();
          setQuantidade(qtdInput.value);
        });

        menuEl.appendChild(wrapper);
      });

    atualizarTotalEBotao();
  }

  function calcularTotal() {
    let total = 0;
    state.carrinho.forEach((qtd, index) => {
      const item = itens[index];
      if (item) total += item.preco * qtd;
    });
    return total;
  }

  function atualizarTotalEBotao() {
    if (totalEl) totalEl.textContent = currency(calcularTotal());

    const temItensRestaurante = state.carrinho.size > 0;
    const temManutencao = temManutencaoSelecionada();

    if (temItensRestaurante) state.activeForm = 'restaurant';
    if (temManutencao && !temItensRestaurante)
      state.activeForm = 'maintenance';

    if (floatingBtn) {
      floatingBtn.hidden = !(temItensRestaurante || temManutencao);
    }
  }

  // -------------------- FILTRO PESQUISA CARDÁPIO --------------------

  if (buscaEl) {
    buscaEl.addEventListener('input', () => {
      renderMenu(buscaEl.value || '');
    });
  }

  renderMenu();

  // -------------------- FORMULÁRIO RESTAURANTE --------------------

  function montarMensagemRestaurante() {
    if (!pedidoForm) return null;

    if (!pedidoForm.reportValidity()) {
      return null;
    }

    if (state.carrinho.size === 0) {
      alert(
        'Selecione pelo menos 1 item.\n\nPlease select at least 1 item.'
      );
      return null;
    }

    const quarto = $('#quarto')?.value.trim() || '';
    const hora = $('#hora')?.value.trim() || '';
    const nome = $('#nome')?.value.trim() || '';
    const sobrenome = $('#sobrenome')?.value.trim() || '';
    const obs = $('#obsRestaurante')?.value.trim() || '';

    const linhas = [];
    linhas.push('Pedido de serviço de quarto • Room service order');
    linhas.push(`Quarto / Room: ${quarto}`);
    linhas.push(`Hóspede / Guest: ${nome} ${sobrenome}`);
    if (hora) {
      linhas.push(`Horário desejado / Preferred time: ${hora}`);
    }
    linhas.push('');
    linhas.push('Itens / Items:');

    state.carrinho.forEach((qtd, index) => {
      const item = itens[index];
      if (!item) return;
      const subtotal = item.preco * qtd;
      linhas.push(
        `- ${item.nome} / ${item.eng} • Qtde / Qty: ${qtd} • ${currency(
          subtotal
        )}`
      );
    });

    linhas.push('');
    linhas.push('Observações / Notes:');
    linhas.push(obs || '-');
    linhas.push('');
    linhas.push(
      `Total estimado / Estimated total: ${totalEl.textContent}`
    );

    return linhas.join('\n');
  }

  if (pedidoForm) {
    pedidoForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  // -------------------- FORMULÁRIO MANUTENÇÃO --------------------

  function temManutencaoSelecionada() {
    return (
      $$('input[name="issue"]:checked').length > 0
    );
  }

  function montarMensagemManutencao() {
    if (!manutencaoForm) return null;

    if (!manutencaoForm.reportValidity()) {
      return null;
    }

    const issues = Array.from(
      $$('input[name="issue"]:checked')
    ).map((el) => el.value);

    if (issues.length === 0) {
      alert(
        'Selecione pelo menos um problema.\n\nPlease select at least one issue.'
      );
      return null;
    }

    const quarto =
      $('#quartoManutencao')?.value.trim() || '';
    const nome =
      $('#nomeManutencao')?.value.trim() || '';
    const obs =
      $('#obsManutencao')?.value.trim() || '';

    const linhas = [];
    linhas.push(
      'Solicitação de manutenção no apartamento • Room maintenance request'
    );
    linhas.push(`Quarto / Room: ${quarto}`);
    if (nome) linhas.push(`Hóspede / Guest: ${nome}`);
    linhas.push('');
    linhas.push('Problemas relatados / Reported issues:');
    issues.forEach((issue) => linhas.push(`- ${issue}`));
    linhas.push('');
    linhas.push('Observações / Notes:');
    linhas.push(obs || '-');

    return linhas.join('\n');
  }

  if (manutencaoForm) {
    manutencaoForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    // sempre que marcar/desmarcar algum problema, recalcula botão
    $$('input[name="issue"]').forEach((el) => {
      el.addEventListener('change', () => {
        state.activeForm = 'maintenance';
        atualizarTotalEBotao();
      });
    });

    const obsManutencao = $('#obsManutencao');
    if (obsManutencao) {
      obsManutencao.addEventListener('input', () => {
        state.activeForm = 'maintenance';
      });
    }
  }

  // -------------------- BOTÃO FLUTUANTE FINALIZAR --------------------

  function abrirWhatsApp(texto) {
    const url =
      'https://wa.me/' +
      PHONE +
      '?text=' +
      encodeURIComponent(texto);
    window.open(url, '_blank');
  }

  if (floatingBtn) {
    floatingBtn.addEventListener('click', () => {
      const temRestaurante = state.carrinho.size > 0;
      const temManutencao = temManutencaoSelecionada();

      let mensagem = null;

      if (
        state.activeForm === 'maintenance' &&
        temManutencao
      ) {
        mensagem = montarMensagemManutencao();
      } else if (temRestaurante) {
        mensagem = montarMensagemRestaurante();
      } else if (temManutencao) {
        mensagem = montarMensagemManutencao();
      }

      if (mensagem) abrirWhatsApp(mensagem);
    });
  }

  // -------------------- FILTRO RELAÇÃO DE CANAIS --------------------

  if (filtroCanaisInput) {
    const linhas = Array.from(
      document.querySelectorAll(
        '.channels-table tbody tr'
      )
    );

    filtroCanaisInput.addEventListener('input', () => {
      const termo =
        filtroCanaisInput.value
          .trim()
          .toLowerCase();

      linhas.forEach((tr) => {
        const texto =
          tr.textContent.toLowerCase();
        tr.style.display =
          !termo || texto.includes(termo)
            ? ''
            : 'none';
      });
    });
  }

  // -------------------- MENU HAMBÚRGUER & LINKS RÁPIDOS --------------------

  function scrollToSelector(sel) {
    const alvo = document.querySelector(sel);
    if (!alvo) return;
    const y =
      alvo.getBoundingClientRect().top +
      window.scrollY -
      20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  if (menuToggle && menuDrawer && menuOverlay) {
    const abrirMenu = () => {
      menuDrawer.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuOverlay.classList.add('is-visible');
    };
    const fecharMenu = () => {
      menuDrawer.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuOverlay.classList.remove('is-visible');
    };

    menuToggle.addEventListener('click', abrirMenu);
    if (menuClose) {
      menuClose.addEventListener('click', fecharMenu);
    }
    menuOverlay.addEventListener('click', fecharMenu);

    $$('#mainMenu [data-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) scrollToSelector(target);
        fecharMenu();
      });
    });
  }

  // botões de links rápidos na hero
  $$('[data-anchor]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-anchor');
      if (target) scrollToSelector(target);
    });
  });
})();
