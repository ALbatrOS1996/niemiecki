/* ============================================================
   TREŚCI: litery i dźwięki, fałszywi przyjaciele, wymowa, gramatyka, dialogi
   ============================================================ */
var UA = window.UA || (window.UA = {});

/* ---------- Litery i dźwięki ----------
   [zapis, jak czytać (PL), IPA, opis dla Polaka, przykład, znaczenie, inaczej niż po polsku?] */
UA.ALPHABET = [
  ['ä', 'e (otwarte)', 'ɛ / ɛː', 'jak polskie e; długie ä – jak przeciągnięte e', 'Käse', 'ser', 1],
  ['ö', 'e z ustami do o', 'øː / œ', 'powiedz e i zaokrąglij usta jak do o; w polskim nie ma tego dźwięku', 'schön', 'ładny', 1],
  ['ü', 'i z ustami do u', 'yː / ʏ', 'powiedz i i zaokrąglij usta jak do u; nie mylić z „i” ani „u”', 'Tür', 'drzwi', 1],
  ['ß', 'ss', 's', 'ostre s (Eszett); stoi po długiej samogłosce i dwugłosce', 'Straße', 'ulica', 1],
  ['ei', 'aj', 'aɪ̯', 'zawsze „aj” – nie „ej”', 'drei', 'trzy', 1],
  ['ie', 'i (długie)', 'iː', 'długie i – e jest tylko znakiem długości', 'Liebe', 'miłość', 1],
  ['eu / äu', 'oj', 'ɔʏ̯', 'zawsze „oj”', 'heute', 'dzisiaj', 1],
  ['au', 'ał', 'aʊ̯', 'jak polskie „ał” w „dał”', 'Haus', 'dom'],
  ['ch (po e, i, ä, ö, ü, ei, eu)', 'ś (bezdźwięczne)', 'ç', 'tzw. Ich-Laut – miękkie, bliskie polskiemu ś lub „chi” w „chichot”', 'ich', 'ja', 1],
  ['ch (po a, o, u, au)', 'ch', 'x', 'tzw. Ach-Laut – jak polskie ch, tylko głębiej w gardle', 'Buch', 'książka'],
  ['sch', 'sz', 'ʃ', 'jak polskie sz', 'Schule', 'szkoła', 1],
  ['sp / st (na początku)', 'szp / szt', 'ʃp / ʃt', 'na początku wyrazu (i rdzenia) s czytamy jak sz', 'Stadt', 'miasto', 1],
  ['tsch', 'cz', 'tʃ', 'jak polskie cz', 'Deutsch', 'niemiecki', 1],
  ['z', 'c', 'ts', 'zawsze jak polskie c – nigdy jak z!', 'Zeit', 'czas', 1],
  ['s (przed samogłoską)', 'z', 'z', 'przed samogłoską s jest dźwięczne jak polskie z', 'Sonne', 'słońce', 1],
  ['v', 'f', 'f', 'w słowach rodzimych jak f; w zapożyczeniach jak w (Vase)', 'Vater', 'ojciec', 1],
  ['w', 'w', 'v', 'jak polskie w', 'Wasser', 'woda', 1],
  ['j', 'j', 'j', 'jak polskie j', 'ja', 'tak'],
  ['h', 'h (wydech) / nieme', 'h', 'na początku sylaby lekki wydech; po samogłosce nieme – tylko wydłuża ją', 'Hand', 'ręka'],
  ['r', 'r gardłowe', 'ʁ', 'gardłowe r; na końcu po samogłosce prawie zanika', 'rot', 'czerwony', 1],
  ['-er (na końcu)', 'a (ciemne)', 'ɐ', 'końcówka -er brzmi jak krótkie, ciemne a', 'Lehrer', 'nauczyciel', 1],
  ['-ig (na końcu)', 'iś', 'ɪç', 'końcowe -ig czytamy jak „iś” (Ich-Laut)', 'richtig', 'poprawny', 1],
  ['pf', 'pf', 'pf', 'p i f razem, jednym ruchem', 'Apfel', 'jabłko'],
  ['qu', 'kw', 'kv', 'jak polskie „kw”', 'Quelle', 'źródło']
];

/* ---------- Fałszywi przyjaciele ----------
   [niemiecki, prawdziwe znaczenie, mylące polskie skojarzenie, jak powiedzieć to polskie słowo po niemiecku, przykład, przykład PL] */
