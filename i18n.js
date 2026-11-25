/* Mascarenhas Rent a Car e Motos — i18n PT / EN / ES
   Textos próprios da demo. Nenhum preço nem política inventada: o que não está
   confirmado aparece como "sob consulta" / "a combinar". */

(function () {
  "use strict";

  var WHATSAPP = "5573998440150";
  var LANGS = ["pt", "en", "es"];
  var STORE_KEY = "masc-lang";

  var DICT = {
    pt: {
      "a11y.skip": "Ir para o conteúdo",
      "a11y.menu": "Abrir menu",
      "a11y.menuLabel": "Menu",
      "a11y.lang": "Idioma",
      "brand.sub": "rent a car e motos · Itacaré",
      "nav.fleet": "Frota",
      "nav.how": "Como funciona",
      "nav.terms": "Condições",
      "nav.place": "A loja",
      "nav.faq": "Dúvidas",
      "nav.book": "Reservar",

      "hero.eyebrow": "Itacaré e Ilhéus · há mais de 20 anos",
      "hero.title": "A praia que você quer ver, <em>no seu tempo</em>.",
      "hero.lede": "Carros, motos, scooters e bikes elétricas com loja física na Pedro Longo, em Itacaré. Mais de 20 anos alugando para quem mora aqui e para quem chega de fora.",
      "hero.cta1": "Falar no WhatsApp",
      "hero.cta2": "Ver a frota",
      "hero.p1t": "4,3",
      "hero.p1l": "105 avaliações no Google",
      "hero.p2t": "+20 anos",
      "hero.p2l": "em Itacaré e Ilhéus",
      "hero.p3t": "8h–18h",
      "hero.p3l": "loja aberta todos os dias",
      "hero.alt": "Fachada da Mascarenhas na Pedro Longo, 558, com faixa da loja e motos na porta",
      "hero.caption": "A loja na Pedro Longo, 558 — Pituba.",

      "fleet.eyebrow": "Frota",
      "fleet.title": "Escolha o veículo. O resto a gente combina.",
      "fleet.sub": "A diária muda com a temporada e com o número de dias, então ela é fechada na conversa — com o valor, a caução e o combustível por escrito antes de você sair com o veículo.",
      "fleet.flag.car": "CNH B",
      "fleet.flag.pickup": "4x4 · CNH B",
      "fleet.flag.scooter": "CNH A ou ACC",
      "fleet.flag.moto": "CNH A",
      "fleet.car.kicker": "Carro",
      "fleet.car.name": "Jeep Renegade",
      "fleet.car.note": "Modelo visto no perfil da loja. Ano e disponibilidade na sua data: confirmar no WhatsApp.",
      "fleet.car.alt": "Jeep Renegade branco com adesivo da Mascarenhas, estacionado perto do mar",
      "fleet.pickup.kicker": "Picape",
      "fleet.pickup.name": "Toyota Hilux",
      "fleet.pickup.note": "Modelo visto no perfil da loja. Ano, versão e disponibilidade na sua data: confirmar no WhatsApp.",
      "fleet.pickup.alt": "Toyota Hilux prata com adesivo da Mascarenhas, em rua de pedra em Itacaré",
      "fleet.scooter.kicker": "Scooter",
      "fleet.scooter.name": "Scooter automática",
      "fleet.scooter.note": "Sem marcha, leve no trânsito da vila e fácil de estacionar na praia.",
      "fleet.scooter.alt": "Scooter vermelha e moto paradas na porta da loja, com a faixa da Mascarenhas ao lado",
      "fleet.moto.kicker": "Moto",
      "fleet.moto.name": "Honda XRE 300",
      "fleet.moto.note": "Modelo visto no perfil da loja. Ano e disponibilidade na sua data: confirmar no WhatsApp.",
      "fleet.moto.alt": "Honda XRE 300 prateada, com baú, em área verde perto do mar",
      "fleet.ask": "Diária sob consulta",
      "fleet.askNote": "valor fechado no WhatsApp",
      "fleet.cta": "Consultar no WhatsApp",
      "fleet.foot": "Modelos e anos variam com a frota disponível na data. Diga o período e a gente confirma qual veículo está livre.",

      "how.eyebrow": "Como funciona",
      "how.title": "Quatro passos, nenhuma surpresa.",
      "how.s1t": "Escolha o veículo",
      "how.s1b": "Carro, picape, scooter ou moto. Se estiver em dúvida, conte o roteiro e a gente indica o que aguenta a estrada.",
      "how.s2t": "Combine no WhatsApp",
      "how.s2b": "Você recebe por escrito a diária, a caução, o combustível e a franquia. Sem valor escondido na devolução.",
      "how.s3t": "Retire na loja",
      "how.s3b": "Na Pedro Longo, 558, na Pituba, todos os dias das 8h às 18h. Entrega combinada em outro ponto, sob consulta.",
      "how.s4t": "Devolva conferido",
      "how.s4b": "Veículo e combustível conferidos junto com você, na sua frente, antes de qualquer cobrança.",

      "terms.eyebrow": "Condições",
      "terms.title": "O que está combinado, está combinado.",
      "terms.sub": "Aluguel sem letra miúda só funciona assim: cada item abaixo vai por escrito na conversa, antes da retirada.",
      "terms.t1t": "Caução",
      "terms.t1b": "Valor e forma de devolução informados antes da retirada. A conferência do veículo é feita com você presente.",
      "terms.t2t": "Combustível",
      "terms.t2b": "O nível de saída é registrado e você devolve no mesmo nível. Sem taxa de abastecimento surpresa.",
      "terms.t3t": "Danos e franquia",
      "terms.t3b": "O que é desgaste de uso e o que é dano, com valor de franquia, é explicado na retirada e registrado por foto.",
      "terms.t4t": "Habilitação",
      "terms.t4b": "CNH válida na categoria do veículo — B para carro e picape, A (ou ACC na scooter) para moto. Documento com foto na retirada.",
      "terms.foot": "Pagamento, seguro e limites de quilometragem são confirmados na conversa, porque mudam conforme o veículo e o período.",

      "map.eyebrow": "A loja",
      "map.title": "Na Pedro Longo, 558 — Pituba.",
      "map.sub": "Ponto físico para você ver o veículo antes de alugar, na rua que sai da vila em direção às praias.",
      "map.iframeTitle": "Mapa da Mascarenhas Rent a Car e Motos em Itacaré",
      "map.place": "Mascarenhas Rent a Car e Motos",
      "map.open": "Abrir no Google Maps",
      "map.addrLabel": "Endereço",
      "map.addr": "R. Pedro Longo, 558 — Pituba<br>Itacaré/BA, 45530-000",
      "map.hoursLabel": "Horário",
      "map.hours": "Todos os dias, 8h às 18h",
      "map.phoneLabel": "WhatsApp",
      "map.cta": "Chamar no WhatsApp",

      "faq.eyebrow": "Dúvidas",
      "faq.title": "O que perguntam antes de alugar.",
      "faq.sub": "Se a sua dúvida não estiver aqui, manda no WhatsApp — responde gente da loja, não robô.",
      "faq.cta": "Perguntar no WhatsApp",
      "faq.q1": "Quanto custa a diária?",
      "faq.a1": "Depende do veículo, do período e da temporada. Por isso o valor é fechado na conversa, com o total e a caução por escrito antes de você retirar o veículo.",
      "faq.q2": "Preciso de CNH brasileira?",
      "faq.a2": "Para carro e picape, CNH categoria B. Para moto, categoria A; scooter pode ser ACC. Turista estrangeiro deve trazer a habilitação do país com a permissão internacional de dirigir — confirme no WhatsApp antes de reservar.",
      "faq.q3": "Tem caução? Como funciona?",
      "faq.a3": "Sim, e o valor é informado antes da retirada, junto com a forma de devolução. A conferência do veículo é feita com você presente, com fotos do estado de saída.",
      "faq.q4": "E o combustível?",
      "faq.a4": "O nível é registrado na saída e você devolve no mesmo nível. Assim não existe cobrança de abastecimento que você não fez.",
      "faq.q5": "Vocês entregam na pousada ou no aeroporto?",
      "faq.a5": "A retirada é na loja, na Pedro Longo, 558. Entrega em outro ponto e transfer do aeroporto de Ilhéus podem ser combinados à parte — fale com a loja e a gente confirma disponibilidade e custo.",
      "faq.q6": "Qual o período mínimo de aluguel?",
      "faq.a6": "Varia com o veículo e com a época do ano. Para menos de um dia, pacote semanal ou mensal, pergunte direto no WhatsApp.",
      "faq.q7": "E se eu bater ou riscar o veículo?",
      "faq.a7": "Avise a loja na hora. O contrato tem franquia e o valor é explicado na retirada. Registre fotos no momento da ocorrência — é o que protege os dois lados.",

      "cta.eyebrow": "Reserva",
      "cta.title": "Diga a data e o veículo. A gente confirma o resto.",
      "cta.sub": "Loja aberta todos os dias, das 8h às 18h, na Pedro Longo, 558 — Pituba, Itacaré.",
      "cta.btn": "Reservar no WhatsApp",
      "cta.call": "Ligar para a loja",

      "footer.tagline": "Rent a car e motos em Itacaré e Ilhéus, há mais de 20 anos.",
      "footer.contact": "Contato",
      "footer.hours": "Horário",
      "footer.hoursValue": "Todos os dias<br>8h às 18h",
      "footer.links": "Links",
      "footer.faq": "Dúvidas frequentes",
      "footer.demo": "Demonstração de site — dados do Google, do Instagram e do itacare.com.br. Fotos ilustrativas.",

      "float.title": "Reservar veículo",
      "float.sub": "WhatsApp · 8h às 18h",
      "float.aria": "Falar no WhatsApp para reservar um veículo",

      "wa.general": "Oi! Vim pelo site e quero alugar um veículo em Itacaré.",
      "wa.vehicle": "Oi! Vim pelo site e quero saber a diária do veículo: {vehicle}."
    },

    en: {
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "a11y.menuLabel": "Menu",
      "a11y.lang": "Language",
      "brand.sub": "rent a car & motorbikes · Itacaré",
      "nav.fleet": "Fleet",
      "nav.how": "How it works",
      "nav.terms": "Terms",
      "nav.place": "The shop",
      "nav.faq": "FAQ",
      "nav.book": "Book",

      "hero.eyebrow": "Itacaré and Ilhéus · 20+ years",
      "hero.title": "The beach you came for, <em>on your own schedule</em>.",
      "hero.lede": "Cars, motorbikes, scooters and e-bikes from a shop on Pedro Longo, in Itacaré. More than 20 years renting to locals and to travellers.",
      "hero.cta1": "Chat on WhatsApp",
      "hero.cta2": "See the fleet",
      "hero.p1t": "4.3",
      "hero.p1l": "105 Google reviews",
      "hero.p2t": "20+ years",
      "hero.p2l": "in Itacaré and Ilhéus",
      "hero.p3t": "8am–6pm",
      "hero.p3l": "shop open every day",
      "hero.alt": "The Mascarenhas shop on Pedro Longo, 558, with its banner and bikes at the door",
      "hero.caption": "The shop at Pedro Longo, 558 — Pituba.",

      "fleet.eyebrow": "Fleet",
      "fleet.title": "Pick the vehicle. We sort out the rest.",
      "fleet.sub": "Daily rates change with the season and with how many days you take, so the rate is agreed in the conversation — together with the deposit and the fuel rule, in writing, before you ride away.",
      "fleet.flag.car": "Licence B",
      "fleet.flag.pickup": "4x4 · Licence B",
      "fleet.flag.scooter": "Licence A or ACC",
      "fleet.flag.moto": "Licence A",
      "fleet.car.kicker": "Car",
      "fleet.car.name": "Jeep Renegade",
      "fleet.car.note": "A model seen on the shop's profile. Year and availability for your dates: confirm on WhatsApp.",
      "fleet.car.alt": "White Jeep Renegade with a Mascarenhas sticker, parked near the sea",
      "fleet.pickup.kicker": "Pickup",
      "fleet.pickup.name": "Toyota Hilux",
      "fleet.pickup.note": "A model seen on the shop's profile. Year, version and availability for your dates: confirm on WhatsApp.",
      "fleet.pickup.alt": "Silver Toyota Hilux with a Mascarenhas sticker on a cobbled street in Itacaré",
      "fleet.scooter.kicker": "Scooter",
      "fleet.scooter.name": "Automatic scooter",
      "fleet.scooter.note": "No gears, easy in village traffic and simple to park by the beach.",
      "fleet.scooter.alt": "Red scooter and a motorbike at the shop door, with the Mascarenhas banner beside them",
      "fleet.moto.kicker": "Motorbike",
      "fleet.moto.name": "Honda XRE 300",
      "fleet.moto.note": "A model seen on the shop's profile. Year and availability for your dates: confirm on WhatsApp.",
      "fleet.moto.alt": "Silver Honda XRE 300 with a top box, in a green area near the sea",
      "fleet.ask": "Daily rate on request",
      "fleet.askNote": "agreed on WhatsApp",
      "fleet.cta": "Ask on WhatsApp",
      "fleet.foot": "Models and years depend on what is available on your dates. Tell us the period and we confirm which vehicle is free.",

      "how.eyebrow": "How it works",
      "how.title": "Four steps, no surprises.",
      "how.s1t": "Pick the vehicle",
      "how.s1b": "Car, pickup, scooter or motorbike. If you are not sure, tell us the route and we suggest what handles the road.",
      "how.s2t": "Agree on WhatsApp",
      "how.s2b": "You get the daily rate, the deposit, the fuel rule and the excess in writing. Nothing hidden at drop-off.",
      "how.s3t": "Collect at the shop",
      "how.s3b": "Pedro Longo, 558, in Pituba, every day from 8am to 6pm. Delivery elsewhere can be arranged on request.",
      "how.s4t": "Hand back checked",
      "how.s4b": "Vehicle and fuel checked with you, in front of you, before any charge.",

      "terms.eyebrow": "Terms",
      "terms.title": "What is agreed is agreed.",
      "terms.sub": "Renting without small print only works like this: every item below goes in writing, before pickup.",
      "terms.t1t": "Deposit",
      "terms.t1b": "Amount and how it is returned are confirmed before pickup. The vehicle is checked with you present.",
      "terms.t2t": "Fuel",
      "terms.t2b": "The level at pickup is recorded and you return it at the same level. No surprise refuelling fee.",
      "terms.t3t": "Damage and excess",
      "terms.t3b": "What counts as wear and what counts as damage, with the excess amount, is explained at pickup and photographed.",
      "terms.t4t": "Driving licence",
      "terms.t4b": "A licence valid for the vehicle — B for car and pickup, A (or ACC for the scooter) for motorbikes. Photo ID at pickup.",
      "terms.foot": "Payment, insurance and mileage limits are confirmed in the conversation, because they change with the vehicle and the period.",

      "map.eyebrow": "The shop",
      "map.title": "Pedro Longo, 558 — Pituba.",
      "map.sub": "A real shop where you can see the vehicle before renting, on the road out of the village towards the beaches.",
      "map.iframeTitle": "Map of Mascarenhas Rent a Car e Motos in Itacaré",
      "map.place": "Mascarenhas Rent a Car e Motos",
      "map.open": "Open in Google Maps",
      "map.addrLabel": "Address",
      "map.addr": "R. Pedro Longo, 558 — Pituba<br>Itacaré/BA, 45530-000, Brazil",
      "map.hoursLabel": "Hours",
      "map.hours": "Every day, 8am to 6pm",
      "map.phoneLabel": "WhatsApp",
      "map.cta": "Message on WhatsApp",

      "faq.eyebrow": "FAQ",
      "faq.title": "What people ask before renting.",
      "faq.sub": "If your question is not here, send it on WhatsApp — someone from the shop answers, not a bot.",
      "faq.cta": "Ask on WhatsApp",
      "faq.q1": "How much is the daily rate?",
      "faq.a1": "It depends on the vehicle, the period and the season. That is why the rate is agreed in the conversation, with the total and the deposit in writing before you pick the vehicle up.",
      "faq.q2": "Do I need a Brazilian licence?",
      "faq.a2": "Category B for car and pickup. Category A for motorbikes; the scooter can be ACC. Foreign visitors should bring their home licence with an international driving permit — confirm on WhatsApp before booking.",
      "faq.q3": "Is there a deposit? How does it work?",
      "faq.a3": "Yes, and the amount is confirmed before pickup, along with how it is returned. The vehicle is checked with you present, with photos of its condition at pickup.",
      "faq.q4": "And the fuel?",
      "faq.a4": "The level is recorded at pickup and you return it at the same level. So there is no refuelling charge you did not use.",
      "faq.q5": "Do you deliver to the pousada or the airport?",
      "faq.a5": "Pickup is at the shop, Pedro Longo, 558. Delivery elsewhere and transfers from Ilhéus airport can be arranged separately — message the shop and we confirm availability and cost.",
      "faq.q6": "What is the minimum rental period?",
      "faq.a6": "It varies with the vehicle and the time of year. For less than a day, a weekly or a monthly package, just ask on WhatsApp.",
      "faq.q7": "What if I crash or scratch the vehicle?",
      "faq.a7": "Tell the shop straight away. The contract has an excess and the amount is explained at pickup. Take photos when it happens — that protects both sides.",

      "cta.eyebrow": "Booking",
      "cta.title": "Send the dates and the vehicle. We confirm the rest.",
      "cta.sub": "Shop open every day, 8am to 6pm, at Pedro Longo, 558 — Pituba, Itacaré.",
      "cta.btn": "Book on WhatsApp",
      "cta.call": "Call the shop",

      "footer.tagline": "Rent a car and motorbikes in Itacaré and Ilhéus, for over 20 years.",
      "footer.contact": "Contact",
      "footer.hours": "Hours",
      "footer.hoursValue": "Every day<br>8am to 6pm",
      "footer.links": "Links",
      "footer.faq": "Frequently asked questions",
      "footer.demo": "Website demo — data from Google, Instagram and itacare.com.br. Illustrative photos.",

      "float.title": "Rent a vehicle",
      "float.sub": "WhatsApp · 8am–6pm",
      "float.aria": "Message on WhatsApp to rent a vehicle",

      "wa.general": "Hi! I found you on the website and I'd like to rent a vehicle in Itacaré.",
      "wa.vehicle": "Hi! I found you on the website and I'd like the daily rate for: {vehicle}."
    },

    es: {
      "a11y.skip": "Ir al contenido",
      "a11y.menu": "Abrir menú",
      "a11y.menuLabel": "Menú",
      "a11y.lang": "Idioma",
      "brand.sub": "alquiler de coches y motos · Itacaré",
      "nav.fleet": "Flota",
      "nav.how": "Cómo funciona",
      "nav.terms": "Condiciones",
      "nav.place": "La tienda",
      "nav.faq": "Dudas",
      "nav.book": "Reservar",

      "hero.eyebrow": "Itacaré e Ilhéus · más de 20 años",
      "hero.title": "La playa que viniste a ver, <em>a tu ritmo</em>.",
      "hero.lede": "Coches, motos, scooters y bicis eléctricas con tienda física en la Pedro Longo, en Itacaré. Más de 20 años alquilando a quien vive aquí y a quien llega de fuera.",
      "hero.cta1": "Hablar por WhatsApp",
      "hero.cta2": "Ver la flota",
      "hero.p1t": "4,3",
      "hero.p1l": "105 reseñas en Google",
      "hero.p2t": "+20 años",
      "hero.p2l": "en Itacaré e Ilhéus",
      "hero.p3t": "8h–18h",
      "hero.p3l": "tienda abierta todos los días",
      "hero.alt": "Fachada de Mascarenhas en Pedro Longo, 558, con la lona de la tienda y motos en la puerta",
      "hero.caption": "La tienda en Pedro Longo, 558 — Pituba.",

      "fleet.eyebrow": "Flota",
      "fleet.title": "Elige el vehículo. El resto lo acordamos.",
      "fleet.sub": "La tarifa diaria cambia con la temporada y con el número de días, así que se cierra en la conversación — con el valor, la fianza y la gasolina por escrito antes de que salgas con el vehículo.",
      "fleet.flag.car": "Licencia B",
      "fleet.flag.pickup": "4x4 · Licencia B",
      "fleet.flag.scooter": "Licencia A o ACC",
      "fleet.flag.moto": "Licencia A",
      "fleet.car.kicker": "Coche",
      "fleet.car.name": "Jeep Renegade",
      "fleet.car.note": "Modelo visto en el perfil de la tienda. Año y disponibilidad en tu fecha: confirmar por WhatsApp.",
      "fleet.car.alt": "Jeep Renegade blanco con adhesivo de Mascarenhas, aparcado cerca del mar",
      "fleet.pickup.kicker": "Pickup",
      "fleet.pickup.name": "Toyota Hilux",
      "fleet.pickup.note": "Modelo visto en el perfil de la tienda. Año, versión y disponibilidad en tu fecha: confirmar por WhatsApp.",
      "fleet.pickup.alt": "Toyota Hilux plateada con adhesivo de Mascarenhas, en calle de piedra de Itacaré",
      "fleet.scooter.kicker": "Scooter",
      "fleet.scooter.name": "Scooter automática",
      "fleet.scooter.note": "Sin marchas, ágil en el tráfico del pueblo y fácil de aparcar en la playa.",
      "fleet.scooter.alt": "Scooter roja y moto aparcadas en la puerta de la tienda, con la lona de Mascarenhas al lado",
      "fleet.moto.kicker": "Moto",
      "fleet.moto.name": "Honda XRE 300",
      "fleet.moto.note": "Modelo visto en el perfil de la tienda. Año y disponibilidad en tu fecha: confirmar por WhatsApp.",
      "fleet.moto.alt": "Honda XRE 300 plateada, con baúl, en zona verde cerca del mar",
      "fleet.ask": "Tarifa diaria a consultar",
      "fleet.askNote": "valor acordado por WhatsApp",
      "fleet.cta": "Consultar por WhatsApp",
      "fleet.foot": "Modelos y años varían según la flota disponible en la fecha. Dinos el período y confirmamos qué vehículo está libre.",

      "how.eyebrow": "Cómo funciona",
      "how.title": "Cuatro pasos, ninguna sorpresa.",
      "how.s1t": "Elige el vehículo",
      "how.s1b": "Coche, pickup, scooter o moto. Si dudas, cuenta el recorrido y te indicamos lo que aguanta el camino.",
      "how.s2t": "Acuerda por WhatsApp",
      "how.s2b": "Recibes por escrito la tarifa, la fianza, la gasolina y la franquicia. Sin cargos escondidos en la devolución.",
      "how.s3t": "Recoge en la tienda",
      "how.s3b": "En Pedro Longo, 558, en Pituba, todos los días de 8h a 18h. Entrega en otro punto, a consultar.",
      "how.s4t": "Devuelve revisado",
      "how.s4b": "Vehículo y gasolina revisados contigo, delante de ti, antes de cualquier cobro.",

      "terms.eyebrow": "Condiciones",
      "terms.title": "Lo acordado, acordado está.",
      "terms.sub": "Alquilar sin letra pequeña solo funciona así: cada punto de abajo va por escrito en la conversación, antes de la recogida.",
      "terms.t1t": "Fianza",
      "terms.t1b": "Importe y forma de devolución informados antes de la recogida. La revisión del vehículo se hace contigo presente.",
      "terms.t2t": "Gasolina",
      "terms.t2b": "El nivel de salida queda registrado y lo devuelves en el mismo nivel. Sin tasa de repostaje sorpresa.",
      "terms.t3t": "Daños y franquicia",
      "terms.t3b": "Qué es desgaste y qué es daño, con el importe de la franquicia, se explica en la recogida y se registra con fotos.",
      "terms.t4t": "Permiso de conducir",
      "terms.t4b": "Licencia válida para el vehículo — B para coche y pickup, A (o ACC en la scooter) para moto. Documento con foto en la recogida.",
      "terms.foot": "Pago, seguro y límites de kilometraje se confirman en la conversación, porque cambian con el vehículo y el período.",

      "map.eyebrow": "La tienda",
      "map.title": "En la Pedro Longo, 558 — Pituba.",
      "map.sub": "Tienda física para ver el vehículo antes de alquilar, en la calle que sale del pueblo hacia las playas.",
      "map.iframeTitle": "Mapa de Mascarenhas Rent a Car e Motos en Itacaré",
      "map.place": "Mascarenhas Rent a Car e Motos",
      "map.open": "Abrir en Google Maps",
      "map.addrLabel": "Dirección",
      "map.addr": "R. Pedro Longo, 558 — Pituba<br>Itacaré/BA, 45530-000, Brasil",
      "map.hoursLabel": "Horario",
      "map.hours": "Todos los días, de 8h a 18h",
      "map.phoneLabel": "WhatsApp",
      "map.cta": "Escribir por WhatsApp",

      "faq.eyebrow": "Dudas",
      "faq.title": "Lo que preguntan antes de alquilar.",
      "faq.sub": "Si tu duda no está aquí, manda un WhatsApp — contesta gente de la tienda, no un robot.",
      "faq.cta": "Preguntar por WhatsApp",
      "faq.q1": "¿Cuánto cuesta la tarifa diaria?",
      "faq.a1": "Depende del vehículo, del período y de la temporada. Por eso el valor se cierra en la conversación, con el total y la fianza por escrito antes de recoger el vehículo.",
      "faq.q2": "¿Necesito licencia brasileña?",
      "faq.a2": "Para coche y pickup, licencia categoría B. Para moto, categoría A; la scooter puede ser ACC. El turista extranjero debe traer su permiso del país con el permiso internacional de conducir — confirma por WhatsApp antes de reservar.",
      "faq.q3": "¿Hay fianza? ¿Cómo funciona?",
      "faq.a3": "Sí, y el importe se informa antes de la recogida, junto con la forma de devolución. La revisión del vehículo se hace contigo presente, con fotos del estado de salida.",
      "faq.q4": "¿Y la gasolina?",
      "faq.a4": "El nivel se registra a la salida y lo devuelves en el mismo nivel. Así no hay cobro de repostaje que no hayas hecho.",
      "faq.q5": "¿Entregan en la posada o en el aeropuerto?",
      "faq.a5": "La recogida es en la tienda, en Pedro Longo, 558. La entrega en otro punto y el transfer desde el aeropuerto de Ilhéus se pueden combinar aparte — habla con la tienda y confirmamos disponibilidad y coste.",
      "faq.q6": "¿Cuál es el período mínimo de alquiler?",
      "faq.a6": "Varía con el vehículo y con la época del año. Para menos de un día, paquete semanal o mensual, pregunta directamente por WhatsApp.",
      "faq.q7": "¿Y si golpeo o rayo el vehículo?",
      "faq.a7": "Avisa a la tienda en el momento. El contrato tiene franquicia y el importe se explica en la recogida. Haz fotos en el momento del incidente — es lo que protege a las dos partes.",

      "cta.eyebrow": "Reserva",
      "cta.title": "Dinos la fecha y el vehículo. Confirmamos el resto.",
      "cta.sub": "Tienda abierta todos los días, de 8h a 18h, en Pedro Longo, 558 — Pituba, Itacaré.",
      "cta.btn": "Reservar por WhatsApp",
      "cta.call": "Llamar a la tienda",

      "footer.tagline": "Alquiler de coches y motos en Itacaré e Ilhéus, desde hace más de 20 años.",
      "footer.contact": "Contacto",
      "footer.hours": "Horario",
      "footer.hoursValue": "Todos los días<br>de 8h a 18h",
      "footer.links": "Enlaces",
      "footer.faq": "Preguntas frecuentes",
      "footer.demo": "Demostración de sitio — datos de Google, Instagram e itacare.com.br. Fotos ilustrativas.",

      "float.title": "Alquilar vehículo",
      "float.sub": "WhatsApp · 8h a 18h",
      "float.aria": "Escribir por WhatsApp para alquilar un vehículo",

      "wa.general": "¡Hola! Vengo de la web y quiero alquilar un vehículo en Itacaré.",
      "wa.vehicle": "¡Hola! Vengo de la web y quiero saber la tarifa diaria del vehículo: {vehicle}."
    }
  };

  var state = { lang: "pt" };

  function dict() {
    return DICT[state.lang] || DICT.pt;
  }

  function t(key) {
    var d = dict();
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    if (Object.prototype.hasOwnProperty.call(DICT.pt, key)) return DICT.pt[key];
    return "";
  }

  function store(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function stored() {
    try {
      var v = localStorage.getItem(STORE_KEY);
      return LANGS.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function fromQuery() {
    try {
      var v = new URLSearchParams(window.location.search).get("lang");
      return LANGS.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function initialLang() {
    var fromUrl = fromQuery();
    if (fromUrl) return fromUrl;
    var fromStore = stored();
    if (fromStore) return fromStore;
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    if (nav === "en") return "en";
    if (nav === "es") return "es";
    return "pt";
  }

  function apply() {
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : state.lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (v) el.innerHTML = v;
    });

    [
      ["data-i18n-aria", "aria-label"],
      ["data-i18n-alt", "alt"],
      ["data-i18n-title", "title"]
    ].forEach(function (pair) {
      document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        var v = t(el.getAttribute(pair[0]));
        if (v) el.setAttribute(pair[1], v);
      });
    });

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === state.lang;
      btn.classList.toggle("is-current", active);
      if (active) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });

    buildWa();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: state.lang } }));
  }

  function buildWa() {
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var kind = el.getAttribute("data-wa");
      var msg = t("wa." + kind);
      if (!msg) return;

      var vehicleKey = el.getAttribute("data-vehicle");
      if (vehicleKey) msg = msg.replace("{vehicle}", t(vehicleKey));

      el.setAttribute("href", "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg));
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    state.lang = lang;
    store(lang);
    apply();
  }

  function init() {
    state.lang = initialLang();
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
    });
    apply();
  }

  window.MascI18n = { setLang: setLang, t: t, current: function () { return state.lang; } };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
