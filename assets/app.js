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
      floatingButton: 'Finalizar pedido',
      menuFallback: 'Veja detalhes com o atendimento.'
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
      floatingButton: 'Finish order',
      menuFallback: 'See details with the staff.'
    },
    es: {
      menuOpen: 'Abrir menú',
      quickMenu: 'Menú rápido',
      menuRestaurant: 'Restaurante',
      menuMaintenance: 'Mantenimiento',
      menuGuestService: 'Servicio al huésped',
      menuExtensions: 'Extensiones',
      menuChannels: 'Canales',
      heroTitle: 'Servicio de habitaciones refinado en pocos toques.',
      heroLead:
        'Su concierge digital Royal, listo para encantarlos con atención personalizada, comunicación inmediata y experiencias inolvidables.',
      startOrder: 'Comenzar pedido',
      quickRestaurant: 'Restaurante',
      quickMaintenance: 'Mantenimiento',
      quickGuestService: 'Servicio al huésped',
      quickExtensions: 'Extensiones',
      quickChannels: 'Canales',
      orderTitle: 'Pida sin complicaciones',
      orderLead:
        'Seleccione platos y bebidas, informe preferencias y finalice la solicitud con un clic.',
      roomNumber: 'Número de habitación/apto',
      roomPlaceholder: 'Ej.: 201',
      deliveryTime: 'Hora de entrega preferida (opcional)',
      firstName: 'Nombre',
      firstNamePlaceholder: 'María',
      lastName: 'Apellido',
      lastNamePlaceholder: 'García',
      searchItems: 'Buscar artículos',
      searchPlaceholder: 'Ej.: omelette, jugo, ensalada…',
      restaurantNotes: 'Notas del restaurante',
      restaurantNotesPlaceholder: 'Ej.: Café sin azúcar; sin cebolla; 2 cubiertos extra.',
      estimatedTotal: 'Total estimado',
      whatsAppHint: 'Enlace abierto en WhatsApp.',
      maintenanceTitle: 'Mantenimiento inmediato',
      maintenanceLead: 'Informe el problema encontrado en el apartamento para una atención ágil.',
      maintenanceRoom: 'Número de habitación/apto',
      maintenanceRoomPlaceholder: 'Ej.: 201',
      maintenanceName: 'Nombre (opcional)',
      maintenanceNamePlaceholder: 'María',
      issueLegend: 'Seleccione el problema',
      issueBulb: 'Bombilla quemada',
      issueToilet: 'Inodoro tapado',
      issueFlush: 'Problema en la descarga',
      issueTv: 'Televisor no funciona',
      issueShower: 'Ducha con problema',
      issuePhone: 'Teléfono no funciona',
      issueLeak: 'Goteo/fuga',
      maintenanceNotes: 'Notas para el equipo',
      maintenanceNotesPlaceholder: 'Detalle el lugar del problema, acceso u horarios ideales.',
      extensionsTitle: 'Extensiones útiles',
      extensionsLead: 'Conéctese rápidamente con los principales sectores del Royal Palm Resort.',
      extensionsList: 'Extensiones del Royal Palm Resort',
      channelsTitle: 'Lista de canales',
      channelsLead:
        'Los apartamentos cuentan con canales abiertos y por suscripción. Vea abajo la programación disponible en las TVs.',
      channelsPlaceholder: 'Buscar canal por número o nombre',
      channelNumber: 'N.º',
      channelName: 'Canal',
      channelHint: 'Pueden existir más opciones de canales en la sala de TV compartida.',
      guestLead:
        'Equipo listo para atender solicitudes especiales, paseos, información y servicios personalizados durante toda la estadía.',
      guestParagraph:
        'Guest Service está disponible en todo momento para apoyar sus necesidades. Si necesita artículos como toallas adicionales, adaptadores, amenities especiales o ayuda con paseos y transporte, llame a la extensión <strong>620</strong>.',
      guestItem1: 'Pedidos de room service y minibar.',
      guestItem2: 'Toallas, ropa de cama y amenities extra.',
      guestItem3: 'Adaptación de cuna o cama extra (sujeto a disponibilidad).',
      guestItem4: 'Orientación sobre paseos, transporte, eventos y atracciones de la región.',
      guestItem5: 'Información sobre horarios de servicios, piscinas, club y actividades.',
      footerTitlePt: 'Experiencias impecables',
      footerTextPt: 'Servicio de habitación 24h y equipo dedicado para hacer su estadía más cómoda.',
      footerTitleEn: 'Estadías memorables',
      footerTextEn: 'Servicio de habitación 24/7 y un equipo dedicado para que su estadía sea más cómoda.',
      floatingButton: 'Finalizar pedido',
      menuFallback: 'Consulte los detalles con el equipo.'
    },
    fr: {
      menuOpen: 'Ouvrir le menu',
      quickMenu: 'Menu rapide',
      menuRestaurant: 'Restaurant',
      menuMaintenance: 'Maintenance',
      menuGuestService: 'Service client',
      menuExtensions: 'Postes',
      menuChannels: 'Chaînes',
      heroTitle: 'Un service d’étage raffiné en quelques gestes.',
      heroLead:
        'Votre concierge digital Royal, prêt à vous ravir avec une attention personnalisée, une communication immédiate et des expériences inoubliables.',
      startOrder: 'Commencer la commande',
      quickRestaurant: 'Restaurant',
      quickMaintenance: 'Maintenance',
      quickGuestService: 'Service client',
      quickExtensions: 'Postes',
      quickChannels: 'Chaînes',
      orderTitle: 'Commandez en toute simplicité',
      orderLead:
        'Sélectionnez plats et boissons, indiquez vos préférences et finalisez la demande en un clic.',
      roomNumber: 'Numéro de chambre/appart.',
      roomPlaceholder: 'Ex. : 201',
      deliveryTime: 'Heure de livraison souhaitée (facultatif)',
      firstName: 'Prénom',
      firstNamePlaceholder: 'Marie',
      lastName: 'Nom',
      lastNamePlaceholder: 'Durand',
      searchItems: 'Rechercher des articles',
      searchPlaceholder: 'Ex. : omelette, jus, salade…',
      restaurantNotes: 'Notes du restaurant',
      restaurantNotesPlaceholder: 'Ex. : Café sans sucre ; sans oignon ; 2 couverts supplémentaires.',
      estimatedTotal: 'Total estimé',
      whatsAppHint: 'Lien ouvert dans WhatsApp.',
      maintenanceTitle: 'Maintenance immédiate',
      maintenanceLead: 'Indiquez le problème trouvé dans l’appartement pour une intervention rapide.',
      maintenanceRoom: 'Numéro de chambre/appart.',
      maintenanceRoomPlaceholder: 'Ex. : 201',
      maintenanceName: 'Prénom (facultatif)',
      maintenanceNamePlaceholder: 'Marie',
      issueLegend: 'Sélectionnez le problème',
      issueBulb: 'Ampoule grillée',
      issueToilet: 'Toilettes bouchées',
      issueFlush: 'Chasse d’eau défectueuse',
      issueTv: 'Télévision ne fonctionne pas',
      issueShower: 'Problème de douche',
      issuePhone: 'Téléphone en panne',
      issueLeak: 'Fuite',
      maintenanceNotes: 'Notes pour l’équipe',
      maintenanceNotesPlaceholder: 'Précisez l’emplacement du problème, l’accès ou les horaires idéaux.',
      extensionsTitle: 'Postes utiles',
      extensionsLead: 'Contactez rapidement les principaux services du Royal Palm Resort.',
      extensionsList: 'Postes du Royal Palm Resort',
      channelsTitle: 'Liste des chaînes',
      channelsLead:
        'Les appartements disposent de chaînes ouvertes et payantes. Consultez ci-dessous la grille disponible sur les TV.',
      channelsPlaceholder: 'Rechercher un canal par numéro ou nom',
      channelNumber: 'Nº',
      channelName: 'Chaîne',
      channelHint: 'D’autres chaînes peuvent être disponibles dans la salle TV partagée.',
      guestLead:
        'Une équipe prête à répondre aux demandes spéciales, aux excursions, aux informations et aux services personnalisés pendant tout le séjour.',
      guestParagraph:
        'Le Guest Service est disponible à tout moment pour soutenir vos besoins. Pour des serviettes supplémentaires, adaptateurs, produits d’accueil spéciaux ou assistance pour des excursions et transports, appelez le poste <strong>620</strong>.',
      guestItem1: 'Commandes de room service et minibar.',
      guestItem2: 'Serviettes, linge de lit et produits d’accueil supplémentaires.',
      guestItem3: 'Ajout d’un berceau ou lit supplémentaire (selon disponibilité).',
      guestItem4: 'Conseils sur les visites, transports, événements et attractions de la région.',
      guestItem5: 'Informations sur les horaires des services, piscines, club et activités.',
      footerTitlePt: 'Expériences impeccables',
      footerTextPt: 'Service d’étage 24h/24 et équipe dédiée pour rendre votre séjour plus confortable.',
      footerTitleEn: 'Séjours mémorables',
      footerTextEn: 'Service d’étage 24h/24 et équipe dédiée pour rendre votre séjour plus confortable.',
      floatingButton: 'Finaliser la commande',
      menuFallback: 'Voir les détails avec l’équipe.'
    },
    de: {
      menuOpen: 'Menü öffnen',
      quickMenu: 'Schnellmenü',
      menuRestaurant: 'Restaurant',
      menuMaintenance: 'Wartung',
      menuGuestService: 'Guest Service',
      menuExtensions: 'Durchwahlen',
      menuChannels: 'Kanäle',
      heroTitle: 'Erstklassiger Zimmerservice mit wenigen Klicks.',
      heroLead:
        'Ihr digitaler Royal Concierge, bereit, Sie mit persönlicher Betreuung, sofortiger Kommunikation und unvergesslichen Erlebnissen zu begeistern.',
      startOrder: 'Bestellung starten',
      quickRestaurant: 'Restaurant',
      quickMaintenance: 'Wartung',
      quickGuestService: 'Guest Service',
      quickExtensions: 'Durchwahlen',
      quickChannels: 'Kanäle',
      orderTitle: 'Einfach bestellen',
      orderLead:
        'Wählen Sie Speisen und Getränke, nennen Sie Vorlieben und schließen Sie die Anfrage mit einem Klick ab.',
      roomNumber: 'Zimmer-/Apt.-Nummer',
      roomPlaceholder: 'z. B. 201',
      deliveryTime: 'Gewünschte Lieferzeit (optional)',
      firstName: 'Vorname',
      firstNamePlaceholder: 'Maria',
      lastName: 'Nachname',
      lastNamePlaceholder: 'Müller',
      searchItems: 'Artikel suchen',
      searchPlaceholder: 'z. B. Omelett, Saft, Salat…',
      restaurantNotes: 'Hinweise für das Restaurant',
      restaurantNotesPlaceholder: 'z. B. Kaffee ohne Zucker; keine Zwiebeln; 2 extra Bestecke.',
      estimatedTotal: 'Geschätzter Gesamtbetrag',
      whatsAppHint: 'Link in WhatsApp geöffnet.',
      maintenanceTitle: 'Sofortige Wartung',
      maintenanceLead: 'Melden Sie das Problem im Apartment für einen schnellen Service.',
      maintenanceRoom: 'Zimmer-/Apt.-Nummer',
      maintenanceRoomPlaceholder: 'z. B. 201',
      maintenanceName: 'Vorname (optional)',
      maintenanceNamePlaceholder: 'Maria',
      issueLegend: 'Problem auswählen',
      issueBulb: 'Durchgebrannte Glühbirne',
      issueToilet: 'Verstopfte Toilette',
      issueFlush: 'Spülung defekt',
      issueTv: 'TV funktioniert nicht',
      issueShower: 'Duschproblem',
      issuePhone: 'Telefon funktioniert nicht',
      issueLeak: 'Leck',
      maintenanceNotes: 'Hinweise für das Team',
      maintenanceNotesPlaceholder: 'Beschreiben Sie Ort des Problems, Zugang oder ideale Zeiten.',
      extensionsTitle: 'Nützliche Durchwahlen',
      extensionsLead: 'Verbinden Sie sich schnell mit den wichtigsten Bereichen des Royal Palm Resort.',
      extensionsList: 'Durchwahlen des Royal Palm Resort',
      channelsTitle: 'Senderliste',
      channelsLead:
        'Die Apartments bieten Free-TV- und Pay-TV-Kanäle. Sehen Sie unten die verfügbare Senderliste.',
      channelsPlaceholder: 'Sender nach Nummer oder Name suchen',
      channelNumber: 'Nr.',
      channelName: 'Sender',
      channelHint: 'Weitere Sender können im Gemeinschafts-TV-Raum verfügbar sein.',
      guestLead:
        'Ein Team, das bereit ist, Sonderwünsche, Ausflüge, Informationen und personalisierte Services während des gesamten Aufenthalts zu erfüllen.',
      guestParagraph:
        'Der Guest Service ist jederzeit verfügbar, um Sie zu unterstützen. Wenn Sie zusätzliche Handtücher, Adapter, spezielle Amenities oder Hilfe bei Ausflügen und Transport benötigen, wählen Sie die Durchwahl <strong>620</strong>.',
      guestItem1: 'Room-Service- und Minibar-Bestellungen.',
      guestItem2: 'Zusätzliche Handtücher, Bettwäsche und Amenities.',
      guestItem3: 'Kinderbett oder Zustellbett (je nach Verfügbarkeit).',
      guestItem4: 'Tipps zu Ausflügen, Transport, Veranstaltungen und Sehenswürdigkeiten in der Umgebung.',
      guestItem5: 'Informationen zu Servicezeiten, Pools, Club und Aktivitäten.',
      footerTitlePt: 'Makellose Erlebnisse',
      footerTextPt: '24/7 Zimmerservice und ein engagiertes Team für einen komfortableren Aufenthalt.',
      footerTitleEn: 'Unvergessliche Aufenthalte',
      footerTextEn: '24/7 Zimmerservice und ein engagiertes Team für einen komfortableren Aufenthalt.',
      floatingButton: 'Bestellung abschließen',
      menuFallback: 'Details beim Team erfragen.'
    },
    it: {
      menuOpen: 'Apri menu',
      quickMenu: 'Menu rapido',
      menuRestaurant: 'Ristorante',
      menuMaintenance: 'Manutenzione',
      menuGuestService: 'Guest Service',
      menuExtensions: 'Interni',
      menuChannels: 'Canali',
      heroTitle: 'Servizio in camera raffinato in pochi tocchi.',
      heroLead:
        'Il tuo concierge digitale Royal, pronto a stupirti con attenzione personalizzata, comunicazione immediata ed esperienze indimenticabili.',
      startOrder: 'Inizia ordine',
      quickRestaurant: 'Ristorante',
      quickMaintenance: 'Manutenzione',
      quickGuestService: 'Guest Service',
      quickExtensions: 'Interni',
      quickChannels: 'Canali',
      orderTitle: 'Ordina senza complicazioni',
      orderLead:
        'Seleziona piatti e bevande, indica le preferenze e completa la richiesta con un clic.',
      roomNumber: 'Numero della camera/app.',
      roomPlaceholder: 'Es.: 201',
      deliveryTime: 'Orario di consegna preferito (opzionale)',
      firstName: 'Nome',
      firstNamePlaceholder: 'Maria',
      lastName: 'Cognome',
      lastNamePlaceholder: 'Rossi',
      searchItems: 'Cerca articoli',
      searchPlaceholder: 'Es.: omelette, succo, insalata…',
      restaurantNotes: 'Note per il ristorante',
      restaurantNotesPlaceholder: 'Es.: Caffè senza zucchero; senza cipolla; 2 posate extra.',
      estimatedTotal: 'Totale stimato',
      whatsAppHint: 'Link aperto su WhatsApp.',
      maintenanceTitle: 'Manutenzione immediata',
      maintenanceLead: 'Indica il problema trovato nell’appartamento per un servizio rapido.',
      maintenanceRoom: 'Numero della camera/app.',
      maintenanceRoomPlaceholder: 'Es.: 201',
      maintenanceName: 'Nome (opzionale)',
      maintenanceNamePlaceholder: 'Maria',
      issueLegend: 'Seleziona il problema',
      issueBulb: 'Lampadina bruciata',
      issueToilet: 'WC intasato',
      issueFlush: 'Scarico difettoso',
      issueTv: 'TV non funziona',
      issueShower: 'Problema alla doccia',
      issuePhone: 'Telefono non funziona',
      issueLeak: 'Perdita',
      maintenanceNotes: "Note per il team",
      maintenanceNotesPlaceholder: 'Dettaglia il luogo del problema, accesso o orari ideali.',
      extensionsTitle: 'Interni utili',
      extensionsLead: 'Collegati rapidamente ai principali reparti del Royal Palm Resort.',
      extensionsList: 'Interni del Royal Palm Resort',
      channelsTitle: 'Elenco canali',
      channelsLead:
        'Gli appartamenti dispongono di canali in chiaro e a pagamento. Consulta di seguito il palinsesto disponibile.',
      channelsPlaceholder: 'Cerca il canale per numero o nome',
      channelNumber: 'N.',
      channelName: 'Canale',
      channelHint: 'Altri canali possono essere disponibili nella sala TV comune.',
      guestLead:
        'Un team pronto ad assistere richieste speciali, tour, informazioni e servizi personalizzati per tutta la permanenza.',
      guestParagraph:
        'Il Guest Service è disponibile in qualsiasi momento per supportare le tue esigenze. Se ti servono asciugamani extra, adattatori, amenities speciali o assistenza per tour e trasporti, chiama l’interno <strong>620</strong>.',
      guestItem1: 'Richieste di room service e minibar.',
      guestItem2: 'Asciugamani, biancheria da letto e amenities extra.',
      guestItem3: 'Allestimento di culla o letto aggiuntivo (soggetto a disponibilità).',
      guestItem4: 'Indicazioni su tour, trasporti, eventi e attrazioni della zona.',
      guestItem5: 'Informazioni su orari dei servizi, piscine, club e attività.',
      footerTitlePt: 'Esperienze impeccabili',
      footerTextPt: 'Servizio in camera 24/7 e team dedicato per rendere il soggiorno più confortevole.',
      footerTitleEn: 'Soggiorni memorabili',
      footerTextEn: 'Servizio in camera 24/7 e team dedicato per rendere il soggiorno più confortevole.',
      floatingButton: 'Concludi ordine',
      menuFallback: 'Vedi i dettagli con il team.'
    },
    ja: {
      menuOpen: 'メニューを開く',
      quickMenu: 'クイックメニュー',
      menuRestaurant: 'レストラン',
      menuMaintenance: 'メンテナンス',
      menuGuestService: 'ゲストサービス',
      menuExtensions: '内線',
      menuChannels: 'チャンネル',
      heroTitle: '数回のタップで上質なルームサービスを。',
      heroLead:
        'お客様専任のロイヤル・コンシェルジュが、即時対応と忘れられない体験でおもてなしします。',
      startOrder: '注文を始める',
      quickRestaurant: 'レストラン',
      quickMaintenance: 'メンテナンス',
      quickGuestService: 'ゲストサービス',
      quickExtensions: '内線',
      quickChannels: 'チャンネル',
      orderTitle: '手間なく注文',
      orderLead:
        '料理やドリンクを選び、希望を伝えてワンクリックで依頼を完了できます。',
      roomNumber: '部屋／アパート番号',
      roomPlaceholder: '例：201',
      deliveryTime: '希望配達時間（任意）',
      firstName: '名',
      firstNamePlaceholder: 'マリア',
      lastName: '姓',
      lastNamePlaceholder: 'スズキ',
      searchItems: '商品を検索',
      searchPlaceholder: '例：オムレツ、ジュース、サラダ…',
      restaurantNotes: 'レストランへのメモ',
      restaurantNotesPlaceholder: '例：砂糖なし・玉ねぎなし・カトラリー2つ追加。',
      estimatedTotal: '合計見積もり',
      whatsAppHint: 'リンクがWhatsAppで開きました。',
      maintenanceTitle: '迅速なメンテナンス',
      maintenanceLead: 'お部屋で見つけた問題を知らせて、迅速な対応を受けましょう。',
      maintenanceRoom: '部屋／アパート番号',
      maintenanceRoomPlaceholder: '例：201',
      maintenanceName: '名（任意）',
      maintenanceNamePlaceholder: 'マリア',
      issueLegend: '問題を選択',
      issueBulb: '電球切れ',
      issueToilet: 'トイレ詰まり',
      issueFlush: '水洗トラブル',
      issueTv: 'テレビ故障',
      issueShower: 'シャワーの不具合',
      issuePhone: '電話が不通',
      issueLeak: '漏水',
      maintenanceNotes: 'スタッフへのメモ',
      maintenanceNotesPlaceholder: '問題の場所、アクセス、希望時間などを記入してください。',
      extensionsTitle: '便利な内線',
      extensionsLead: 'Royal Palm Resortの主要部門へすぐにつながります。',
      extensionsList: 'Royal Palm Resort の内線一覧',
      channelsTitle: 'チャンネル一覧',
      channelsLead:
        '客室では地上波と有料チャンネルをご利用いただけます。以下で視聴可能なリストをご確認ください。',
      channelsPlaceholder: '番号または名前でチャンネル検索',
      channelNumber: '番号',
      channelName: 'チャンネル',
      channelHint: '共有TVルームでは他のチャンネルが視聴できる場合があります。',
      guestLead:
        '滞在中の特別なご要望、ツアー手配、情報提供、パーソナルサービスに対応するチームが待機しています。',
      guestParagraph:
        'ゲストサービスはいつでもサポートいたします。追加のタオル、アダプター、特別なアメニティ、ツアーや移動手段の手配が必要な場合は内線<strong>620</strong>までご連絡ください。',
      guestItem1: 'ルームサービスとミニバーのご注文。',
      guestItem2: '追加のタオル、寝具、アメニティ。',
      guestItem3: 'ベビーベッドまたはエキストラベッドの手配（空き状況による）。',
      guestItem4: '周辺のツアー、交通、イベント、観光情報のご案内。',
      guestItem5: 'サービス時間、プール、クラブ、アクティビティのご案内。',
      footerTitlePt: '完璧な体験',
      footerTextPt: '24時間のルームサービスと、快適な滞在を支える専任チーム。',
      footerTitleEn: '思い出深い滞在',
      footerTextEn: '24時間ルームサービスと専任チームが快適な滞在をサポートします。',
      floatingButton: '注文を完了',
      menuFallback: '詳細はスタッフにお尋ねください。'
    },
    zh: {
      menuOpen: '打开菜单',
      quickMenu: '快速菜单',
      menuRestaurant: '餐厅',
      menuMaintenance: '维修',
      menuGuestService: '礼宾服务',
      menuExtensions: '分机',
      menuChannels: '频道',
      heroTitle: '几次点击即可享受精致的客房服务。',
      heroLead:
        '您的皇家数字礼宾，随时以贴心服务、即时沟通和难忘体验打动您。',
      startOrder: '开始点单',
      quickRestaurant: '餐厅',
      quickMaintenance: '维修',
      quickGuestService: '礼宾服务',
      quickExtensions: '分机',
      quickChannels: '频道',
      orderTitle: '轻松下单',
      orderLead:
        '选择菜品和饮品，告知偏好，一键完成请求。',
      roomNumber: '房间/公寓号',
      roomPlaceholder: '如：201',
      deliveryTime: '期望送达时间（可选）',
      firstName: '名字',
      firstNamePlaceholder: '玛丽亚',
      lastName: '姓氏',
      lastNamePlaceholder: '李',
      searchItems: '搜索项目',
      searchPlaceholder: '如：煎蛋卷、果汁、沙拉…',
      restaurantNotes: '餐厅备注',
      restaurantNotesPlaceholder: '如：无糖；不要洋葱；额外2套餐具。',
      estimatedTotal: '预估总额',
      whatsAppHint: '链接已在 WhatsApp 打开。',
      maintenanceTitle: '即时维修',
      maintenanceLead: '告知房间中发现的问题以便快速服务。',
      maintenanceRoom: '房间/公寓号',
      maintenanceRoomPlaceholder: '如：201',
      maintenanceName: '名字（可选）',
      maintenanceNamePlaceholder: '玛丽亚',
      issueLegend: '选择问题',
      issueBulb: '灯泡烧坏',
      issueToilet: '马桶堵塞',
      issueFlush: '冲水故障',
      issueTv: '电视无法使用',
      issueShower: '淋浴问题',
      issuePhone: '电话无法使用',
      issueLeak: '漏水',
      maintenanceNotes: '给团队的备注',
      maintenanceNotesPlaceholder: '请注明问题位置、通行方式或理想时间。',
      extensionsTitle: '常用分机',
      extensionsLead: '快速联络 Royal Palm Resort 的主要部门。',
      extensionsList: 'Royal Palm Resort 分机表',
      channelsTitle: '频道列表',
      channelsLead:
        '客房提供免费和付费频道。请查看下方可用频道列表。',
      channelsPlaceholder: '按号码或名称搜索频道',
      channelNumber: '号',
      channelName: '频道',
      channelHint: '公共电视室可能有其他频道可看。',
      guestLead:
        '团队随时待命，满足您在入住期间的特殊需求、行程安排、信息咨询和个性化服务。',
      guestParagraph:
        '礼宾服务随时为您提供支持。如需额外毛巾、适配器、特别用品，或需要安排行程和交通，请拨打分机 <strong>620</strong>。',
      guestItem1: '客房服务和迷你吧请求。',
      guestItem2: '额外的毛巾、床品和用品。',
      guestItem3: '婴儿床或加床（视供应情况而定）。',
      guestItem4: '提供周边游览、交通、活动和景点的建议。',
      guestItem5: '服务时间、泳池、俱乐部和活动信息。',
      footerTitlePt: '完美体验',
      footerTextPt: '24/7 客房服务与专业团队，让您的住宿更舒适。',
      footerTitleEn: '难忘的入住',
      footerTextEn: '24/7 客房服务与专业团队，让您的住宿更舒适。',
      floatingButton: '完成订单',
      menuFallback: '详情请咨询工作人员。'
    },
    ar: {
      menuOpen: 'فتح القائمة',
      quickMenu: 'قائمة سريعة',
      menuRestaurant: 'المطعم',
      menuMaintenance: 'الصيانة',
      menuGuestService: 'خدمة الضيوف',
      menuExtensions: 'التحويلات',
      menuChannels: 'القنوات',
      heroTitle: 'خدمة غرف راقية بلمسات قليلة.',
      heroLead:
        'كونسييرج رقمي جاهز لإسعادك بعناية شخصية، تواصل فوري وتجارب لا تُنسى.',
      startOrder: 'ابدأ الطلب',
      quickRestaurant: 'المطعم',
      quickMaintenance: 'الصيانة',
      quickGuestService: 'خدمة الضيوف',
      quickExtensions: 'التحويلات',
      quickChannels: 'القنوات',
      orderTitle: 'اطلب بسهولة',
      orderLead:
        'اختر الأطباق والمشروبات، أبلغ تفضيلاتك وأكمل الطلب بنقرة واحدة.',
      roomNumber: 'رقم الغرفة/الشقة',
      roomPlaceholder: 'مثال: 201',
      deliveryTime: 'وقت التسليم المفضل (اختياري)',
      firstName: 'الاسم الأول',
      firstNamePlaceholder: 'ماريا',
      lastName: 'اسم العائلة',
      lastNamePlaceholder: 'خالد',
      searchItems: 'ابحث عن الأصناف',
      searchPlaceholder: 'مثال: عجة، عصير، سلطة…',
      restaurantNotes: 'ملاحظات للمطعم',
      restaurantNotesPlaceholder: 'مثال: قهوة بدون سكر؛ بدون بصل؛ أدوات إضافية.',
      estimatedTotal: 'الإجمالي التقديري',
      whatsAppHint: 'تم فتح الرابط في واتساب.',
      maintenanceTitle: 'صيانة فورية',
      maintenanceLead: 'أبلغ عن المشكلة في الشقة للحصول على خدمة سريعة.',
      maintenanceRoom: 'رقم الغرفة/الشقة',
      maintenanceRoomPlaceholder: 'مثال: 201',
      maintenanceName: 'الاسم الأول (اختياري)',
      maintenanceNamePlaceholder: 'ماريا',
      issueLegend: 'اختر المشكلة',
      issueBulb: 'مصباح محترق',
      issueToilet: 'مرحاض مسدود',
      issueFlush: 'عطل في السيفون',
      issueTv: 'التلفاز لا يعمل',
      issueShower: 'مشكلة في الدش',
      issuePhone: 'الهاتف لا يعمل',
      issueLeak: 'تسرب',
      maintenanceNotes: 'ملاحظات للفريق',
      maintenanceNotesPlaceholder: 'اذكر موقع المشكلة، طريقة الوصول أو الأوقات المناسبة.',
      extensionsTitle: 'تحويلات مفيدة',
      extensionsLead: 'تواصل بسرعة مع الأقسام الرئيسية في منتجع رويال بالم.',
      extensionsList: 'تحويلات منتجع رويال بالم',
      channelsTitle: 'قائمة القنوات',
      channelsLead:
        'تتوفر قنوات مفتوحة ومشفرة في الشقق. اطلع على القائمة المتاحة بالتلفاز أدناه.',
      channelsPlaceholder: 'ابحث عن القناة بالرقم أو الاسم',
      channelNumber: 'رقم',
      channelName: 'القناة',
      channelHint: 'قد تتوفر قنوات أخرى في غرفة التلفاز المشتركة.',
      guestLead:
        'فريق جاهز لتلبية الطلبات الخاصة، الجولات، المعلومات والخدمات المخصصة طوال الإقامة.',
      guestParagraph:
        'خدمة الضيوف متاحة في أي وقت لدعم احتياجاتك. عند الحاجة إلى مناشف إضافية أو محولات أو مستلزمات خاصة أو مساعدة في الجولات والنقل، اتصل على التحويلة <strong>620</strong>.',
      guestItem1: 'طلبات خدمة الغرف والبار الصغير.',
      guestItem2: 'مناشف وبياضات أسرّة ومستحضرات إضافية.',
      guestItem3: 'إعداد سرير إضافي أو سرير أطفال (حسب التوفر).',
      guestItem4: 'إرشادات حول الجولات، المواصلات، الفعاليات والمعالم في المنطقة.',
      guestItem5: 'معلومات عن مواعيد الخدمات، المسابح، النادي والأنشطة.',
      footerTitlePt: 'تجارب متقنة',
      footerTextPt: 'خدمة غرف على مدار الساعة وفريق مكرس لراحة إقامتك.',
      footerTitleEn: 'إقامات لا تُنسى',
      footerTextEn: 'خدمة غرف على مدار الساعة وفريق مكرس لراحة إقامتك.',
      floatingButton: 'أكمل الطلب',
      menuFallback: 'اطلب التفاصيل من الفريق.'
    }
  };

  const languageMeta = {
    pt: { lang: 'pt-BR', dir: 'ltr' },
    en: { lang: 'en', dir: 'ltr' },
    es: { lang: 'es', dir: 'ltr' },
    fr: { lang: 'fr', dir: 'ltr' },
    de: { lang: 'de', dir: 'ltr' },
    it: { lang: 'it', dir: 'ltr' },
    ja: { lang: 'ja', dir: 'ltr' },
    zh: { lang: 'zh-Hans', dir: 'ltr' },
    ar: { lang: 'ar', dir: 'rtl' }
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
    const meta = languageMeta[currentLang] || languageMeta.pt;
    document.documentElement.lang = meta.lang;
    document.documentElement.dir = meta.dir;

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
    if (!translations[lang]) return;
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
    const usePortuguese = currentLang === 'pt';
    const dict = translations[currentLang] || translations.pt;

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
        const nomePrincipal = usePortuguese ? item.nome : item.eng;
        const nomeSecundario = usePortuguese ? item.eng : item.nome;
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
        const fallback = dict.menuFallback || translations.pt.menuFallback;
        const descricao = usePortuguese ? item.descPt : item.descEn;
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