UA.FRIENDS = [
  ['das Gymnasium', 'liceum ogólnokształcące', 'gimnazjum', 'die Mittelschule (dawne gimn.)', 'Meine Tochter geht aufs Gymnasium.', 'Moja córka chodzi do liceum.'],
  ['die Rente', 'emerytura', 'renta (inwalidzka)', 'die Erwerbsminderungsrente', 'Mein Opa bekommt eine gute Rente.', 'Mój dziadek dostaje dobrą emeryturę.'],
  ['die Kur', 'kuracja w uzdrowisku', 'kura', 'das Huhn', 'Sie macht eine Kur in Bad Kissingen.', 'Ona jest na kuracji w Bad Kissingen.'],
  ['das Lokal', 'knajpa, lokal gastronomiczny', 'lokal (mieszkanie)', 'die Wohnung', 'Wir treffen uns im Lokal an der Ecke.', 'Spotykamy się w knajpie na rogu.'],
  ['die Note', 'ocena (szkolna); nuta', 'nota (dyplomatyczna)', 'die diplomatische Note', 'Er hat in Mathe eine gute Note.', 'Ma dobrą ocenę z matematyki.'],
  ['der Rock', 'spódnica (też: muzyka rock)', 'rok', 'das Jahr', 'Der Rock ist zu kurz.', 'Spódnica jest za krótka.'],
  ['der Stuhl', 'krzesło', 'stół', 'der Tisch', 'Setz dich auf den Stuhl.', 'Usiądź na krześle.'],
  ['die Tafel', 'tablica; tabliczka (czekolady)', 'tafla (lodu)', 'die Eisfläche', 'Der Lehrer schreibt an die Tafel.', 'Nauczyciel pisze na tablicy.'],
  ['der Kran', 'dźwig', 'kran (wodny)', 'der Wasserhahn', 'Auf der Baustelle steht ein großer Kran.', 'Na budowie stoi duży dźwig.'],
  ['der Konkurs', 'upadłość, bankructwo', 'konkurs', 'der Wettbewerb', 'Die Firma ging in Konkurs.', 'Firma zbankrutowała.'],
  ['die Promotion', 'doktorat (uzyskanie stopnia)', 'promocja (w sklepie)', 'das Sonderangebot', 'Nach der Promotion arbeitet sie an der Uni.', 'Po doktoracie pracuje na uniwersytecie.'],
  ['die Figur', 'sylwetka; postać; pionek', 'figura (świętego)', 'die Heiligenfigur', 'Sie hat eine sportliche Figur.', 'Ona ma wysportowaną sylwetkę.'],
  ['der Roman', 'powieść', 'romans', 'die Affäre', 'Ich lese einen Roman von Thomas Mann.', 'Czytam powieść Thomasa Manna.'],
  ['der Pass', 'paszport; przełęcz; podanie (piłki)', 'pas (do spodni)', 'der Gürtel', 'Vergiss deinen Pass nicht!', 'Nie zapomnij paszportu!'],
  ['ja', 'tak', 'ja (zaimek)', 'ich', 'Ja, ich komme mit.', 'Tak, idę z wami.'],
  ['also', 'więc, zatem', 'także (ang. also)', 'auch', 'Also, was machen wir jetzt?', 'No więc, co teraz robimy?'],
  ['bekommen', 'dostać, otrzymać', 'zostać (ang. become)', 'werden', 'Ich habe ein Geschenk bekommen.', 'Dostałem prezent.'],
  ['spenden', 'przekazać datek', 'spędzać (czas)', 'verbringen', 'Wir spenden für das Tierheim.', 'Przekazujemy datek na schronisko.'],
  ['der Dom', 'katedra', 'dom', 'das Haus', 'Der Kölner Dom ist riesig.', 'Katedra w Kolonii jest ogromna.'],
  ['der Schüler', 'uczeń', 'szuler (oszust karciany)', 'der Falschspieler', 'Der Schüler hat eine Frage.', 'Uczeń ma pytanie.'],
  ['die Pension', 'pensjonat; emerytura urzędnicza', 'pensja', 'das Gehalt', 'Wir übernachten in einer Pension.', 'Nocujemy w pensjonacie.'],
  ['die Kasse', 'kasa; kasa chorych', 'kasa (pieniądze w ogóle)', 'das Geld', 'Bitte zahlen Sie an der Kasse.', 'Proszę zapłacić przy kasie.'],
  ['das Rezept', 'przepis kulinarny; recepta', 'tylko recepta', 'das Rezept (tu się zgadza)', 'Das Rezept ist von meiner Oma.', 'Ten przepis jest od mojej babci.'],
  ['die Szene', 'scena (w filmie); środowisko (np. artystyczne)', 'scena (teatralna)', 'die Bühne', 'Er ist in der Berliner Kunstszene bekannt.', 'Jest znany w berlińskim środowisku artystycznym.']
];

/* ---------- Pary minimalne (słuchanie) ---------- */
UA.PAIRS = [
  { id: 'lang', name: 'Długa czy krótka samogłoska?', items: [
    ['Staat', 'państwo', 'Stadt', 'miasto'], ['Miete', 'czynsz', 'Mitte', 'środek'], ['Beet', 'grządka', 'Bett', 'łóżko'],
    ['Höhle', 'jaskinia', 'Hölle', 'piekło'], ['Saat', 'siew', 'satt', 'syty'], ['bieten', 'oferować', 'bitten', 'prosić'],
    ['Ofen', 'piec', 'offen', 'otwarty'], ['Wahl', 'wybór', 'Wall', 'wał']
  ]},
  { id: 'ue', name: 'ü czy i / u?', items: [
    ['Tür', 'drzwi', 'Tier', 'zwierzę'], ['küssen', 'całować', 'Kissen', 'poduszka'], ['Mütter', 'matki', 'Mutter', 'matka'],
    ['Brüder', 'bracia', 'Bruder', 'brat'], ['fühlen', 'czuć', 'fielen', 'upadli'], ['Züge', 'pociągi', 'Ziege', 'koza']
  ]},
  { id: 'oe', name: 'ö czy e / o?', items: [
    ['lösen', 'rozwiązywać', 'lesen', 'czytać'], ['Töchter', 'córki', 'Tochter', 'córka'], ['schön', 'ładny', 'schon', 'już'],
    ['hören', 'słyszeć', 'Herren', 'panowie'], ['Söhne', 'synowie', 'Sehne', 'ścięgno']
  ]},
  { id: 'ch', name: 'ch [ç], sch [ʃ] czy k?', items: [
    ['Kirche', 'kościół', 'Kirsche', 'wiśnia'], ['mich', 'mnie', 'misch', 'mieszaj'],
    ['nicht', 'nie', 'nickt', 'kiwa głową'], ['Bach', 'potok', 'back', 'piecz']
  ]}
];

