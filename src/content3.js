/* ============================================================
   AUSTRIA – porady, dialogi, czytanka i pary Austria / Niemcy
   ============================================================ */
var UA = window.UA || (window.UA = {});

UA.TIPS.at_gruss = ['<b>Grüß Gott</b> to standardowe, uprzejme powitanie w całej Austrii (także w sklepie i urzędzie); <b>Servus</b> – na „ty”, na powitanie i pożegnanie.', '<b>Auf Wiederschauen</b> to austriacka forma „do widzenia” (w Niemczech: Auf Wiedersehen).', 'Austriacy chętnie używają tytułów: <b>Herr Magister</b>, <b>Frau Doktor</b>, <b>Herr Hofrat</b> – warto je zachować w korespondencji.'];
UA.TIPS.at_essen = ['W menu w Austrii przeczytasz <b>Erdäpfel, Paradeiser, Karfiol, Fisolen</b> – w Niemczech te same rzeczy to Kartoffeln, Tomaten, Blumenkohl, grüne Bohnen.', '23 austriacyzmy kulinarne (m.in. Erdäpfel, Marillen, Topfen, Schlagobers) chroni Protokół nr 10 do traktatu akcesyjnego Austrii z UE (1995).', 'Polskie <b>powidła</b> i <b>palacinki</b> mają wspólne środkowoeuropejskie korzenie z austriackim Powidl i Palatschinken – to kuchnia dawnej monarchii.'];
UA.TIPS.at_kaffee = ['Wiedeńska kultura kawiarniana jest na krajowej liście niematerialnego dziedzictwa UNESCO w Austrii (od 2011 r.).', 'Do kawy zawsze dostaniesz szklankę wody. Nad jedną melange możesz siedzieć godzinami – nikt nie popędza.', 'Kelnera woła się <b>Herr Ober!</b>; płacąc mówisz <b>Zahlen, bitte!</b>'];
UA.TIPS.at_alltag = ['Perfekt czasowników <b>sitzen, stehen, liegen</b> tworzy się w Austrii z <b>sein</b>: <i>ich bin gesessen, ich bin gestanden, ich bin gelegen</i> (w Niemczech północnych: habe).', 'Zdrobnienia na <b>-erl</b> (Sackerl, Zuckerl, Pickerl, Häferl) są typowo austriackie; w Niemczech: -chen (Tütchen).', 'Uwaga na pułapki: <b>Sessel</b> to w Austrii krzesło, <b>angreifen</b> – dotknąć, <b>Kasten</b> – szafa.', 'Miesiące: <b>Jänner</b> (styczeń) i <b>Feber</b> (luty) – Jänner obowiązuje w Austrii także w pismach urzędowych.'];
UA.TIPS.at_amt = ['Austria ma 9 krajów związkowych: Wien, Niederösterreich, Oberösterreich, Salzburg, Tirol, Vorarlberg, Kärnten, Steiermark, Burgenland.', 'Po przeprowadzce trzeba się zameldować w ciągu 3 dni (<b>Meldezettel</b>).', 'Parlament: <b>Nationalrat</b> (izba niższa) i <b>Bundesrat</b> (izba krajów); głowa państwa – <b>Bundespräsident</b>, szef rządu – <b>Bundeskanzler</b>.'];
UA.TIPS.at_geschichte = ['Akta namiestnictwa galicyjskiego są dziś w Centralnym Państwowym Archiwum Historycznym we Lwowie; akta centralne monarchii – w <b>Österreichisches Staatsarchiv</b> w Wiedniu (Haus-, Hof- und Staatsarchiv, Allgemeines Verwaltungsarchiv, Kriegsarchiv).', 'Skróty: <b>k. k.</b> (kaiserlich-königlich) – instytucje austriackiej połowy monarchii (Przedlitawii); <b>k. u. k.</b> – wspólne dla Austrii i Węgier (armia, dyplomacja).', 'Galicja miała od lat 60. XIX w. szeroką autonomię: polski język urzędowy, Sejm Krajowy we Lwowie, polskie uniwersytety w Krakowie i Lwowie.', 'Księgi metrykalne (Matriken) prowadzili w Austrii duchowni jako urzędnicy stanu cywilnego – w Galicji często po łacinie.'];

