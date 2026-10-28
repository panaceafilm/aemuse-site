// Each row contains the original Russian text followed by English, French and Italian.
// Translations are bundled locally: switching language never calls a third-party service.
const copy = [
  ["Многостраничный концепт · действующий сайт не изменён", "Multi-page concept · the live site is unchanged", "Concept multipage · le site actuel reste inchangé", "Proposta multipagina · il sito attuale non cambia"],
  ["AEMUSE — главная", "AEMUSE — home", "AEMUSE — accueil", "AEMUSE — home"],
  ["Разделы сайта", "Site sections", "Rubriques du site", "Sezioni del sito"],
  ["Мобильное меню", "Mobile menu", "Menu mobile", "Menu mobile"],
  ["Открыть меню", "Open menu", "Ouvrir le menu", "Apri il menu"],
  ["Закрыть меню", "Close menu", "Fermer le menu", "Chiudi il menu"],
  ["Язык сайта", "Site language", "Langue du site", "Lingua del sito"],
  ["Выбор языка", "Choose a language", "Choisir une langue", "Scegli la lingua"],
  ["Навигация внизу страницы", "Footer navigation", "Navigation de pied de page", "Navigazione a piè di pagina"],
  ["работы", "work", "réalisations", "lavori"],
  ["услуги", "services", "services", "servizi"],
  ["стили съёмки", "shooting styles", "styles de prise de vue", "stili di ripresa"],
  ["о нас", "about us", "à propos", "chi siamo"],
  ["обсудить съёмку", "discuss a shoot", "parler de votre projet", "parliamo del progetto"],
  ["контакты", "contact", "contact", "contatti"],
  ["Фото и видео для мест, которые хочется почувствовать.", "Photo and video for places you want to feel.", "Photo et vidéo pour les lieux qui se ressentent.", "Foto e video per luoghi da vivere."],
  ["Снимаем отели и рестораны так, чтобы туда захотелось приехать.", "We capture hotels and restaurants in a way that makes you want to be there.", "Nous filmons hôtels et restaurants pour donner envie d'y aller.", "Raccontiamo hotel e ristoranti in modo che venga voglia di esserci."],
  ["Екатерина и Андрей Ефимовы · 2026", "Ekaterina and Andrey Efimov · 2026", "Ekaterina et Andrey Efimov · 2026", "Ekaterina e Andrey Efimov · 2026"],
  ["Екатерина и Андрей Ефимовы", "Ekaterina and Andrey Efimov", "Ekaterina et Andrey Efimov", "Ekaterina e Andrey Efimov"],
  ["Что снимаем", "What we shoot", "Ce que nous filmons", "Cosa riprendiamo"],
  ["Где использовать", "Where to use it", "Où l'utiliser", "Dove usarlo"],
  ["Подойдёт", "A good fit for", "Idéal pour", "Adatto a"],
  ["Как рассказываем", "How we tell it", "Comment nous la racontons", "Come la raccontiamo"],
  ["AEMUSE — фото, бренд-фильмы и живые истории для отелей и ресторанов.", "AEMUSE creates photography, brand films and lived-in stories for hotels and restaurants.", "AEMUSE crée des photos, des films de marque et des histoires vivantes pour hôtels et restaurants.", "AEMUSE crea fotografie, film di brand e storie vive per hotel e ristoranti."],
  ["AEMUSE — фото и видео для индустрии гостеприимства", "AEMUSE — photo and video for hospitality", "AEMUSE — photo et vidéo pour l'hôtellerie", "AEMUSE — foto e video per l'ospitalità"],
  ["Гостья в баре отеля Ararat Park Hyatt", "A guest at the Ararat Park Hyatt bar", "Une cliente au bar de l'Ararat Park Hyatt", "Un'ospite al bar dell'Ararat Park Hyatt"],
  ["Покажем, как", "We'll show", "Nous montrerons", "Mostreremo"],
  ["у вас хорошо.", "how good it feels here.", "comme on se sent bien chez vous.", "quanto si sta bene da voi."],
  ["Снимаем фото и видео для отелей и ресторанов. Так, чтобы будущий гость почувствовал ваше место ещё до поездки.", "We make photos and films for hotels and restaurants, so future guests can feel your place before they arrive.", "Nous créons des photos et des films pour les hôtels et les restaurants, afin que vos futurs clients ressentent votre lieu avant même d'arriver.", "Creiamo foto e video per hotel e ristoranti, perché i futuri ospiti possano sentire il vostro luogo ancora prima di arrivare."],
  ["Смотреть наши работы", "See our work", "Voir nos réalisations", "Guarda i nostri lavori"],
  ["Фото · фильмы · живые истории", "Photos · films · real stories", "Photos · films · histoires vécues", "Foto · film · storie vere"],
  ["Сначала человек чувствует. Потом выбирает.", "First you feel it. Then you choose it.", "On le ressent d'abord. Puis on le choisit.", "Prima lo senti. Poi lo scegli."],
  ["Красивого номера мало. Гостю хочется представить своё утро, ужин, встречу и тот момент, когда можно наконец выдохнуть. Мы снимаем именно эту жизнь внутри места.", "A beautiful room isn't enough. Guests want to picture their morning, dinner, a chance encounter and that moment when they can finally exhale. That's the life we capture inside a place.", "Une belle chambre ne suffit pas. Vos clients veulent imaginer leur matin, un dîner, une rencontre, l'instant où ils peuvent enfin souffler. C'est cette vie-là que nous saisissons.", "Una bella camera non basta. Gli ospiti vogliono immaginare la colazione, la cena, un incontro e il momento in cui possono finalmente respirare. Noi raccontiamo proprio quella vita."],
  ["Познакомиться с нами", "Get to know us", "Faire notre connaissance", "Conoscici"],
  ["Гостья у окна отеля", "A guest by the hotel window", "Une cliente près de la fenêtre de l'hôtel", "Un'ospite alla finestra dell'hotel"],
  ["Работы", "Work", "Réalisations", "Lavori"],
  ["Посмотрите, как из одного места складывается много историй.", "See how one place can tell many stories.", "Découvrez combien d'histoires un seul lieu peut raconter.", "Scopri quante storie può raccontare un solo luogo."],
  ["Сервис в ресторане отеля", "Service in the hotel restaurant", "Service au restaurant de l'hôtel", "Servizio nel ristorante dell'hotel"],
  ["Услуги", "Services", "Services", "Servizi"],
  ["Разберитесь, какие фото и видео нужны именно вашему бренду.", "Find out which photos and films your brand really needs.", "Découvrez les photos et les films dont votre marque a vraiment besoin.", "Scopri quali foto e video servono davvero al tuo brand."],
  ["Вечер на террасе отеля", "An evening on the hotel terrace", "Un soir sur la terrasse de l'hôtel", "Una sera sulla terrazza dell'hotel"],
  ["Стиль истории", "Story style", "Style du récit", "Stile del racconto"],
  ["Найдите интонацию: тихую, живую, кинематографичную или близкую.", "Find your tone: quiet, lively, cinematic or intimate.", "Trouvez votre ton : calme, vivant, cinématographique ou intime.", "Trova il tuo tono: quieto, vivace, cinematografico o intimo."],
  ["Гостья в номере Ararat Park Hyatt", "A guest in an Ararat Park Hyatt room", "Une cliente dans une chambre de l'Ararat Park Hyatt", "Un'ospite in una camera dell'Ararat Park Hyatt"],
  ["Один отель.", "One hotel.", "Un hôtel.", "Un hotel."],
  ["Много поводов остаться.", "Many reasons to stay.", "Mille raisons de rester.", "Tanti motivi per restare."],
  ["В съёмке Ararat Park Hyatt мы показываем не только пространство: у отеля есть утро, ритм города, сервис, ресторан и вечер. Посмотрите историю целиком.", "In our Ararat Park Hyatt story we show more than the space: its mornings, the city's rhythm, the service, the restaurant and the evening. Explore the whole story.", "Dans notre récit de l'Ararat Park Hyatt, nous montrons plus que les lieux : ses matins, le rythme de la ville, le service, le restaurant et le soir. Découvrez l'histoire complète.", "Nel nostro racconto dell'Ararat Park Hyatt mostriamo più degli spazi: il mattino, il ritmo della città, il servizio, il ristorante e la sera. Scopri la storia completa."],
  ["Открыть проект", "Explore the project", "Découvrir le projet", "Scopri il progetto"],
  ["Расскажите нам о своём месте.", "Tell us about your place.", "Parlez-nous de votre lieu.", "Raccontaci il tuo luogo."],
  ["Пара слов о задаче — и мы предложим, с какой истории начать.", "Tell us a little about your plans, and we'll suggest where the story could begin.", "Quelques mots sur votre projet suffisent : nous vous proposerons un point de départ.", "Bastano poche parole sul tuo progetto: ti suggeriremo da dove iniziare."],
  ["Поговорить о съёмке", "Let's talk about the shoot", "Parlons de votre projet", "Parliamo delle riprese"],
  ["Фото, бренд-фильмы и вертикальные видео AEMUSE для отелей и ресторанов.", "AEMUSE photography, brand films and vertical videos for hotels and restaurants.", "Photos, films de marque et vidéos verticales AEMUSE pour hôtels et restaurants.", "Fotografie, film di brand e video verticali AEMUSE per hotel e ristoranti."],
  ["Услуги — AEMUSE", "Services — AEMUSE", "Services — AEMUSE", "Servizi — AEMUSE"],
  ["Что мы можем", "What we can", "Ce que nous pouvons", "Cosa possiamo"],
  ["снять для вас.", "create for you.", "créer pour vous.", "creare per voi."],
  ["Начнём с вашей задачи, а не с перечня форматов. Одному бренду нужны новые кадры для сайта, другому — серия коротких роликов, третьему — цельная библиотека для нескольких каналов.", "We start with your goal, not a list of formats. One brand needs fresh images for its site, another a series of short films, and a third a complete library for several channels.", "Nous partons de votre besoin, pas d'une liste de formats. Une marque souhaite de nouvelles images pour son site, une autre une série de vidéos courtes, une troisième une bibliothèque complète pour plusieurs canaux.", "Partiamo dal tuo obiettivo, non da un elenco di formati. A un brand servono nuove immagini per il sito, a un altro una serie di video brevi, a un terzo una libreria completa per più canali."],
  ["Чемодан гостя в номере отеля", "A guest's suitcase in a hotel room", "La valise d'un client dans une chambre d'hôtel", "La valigia di un ospite in una camera d'hotel"],
  ["Форматы съёмки", "Shooting formats", "Formats de prise de vue", "Formati di ripresa"],
  ["Фотография", "Photography", "Photographie", "Fotografia"],
  ["Бренд-фильм", "Brand film", "Film de marque", "Film di brand"],
  ["Вертикальное видео", "Vertical video", "Vidéo verticale", "Video verticale"],
  ["Как работаем", "How we work", "Notre méthode", "Come lavoriamo"],
  ["Фотография, в которой есть жизнь.", "Photography that feels alive.", "Des photos pleines de vie.", "Fotografie piene di vita."],
  ["Покажем пространство таким, каким его видит гость: не только архитектуру и интерьер, но и людей, свет, еду, заботу и детали. Соберём кадры, которые работают вместе, а не случайный набор красивых картинок.", "We show the space as a guest experiences it: architecture and interiors, but also people, light, food, care and details. The images work together as a story, rather than a collection of pretty pictures.", "Nous montrons le lieu tel que le vit un client : l'architecture et les intérieurs, mais aussi les personnes, la lumière, la cuisine, les attentions et les détails. Les images composent un récit plutôt qu'une suite de jolies photos.", "Mostriamo lo spazio come lo vive un ospite: architettura e interni, ma anche persone, luce, cibo, premure e dettagli. Le immagini costruiscono un racconto, non una raccolta casuale di belle foto."],
  ["Номера, общие зоны, ресторан, SPA, команду, детали и гостевые сценарии.", "Rooms, shared spaces, the restaurant, spa, team, details and guest experiences.", "Chambres, espaces communs, restaurant, spa, équipe, détails et parcours des clients.", "Camere, spazi comuni, ristorante, spa, team, dettagli ed esperienze degli ospiti."],
  ["Сайт, страницы бронирования, PR, реклама и социальные сети.", "Website, booking pages, PR, advertising and social media.", "Site web, pages de réservation, relations presse, publicité et réseaux sociaux.", "Sito web, pagine di prenotazione, PR, pubblicità e social media."],
  ["Посмотреть фотопример", "See a photo story", "Voir un exemple photo", "Guarda un esempio fotografico"],
  ["Гостья утром в номере отеля", "A guest in her hotel room in the morning", "Une cliente dans sa chambre d'hôtel le matin", "Un'ospite nella sua camera d'hotel al mattino"],
  ["Фрагмент нашей съёмки Ararat Park Hyatt", "From our Ararat Park Hyatt shoot", "Extrait de notre séance à l'Ararat Park Hyatt", "Dalla nostra ripresa all'Ararat Park Hyatt"],
  ["Фильм, который передаёт характер места.", "A film that captures the character of a place.", "Un film qui révèle le caractère d'un lieu.", "Un film che racconta il carattere di un luogo."],
  ["Короткая история вместо экскурсии по комнатам. Мы строим её вокруг движения, атмосферы и живых сцен: прибытие, встреча, удовольствие от пространства, вечер.", "A short story rather than a tour of the rooms. We build it around movement, atmosphere and real moments: arriving, being welcomed, enjoying the space and settling into the evening.", "Une courte histoire plutôt qu'une visite des chambres. Nous la construisons autour du mouvement, de l'atmosphère et de scènes vécues : l'arrivée, l'accueil, le plaisir du lieu et le soir.", "Una storia breve invece di un tour delle camere. La costruiamo attorno al movimento, all'atmosfera e a momenti vissuti: l'arrivo, l'accoglienza, il piacere dello spazio e la sera."],
  ["Что предлагаем", "What we offer", "Ce que nous proposons", "Cosa proponiamo"],
  ["Горизонтальный бренд-фильм и короткие версии под отдельные задачи.", "A widescreen brand film and shorter edits for specific uses.", "Un film de marque horizontal et des versions courtes pour différents usages.", "Un film di brand orizzontale e versioni brevi per esigenze specifiche."],
  ["Сайт, презентации, реклама, выставки и экраны внутри пространства.", "Website, presentations, ads, exhibitions and screens within the venue.", "Site web, présentations, publicité, salons et écrans sur place.", "Sito, presentazioni, pubblicità, fiere e schermi all'interno dello spazio."],
  ["Здесь показан фотокадр как пример визуального настроения. Видеофрагмент проекта добавим, когда будет утверждён материал для публикации.", "The photograph here shows the visual mood. We'll add a film excerpt once the material is approved for publication.", "Cette photo donne une idée de l'ambiance visuelle. Nous ajouterons un extrait vidéo une fois sa publication approuvée.", "Questa fotografia mostra l'atmosfera visiva. Aggiungeremo un estratto video quando il materiale sarà approvato per la pubblicazione."],
  ["Визуальный ориентир из фотосъёмки", "Visual reference from our photo shoot", "Repère visuel issu de notre séance photo", "Riferimento visivo dal nostro servizio fotografico"],
  ["Вертикальные истории, которые хочется досмотреть.", "Vertical stories worth watching to the end.", "Des histoires verticales qu'on regarde jusqu'au bout.", "Storie verticali da guardare fino alla fine."],
  ["Снимаем короткие сцены из ракурса гостя. Без заученного восторга: человек приехал, заметил, попробовал, остался. Такой материал помогает зрителю представить себя у вас.", "We film short scenes from a guest's point of view. No rehearsed enthusiasm: someone arrives, notices, tastes and stays. It helps viewers picture themselves there.", "Nous filmons de courtes scènes du point de vue du client. Sans enthousiasme joué : une personne arrive, observe, goûte et reste. Le spectateur peut alors s'imaginer chez vous.", "Giriamo brevi scene dal punto di vista dell'ospite. Senza entusiasmo recitato: arriva, osserva, assaggia, rimane. Così chi guarda può immaginarsi lì."],
  ["Вертикальные ролики, UGC-сюжеты и короткие фрагменты для регулярных публикаций.", "Vertical clips, UGC-style stories and short edits for regular posting.", "Vidéos verticales, récits de style UGC et extraits courts pour publier régulièrement.", "Video verticali, storie in stile UGC e brevi clip per pubblicazioni regolari."],
  ["Reels, Shorts, социальные сети и рекламные размещения.", "Reels, Shorts, social media and advertising.", "Reels, Shorts, réseaux sociaux et publicité.", "Reels, Shorts, social media e pubblicità."],
  ["Выбрать интонацию истории", "Choose your story's tone", "Choisir le ton de votre histoire", "Scegli il tono della tua storia"],
  ["Момент в ресторане отеля", "A moment in the hotel restaurant", "Un instant au restaurant de l'hôtel", "Un momento nel ristorante dell'hotel"],
  ["Фотопример гостевого сценария", "Photo example of a guest experience", "Exemple photo d'un parcours client", "Esempio fotografico dell'esperienza di un ospite"],
  ["Как это происходит", "How it works", "Comment ça se passe", "Come funziona"],
  ["Знакомимся", "We get acquainted", "Nous faisons connaissance", "Ci conosciamo"],
  ["Вы рассказываете о месте, задачах и материалах, которые уже есть. Мы вместе определяем, чего не хватает.", "You tell us about your place, your goals and the materials you already have. Together we work out what's missing.", "Vous nous parlez de votre lieu, de vos objectifs et des contenus existants. Ensemble, nous voyons ce qui manque.", "Ci racconti il tuo luogo, i tuoi obiettivi e i materiali che hai già. Insieme capiamo cosa manca."],
  ["Готовим историю", "We shape the story", "Nous préparons l'histoire", "Prepariamo la storia"],
  ["Согласуем сцены, локации, ритм съёмки и форматы, чтобы в день работы всё было понятно.", "We agree on scenes, locations, pace and formats, so everything is clear on the day of the shoot.", "Nous définissons les scènes, les lieux, le rythme et les formats pour que tout soit clair le jour du tournage.", "Concordiamo scene, luoghi, ritmo e formati, così il giorno delle riprese è tutto chiaro."],
  ["Снимаем и собираем", "We shoot and edit", "Nous tournons et assemblons", "Giriamo e montiamo"],
  ["Работаем небольшой командой, затем отбираем и готовим материалы для согласованных каналов.", "We work as a small team, then select and prepare the material for the agreed channels.", "Nous travaillons en petite équipe, puis sélectionnons et préparons les contenus pour les canaux convenus.", "Lavoriamo con un piccolo team, poi selezioniamo e prepariamo i materiali per i canali concordati."],
  ["Не уверены, какой формат нужен?", "Not sure which format you need?", "Vous hésitez sur le format ?", "Non sai quale formato ti serve?"],
  ["Так и напишите. Начнём с задачи и подберём съёмку под неё.", "Just tell us. We'll start with your goal and plan the shoot around it.", "Dites-le-nous simplement. Nous partirons de votre objectif pour imaginer la prise de vue.", "Scrivicelo. Partiremo dal tuo obiettivo e organizzeremo le riprese di conseguenza."],
  ["Обсудить задачу", "Discuss your project", "Parler de votre projet", "Parliamo del progetto"],
  ["Четыре визуальные интонации съёмки и повествования для брендов гостеприимства.", "Four visual approaches to shooting and storytelling for hospitality brands.", "Quatre approches visuelles pour photographier et raconter les marques de l'hospitalité.", "Quattro modi visivi di riprendere e raccontare i brand dell'ospitalità."],
  ["Стили съёмки — AEMUSE", "Shooting styles — AEMUSE", "Styles de prise de vue — AEMUSE", "Stili di ripresa — AEMUSE"],
  ["У каждого места", "Every place", "Chaque lieu", "Ogni luogo"],
  ["своя история.", "has its own story.", "a son histoire.", "ha la sua storia."],
  ["Мы помогаем показать её в фото и видео: через атмосферу, людей и моменты, ради которых гости возвращаются.", "We help tell it through photos and films: through atmosphere, people and the moments that bring guests back.", "Nous vous aidons à la raconter en photo et en vidéo : par l'atmosphère, les personnes et les instants qui donnent envie de revenir.", "Ti aiutiamo a raccontarla in foto e video: attraverso l'atmosfera, le persone e i momenti per cui gli ospiti tornano."],
  ["Посмотреть направления", "Explore the approaches", "Découvrir les approches", "Scopri gli approcci"],
  ["Гостья наблюдает за городом из номера", "A guest looks over the city from her room", "Une cliente regarde la ville depuis sa chambre", "Un'ospite guarda la città dalla sua camera"],
  ["Как можно рассказать о вашем месте", "How to tell the story of your place", "Comment raconter votre lieu", "Come raccontare il tuo luogo"],
  ["Вот четыре подхода к съёмке. Мы можем выбрать один или соединить несколько. Все фотографии на странице — из одной нашей съёмки Ararat Park Hyatt; они показывают разные способы рассказать историю.", "Here are four approaches to a shoot. We can choose one or combine several. Every photograph on this page comes from one Ararat Park Hyatt shoot and shows a different way to tell a story.", "Voici quatre façons d'aborder une prise de vue. Nous pouvons en choisir une ou en mêler plusieurs. Toutes les photos viennent d'une même séance à l'Ararat Park Hyatt et montrent différentes façons de raconter un lieu.", "Ecco quattro approcci alle riprese. Possiamo sceglierne uno o combinarne diversi. Tutte le fotografie provengono da un unico servizio all'Ararat Park Hyatt e mostrano modi diversi di raccontare una storia."],
  ["Тихое утро в гостиничном номере", "A quiet morning in a hotel room", "Un matin calme dans une chambre d'hôtel", "Un mattino tranquillo in una camera d'hotel"],
  ["Тихое присутствие.", "Quiet presence.", "Présence discrète.", "Presenza discreta."],
  ["Когда бренд хочет, чтобы гость замедлился ещё до приезда.", "When you want guests to slow down before they even arrive.", "Quand votre marque invite à ralentir avant même l'arrivée.", "Quando vuoi che gli ospiti rallentino ancora prima di arrivare."],
  ["Мягкий свет, паузы, воздух, детали, в которых чувствуется забота. Камера наблюдает, а не требует внимания.", "Soft light, pauses, breathing room and details that show care. The camera observes without demanding attention.", "Lumière douce, pauses, espace et détails attentionnés. La caméra observe sans réclamer l'attention.", "Luce morbida, pause, respiro e dettagli che parlano di cura. La camera osserva senza chiedere attenzione."],
  ["SPA, загородному отелю, камерному курорту, месту для восстановления.", "A spa, country hotel, intimate resort or a place to recharge.", "Un spa, un hôtel de campagne, un petit resort ou un lieu de ressourcement.", "Una spa, un hotel di campagna, un resort raccolto o un luogo dove rigenerarsi."],
  ["Не «у нас лучший отдых», а «здесь можно наконец никуда не спешить».", "Not 'the best stay ever', but 'here, you can finally take your time'.", "Pas « le meilleur séjour », mais « ici, on peut enfin prendre son temps ».", "Non « il soggiorno migliore », ma « qui puoi finalmente prenderti il tuo tempo »."],
  ["Утро в номере, текстуры, воду, жесты команды, пространство без суеты.", "Mornings in the room, textures, water, the team's gestures and spaces without hurry.", "Le matin dans la chambre, les textures, l'eau, les gestes de l'équipe et des espaces sans agitation.", "Il mattino in camera, le texture, l'acqua, i gesti del team e spazi senza fretta."],
  ["Чемодан приехавшего гостя", "A newly arrived guest's suitcase", "La valise d'un client tout juste arrivé", "La valigia di un ospite appena arrivato"],
  ["Один день гостя.", "A day in a guest's life.", "Une journée de client.", "Un giorno da ospite."],
  ["Когда человеку нужно представить себя внутри вашего места.", "When someone needs to picture themselves in your place.", "Quand il faut aider une personne à s'imaginer chez vous.", "Quando una persona deve riuscire a immaginarsi nel tuo luogo."],
  ["Есть начало, маленькие открытия и финальное ощущение. История движется от приезда к завтраку, прогулке, ужину или отдыху.", "There is a beginning, small discoveries and a feeling that stays. The story moves from arrival to breakfast, a walk, dinner or rest.", "Il y a un début, de petites découvertes et une sensation qui demeure. L'histoire va de l'arrivée au petit déjeuner, à la promenade, au dîner ou au repos.", "C'è un inizio, piccole scoperte e una sensazione che rimane. La storia passa dall'arrivo alla colazione, a una passeggiata, alla cena o al riposo."],
  ["Городскому отелю, резорту, глэмпингу, новому пространству, которое важно объяснить.", "A city hotel, resort, glamping site or a new place that needs an introduction.", "Un hôtel urbain, un resort, un glamping ou un nouveau lieu à faire découvrir.", "Un hotel in città, un resort, un glamping o un nuovo spazio da far conoscere."],
  ["От первого лица: «Приехали без плана. Остались ради ещё одного утра».", "In the guest's voice: 'We arrived without a plan. We stayed for one more morning.'", "À la première personne : « Nous sommes arrivés sans programme. Nous sommes restés pour un matin de plus. »", "In prima persona: « Siamo arrivati senza programmi. Siamo rimasti per un altro mattino. »"],
  ["Маршрут гостя, переходы между пространствами, реальное пользование сервисом.", "The guest's journey, transitions between spaces and real moments of service.", "Le parcours du client, les passages entre les espaces et l'usage réel des services.", "Il percorso dell'ospite, i passaggi tra gli spazi e i veri momenti di servizio."],
  ["Живой момент сервиса в ресторане", "A real moment of restaurant service", "Un moment de service au restaurant", "Un vero momento di servizio al ristorante"],
  ["Люди и ритуалы.", "People and rituals.", "Personnes et rituels.", "Persone e rituali."],
  ["Когда главное отличие бренда — в том, как здесь встречают.", "When the difference is in the way you welcome people.", "Quand ce qui vous distingue, c'est votre façon d'accueillir.", "Quando la differenza sta nel modo in cui accogli le persone."],
  ["Не постановочные улыбки, а настоящие действия: приготовить, подать, подсказать, заметить. Такие сцены раскрывают человеческую сторону сервиса.", "No staged smiles, just real actions: preparing, serving, guiding and noticing. These scenes reveal the human side of service.", "Pas de sourires posés, mais des gestes vrais : préparer, servir, conseiller, remarquer. Ces scènes révèlent la dimension humaine du service.", "Niente sorrisi in posa, ma gesti veri: preparare, servire, consigliare, notare. Queste scene mostrano il lato umano del servizio."],
  ["Ресторану, бару, семейному отелю, бренду с сильной командой.", "A restaurant, bar, family hotel or brand with a strong team.", "Un restaurant, un bar, un hôtel familial ou une marque portée par son équipe.", "Un ristorante, un bar, un hotel familiare o un brand con un team forte."],
  ["Через жесты и детали: «Мы помним, как вы любите начинать утро».", "Through gestures and details: 'We remember how you like to start your morning.'", "Par les gestes et les détails : « Nous savons comment vous aimez commencer la journée. »", "Attraverso gesti e dettagli: « Ricordiamo come ti piace iniziare la giornata. »"],
  ["Работу команды, кухню, подачу, встречу, моменты между людьми.", "The team at work, the kitchen, serving, welcoming and moments between people.", "L'équipe au travail, la cuisine, le service, l'accueil et les moments de rencontre.", "Il team al lavoro, la cucina, il servizio, l'accoglienza e i momenti tra le persone."],
  ["Вечерний свет на террасе отеля", "Evening light on the hotel terrace", "La lumière du soir sur la terrasse de l'hôtel", "La luce della sera sulla terrazza dell'hotel"],
  ["Вечер как кино.", "An evening like a film.", "Le soir comme au cinéma.", "Una sera da film."],
  ["Когда атмосфера — часть причины приехать.", "When the atmosphere is a reason to come.", "Quand l'atmosphère fait partie du voyage.", "Quando l'atmosfera è uno dei motivi per venire."],
  ["Контраст света, город за окном, музыка пространства, смена настроения к вечеру. Более выразительный визуальный язык, но всё ещё узнаваемый именно вашим.", "Contrasting light, the city outside, the music of the space, a changing mood at dusk. A more expressive visual language that still feels unmistakably yours.", "Jeux de lumière, ville derrière la fenêtre, musique du lieu, atmosphère qui change au soir. Un langage visuel plus expressif, toujours fidèle à votre identité.", "Contrasti di luce, la città fuori, la musica dello spazio, l'atmosfera che cambia la sera. Un linguaggio visivo più espressivo, ma sempre riconoscibilmente tuo."],
  ["Бутик-отелю, бару, ресторану, городскому направлению.", "A boutique hotel, bar, restaurant or urban destination.", "Un boutique-hôtel, un bar, un restaurant ou une destination urbaine.", "Un boutique hotel, un bar, un ristorante o una destinazione urbana."],
  ["Без громких обещаний: «У этого вечера свой адрес».", "Without big promises: 'This evening has an address.'", "Sans grandes promesses : « Cette soirée a son adresse. »", "Senza grandi promesse: « Questa sera ha un indirizzo. »"],
  ["Вечерние сцены, движение, свет, архитектуру и близкие детали.", "Evening scenes, movement, light, architecture and intimate details.", "Scènes du soir, mouvement, lumière, architecture et détails intimes.", "Scene serali, movimento, luce, architettura e dettagli ravvicinati."],
  ["Как выбрать направление?", "Which approach fits?", "Quelle approche choisir ?", "Quale approccio scegliere?"],
  ["Нужно объяснить новое место?", "Introducing a new place?", "Vous présentez un nouveau lieu ?", "Devi presentare un luogo nuovo?"],
  ["Начните с истории гостя: она проведёт зрителя через весь опыт.", "Start with a guest's story: it guides the viewer through the whole experience.", "Commencez par l'histoire d'un client : elle fera découvrir toute l'expérience.", "Inizia dalla storia di un ospite: accompagnerà chi guarda lungo tutta l'esperienza."],
  ["Есть сильный сервис?", "Is service your strength?", "Votre force, c'est le service ?", "Il servizio è il tuo punto di forza?"],
  ["Покажем людей и ритуалы, которые делают вас узнаваемыми.", "We'll show the people and rituals that make you recognizable.", "Nous montrerons les personnes et les rituels qui vous rendent reconnaissable.", "Mostreremo le persone e i rituali che ti rendono riconoscibile."],
  ["Продаёте состояние?", "Selling a feeling?", "Vous vendez une sensation ?", "Vuoi trasmettere un'emozione?"],
  ["Тихое присутствие или вечерняя атмосфера передадут его лучше списка удобств.", "Quiet presence or an evening atmosphere can convey it better than a list of amenities.", "Une présence discrète ou une ambiance du soir le dira mieux qu'une liste d'équipements.", "Una presenza discreta o l'atmosfera della sera lo raccontano meglio di un elenco di servizi."],
  ["Найти вашу интонацию вместе", "Find your tone together", "Trouver votre ton ensemble", "Troviamo insieme il tuo tono"],
  ["Реальные фотографии и проект AEMUSE для Ararat Park Hyatt.", "Real photographs and an AEMUSE project for Ararat Park Hyatt.", "De vraies photos et un projet AEMUSE pour l'Ararat Park Hyatt.", "Fotografie reali e un progetto AEMUSE per l'Ararat Park Hyatt."],
  ["Работы — AEMUSE", "Work — AEMUSE", "Réalisations — AEMUSE", "Lavori — AEMUSE"],
  ["Вечерний кадр съёмки Ararat Park Hyatt", "An evening frame from the Ararat Park Hyatt shoot", "Une image du soir de notre séance à l'Ararat Park Hyatt", "Uno scatto serale del servizio all'Ararat Park Hyatt"],
  ["Работы, в которых", "Work that lets you", "Des images qui", "Lavori che fanno"],
  ["чувствуется место.", "feel the place.", "font ressentir un lieu.", "sentire un luogo."],
  ["Мы показываем не только результат, но и то, как строится визуальная история.", "We show not only the result, but how a visual story takes shape.", "Nous montrons le résultat, mais aussi la façon dont se construit une histoire visuelle.", "Mostriamo non solo il risultato, ma anche come prende forma una storia visiva."],
  ["Сейчас здесь один опубликованный проект.", "For now, there is one published project here.", "Pour le moment, un seul projet est publié ici.", "Per ora qui c'è un solo progetto pubblicato."],
  ["Вместо выдуманного каталога — честный подробный взгляд на съёмку Ararat Park Hyatt. В ней можно увидеть разные задачи: пространство, жизнь гостя, сервис и настроение.", "Rather than an invented portfolio, here's an honest, detailed look at our Ararat Park Hyatt shoot. It covers space, guest life, service and atmosphere.", "Plutôt qu'un portfolio inventé, voici un regard sincère et détaillé sur notre séance à l'Ararat Park Hyatt : les espaces, la vie des clients, le service et l'atmosphère.", "Invece di un portfolio inventato, ecco uno sguardo sincero e dettagliato sul nostro lavoro all'Ararat Park Hyatt: spazi, vita degli ospiti, servizio e atmosfera."],
  ["Ararat Park Hyatt · Москва", "Ararat Park Hyatt · Moscow", "Ararat Park Hyatt · Moscou", "Ararat Park Hyatt · Mosca"],
  ["Один день, к которому хочется вернуться.", "A day you'd like to live again.", "Une journée qu'on aimerait revivre.", "Un giorno da rivivere."],
  ["Номера, ресторан, город, детали и гость внутри этой истории.", "Rooms, restaurant, city, details and a guest at the heart of the story.", "Chambres, restaurant, ville, détails et un client au cœur de l'histoire.", "Camere, ristorante, città, dettagli e un ospite al centro della storia."],
  ["Смотреть проект ↗", "Explore the project ↗", "Découvrir le projet ↗", "Scopri il progetto ↗"],
  ["Истории внутри одного проекта", "Stories within one project", "Plusieurs histoires dans un projet", "Storie dentro un solo progetto"],
  ["Разные сюжеты одной съёмки помогают увидеть, какой материал можно собрать для вашего бренда.", "Different stories from one shoot show the range of material we could create for your brand.", "Les différents récits d'une même séance montrent ce que nous pouvons créer pour votre marque.", "I diversi racconti di un solo servizio mostrano cosa potremmo creare per il tuo brand."],
  ["Чемодан гостя в номере", "A guest's suitcase in the room", "La valise d'un client dans sa chambre", "La valigia di un ospite in camera"],
  ["Приезд и первое впечатление", "Arrival and first impressions", "Arrivée et premières impressions", "Arrivo e prime impressioni"],
  ["Гостья утром в номере", "A guest in her room in the morning", "Une cliente dans sa chambre le matin", "Un'ospite in camera al mattino"],
  ["Номер как часть истории", "The room as part of the story", "La chambre dans l'histoire", "La camera come parte della storia"],
  ["Сервис в ресторане", "Restaurant service", "Le service au restaurant", "Il servizio al ristorante"],
  ["Люди и сервис", "People and service", "Personnes et service", "Persone e servizio"],
  ["Вечер на террасе", "Evening on the terrace", "Le soir sur la terrasse", "La sera in terrazza"],
  ["Настроение вечера", "Evening atmosphere", "L'atmosphère du soir", "L'atmosfera della sera"],
  ["Хотите такую же цельную историю о своём месте?", "Want a complete story about your place?", "Envie d'une histoire aussi complète pour votre lieu ?", "Vuoi una storia così completa per il tuo luogo?"],
  ["Расскажите, что важно показать. Мы предложим с чего начать.", "Tell us what matters most. We'll suggest where to begin.", "Dites-nous ce qu'il faut montrer. Nous vous proposerons un point de départ.", "Raccontaci cosa conta di più. Ti suggeriremo da dove iniziare."],
  ["Обсудить съёмку", "Discuss a shoot", "Parler d'une séance", "Parliamo delle riprese"],
  ["Екатерина и Андрей Ефимовы — творческий дуэт AEMUSE.", "Ekaterina and Andrey Efimov are the creative duo behind AEMUSE.", "Ekaterina et Andrey Efimov forment le duo créatif d'AEMUSE.", "Ekaterina e Andrey Efimov sono il duo creativo di AEMUSE."],
  ["О нас — AEMUSE", "About us — AEMUSE", "À propos — AEMUSE", "Chi siamo — AEMUSE"],
  ["В кадре", "In the frame", "Dans l'image", "Nell'inquadratura"],
  ["и за кадром —", "and behind it —", "et derrière —", "e dietro —"],
  ["только мы двое.", "just the two of us.", "nous sommes deux.", "ci siamo solo noi due."],
  ["Мы — Екатерина и Андрей Ефимовы. Сами придумываем, снимаем и собираем истории для отелей, ресторанов и мест, в которые хочется возвращаться.", "We're Ekaterina and Andrey Efimov. We dream up, shoot and edit stories ourselves for hotels, restaurants and places people want to return to.", "Nous sommes Ekaterina et Andrey Efimov. Nous imaginons, tournons et assemblons nous-mêmes des histoires pour les hôtels, les restaurants et les lieux où l'on veut revenir.", "Siamo Ekaterina e Andrey Efimov. Ideiamo, giriamo e montiamo personalmente storie per hotel, ristoranti e luoghi in cui si desidera tornare."],
  ["Нам интересно, как живёт ваше место.", "We're curious about the life of your place.", "La vie de votre lieu nous intéresse.", "Ci interessa la vita del tuo luogo."],
  ["Прежде чем доставать камеру, мы смотрим: как сюда входят, где задерживаются, что замечают, каким получается утро и какой вечер. Так в кадре появляется не абстрактная «красота», а характер именно вашего бренда.", "Before we pick up the camera, we watch: how people arrive, where they linger, what they notice, what mornings and evenings feel like. That way the frame reveals your brand's character, not some abstract idea of beauty.", "Avant de sortir la caméra, nous observons : comment on arrive, où l'on s'attarde, ce que l'on remarque, comment se vivent les matins et les soirs. Ainsi, l'image révèle le caractère de votre marque, pas une beauté abstraite.", "Prima di prendere la camera osserviamo: come si arriva, dove ci si ferma, cosa si nota, come sono i mattini e le sere. Così l'immagine rivela il carattere del tuo brand, non una bellezza astratta."],
  ["Работать вместе просто", "Working together is simple", "Travailler ensemble est simple", "Lavorare insieme è semplice"],
  ["Говорим", "We talk", "Nous échangeons", "Parliamo"],
  ["Вы рассказываете, что меняется в бренде, кому нужны материалы и где они будут жить.", "You tell us what's changing in your brand, who needs the content and where it will live.", "Vous nous dites ce qui change pour votre marque, à qui s'adressent les contenus et où ils seront diffusés.", "Ci racconti cosa sta cambiando nel tuo brand, a chi servono i contenuti e dove verranno usati."],
  ["Придумываем", "We imagine", "Nous imaginons", "Immaginiamo"],
  ["Находим визуальную интонацию, сцены и форматы. Согласуем план, чтобы на площадке не было лишней суеты.", "We find the visual tone, scenes and formats. We agree on a plan so the shoot runs smoothly.", "Nous trouvons le ton visuel, les scènes et les formats. Nous validons un plan pour tourner sereinement.", "Troviamo il tono visivo, le scene e i formati. Concordiamo un piano per girare senza inutili complicazioni."],
  ["Снимаем", "We shoot", "Nous tournons", "Giriamo"],
  ["Держим в кадре и атмосферу, и практические задачи. Подстраиваемся под ритм пространства.", "We keep both atmosphere and practical goals in the frame. We work with the rhythm of the place.", "Nous gardons en tête l'atmosphère et vos besoins pratiques. Nous suivons le rythme du lieu.", "Teniamo presenti sia l'atmosfera sia gli obiettivi pratici. Seguiamo il ritmo del luogo."],
  ["Собираем", "We edit", "Nous assemblons", "Montiamo"],
  ["Отбираем и готовим материалы в согласованных форматах, чтобы ими было удобно пользоваться.", "We select and prepare the material in agreed formats, ready for you to use.", "Nous sélectionnons et préparons les contenus dans les formats convenus, prêts à être utilisés.", "Selezioniamo e prepariamo i materiali nei formati concordati, pronti da usare."],
  ["Момент съёмки сервиса отеля", "Filming a moment of hotel service", "Un moment de service filmé à l'hôtel", "Un momento del servizio in hotel durante le riprese"],
  ["Мы не просим место становиться декорацией.", "We don't ask a place to become a set.", "Nous ne demandons pas à un lieu de devenir un décor.", "Non chiediamo a un luogo di diventare una scenografia."],
  ["Нам важна его настоящая жизнь. Именно она делает фото и видео убедительными.", "What matters is its real life. That's what makes photos and films convincing.", "Ce qui compte, c'est sa vraie vie. C'est elle qui rend les photos et les films convaincants.", "Conta la sua vita vera. È questo che rende foto e video convincenti."],
  ["Посмотреть работы", "See our work", "Voir nos réalisations", "Guarda i nostri lavori"],
  ["Познакомимся?", "Shall we meet?", "On fait connaissance ?", "Ci conosciamo?"],
  ["Расскажите о своём месте и задаче. Мы ответим лично.", "Tell us about your place and your project. We'll reply personally.", "Parlez-nous de votre lieu et de votre projet. Nous vous répondrons personnellement.", "Raccontaci il tuo luogo e il tuo progetto. Ti risponderemo personalmente."],
  ["Написать нам", "Write to us", "Nous écrire", "Scrivici"],
  ["Фотографическая история AEMUSE для Ararat Park Hyatt.", "An AEMUSE photographic story for Ararat Park Hyatt.", "Une histoire photographique AEMUSE pour l'Ararat Park Hyatt.", "Una storia fotografica AEMUSE per l'Ararat Park Hyatt."],
  ["Ararat Park Hyatt — работа AEMUSE", "Ararat Park Hyatt — an AEMUSE project", "Ararat Park Hyatt — un projet AEMUSE", "Ararat Park Hyatt — un progetto AEMUSE"],
  ["Гостья в баре Ararat Park Hyatt", "A guest at the Ararat Park Hyatt bar", "Une cliente au bar de l'Ararat Park Hyatt", "Un'ospite al bar dell'Ararat Park Hyatt"],
  ["← Все работы", "← All work", "← Toutes les réalisations", "← Tutti i lavori"],
  ["Ararat Park Hyatt.", "Ararat Park Hyatt.", "Ararat Park Hyatt.", "Ararat Park Hyatt."],
  ["Москва. Фотографическая история о пространстве, ритме и жизни гостя.", "Moscow. A photographic story about space, rhythm and a guest's experience.", "Moscou. Une histoire photographique d'espace, de rythme et de vie d'un client.", "Mosca. Una storia fotografica di spazi, ritmo e vita di un ospite."],
  ["У отеля есть свой ритм. Мы шли за ним.", "The hotel has its own rhythm. We followed it.", "L'hôtel a son propre rythme. Nous l'avons suivi.", "L'hotel ha un ritmo tutto suo. Noi lo abbiamo seguito."],
  ["В одном проекте соединились тихое утро, город за окном, детали номера, ресторан и вечер. Эти кадры показывают, как бренд может говорить о себе через прожитые моменты, а не только через перечень удобств.", "One project brings together a quiet morning, the city outside, details of the room, the restaurant and the evening. These images show how a brand can speak through lived moments, not just a list of amenities.", "Un même projet réunit un matin calme, la ville derrière la fenêtre, les détails de la chambre, le restaurant et le soir. Ces images montrent comment une marque peut parler d'elle à travers des instants vécus, au-delà d'une liste d'équipements.", "Un solo progetto unisce un mattino tranquillo, la città fuori dalla finestra, i dettagli della camera, il ristorante e la sera. Queste immagini mostrano come un brand possa raccontarsi attraverso momenti vissuti, non solo con un elenco di servizi."],
  ["Ниже — фотографии из нашей съёмки. Это подборка визуальных сюжетов, а не заявление о результатах кампании или эффективности размещения.", "Below are photographs from our shoot: a selection of visual stories, not a claim about campaign results or performance.", "Voici des photos de notre séance : une sélection de récits visuels, sans prétention quant aux résultats d'une campagne.", "Qui trovi fotografie del nostro servizio: una selezione di storie visive, non una dichiarazione sui risultati di una campagna."],
  ["Приехать.", "Arrive.", "Arriver.", "Arrivare."],
  ["Первый взгляд на пространство. Багаж уже в номере, можно выдохнуть и освоиться.", "A first look at the space. The luggage is in the room; it's time to breathe and settle in.", "Premier regard sur le lieu. Les bagages sont dans la chambre ; on peut souffler et prendre ses marques.", "Il primo sguardo allo spazio. I bagagli sono in camera; è tempo di respirare e ambientarsi."],
  ["Чемодан в интерьере номера", "A suitcase in the hotel room", "Une valise dans la chambre", "Una valigia nella camera"],
  ["Остаться на утро.", "Stay for the morning.", "Rester jusqu'au matin.", "Restare fino al mattino."],
  ["Комната становится живой, когда в ней есть человек, свет и время для себя.", "A room comes alive with a person, light and time to oneself.", "Une chambre prend vie avec une personne, de la lumière et du temps pour soi.", "Una camera prende vita con una persona, la luce e il tempo per sé."],
  ["Утро гостьи в гостиничном номере", "A guest's morning in her hotel room", "Le matin d'une cliente dans sa chambre d'hôtel", "Il mattino di un'ospite nella sua camera d'hotel"],
  ["Детали гостевого опыта", "Details of the guest experience", "Détails de l'expérience client", "Dettagli dell'esperienza dell'ospite"],
  ["Завтрак и детали сервиса", "Breakfast and service details", "Petit déjeuner et détails du service", "Colazione e dettagli del servizio"],
  ["Почувствовать заботу.", "Feel cared for.", "Se sentir bien accueilli.", "Sentirsi accolti."],
  ["Ресторан и сервис раскрываются через действия и детали, которые гость запоминает.", "The restaurant and its service come to life through the gestures and details a guest remembers.", "Le restaurant et le service se révèlent dans les gestes et les détails dont le client se souvient.", "Il ristorante e il servizio prendono vita nei gesti e nei dettagli che l'ospite ricorda."],
  ["Момент сервиса в ресторане", "A moment of restaurant service", "Un moment de service au restaurant", "Un momento di servizio al ristorante"],
  ["Не торопить вечер.", "Let the evening linger.", "Laisser durer la soirée.", "Lasciare che la sera duri."],
  ["Когда город меняет свет, история отеля становится другой.", "As the city's light changes, so does the hotel's story.", "Quand la lumière de la ville change, l'histoire de l'hôtel prend une autre couleur.", "Quando cambia la luce della città, cambia anche la storia dell'hotel."],
  ["Вечер на террасе Ararat Park Hyatt", "Evening on the Ararat Park Hyatt terrace", "Le soir sur la terrasse de l'Ararat Park Hyatt", "La sera sulla terrazza dell'Ararat Park Hyatt"],
  ["Гостья у окна с видом на город", "A guest by the window overlooking the city", "Une cliente près d'une fenêtre donnant sur la ville", "Un'ospite alla finestra con vista sulla città"],
  ["Какую историю можно найти у вас?", "What story could we find at your place?", "Quelle histoire pourrions-nous trouver chez vous ?", "Quale storia potremmo trovare da te?"],
  ["Она уже есть в вашем пространстве и людях. Давайте посмотрим на неё вместе.", "It's already there in your space and your people. Let's discover it together.", "Elle existe déjà dans vos espaces et vos équipes. Découvrons-la ensemble.", "È già lì, nei tuoi spazi e nelle tue persone. Scopriamola insieme."],
  ["Обсудить ваш проект", "Discuss your project", "Parler de votre projet", "Parliamo del tuo progetto"],
  ["Расскажите AEMUSE о своём отеле или ресторане и обсудите съёмку.", "Tell AEMUSE about your hotel or restaurant and discuss a shoot.", "Parlez de votre hôtel ou restaurant à AEMUSE et échangeons sur une prise de vue.", "Racconta ad AEMUSE il tuo hotel o ristorante e parliamo delle riprese."],
  ["Контакты — AEMUSE", "Contact — AEMUSE", "Contact — AEMUSE", "Contatti — AEMUSE"],
  ["Поговорим", "Let's talk", "Parlons", "Parliamo"],
  ["о вашем месте.", "about your place.", "de votre lieu.", "del tuo luogo."],
  ["Не обязательно приходить с готовым техническим заданием. Расскажите, что хочется показать и для чего нужны материалы. Мы предложим, с какой истории начать.", "You don't need a finished brief. Tell us what you'd like to show and where the material will be used. We'll suggest a story to start with.", "Pas besoin d'un brief tout prêt. Dites-nous ce que vous aimeriez montrer et à quoi serviront les images. Nous vous proposerons une histoire pour commencer.", "Non serve un brief già pronto. Raccontaci cosa vorresti mostrare e a cosa serviranno i materiali. Ti suggeriremo una storia da cui iniziare."],
  ["Или позвоните: +7 963 637 46 46", "Or call: +7 963 637 46 46", "Ou appelez-nous : +7 963 637 46 46", "Oppure chiama: +7 963 637 46 46"],
  ["Что можно написать в первом письме", "What to include in your first email", "Que nous dire dans votre premier message", "Cosa scrivere nella prima email"],
  ["Как называется ваше место и где оно находится.", "The name and location of your place.", "Le nom de votre lieu et où il se trouve.", "Il nome del tuo luogo e dove si trova."],
  ["Какие материалы нужны сейчас: фото, фильм, короткие ролики или всё вместе.", "What you need now: photos, a film, short clips or a mix.", "Ce dont vous avez besoin aujourd'hui : photos, film, vidéos courtes ou un peu de tout.", "Cosa ti serve ora: foto, un film, video brevi o un po' di tutto."],
  ["Где вы планируете их показывать и есть ли желаемые даты съёмки.", "Where you plan to use the material and whether you have preferred shoot dates.", "Où vous souhaitez diffuser les contenus et si vous avez des dates de tournage en tête.", "Dove prevedi di usare i materiali e se hai già delle date per le riprese."],
  ["Если пока знаете только одно — что текущие фотографии не передают ваше ощущение от места — этого уже достаточно для начала разговора.", "If all you know is that your current images don't feel like your place, that's enough to start a conversation.", "Si vous savez simplement que vos photos actuelles ne traduisent pas l'esprit du lieu, cela suffit pour commencer à parler.", "Se sai solo che le foto attuali non restituiscono l'essenza del tuo luogo, basta per iniziare a parlarne."],
];