/* ---------- Zasady wymowy (karty) ---------- */
UA.RULES = [
  { t: 'Długość samogłoski zmienia znaczenie', b: 'W niemieckim samogłoski bywają długie (Staat, Miete) i krótkie (Stadt, Mitte). Długość sygnalizuje m.in. h po samogłosce (Kahn), ie, podwojenie (Boot). Po krótkiej samogłosce zwykle stoją dwie spółgłoski (Bett, Mitte). Polacy wymawiają wszystko „średnio” – to najczęstszy błąd.', ex: ['Staat', 'Stadt', 'Miete', 'Mitte'] },
  { t: 'Umlauty: ä, ö, ü', b: 'ä brzmi jak e. ö i ü nie istnieją w polskim: dla ö powiedz „e” z ustami zaokrąglonymi jak do „o”; dla ü powiedz „i” z ustami jak do „u”. Bez zaokrąglenia Tür (drzwi) zamienia się w Tier (zwierzę).', ex: ['schön', 'Tür', 'müde', 'hören'] },
  { t: 'Dwa rodzaje ch', b: 'Po a, o, u, au – twarde „ch” jak w Buch (Ach-Laut). Po e, i, umlautach, spółgłoskach i w zdrobnieniu -chen – miękkie, bezdźwięczne [ç], bliskie polskiemu ś (ich, Milch, Mädchen). Końcówka -ig też brzmi [ɪç].', ex: ['Buch', 'ich', 'Milch', 'richtig'] },
  { t: 'ei = aj, ie = i, eu = oj', b: 'Najwięcej błędów czytania: ei czytamy „aj” (mein, drei), ie to długie „i” (Liebe, vier), eu i äu to „oj” (heute, Häuser). Pomaga zasada: czytamy drugą literę po angielsku – ei → „i” jak w angielskim „I”, ie → niemieckie „i”.', ex: ['drei', 'vier', 'heute', 'Freiheit'] },
  { t: 'z = c, s = z, v = f, w = w', b: 'Niemieckie z to zawsze polskie c (Zeit, Zug). s przed samogłoską jest dźwięczne jak polskie z (Sonne, lesen). v w słowach rodzimych czytamy jak f (Vater, viel), a w – jak polskie w.', ex: ['Zeit', 'Sonne', 'Vater', 'Wasser'] },
  { t: 'st i sp na początku = szt, szp', b: 'Na początku wyrazu lub rdzenia s przed t i p brzmi jak sz: Stadt [ʃtat], Sport [ʃpɔrt], verstehen [fɛɐ̯ˈʃteːən]. W środku słowa (Fenster, Wespe) zostaje zwykłe s.', ex: ['Stadt', 'Sport', 'verstehen', 'Fenster'] },
  { t: 'Ubezdźwięcznienie na końcu – jak w polskim!', b: 'Dobra wiadomość: tak jak po polsku, dźwięczne spółgłoski na końcu wyrazu stają się bezdźwięczne: Tag [taːk], Hand [hant], lieb [liːp]. Polski nawyk tu pomaga.', ex: ['Tag', 'Hand', 'Kind', 'Berg'] },
  { t: 'r i końcówka -er', b: 'Standardowe r jest gardłowe (języczkowe). Po samogłosce na końcu sylaby r prawie znika i brzmi jak ciemne „a”: Lehrer [ˈleːʁɐ], vier [fiːɐ̯], hier [hiːɐ̯]. Polskie wyraźne, drżące „r” na końcu słychać od razu.', ex: ['Lehrer', 'vier', 'Mutter', 'rot'] },
  { t: 'Akcent na pierwszą sylabę rdzenia', b: 'W słowach rodzimych akcent pada na pierwszą sylabę rdzenia: Vater, arbeiten. Przedrostki rozdzielne mają akcent (ANrufen, AUFstehen), nierozdzielne – nie (beSUCHen, verSTEHen). W zapożyczeniach często na końcu: Universität, Musik.', ex: ['anrufen', 'besuchen', 'Universität', 'Musik'] },
  { t: 'Twardy nagłos (Knacklaut)', b: 'Wyrazy zaczynające się samogłoską wymawia się z lekkim „zatrzaśnięciem” krtani, bez łączenia z poprzednim słowem: das | Auto, ver|antworten. Dlatego niemiecki brzmi „staccato”.', ex: ['das Auto', 'beantworten', 'am Abend', 'Erinnerung'] }
];

