/* ============================================================
   ŚCIEŻKA TEMATYCZNA „AUSTRIA” – austriacyzmy (otwarta od razu)
   W(…) jak w words.js; w polu „formy” podajemy odpowiednik w Niemczech (DE: …).
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur, at: true });
  }

  L('AT', 'at_gruss', 'Powitania i zwroty');
  W('Servus!', 'ф', 'cześć (na powitanie i pożegnanie)', 'DE: Hallo! / Tschüss!', 'p', '{Servus}, wie geht’s dir?', 'Cześć, jak się masz?');
  W('Grüß dich!', 'ф', 'cześć (na „ty”)', 'DE: Hallo!', 'o', '{Grüß dich}, Lukas!', 'Cześć, Lukas!');
  W('Baba!', 'ф', 'pa! (pożegnanie, potocznie)', 'DE: Tschüss!', 'o', 'Also dann, {baba}!', 'No to pa!');
  W('Habe die Ehre!', 'ф', 'moje uszanowanie (dawne wiedeńskie powitanie)', '', 'o', '{Habe die Ehre}, Herr Hofrat!', 'Moje uszanowanie, panie radco dworu!');
  W('Passt!', 'ф', 'pasuje, w porządku, OK', 'DE: Okay! / Geht klar!', 'p', '— Um acht beim Café? — {Passt}!', '— O ósmej w kawiarni? — Pasuje!');
  W('Gemma!', 'ф', 'chodźmy! (= gehen wir)', 'potoczne, Wiedeń', 'o', '{Gemma}, sonst kommen wir zu spät!', 'Chodźmy, bo się spóźnimy!');
  W('leiwand', 'п', 'super, świetny (Wiedeń, potoczne)', 'DE: toll, super', 'o', 'Das Konzert war echt {leiwand}!', 'Koncert był naprawdę super!');
  W('Oida!', 'ф', 'stary! (wykrzyknik, slang)', 'od: Alter', 'o', '{Oida}, hast du das gesehen?', 'Stary, widziałeś to?');
  W('Gusto haben auf', 'ф', 'mieć ochotę na', 'DE: Lust haben auf', 'o', 'Ich hab {Gusto} auf ein Schnitzel.', 'Mam ochotę na sznycel.');
  W('sich ausgehen', 'д', 'zmieścić się, zdążyć, wystarczyć', 'es geht sich aus – zdążymy / starczy', 'o', 'Der Zug fährt um neun – das {geht sich} noch {aus}.', 'Pociąg jest o dziewiątej – jeszcze zdążymy.');
  W('Bitte schön?', 'ф', 'słucham? czym mogę służyć? (w sklepie, kawiarni)', '', 'o', '{Bitte schön?} Was darf’s sein?', 'Słucham? Co podać?');
  W('Pfiat di!', 'ф', 'z Bogiem, cześć (pożegnanie, Austria/Bawaria)', '= Behüte dich Gott', 'o', '{Pfiat di}, und komm gut heim!', 'Cześć, wracaj bezpiecznie do domu!');

  L('AT', 'at_essen', 'Kuchnia austriacka');
  W('der Erdapfel', 'ч', 'ziemniak', 'lm. die Erdäpfel · DE: die Kartoffel', 'o', 'Zum Schnitzel gibt’s {Erdäpfel}salat.', 'Do sznycla jest sałatka ziemniaczana.');
  W('der Paradeiser', 'ч', 'pomidor', 'lm. die Paradeiser · DE: die Tomate', 'o', 'Ein Kilo {Paradeiser}, bitte.', 'Kilogram pomidorów, proszę.');
  W('die Marille', 'ж', 'morela', 'lm. die Marillen · DE: die Aprikose', 'o', 'Die Wachauer {Marillen} sind berühmt.', 'Morele z Wachau są sławne.');
  W('der Karfiol', 'ч', 'kalafior', 'bez lm. · DE: der Blumenkohl', 'p', 'Heute gibt es {Karfiol} mit Butterbröseln.', 'Dziś jest kalafior z bułką tartą na maśle.');
  W('die Fisole', 'ж', 'fasolka szparagowa', 'lm. die Fisolen · DE: die grüne Bohne', 'p', 'Als Beilage nehme ich {Fisolen}.', 'Jako dodatek wezmę fasolkę szparagową.');
  W('der Topfen', 'ч', 'twaróg', 'bez lm. · DE: der Quark', 'o', 'Der Strudel ist mit {Topfen} gefüllt.', 'Strudel jest nadziewany twarogiem.');
  W('das Schlagobers', 'с', 'bita śmietana', 'bez lm. · DE: die Schlagsahne', 'o', 'Eine Melange mit {Schlagobers}, bitte.', 'Melange z bitą śmietaną, proszę.');
  W('der Kren', 'ч', 'chrzan', 'bez lm. · DE: der Meerrettich', 'p', 'Zum Tafelspitz gehört {Kren}.', 'Do tafelspitza podaje się chrzan.');
  W('das Faschierte', 'с', 'mięso mielone', 'bez lm. · DE: das Hackfleisch', 'p', 'Für die Laibchen brauchen wir {Faschiertes}.', 'Na kotlety potrzebujemy mięsa mielonego.');
  W('die Semmel', 'ж', 'bułka', 'lm. die Semmeln · DE: das Brötchen', 'p', 'Zwei {Semmeln} und ein Kipferl, bitte.', 'Dwie bułki i rogalik, proszę.');
  W('die Palatschinke', 'ж', 'naleśnik', 'lm. die Palatschinken · DE: der Pfannkuchen', 'p', 'Zum Nachtisch gibt es {Palatschinken} mit Marmelade.', 'Na deser są naleśniki z dżemem.');
  W('die Ribisel', 'ж', 'porzeczka', 'lm. die Ribiseln · DE: die Johannisbeere', 'o', 'Oma macht Marmelade aus {Ribiseln}.', 'Babcia robi dżem z porzeczek.');
  W('der Powidl', 'ч', 'powidła śliwkowe', 'bez lm. · DE: das Pflaumenmus', 't', 'Die Buchteln sind mit {Powidl} gefüllt.', 'Buchteln są nadziewane powidłami.');
  W('die Zwetschke', 'ж', 'śliwka', 'lm. die Zwetschken · DE: die Zwetschge / Pflaume', 'p', 'Im Herbst backen wir {Zwetschken}knödel.', 'Jesienią robimy knedle ze śliwkami.');
  W('die Jause', 'ж', 'przekąska, podwieczorek', 'lm. die Jausen · DE: die Brotzeit, der Imbiss', 'o', 'Um zehn machen wir eine kleine {Jause}.', 'O dziesiątej robimy sobie małą przekąskę.');
  W('die Mehlspeise', 'ж', 'ciasto, deser (słodkie wypieki)', 'lm. die Mehlspeisen · DE: die Süßspeise, der Kuchen', 'o', 'Die Wiener {Mehlspeisen} sind legendär.', 'Wiedeńskie słodkie wypieki są legendarne.');

  L('AT', 'at_kaffee', 'Wiedeńska kawiarnia');
  W('das Kaffeehaus', 'с', 'kawiarnia (wiedeńska)', 'lm. die Kaffeehäuser', 'p', 'Im {Kaffeehaus} kann man stundenlang Zeitung lesen.', 'W kawiarni można godzinami czytać gazety.');
  W('die Melange', 'ж', 'melange – kawa z mlekiem i pianką', 'lm. die Melangen', 'p', 'Eine {Melange}, bitte!', 'Poproszę melange!');
  W('der Verlängerte', 'ч', 'espresso dopełnione gorącą wodą', 'lm. die Verlängerten', 'o', 'Für mich einen {Verlängerten} mit Milch.', 'Dla mnie „przedłużoną” z mlekiem.');
  W('der kleine Braune', 'ф', 'małe espresso ze śmietanką', 'großer Brauner – podwójne', 'o', 'Herr Ober, einen {kleinen Braunen}, bitte.', 'Panie kelnerze, poproszę małą kawę ze śmietanką.');
  W('der Einspänner', 'ч', 'mocna kawa z bitą śmietaną w szklance', 'lm. die Einspänner', 'o', 'Probier mal einen {Einspänner}!', 'Spróbuj einspännera!');
  W('das Häferl', 'с', 'kubek', 'lm. die Häferl · DE: der Becher', 'o', 'Ich trinke den Tee lieber aus dem {Häferl}.', 'Herbatę wolę pić z kubka.');
  W('das Obers', 'с', 'śmietanka', 'bez lm. · DE: die Sahne', 'o', 'Kaffee mit {Obers}, bitte.', 'Kawę ze śmietanką, proszę.');
  W('Herr Ober!', 'ф', 'panie kelnerze! (tradycyjnie w kawiarni)', '', 'o', '{Herr Ober}, zahlen bitte!', 'Panie kelnerze, płacę!');
  W('der Schanigarten', 'ч', 'ogródek kawiarniany na chodniku', 'lm. die Schanigärten', 'o', 'Im Sommer sitzen wir im {Schanigarten}.', 'Latem siedzimy w ogródku kawiarnianym.');
  W('der Heurige', 'ч', 'winiarnia z młodym winem; młode wino', 'lm. die Heurigen', 'o', 'Am Wochenende fahren wir zum {Heurigen} nach Grinzing.', 'W weekend jedziemy do winiarni w Grinzing.');
  W('das Beisl', 'с', 'knajpka, gospoda (Wiedeń)', 'lm. die Beisln · DE: die Kneipe', 'o', 'Das Schnitzel im {Beisl} ums Eck ist super.', 'Sznycel w knajpce za rogiem jest super.');
  W('die Sachertorte', 'ж', 'tort Sachera', 'lm. die Sachertorten', 't', 'Ein Stück {Sachertorte} mit Schlagobers, bitte.', 'Kawałek tortu Sachera z bitą śmietaną, proszę.');

  L('AT', 'at_alltag', 'Codzienność');
  W('der Jänner', 'ч', 'styczeń', 'DE: der Januar · też: der Feber (luty)', 'o', 'Im {Jänner} fahren wir Ski.', 'W styczniu jeździmy na nartach.');
  W('heuer', 'пр', 'w tym roku', 'DE: dieses Jahr', 'o', '{Heuer} war der Sommer sehr heiß.', 'W tym roku lato było bardzo gorące.');
  W('der Sessel', 'ч', 'krzesło (w Niemczech: fotel!)', 'lm. die Sessel · DE: der Stuhl', 'f', 'Nimm dir einen {Sessel} und setz dich.', 'Weź krzesło i usiądź.');
  W('der Kasten', 'ч', 'szafa', 'lm. die Kästen · DE: der Schrank', 'o', 'Die Mäntel hängen im {Kasten}.', 'Płaszcze wiszą w szafie.');
  W('der Polster', 'ч', 'poduszka (r. męski!)', 'lm. die Polster · DE: das Kissen', 'p', 'Der {Polster} ist zu hart.', 'Poduszka jest za twarda.');
  W('die Stiege', 'ж', 'schody; klatka schodowa', 'lm. die Stiegen · DE: die Treppe', 'o', 'Er wohnt auf {Stiege} 3, Tür 12.', 'Mieszka na klatce 3, drzwi 12.');
  W('das Sackerl', 'с', 'torebka, reklamówka', 'lm. die Sackerl · DE: die Tüte', 'o', 'Brauchen Sie ein {Sackerl}?', 'Potrzebuje pan torebki?');
  W('die Trafik', 'ж', 'kiosk (tytoń, gazety, bilety)', 'lm. die Trafiken · DE: der Kiosk', 'p', 'Die Fahrscheine bekommst du in der {Trafik}.', 'Bilety dostaniesz w kiosku.');
  W('das Spital', 'с', 'szpital', 'lm. die Spitäler · DE: das Krankenhaus', 't', 'Sie liegt seit Montag im {Spital}.', 'Leży w szpitalu od poniedziałku.');
  W('der Bub', 'ч', 'chłopiec', 'lm. die Buben · DE: der Junge', 'o', 'Der {Bub} geht schon in die Volksschule.', 'Chłopiec chodzi już do szkoły podstawowej.');
  W('das Zuckerl', 'с', 'cukierek', 'lm. die Zuckerl · DE: das Bonbon', 'p', 'Die Kinder bekommen ein {Zuckerl}.', 'Dzieci dostają cukierka.');
  W('das Pickerl', 'с', 'naklejka; winieta (na autostradę)', 'lm. die Pickerl · DE: der Aufkleber, die Vignette', 'o', 'Ohne {Pickerl} darfst du nicht auf die Autobahn.', 'Bez winiety nie wolno wjechać na autostradę.');
  W('die Kassa', 'ж', 'kasa', 'lm. die Kassen · DE: die Kasse', 't', 'Bitte zahlen Sie an der {Kassa}.', 'Proszę zapłacić przy kasie.');
  W('angreifen', 'д', 'dotykać (w Niemczech: atakować!)', 'greift an · griff an · hat angegriffen · DE: anfassen', 'f', 'Bitte nichts {angreifen}!', 'Proszę niczego nie dotykać!');
  W('sich verkühlen', 'д', 'przeziębić się', 'DE: sich erkälten', 'o', 'Zieh dich warm an, sonst {verkühlst} du dich.', 'Ubierz się ciepło, bo się przeziębisz.');
  W('der Rauchfangkehrer', 'ч', 'kominiarz', 'lm. die Rauchfangkehrer · DE: der Schornsteinfeger', 'o', 'Zu Silvester bringt der {Rauchfangkehrer} Glück.', 'W sylwestra kominiarz przynosi szczęście.');

  L('AT', 'at_amt', 'Szkoła, urzędy, polityka');
  W('die Matura', 'ж', 'matura', 'DE: das Abitur · maturieren – zdawać maturę', 't', 'Nach der {Matura} will sie in Wien studieren.', 'Po maturze chce studiować w Wiedniu.');
  W('die Volksschule', 'ж', 'szkoła podstawowa (klasy 1–4)', 'lm. die Volksschulen · DE: die Grundschule', 'o', 'Mein Sohn geht in die {Volksschule}.', 'Mój syn chodzi do szkoły podstawowej.');
  W('die Schularbeit', 'ж', 'praca klasowa', 'lm. die Schularbeiten · DE: die Klassenarbeit', 'o', 'Morgen haben wir eine {Schularbeit} in Mathe.', 'Jutro mamy klasówkę z matematyki.');
  W('der Akt', 'ч', 'teczka akt, akta (w Niemczech: die Akte)', 'lm. die Akten · DE: die Akte', 'o', 'Der {Akt} liegt beim Magistrat.', 'Akta leżą w magistracie.');
  W('der Magistrat', 'ч', 'magistrat, urząd miasta', 'lm. die Magistrate · DE: die Stadtverwaltung', 'p', 'Den Pass beantragen Sie beim {Magistrat}.', 'O paszport występuje się w magistracie.');
  W('der Meldezettel', 'ч', 'formularz zameldowania', 'lm. die Meldezettel · DE: die Meldebescheinigung', 'o', 'Ohne {Meldezettel} bekommst du kein Konto.', 'Bez meldunku nie dostaniesz konta.');
  W('die Bezirkshauptmannschaft', 'ж', 'starostwo powiatowe', 'lm. die Bezirkshauptmannschaften · skrót: BH', 'o', 'Den Führerschein gibt es bei der {Bezirkshauptmannschaft}.', 'Prawo jazdy wydaje starostwo powiatowe.');
  W('das Bundesland', 'с', 'kraj związkowy', 'lm. die Bundesländer · Austria ma 9 krajów', 'o', 'Österreich hat neun {Bundesländer}.', 'Austria ma dziewięć krajów związkowych.');
  W('der Landeshauptmann', 'ч', 'premier kraju związkowego', 'lm. die Landeshauptleute', 'o', 'Der {Landeshauptmann} von Tirol hielt eine Rede.', 'Premier Tyrolu wygłosił przemówienie.');
  W('der Nationalrat', 'ч', 'Rada Narodowa (izba niższa parlamentu)', 'DE: der Bundestag', 'p', 'Der {Nationalrat} hat das Gesetz beschlossen.', 'Rada Narodowa uchwaliła ustawę.');
  W('der Erlagschein', 'ч', 'blankiet wpłaty, przekaz', 'lm. die Erlagscheine · DE: der Überweisungsträger', 'o', 'Die Rechnung kam mit einem {Erlagschein}.', 'Rachunek przyszedł z blankietem wpłaty.');
  W('der Hofrat', 'ч', 'radca dworu (tytuł urzędniczy)', 'lm. die Hofräte', 'o', 'In Wien wird man gern mit „Herr {Hofrat}” angesprochen.', 'W Wiedniu chętnie zwraca się do kogoś „panie radco”.');

  L('AT', 'at_geschichte', 'Habsburgowie i Galicja');
  W('die Habsburgermonarchie', 'ж', 'monarchia habsburska', '', 'p', 'Galizien gehörte zur {Habsburgermonarchie}.', 'Galicja należała do monarchii habsburskiej.');
  W('k. u. k.', 'з', 'cesarsko-królewski (kaiserlich und königlich)', 'k. k. – cesarsko-królewski (austriacki)', 'o', 'Er diente in der {k. u. k.} Armee.', 'Służył w armii cesarsko-królewskiej.');
  W('der Ausgleich', 'ч', 'ugoda austro-węgierska (1867)', '', 'o', 'Nach dem {Ausgleich} von 1867 entstand Österreich-Ungarn.', 'Po ugodzie z 1867 r. powstały Austro-Węgry.');
  W('Galizien', 'ф', 'Galicja', 'Königreich Galizien und Lodomerien', 'p', '{Galizien} war das größte Kronland Österreichs.', 'Galicja była największym krajem koronnym Austrii.');
  W('Lemberg', 'ф', 'Lwów (nazwa niemiecka)', 'Krakau – Kraków', 'o', 'Die Statthalterei hatte ihren Sitz in {Lemberg}.', 'Namiestnictwo miało siedzibę we Lwowie.');
  W('das Kronland', 'с', 'kraj koronny', 'lm. die Kronländer', 'o', 'Jedes {Kronland} hatte einen eigenen Landtag.', 'Każdy kraj koronny miał własny sejm krajowy.');
  W('die Statthalterei', 'ж', 'namiestnictwo (urząd namiestnika)', 'der Statthalter – namiestnik', 'o', 'Die Akten der {Statthalterei} liegen heute in Lwiw.', 'Akta namiestnictwa leżą dziś we Lwowie.');
  W('der Reichsrat', 'ч', 'Rada Państwa (parlament austriacki)', '', 'o', 'Polnische Abgeordnete saßen im Wiener {Reichsrat}.', 'Polscy posłowie zasiadali w wiedeńskiej Radzie Państwa.');
  W('der Landtag', 'ч', 'sejm krajowy', 'galizischer Landtag – Sejm Krajowy w Lwowie', 'o', 'Der galizische {Landtag} tagte in Lemberg.', 'Galicyjski Sejm Krajowy obradował we Lwowie.');
  W('die Matriken', 'мн', 'księgi metrykalne (austr.)', 'lm. · DE: die Kirchenbücher', 'o', 'Die {Matriken} der Pfarre sind digitalisiert.', 'Księgi metrykalne parafii są zdigitalizowane.');
  W('der Anschluss Österreichs', 'ф', 'anszlus – przyłączenie Austrii do III Rzeszy (1938)', 'der Anschluss – też: przesiadka, połączenie', 'p', 'Der {Anschluss Österreichs} erfolgte im März 1938.', 'Anszlus Austrii nastąpił w marcu 1938 r.');
  W('der Staatsvertrag', 'ч', 'traktat państwowy (1955)', '', 'o', 'Mit dem {Staatsvertrag} von 1955 wurde Österreich wieder frei.', 'Traktatem państwowym z 1955 r. Austria odzyskała niepodległość.');
  W('die immerwährende Neutralität', 'ф', 'wieczysta neutralność (od 1955)', '', 'p', 'Österreich erklärte 1955 seine {immerwährende Neutralität}.', 'Austria ogłosiła w 1955 r. wieczystą neutralność.');
  W('Kakanien', 'ф', 'Kakania (ironiczna nazwa Austro-Węgier u Musila)', 'od: k. u. k.', 'o', 'Robert Musil nannte die Monarchie ironisch „{Kakanien}”.', 'Robert Musil ironicznie nazywał monarchię „Kakanią”.');
})();