UA.DIALOGS.push(
  { id: 'kaffeehaus', unit: 'at_kaffee', t: 'W wiedeńskiej kawiarni', ua: 'Im Kaffeehaus', roles: ['Ober', 'Gast'], lines: [
    [0, 'Grüß Gott! Bitte schön?', 'Dzień dobry! Słucham?'],
    [1, 'Grüß Gott! Eine Melange und ein Glas Wasser, bitte.', 'Dzień dobry! Melange i szklankę wody, proszę.'],
    [0, 'Gern. Darf es auch eine Mehlspeise sein? Die Sachertorte ist heute ganz frisch.', 'Chętnie. Może też coś słodkiego? Tort Sachera jest dziś świeżutki.'],
    [1, 'Lieber einen Apfelstrudel mit Schlagobers.', 'Wolę strudel jabłkowy z bitą śmietaną.'],
    [0, 'Passt. Kommt sofort.', 'Dobrze. Zaraz podam.'],
    [1, 'Herr Ober, zahlen, bitte!', 'Panie kelnerze, płacę!'],
    [0, 'Das macht neun Euro achtzig.', 'Razem dziewięć euro osiemdziesiąt.'],
    [1, 'Zehn, passt so. Auf Wiederschauen!', 'Dziesięć, reszty nie trzeba. Do widzenia!']
  ]},
  { id: 'staatsarchiv', unit: 'at_geschichte', t: 'Kwerenda w Wiedniu', ua: 'Im Staatsarchiv', roles: ['Archivar', 'Historikerin'], lines: [
    [1, 'Grüß Gott! Ich forsche über die galizische Landesverwaltung um 1880.', 'Dzień dobry! Prowadzę badania nad galicyjską administracją krajową około 1880 roku.'],
    [0, 'Dann sind Sie im Allgemeinen Verwaltungsarchiv richtig. Die Akten der Statthalterei liegen allerdings in Lemberg.', 'W takim razie dobrze pani trafiła do Ogólnego Archiwum Administracyjnego. Akta namiestnictwa są jednak we Lwowie.'],
    [1, 'Ich suche die Berichte des Statthalters an das Innenministerium.', 'Szukam raportów namiestnika do Ministerstwa Spraw Wewnętrznych.'],
    [0, 'Die finden Sie im Bestand des k. k. Ministeriums des Innern. Der Akt ist bestellbar.', 'Znajdzie je pani w zespole c.k. Ministerstwa Spraw Wewnętrznych. Akta można zamówić.'],
    [1, 'Geht sich das heute noch aus?', 'Zdążę to jeszcze dziś?'],
    [0, 'Leider nicht. Die Akten kommen morgen um neun in den Lesesaal.', 'Niestety nie. Akta będą jutro o dziewiątej w czytelni.']
  ]}
);

UA.TEXTS.push(
  { id: 't_at', level: 'AT', t: 'Dzień w Wiedniu', ua: 'Ein Tag in Wien',
    text: 'Am Vormittag war ich im Staatsarchiv und habe Berichte aus Galizien gelesen. Zu Mittag bin ich in ein kleines Beisl gegangen: Es gab Schnitzel mit Erdäpfelsalat und zum Nachtisch Marillenknödel. Am Nachmittag bin ich lange im Kaffeehaus gesessen, habe eine Melange getrunken und Zeitung gelesen. Am Abend sind wir mit Freunden zum Heurigen gefahren. Heuer war es im Jänner sehr kalt, aber jetzt ist es warm. Servus, Wien – ich komme wieder!',
    pl: 'Przed południem byłem w archiwum państwowym i czytałem raporty z Galicji. W południe poszedłem do małej knajpki: był sznycel z sałatką ziemniaczaną, a na deser knedle z morelami. Po południu długo siedziałem w kawiarni, piłem melange i czytałem gazetę. Wieczorem pojechaliśmy z przyjaciółmi do winiarni. W tym roku w styczniu było bardzo zimno, ale teraz jest ciepło. Cześć, Wiedniu – wrócę!',
    qs: [['Co autor zjadł na deser?', ['tort Sachera', 'knedle z morelami', 'naleśniki', 'strudel'], 1], ['Jak brzmi austriacki Perfekt od „sitzen”?', ['ich habe gesessen', 'ich bin gesessen', 'ich war sitzen', 'ich sitzte'], 1], ['Co znaczy „heuer”?', ['wczoraj', 'w tym roku', 'tutaj', 'wkrótce'], 1]] }
);

/* Pary [Austria, Niemcy, polski] – quiz „Austria czy Niemcy?” */
UA.ATDE = [
  ['der Erdapfel', 'die Kartoffel', 'ziemniak'], ['der Paradeiser', 'die Tomate', 'pomidor'], ['die Marille', 'die Aprikose', 'morela'],
  ['der Karfiol', 'der Blumenkohl', 'kalafior'], ['die Fisolen', 'die grünen Bohnen', 'fasolka szparagowa'], ['der Topfen', 'der Quark', 'twaróg'],
  ['das Schlagobers', 'die Schlagsahne', 'bita śmietana'], ['der Kren', 'der Meerrettich', 'chrzan'], ['das Faschierte', 'das Hackfleisch', 'mięso mielone'],
  ['die Semmel', 'das Brötchen', 'bułka'], ['die Palatschinke', 'der Pfannkuchen', 'naleśnik'], ['die Ribisel', 'die Johannisbeere', 'porzeczka'],
  ['der Jänner', 'der Januar', 'styczeń'], ['heuer', 'dieses Jahr', 'w tym roku'], ['der Sessel', 'der Stuhl', 'krzesło'],
  ['der Kasten', 'der Schrank', 'szafa'], ['der Polster', 'das Kissen', 'poduszka'], ['die Stiege', 'die Treppe', 'schody'],
  ['das Sackerl', 'die Tüte', 'torebka'], ['die Trafik', 'der Kiosk', 'kiosk'], ['das Spital', 'das Krankenhaus', 'szpital'],
  ['der Bub', 'der Junge', 'chłopiec'], ['das Zuckerl', 'das Bonbon', 'cukierek'], ['die Kassa', 'die Kasse', 'kasa'],
  ['angreifen', 'anfassen', 'dotykać'], ['sich verkühlen', 'sich erkälten', 'przeziębić się'], ['die Matura', 'das Abitur', 'matura'],
  ['die Schularbeit', 'die Klassenarbeit', 'praca klasowa'], ['der Rauchfangkehrer', 'der Schornsteinfeger', 'kominiarz'], ['Grüß Gott!', 'Guten Tag!', 'dzień dobry'],
  ['Servus!', 'Tschüss!', 'cześć / pa'], ['Auf Wiederschauen!', 'Auf Wiedersehen!', 'do widzenia'], ['das Obers', 'die Sahne', 'śmietanka'],
  ['ich bin gesessen', 'ich habe gesessen', 'siedziałem']
];