/* ---------- Gramatyka kontrastowa ---------- */
UA.GRAMMAR = [
  { id: 'artikel', t: 'Rodzajnik: der, die, das',
    b: '<p>Każdy rzeczownik ma rodzaj, który pokazuje <b>rodzajnik</b>. Rodzaj często <b>nie zgadza się z polskim</b> – dlatego zawsze uczymy się słowa razem z rodzajnikiem (w aplikacji kolor: <span class="g-der">der</span>, <span class="g-die">die</span>, <span class="g-das">das</span>).</p><table class="tbl"><tr><td>die Sonne</td><td>słońce (po polsku nijakie)</td></tr><tr><td>der Mond</td><td>księżyc</td></tr><tr><td>das Mädchen</td><td>dziewczyna (nijakie – przez -chen)</td></tr><tr><td>der Löffel, die Gabel, das Messer</td><td>łyżka, widelec, nóż</td></tr></table><p>Pomocne końcówki: <b>-ung, -heit, -keit, -schaft, -ion, -tät</b> → die; <b>-chen, -lein, -um, -ment</b> → das; <b>-er (wykonawca), -ling, -ismus</b> → der. Liczba mnoga zawsze ma <b>die</b>.</p>',
    quiz: [
      ['___ Zeitung (gazeta)', ['der Zeitung', 'die Zeitung', 'das Zeitung'], 1],
      ['___ Mädchen', ['der Mädchen', 'die Mädchen (lp.)', 'das Mädchen'], 2],
      ['___ Freiheit', ['die Freiheit', 'der Freiheit', 'das Freiheit'], 0],
      ['___ Lehrer', ['das Lehrer', 'der Lehrer', 'die Lehrer (lp.)'], 1]
    ] },
  { id: 'v2', t: 'Szyk: czasownik na drugim miejscu',
    b: '<p>W zdaniu oznajmującym odmieniony czasownik stoi <b>zawsze na drugim miejscu</b>. Jeśli na początku jest coś innego niż podmiot, podmiot przechodzi za czasownik (inwersja):</p><table class="tbl"><tr><td>Ich <b>gehe</b> heute ins Kino.</td><td>Idę dziś do kina.</td></tr><tr><td>Heute <b>gehe</b> ich ins Kino.</td><td>Dziś idę do kina.</td></tr><tr><td>Am Montag <b>habe</b> ich Deutsch.</td><td>W poniedziałek mam niemiecki.</td></tr></table><p>W czasach złożonych i z czasownikami modalnymi druga część stoi <b>na samym końcu</b>: <i>Ich <b>kann</b> heute nicht <b>kommen</b>. Ich <b>habe</b> das Buch gestern <b>gelesen</b>.</i> Po polsku szyk jest swobodny – po niemiecku nie.</p>',
    quiz: [
      ['Jutro jadę do Berlina.', ['Morgen ich fahre nach Berlin.', 'Morgen fahre ich nach Berlin.', 'Morgen nach Berlin ich fahre.'], 1],
      ['Nie mogę dziś przyjść.', ['Ich kann heute nicht kommen.', 'Ich kann kommen heute nicht.', 'Ich heute kann nicht kommen.'], 0],
      ['Wczoraj czytałem książkę.', ['Gestern ich habe ein Buch gelesen.', 'Gestern habe ich ein Buch gelesen.', 'Gestern habe gelesen ich ein Buch.'], 1],
      ['W lecie pływamy w jeziorze.', ['Im Sommer schwimmen wir im See.', 'Im Sommer wir schwimmen im See.', 'Wir im Sommer schwimmen im See.'], 0]
    ] },
  { id: 'nebensatz', t: 'Zdanie podrzędne: czasownik na końcu',
    b: '<p>Po spójnikach podrzędnych (<b>weil, dass, wenn, ob, obwohl, als, damit</b>) odmieniony czasownik idzie <b>na koniec zdania</b>:</p><table class="tbl"><tr><td>Ich bleibe zu Hause, weil ich krank <b>bin</b>.</td><td>Zostaję w domu, bo jestem chory.</td></tr><tr><td>Ich weiß, dass du recht <b>hast</b>.</td><td>Wiem, że masz rację.</td></tr><tr><td>Wenn ich Zeit <b>habe</b>, komme ich.</td><td>Jeśli będę miał czas, przyjdę.</td></tr></table><p>Gdy zdanie podrzędne stoi na początku, całe liczy się jako „pierwsze miejsce” – więc dalej od razu czasownik: <i>Wenn ich Zeit habe, <b>komme</b> ich.</i> Za to po <b>denn, aber, und, oder</b> szyk zostaje normalny.</p>',
    quiz: [
      ['…, bo jestem zmęczony.', ['…, weil ich bin müde.', '…, weil ich müde bin.', '…, weil bin ich müde.'], 1],
      ['Myślę, że to dobry pomysł.', ['Ich denke, dass das ist eine gute Idee.', 'Ich denke, dass das eine gute Idee ist.', 'Ich denke, dass ist das eine gute Idee.'], 1],
      ['Jeśli pada, zostajemy w domu.', ['Wenn es regnet, wir bleiben zu Hause.', 'Wenn es regnet, bleiben wir zu Hause.', 'Wenn regnet es, bleiben wir zu Hause.'], 1],
      ['…, bo (denn) nie mam czasu.', ['…, denn ich habe keine Zeit.', '…, denn ich keine Zeit habe.', '…, denn habe ich keine Zeit.'], 0]
    ] },
  { id: 'trennbar', t: 'Czasowniki rozdzielnie złożone',
    b: '<p>Wiele czasowników ma <b>przedrostek, który „odpada”</b> i wędruje na koniec zdania:</p><table class="tbl"><tr><td>aufstehen</td><td>Ich <b>stehe</b> um sieben <b>auf</b>.</td></tr><tr><td>anrufen</td><td><b>Ruf</b> mich morgen <b>an</b>!</td></tr><tr><td>einkaufen</td><td>Wir <b>kaufen</b> am Samstag <b>ein</b>.</td></tr></table><p>W bezokoliczniku i imiesłowie przedrostek się „skleja”: <i>Ich muss früh <b>aufstehen</b>. Ich bin früh <b>aufgestanden</b>.</i> (ge- wchodzi do środka). Przedrostki <b>be-, ver-, er-, ent-, zer-, ge-</b> nigdy się nie odrywają: <i>Ich <b>verstehe</b> das.</i></p>',
    quiz: [
      ['Wstaję o szóstej.', ['Ich aufstehe um sechs.', 'Ich stehe um sechs auf.', 'Ich stehe auf um sechs.'], 1],
      ['Zadzwoniłem do niej.', ['Ich habe sie angerufen.', 'Ich habe sie gerufenan.', 'Ich habe angerufen sie.'], 0],
      ['Rozumiem cię.', ['Ich stehe dich ver.', 'Ich verstehe dich.', 'Ich verstehe dich ver.'], 1],
      ['Przesiadamy się w Kolonii.', ['Wir umsteigen in Köln.', 'Wir steigen in Köln um.', 'Wir steigen um in Köln.'], 1]
    ] },
  { id: 'perfekt', t: 'Perfekt: haben czy sein?',
    b: '<p>W mowie przeszłość wyrażamy zwykle czasem <b>Perfekt</b>: <b>haben/sein + imiesłów (Partizip II)</b> na końcu zdania.</p><table class="tbl"><tr><td>Ich <b>habe</b> Kaffee <b>getrunken</b>.</td><td>Wypiłem kawę.</td></tr><tr><td>Wir <b>sind</b> nach Wien <b>gefahren</b>.</td><td>Pojechaliśmy do Wiednia.</td></tr></table><p><b>sein</b> wybierają czasowniki <b>ruchu i zmiany stanu</b> bez dopełnienia: gehen, fahren, kommen, fliegen, aufstehen, einschlafen, sterben, werden, oraz <b>sein</b> i <b>bleiben</b>. Reszta – <b>haben</b>. Polski nie ma tego wyboru, więc trzeba go „wbić”.</p><p>Präteritum (<i>ich war, ich hatte, ich ging</i>) to czas opowieści pisanej; w mowie używa się go głównie z sein, haben i czasownikami modalnymi.</p>',
    quiz: [
      ['Poszedłem do domu.', ['Ich habe nach Hause gegangen.', 'Ich bin nach Hause gegangen.', 'Ich bin nach Hause gegeht.'], 1],
      ['Kupiliśmy chleb.', ['Wir haben Brot gekauft.', 'Wir sind Brot gekauft.', 'Wir haben gekauft Brot.'], 0],
      ['Zostałem w domu.', ['Ich habe zu Hause geblieben.', 'Ich bin zu Hause geblieben.', 'Ich bin zu Hause gebleibt.'], 1],
      ['Ona wcześnie wstała.', ['Sie hat früh aufgestanden.', 'Sie ist früh aufgestanden.', 'Sie ist früh aufgesteht.'], 1]
    ] },
  { id: 'kasus', t: 'Przypadki widać po rodzajniku',
    b: '<p>Niemiecki ma tylko <b>4 przypadki</b>, a rzeczownik prawie się nie zmienia – przypadek pokazuje głównie <b>rodzajnik</b>:</p><table class="tbl"><tr><td></td><td>męski / żeński / nijaki / lm.</td></tr><tr><td>Nominativ (kto? co?)</td><td>der / die / das / die</td></tr><tr><td>Akkusativ (kogo? co?)</td><td><b>den</b> / die / das / die</td></tr><tr><td>Dativ (komu? czemu?)</td><td><b>dem</b> / <b>der</b> / <b>dem</b> / <b>den</b> (+n)</td></tr><tr><td>Genitiv (kogo? czego?)</td><td><b>des</b> (+s) / <b>der</b> / <b>des</b> (+s) / <b>der</b></td></tr></table><p>W bierniku zmienia się tylko rodzaj męski: <i>Ich sehe <b>den</b> Mann.</i> Pułapki dla Polaka: <b>helfen, danken, gefallen, gehören</b> łączą się z celownikiem (<i>Ich helfe <b>dir</b></i>), a <b>fragen</b> z biernikiem (<i>Ich frage <b>dich</b></i>).</p>',
    quiz: [
      ['Widzę tego mężczyznę.', ['Ich sehe der Mann.', 'Ich sehe den Mann.', 'Ich sehe dem Mann.'], 1],
      ['Pomagam mojej mamie.', ['Ich helfe meine Mutter.', 'Ich helfe meiner Mutter.', 'Ich helfe meinen Mutter.'], 1],
      ['Jadę autobusem (mit + celownik).', ['Ich fahre mit dem Bus.', 'Ich fahre mit den Bus.', 'Ich fahre mit der Bus.'], 0],
      ['Samochód mojego brata', ['das Auto mein Bruder', 'das Auto meines Bruders', 'das Auto meinem Bruder'], 1]
    ] },
  { id: 'wechsel', t: 'Wo? czy Wohin? – przyimki zmiennorządne',
    b: '<p>Przyimki <b>in, an, auf, über, unter, vor, hinter, neben, zwischen</b> łączą się z:</p><table class="tbl"><tr><td><b>Wo?</b> (gdzie? – miejsce) → Dativ</td><td>Das Buch liegt <b>auf dem</b> Tisch.</td></tr><tr><td><b>Wohin?</b> (dokąd? – ruch) → Akkusativ</td><td>Ich lege das Buch <b>auf den</b> Tisch.</td></tr><tr><td>Ich bin <b>im</b> (in dem) Kino.</td><td>Jestem w kinie.</td></tr><tr><td>Ich gehe <b>ins</b> (in das) Kino.</td><td>Idę do kina.</td></tr></table><p>Polski robi to samo („na stole” – „na stół”), więc wyczucie już masz – trzeba tylko dobrać rodzajnik. Uwaga na pary czasowników: <i>liegen – legen, stehen – stellen, sitzen – setzen, hängen – hängen</i>.</p>',
    quiz: [
      ['Kot śpi na kanapie.', ['Die Katze schläft auf das Sofa.', 'Die Katze schläft auf dem Sofa.', 'Die Katze schläft auf den Sofa.'], 1],
      ['Kładę klucz na stół.', ['Ich lege den Schlüssel auf den Tisch.', 'Ich lege den Schlüssel auf dem Tisch.', 'Ich liege den Schlüssel auf den Tisch.'], 0],
      ['Idziemy do parku.', ['Wir gehen im Park.', 'Wir gehen in den Park.', 'Wir gehen in dem Park.'], 1],
      ['Obraz wisi nad łóżkiem.', ['Das Bild hängt über dem Bett.', 'Das Bild hängt über das Bett.', 'Das Bild hängt über den Bett.'], 0]
    ] },
  { id: 'sie', t: 'Forma grzecznościowa: Sie',
    b: '<p>Polskie „Czy pan ma czas?” (3. osoba lp.) po niemiecku to <b>„Haben Sie Zeit?”</b> – czasownik w <b>3. osobie liczby mnogiej</b>, a <b>Sie</b> zawsze wielką literą.</p><table class="tbl"><tr><td>Sprechen Sie Polnisch?</td><td>Czy pani mówi po polsku?</td></tr><tr><td>Wo arbeiten Sie?</td><td>Gdzie pan pracuje?</td></tr><tr><td>Nehmen Sie bitte Platz.</td><td>Proszę usiąść.</td></tr><tr><td>Wie geht es Ihnen?</td><td>Jak się pan(i) miewa?</td></tr></table><p><b>Herr / Frau</b> stoją tylko przy nazwisku: <i>Guten Tag, Herr Müller!</i> Konstrukcja „Hat der Herr Zeit?” brzmi dziwnie. W szkole, wśród młodzieży i w wielu firmach szybko przechodzi się na <b>du</b>.</p>',
    quiz: [
      ['Czy pan ma długopis?', ['Hat der Herr einen Kuli?', 'Haben Sie einen Kuli?', 'Hast du einen Kuli, Herr?'], 1],
      ['Skąd pani jest?', ['Woher kommen Sie?', 'Woher kommt Frau?', 'Woher kommt sie?'], 0],
      ['Jak się pan miewa?', ['Wie geht es dir?', 'Wie geht es Ihnen?', 'Wie geht es Sie?'], 1]
    ] },
  { id: 'werden', t: 'Bez aspektu: jak powiedzieć „zrobię”?',
    b: '<p>Niemiecki nie ma aspektu dokonanego/niedokonanego. <i>Ich lese</i> to „czytam”, ale też „przeczytam” – o znaczeniu decyduje kontekst i przysłówki:</p><table class="tbl"><tr><td>Ich lese das Buch morgen.</td><td>Przeczytam / będę czytał tę książkę jutro.</td></tr><tr><td>Ich <b>werde</b> dich anrufen.</td><td>Zadzwonię do ciebie. (Futur I)</td></tr><tr><td>Ich habe das Buch <b>gelesen</b>.</td><td>Przeczytałem / czytałem książkę.</td></tr><tr><td>Ich <b>habe</b> gerade <b>gelesen</b>, als …</td><td>Właśnie czytałem, gdy…</td></tr></table><p>Przyszłość najczęściej wyrażamy czasem teraźniejszym + określeniem czasu (<i>morgen, nächste Woche</i>). <b>werden + bezokolicznik</b> podkreśla obietnicę lub przypuszczenie.</p>',
    quiz: [
      ['Jutro do ciebie zadzwonię. (najczęściej)', ['Morgen rufe ich dich an.', 'Morgen ich rufe dich an.', 'Morgen ich werde anrufen dich.'], 0],
      ['Zadzwonię na pewno! (obietnica)', ['Ich werde dich bestimmt anrufen!', 'Ich werde dich bestimmt anrufe!', 'Ich wird dich bestimmt anrufen!'], 0],
      ['Przeczytałem cały list.', ['Ich lese den ganzen Brief.', 'Ich habe den ganzen Brief gelesen.', 'Ich bin den ganzen Brief gelesen.'], 1]
    ] }
];