const codes = ['ru', 'en', 'fr', 'it'];
const dictionary = new Map(copy.map(([ru, en, fr, it]) => [ru, { en, fr, it }]));
const originalTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const originalDescription = description?.content;
const originalText = new Map();
const originalAttributes = new Map();
const originalLinks = new Map();
const normalize = value => value.trim().replace(/\s+/g, ' ');
const translate = (value, language) => language === 'ru' ? value : dictionary.get(normalize(value))?.[language] ?? value;

const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (!node.parentElement?.closest('script,style,.lang-options,.lang-current') && /[А-Яа-яЁё]/.test(node.nodeValue)) {
    originalText.set(node, node.nodeValue);
  }
}
document.querySelectorAll('[alt],[aria-label],[title]').forEach(element => {
  const values = {};
  for (const attribute of ['alt', 'aria-label', 'title']) {
    if (element.hasAttribute(attribute)) values[attribute] = element.getAttribute(attribute);
  }
  originalAttributes.set(element, values);
});
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (/\.html(?:[?#]|$)/.test(href)) originalLinks.set(link, href);
});

const control = document.querySelector('.lang-control');
const trigger = control.querySelector('.lang-trigger');
const options = control.querySelector('.lang-options');
const menuToggle = document.querySelector('.mp-menu-toggle');
let language = 'ru';
const setOptionsOpen = open => {
  trigger.setAttribute('aria-expanded', String(open));
  options.hidden = !open;
};
const syncMenuLabel = () => {
  const source = menuToggle.getAttribute('aria-expanded') === 'true' ? 'Закрыть меню' : 'Открыть меню';
  menuToggle.setAttribute('aria-label', translate(source, language));
};
window.aemuseI18n = { syncMenuLabel };

function setLanguage(next, updateUrl = false) {
  if (!codes.includes(next)) return;
  language = next;
  document.documentElement.lang = next;
  originalText.forEach((source, node) => {
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    node.nodeValue = leading + translate(source, next) + trailing;
  });
  originalAttributes.forEach((attributes, element) => {
    for (const [attribute, source] of Object.entries(attributes)) {
      if (element !== menuToggle || attribute !== 'aria-label') {
        element.setAttribute(attribute, translate(source, next));
      }
    }
  });
  document.title = translate(originalTitle, next);
  if (description) description.content = translate(originalDescription, next);
  document.querySelector('.lang-current').textContent = next.toUpperCase();
  document.querySelector('.lang-trigger .lang-flag').innerHTML = options.querySelector(`[data-lang="${next}"] .lang-flag`).innerHTML;
  options.querySelectorAll('[data-lang]').forEach(option => {
    option.setAttribute('aria-current', String(option.dataset.lang === next));
  });
  originalLinks.forEach((href, link) => {
    const url = new URL(href, location.href);
    if (next === 'ru') url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
  });
  syncMenuLabel();
  if (updateUrl) {
    const url = new URL(location.href);
    if (next === 'ru') url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    try { history.replaceState(null, '', url); } catch {}
  }
  try { localStorage.setItem('aemuse-language', next); } catch {}
}

let savedLanguage;
try { savedLanguage = localStorage.getItem('aemuse-language'); } catch {}
setLanguage(new URLSearchParams(location.search).get('lang') || savedLanguage || 'ru');
trigger.addEventListener('click', () => setOptionsOpen(options.hidden));
options.querySelectorAll('[data-lang]').forEach(option => option.addEventListener('click', () => {
  setLanguage(option.dataset.lang, true);
  setOptionsOpen(false);
  trigger.focus();
}));
document.addEventListener('click', event => {
  if (!control.contains(event.target)) setOptionsOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !options.hidden) {
    setOptionsOpen(false);
    trigger.focus();
  }
});