/* ---------- Dialogi ----------
   linie: [rola, niemiecki, polski] */
UA.DIALOGS = [
  { id: 'kennenlernen', t: 'Poznajmy się', ua: 'Sich kennenlernen', roles: ['Lena', 'Marcin'], lines: [
    [0, 'Hallo! Ich heiße Lena. Und du?', 'Cześć! Mam na imię Lena. A ty?'],
    [1, 'Hallo! Ich bin Marcin. Freut mich.', 'Cześć! Jestem Marcin. Miło mi.'],
    [0, 'Kommst du aus Polen?', 'Jesteś z Polski?'],
    [1, 'Ja, aus Warschau. Und du?', 'Tak, z Warszawy. A ty?'],
    [0, 'Ich komme aus Dresden. Du sprichst aber gut Deutsch!', 'Jestem z Drezna. Dobrze mówisz po niemiecku!'],
    [1, 'Danke, aber ich lerne noch.', 'Dziękuję, ale wciąż się uczę.'],
    [0, 'Was machst du beruflich?', 'Czym się zajmujesz zawodowo?'],
    [1, 'Ich bin Lehrer für Geschichte.', 'Jestem nauczycielem historii.']
  ]},
  { id: 'baeckerei', t: 'W piekarni', ua: 'In der Bäckerei', roles: ['Verkäuferin', 'Kunde'], lines: [
    [0, 'Guten Morgen! Was darf es sein?', 'Dzień dobry! Co podać?'],
    [1, 'Guten Morgen! Vier Brötchen und ein Vollkornbrot, bitte.', 'Dzień dobry! Cztery bułki i chleb razowy, proszę.'],
    [0, 'Geschnitten oder am Stück?', 'Pokroić czy w całości?'],
    [1, 'Geschnitten, bitte. Und noch ein Stück Apfelkuchen.', 'Pokroić, proszę. I jeszcze kawałek szarlotki.'],
    [0, 'Gern. Sonst noch etwas?', 'Proszę bardzo. Coś jeszcze?'],
    [1, 'Nein, danke. Was macht das?', 'Nie, dziękuję. Ile płacę?'],
    [0, 'Das macht neun Euro zwanzig.', 'Dziewięć euro dwadzieścia.'],
    [1, 'Kann ich mit Karte zahlen?', 'Mogę zapłacić kartą?'],
    [0, 'Natürlich. Schönen Tag noch!', 'Oczywiście. Miłego dnia!']
  ]},
  { id: 'weg', t: 'Pytanie o drogę', ua: 'Nach dem Weg fragen', roles: ['Tourist', 'Passantin'], lines: [
    [0, 'Entschuldigung, wie komme ich zum Bahnhof?', 'Przepraszam, jak dojdę na dworzec?'],
    [1, 'Gehen Sie hier geradeaus bis zur Ampel.', 'Proszę iść prosto do świateł.'],
    [1, 'Dann biegen Sie links ab.', 'Potem proszę skręcić w lewo.'],
    [0, 'Ist es weit?', 'Czy to daleko?'],
    [1, 'Nein, nur etwa zehn Minuten zu Fuß.', 'Nie, tylko jakieś dziesięć minut pieszo.'],
    [0, 'Fährt auch ein Bus dorthin?', 'Czy jeździ tam też autobus?'],
    [1, 'Ja, die Linie 5. Die Haltestelle ist gleich da drüben.', 'Tak, linia 5. Przystanek jest zaraz tam.'],
    [0, 'Vielen Dank!', 'Dziękuję bardzo!'],
    [1, 'Gern geschehen!', 'Nie ma za co!']
  ]},
  { id: 'arzt', t: 'U lekarza', ua: 'Beim Arzt', roles: ['Ärztin', 'Patient'], lines: [
    [0, 'Guten Tag! Was fehlt Ihnen?', 'Dzień dobry! Co panu dolega?'],
    [1, 'Ich habe Kopfschmerzen und Halsschmerzen.', 'Boli mnie głowa i gardło.'],
    [0, 'Seit wann?', 'Od kiedy?'],
    [1, 'Seit gestern. Und ich habe auch Fieber.', 'Od wczoraj. I mam też gorączkę.'],
    [0, 'Husten Sie auch?', 'Czy pan też kaszle?'],
    [1, 'Ja, ein bisschen.', 'Tak, trochę.'],
    [0, 'Ich verschreibe Ihnen ein Medikament. Nehmen Sie es dreimal täglich.', 'Przepiszę panu lek. Proszę go brać trzy razy dziennie.'],
    [1, 'Brauche ich eine Krankmeldung für die Arbeit?', 'Czy potrzebuję zwolnienia do pracy?'],
    [0, 'Ja, ich schreibe Sie bis Freitag krank.', 'Tak, wypiszę panu zwolnienie do piątku.'],
    [1, 'Vielen Dank, Frau Doktor.', 'Dziękuję bardzo, pani doktor.']
  ]},
  { id: 'restaurant', t: 'W restauracji', ua: 'Im Restaurant', roles: ['Kellner', 'Gast'], lines: [
    [0, 'Guten Abend! Haben Sie reserviert?', 'Dobry wieczór! Czy mają państwo rezerwację?'],
    [1, 'Ja, auf den Namen Nowak, für zwei Personen.', 'Tak, na nazwisko Nowak, dla dwóch osób.'],
    [0, 'Bitte sehr, hier entlang. Möchten Sie schon etwas trinken?', 'Proszę tędy. Czy podać już coś do picia?'],
    [1, 'Zwei Apfelschorlen, bitte. Was empfehlen Sie heute?', 'Dwa szprycery jabłkowe, proszę. Co pan dziś poleca?'],
    [0, 'Der Schweinebraten mit Knödeln ist sehr gut.', 'Pieczeń wieprzowa z knedlami jest bardzo dobra.'],
    [1, 'Gut, das nehme ich. Und für meine Frau einen Salat.', 'Dobrze, to wezmę. A dla żony sałatkę.'],
    [0, 'Hat es Ihnen geschmeckt?', 'Smakowało państwu?'],
    [1, 'Ja, ausgezeichnet! Wir möchten bitte zahlen.', 'Tak, wyśmienicie! Chcielibyśmy zapłacić.'],
    [0, 'Zusammen oder getrennt?', 'Razem czy osobno?'],
    [1, 'Zusammen, bitte. Stimmt so.', 'Razem, proszę. Reszty nie trzeba.']
  ]},
  { id: 'wohnung', t: 'Szukam mieszkania', ua: 'Wohnungssuche', roles: ['Vermieterin', 'Interessent'], lines: [
    [0, 'Guten Tag, Sie interessieren sich für die Wohnung?', 'Dzień dobry, interesuje się pan mieszkaniem?'],
    [1, 'Ja, genau. Wie groß ist sie?', 'Tak, właśnie. Jakie jest duże?'],
    [0, 'Sie hat zwei Zimmer, Küche und Bad, insgesamt 55 Quadratmeter.', 'Ma dwa pokoje, kuchnię i łazienkę, razem 55 metrów kwadratowych.'],
    [1, 'Wie hoch ist die Miete?', 'Ile wynosi czynsz?'],
    [0, 'Siebenhundert Euro kalt, plus Nebenkosten.', 'Siedemset euro bez opłat, plus koszty dodatkowe.'],
    [1, 'Muss ich eine Kaution zahlen?', 'Czy muszę zapłacić kaucję?'],
    [0, 'Ja, drei Monatsmieten. Ab wann möchten Sie einziehen?', 'Tak, trzy czynsze miesięczne. Od kiedy chce się pan wprowadzić?'],
    [1, 'Am liebsten ab dem ersten März.', 'Najchętniej od pierwszego marca.']
  ]},
  { id: 'amt', t: 'W urzędzie', ua: 'Auf dem Bürgeramt', roles: ['Sachbearbeiterin', 'Besucher'], lines: [
    [0, 'Guten Tag. Was kann ich für Sie tun?', 'Dzień dobry. W czym mogę pomóc?'],
    [1, 'Guten Tag. Ich möchte mich anmelden. Ich bin neu in der Stadt.', 'Dzień dobry. Chcę się zameldować. Jestem nowy w mieście.'],
    [0, 'Haben Sie einen Termin?', 'Ma pan umówioną wizytę?'],
    [1, 'Ja, um zehn Uhr.', 'Tak, na dziesiątą.'],
    [0, 'Ihren Ausweis und die Wohnungsgeberbestätigung, bitte.', 'Poproszę dowód i potwierdzenie od wynajmującego.'],
    [1, 'Bitte schön. Muss ich noch ein Formular ausfüllen?', 'Proszę. Czy muszę jeszcze wypełnić formularz?'],
    [0, 'Nein, das erledige ich. Hier ist Ihre Meldebescheinigung.', 'Nie, ja to załatwię. Oto pana zaświadczenie o zameldowaniu.'],
    [1, 'Das ging schnell. Vielen Dank!', 'To poszło szybko. Dziękuję bardzo!']
  ]},
  { id: 'diskussion', t: 'Dyskusja: szkoła i smartfony', ua: 'Handys in der Schule?', roles: ['Anna', 'Jonas'], lines: [
    [0, 'Meiner Meinung nach sollten Handys in der Schule verboten werden.', 'Moim zdaniem smartfony powinny być w szkole zakazane.'],
    [1, 'Das sehe ich anders. Man kann sie auch im Unterricht sinnvoll nutzen.', 'Widzę to inaczej. Można je też sensownie wykorzystać na lekcji.'],
    [0, 'Einerseits stimmt das, andererseits lenken sie die Schüler ständig ab.', 'Z jednej strony to prawda, z drugiej ciągle rozpraszają uczniów.'],
    [1, 'Aber ein Verbot löst das Problem nicht. Die Schüler müssen lernen, verantwortungsvoll damit umzugehen.', 'Ale zakaz nie rozwiąże problemu. Uczniowie muszą nauczyć się odpowiedzialnie z nich korzystać.'],
    [0, 'Da hast du teilweise recht. Vielleicht wäre eine klare Regel ein Kompromiss.', 'Tu masz częściowo rację. Może kompromisem byłaby jasna zasada.'],
    [1, 'Genau: in den Pausen ja, im Unterricht nur mit Erlaubnis.', 'Właśnie: na przerwach tak, na lekcji tylko za zgodą.']
  ]}
];
