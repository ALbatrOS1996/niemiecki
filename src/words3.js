/* ============================================================
   ŚCIEŻKI TEMATYCZNE (otwarte od razu, niezależne od A1–C2)
   TR – Podróż: praktyczne słownictwo na wyjazd
   AR – Archiwum i historia: kwerendy, dokumenty, pismo, historia ziem polskich
   W(...) jak w words.js; słowo docelowe w przykładzie w {…}.
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== PODRÓŻ ===================== */
  L('TR', 'tr_bahn', 'Dworzec i pociąg');
  W('der Fahrplan', 'ч', 'rozkład jazdy', 'lm. die Fahrpläne', 'o', 'Laut {Fahrplan} fährt der Zug um 9:12.', 'Według rozkładu pociąg odjeżdża o 9:12.');
  W('das Gleis', 'с', 'tor (peron, z którego odjeżdża pociąg)', 'lm. die Gleise', 'o', 'Der ICE nach Berlin fährt heute von {Gleis} 7.', 'ICE do Berlina odjeżdża dziś z toru 7.');
  W('der Bahnsteig', 'ч', 'peron', 'lm. die Bahnsteige', 'o', 'Wir warten auf dem {Bahnsteig}.', 'Czekamy na peronie.');
  W('die Abfahrt', 'ж', 'odjazd', 'lm. die Abfahrten', 'o', 'Die {Abfahrt} verzögert sich um zehn Minuten.', 'Odjazd opóźnia się o dziesięć minut.');
  W('die Ankunft', 'ж', 'przyjazd', 'lm. die Ankünfte', 'o', 'Die {Ankunft} in Wien ist um 18 Uhr.', 'Przyjazd do Wiednia jest o 18.');
  W('die Verspätung', 'ж', 'opóźnienie', 'lm. die Verspätungen', 'o', 'Der Zug hat 20 Minuten {Verspätung}.', 'Pociąg ma 20 minut opóźnienia.');
  W('der Anschluss', 'ч', 'połączenie (przesiadkowe)', 'lm. die Anschlüsse', 'o', 'Ich habe meinen {Anschluss} verpasst.', 'Uciekło mi połączenie.');
  W('der Fahrkartenautomat', 'ч', 'biletomat', 'lm. die Fahrkartenautomaten', 'p', 'Den Fahrschein bekommst du am {Fahrkartenautomaten}.', 'Bilet dostaniesz w biletomacie.');
  W('die Platzreservierung', 'ж', 'miejscówka, rezerwacja miejsca', 'lm. die Platzreservierungen', 'p', 'Für den ICE empfehle ich eine {Platzreservierung}.', 'Do ICE polecam rezerwację miejsca.');
  W('der Wagen', 'ч', 'wagon; samochód', 'lm. die Wagen', 'p', 'Unser Platz ist im {Wagen} 12.', 'Nasze miejsce jest w wagonie 12.');
  W('der Zugbegleiter', 'ч', 'konduktor, kierownik pociągu', 'lm. die Zugbegleiter · ż. die Zugbegleiterin', 'o', 'Der {Zugbegleiter} kontrolliert die Fahrkarten.', 'Konduktor sprawdza bilety.');
  W('hin und zurück', 'ф', 'tam i z powrotem (bilet w obie strony)', 'einfach – w jedną stronę', 'o', 'Einmal Dresden, {hin und zurück}, bitte.', 'Raz do Drezna, w obie strony, proszę.');
  W('Ist dieser Platz frei?', 'ф', 'czy to miejsce jest wolne?', '', 'o', 'Entschuldigung, {ist dieser Platz frei}?', 'Przepraszam, czy to miejsce jest wolne?');
  W('die Durchsage', 'ж', 'komunikat (przez głośnik)', 'lm. die Durchsagen', 'o', 'Hast du die {Durchsage} verstanden?', 'Zrozumiałeś komunikat?');
  W('das Deutschlandticket', 'с', 'Deutschlandticket – miesięczny bilet na regionalne pociągi i komunikację w całych Niemczech', '', 'p', 'Mit dem {Deutschlandticket} fahren wir Regionalzug.', 'Z Deutschlandticket jeździmy pociągami regionalnymi.');
  W('der Zug fällt aus', 'ф', 'pociąg jest odwołany', 'ausfallen – nie odbyć się', 'o', 'Achtung: {Der Zug fällt aus}!', 'Uwaga: pociąg jest odwołany!');

  L('TR', 'tr_flug', 'Lotnisko i samolot');
  W('der Flug', 'ч', 'lot', 'lm. die Flüge', 'o', 'Unser {Flug} hat eine Stunde Verspätung.', 'Nasz lot ma godzinę opóźnienia.');
  W('der Abflug', 'ч', 'odlot', 'lm. die Abflüge', 'o', 'Der {Abflug} ist um 6:40.', 'Odlot jest o 6:40.');
  W('die Landung', 'ж', 'lądowanie', 'lm. die Landungen', 'p', 'Nach der {Landung} schalten Sie bitte das Handy ein.', 'Po lądowaniu proszę włączyć telefon.');
  W('das Gepäck', 'с', 'bagaż', 'bez lm.', 'o', 'Mein {Gepäck} ist nicht angekommen.', 'Mój bagaż nie dotarł.');
  W('das Handgepäck', 'с', 'bagaż podręczny', 'bez lm.', 'o', 'Flüssigkeiten im {Handgepäck} sind begrenzt.', 'Płyny w bagażu podręcznym są ograniczone.');
  W('die Bordkarte', 'ж', 'karta pokładowa', 'lm. die Bordkarten', 'o', 'Bitte zeigen Sie Ihre {Bordkarte}.', 'Proszę pokazać kartę pokładową.');
  W('das Gate', 'с', 'wyjście (do samolotu)', 'lm. die Gates', 't', 'Das Boarding beginnt am {Gate} B12.', 'Boarding zaczyna się przy wyjściu B12.');
  W('der Zoll', 'ч', 'cło; urząd celny', 'bez lm.', 'o', 'Am {Zoll} musste ich den Koffer öffnen.', 'Na odprawie celnej musiałem otworzyć walizkę.');
  W('die Passkontrolle', 'ж', 'kontrola paszportowa', 'lm. die Passkontrollen', 'p', 'Bei der {Passkontrolle} ist eine lange Schlange.', 'Przy kontroli paszportowej jest długa kolejka.');
  W('die Gepäckausgabe', 'ж', 'odbiór bagażu', 'bez lm.', 'o', 'Wo ist die {Gepäckausgabe}?', 'Gdzie jest odbiór bagażu?');
  W('verpassen', 'д', 'spóźnić się na, przegapić', 'verpasst · verpasste · hat verpasst', 'o', 'Ich habe meinen Flug {verpasst}.', 'Spóźniłem się na samolot.');
  W('annulliert', 'п', 'odwołany (lot)', 'też: gestrichen', 'p', 'Der Flug nach Danzig ist {annulliert}.', 'Lot do Gdańska jest odwołany.');
  W('die Schlange', 'ж', 'kolejka; wąż', 'lm. die Schlangen · Schlange stehen', 'o', 'Wir stehen schon eine Stunde in der {Schlange}.', 'Stoimy w kolejce już godzinę.');
  W('Ich habe nichts zu verzollen.', 'ф', 'nie mam nic do oclenia', '', 'o', 'Nein, {ich habe nichts zu verzollen}.', 'Nie, nie mam nic do oclenia.');

  L('TR', 'tr_stadt2', 'Komunikacja miejska i taxi');
  W('die Straßenbahn', 'ж', 'tramwaj', 'lm. die Straßenbahnen · potocznie: die Tram', 'o', 'Wir nehmen die {Straßenbahn} zum Zentrum.', 'Pojedziemy tramwajem do centrum.');
  W('die U-Bahn', 'ж', 'metro', 'lm. die U-Bahnen', 'o', 'Die {U-Bahn} fährt alle fünf Minuten.', 'Metro jeździ co pięć minut.');
  W('die S-Bahn', 'ж', 'kolej miejska / podmiejska', 'lm. die S-Bahnen', 'o', 'Mit der {S-Bahn} sind wir in 20 Minuten am Flughafen.', 'Koleją miejską będziemy na lotnisku za 20 minut.');
  W('die Tageskarte', 'ж', 'bilet dobowy', 'lm. die Tageskarten · die Wochenkarte – tygodniowy', 'o', 'Eine {Tageskarte} lohnt sich, wenn man oft fährt.', 'Bilet dobowy się opłaca, gdy często się jeździ.');
  W('einsteigen', 'д', 'wsiadać', 'steigt ein · stieg ein · ist eingestiegen', 'o', 'Bitte vorne {einsteigen}!', 'Proszę wsiadać przodem!');
  W('aussteigen', 'д', 'wysiadać', 'steigt aus · stieg aus · ist ausgestiegen', 'o', 'An welcher Haltestelle muss ich {aussteigen}?', 'Na którym przystanku mam wysiąść?');
  W('die Endstation', 'ж', 'stacja / przystanek końcowy', 'lm. die Endstationen', 'p', 'Wir fahren bis zur {Endstation}.', 'Jedziemy do stacji końcowej.');
  W('die Quittung', 'ж', 'pokwitowanie, rachunek', 'lm. die Quittungen', 'o', 'Könnte ich bitte eine {Quittung} bekommen?', 'Czy mogę prosić o pokwitowanie?');
  W('der Stadtplan', 'ч', 'plan miasta', 'lm. die Stadtpläne', 'o', 'Haben Sie einen {Stadtplan}?', 'Czy ma pan plan miasta?');
  W('die Fußgängerzone', 'ж', 'deptak, strefa dla pieszych', 'lm. die Fußgängerzonen', 'o', 'Die Geschäfte sind in der {Fußgängerzone}.', 'Sklepy są na deptaku.');
  W('Können Sie mich hier rauslassen?', 'ф', 'czy może mnie pan tu wysadzić?', '', 'o', '{Können Sie mich hier rauslassen}? Danke!', 'Może mnie pan tu wysadzić? Dziękuję!');
  W('nächster Halt', 'ф', 'następny przystanek', '', 'p', '„{Nächster Halt}: Alexanderplatz.”', '„Następny przystanek: Alexanderplatz.”');
  W('der Taxistand', 'ч', 'postój taksówek', 'lm. die Taxistände', 'p', 'Der {Taxistand} ist vor dem Bahnhof.', 'Postój taksówek jest przed dworcem.');

  L('TR', 'tr_unterkunft', 'Nocleg');
  W('Ich habe reserviert.', 'ф', 'mam rezerwację', 'auf den Namen … – na nazwisko…', 'p', 'Guten Abend, {ich habe reserviert}, auf den Namen Nowak.', 'Dobry wieczór, mam rezerwację na nazwisko Nowak.');
  W('das Einzelzimmer', 'с', 'pokój jednoosobowy', 'lm. die Einzelzimmer · das Doppelzimmer – dwuosobowy', 'o', 'Ich hätte gern ein {Einzelzimmer}.', 'Chciałbym pokój jednoosobowy.');
  W('Frühstück inklusive', 'ф', 'śniadanie w cenie', '', 'p', 'Ist das {Frühstück inklusive}?', 'Czy śniadanie jest w cenie?');
  W('die Rezeption', 'ж', 'recepcja', 'lm. die Rezeptionen', 't', 'Den Schlüssel bekommen Sie an der {Rezeption}.', 'Klucz dostanie pan w recepcji.');
  W('einchecken', 'д', 'zameldować się', 'checkt ein · checkte ein · hat eingecheckt', 'p', 'Ab wann kann man {einchecken}?', 'Od której można się zameldować?');
  W('auschecken', 'д', 'wymeldować się', 'checkt aus · checkte aus · hat ausgecheckt', 'p', 'Wir müssen bis elf Uhr {auschecken}.', 'Musimy się wymeldować do jedenastej.');
  W('das Handtuch', 'с', 'ręcznik', 'lm. die Handtücher', 'o', 'Könnten wir noch ein {Handtuch} bekommen?', 'Czy moglibyśmy dostać jeszcze jeden ręcznik?');
  W('die Klimaanlage', 'ж', 'klimatyzacja', 'lm. die Klimaanlagen', 'p', 'Die {Klimaanlage} funktioniert nicht.', 'Klimatyzacja nie działa.');
  W('funktioniert nicht', 'ф', 'nie działa', '', 'p', 'Die Dusche {funktioniert nicht}.', 'Prysznic nie działa.');
  W('die Ferienwohnung', 'ж', 'mieszkanie wakacyjne (na wynajem)', 'lm. die Ferienwohnungen · skrót: FeWo', 'o', 'Wir haben eine {Ferienwohnung} am See gemietet.', 'Wynajęliśmy mieszkanie wakacyjne nad jeziorem.');
  W('die Jugendherberge', 'ж', 'schronisko młodzieżowe', 'lm. die Jugendherbergen', 'o', 'Die Klasse übernachtet in einer {Jugendherberge}.', 'Klasa nocuje w schronisku młodzieżowym.');
  W('Wie lautet das WLAN-Passwort?', 'ф', 'jakie jest hasło do Wi-Fi?', 'WLAN – czyt. [we-lan]', 'o', 'Entschuldigung, {wie lautet das WLAN-Passwort}?', 'Przepraszam, jakie jest hasło do Wi-Fi?');
  W('die Kurtaxe', 'ж', 'opłata miejscowa (klimatyczna)', 'lm. die Kurtaxen · też: die Ortstaxe', 'o', 'Die {Kurtaxe} zahlt man vor Ort.', 'Opłatę miejscową płaci się na miejscu.');

  L('TR', 'tr_essen2', 'Restauracja i jedzenie');
  W('Einen Tisch für zwei, bitte.', 'ф', 'stolik dla dwojga, proszę', '', 'o', 'Guten Abend! {Einen Tisch für zwei, bitte.}', 'Dobry wieczór! Stolik dla dwojga, proszę.');
  W('Was empfehlen Sie?', 'ф', 'co pan poleca?', '', 'o', '{Was empfehlen Sie} aus der regionalen Küche?', 'Co pan poleca z kuchni regionalnej?');
  W('Ich bin allergisch gegen …', 'ф', 'mam alergię na…', '', 'p', '{Ich bin allergisch gegen} Nüsse.', 'Mam alergię na orzechy.');
  W('Zahlen, bitte!', 'ф', 'rachunek, proszę!', '', 'o', 'Entschuldigung! {Zahlen, bitte}!', 'Przepraszam! Rachunek, proszę!');
  W('Zusammen oder getrennt?', 'ф', 'razem czy osobno? (pytanie przy płaceniu)', '', 'o', '— {Zusammen oder getrennt}? — Getrennt, bitte.', '— Razem czy osobno? — Osobno, proszę.');
  W('Stimmt so.', 'ф', 'reszty nie trzeba', '', 'o', 'Das macht 18,50. – Hier sind 20. {Stimmt so}.', 'Razem 18,50. – Proszę 20. Reszty nie trzeba.');
  W('die Kneipe', 'ж', 'knajpa, pub', 'lm. die Kneipen', 'o', 'Nach der Arbeit gehen wir in die {Kneipe}.', 'Po pracy idziemy do knajpy.');
  W('der Biergarten', 'ч', 'ogródek piwny', 'lm. die Biergärten', 'o', 'Im Sommer sitzen wir gern im {Biergarten}.', 'Latem lubimy siedzieć w ogródku piwnym.');
  W('das Schnitzel', 'с', 'sznycel, kotlet panierowany', 'lm. die Schnitzel', 'p', 'Ein Wiener {Schnitzel} mit Kartoffelsalat, bitte.', 'Sznycel po wiedeńsku z sałatką ziemniaczaną, proszę.');
  W('die Bratwurst', 'ж', 'kiełbaska z grilla', 'lm. die Bratwürste', 'o', 'Eine {Bratwurst} mit Senf, bitte.', 'Kiełbaskę z musztardą, proszę.');
  W('die Brezel', 'ж', 'precel', 'lm. die Brezeln', 'p', 'Zum Bier essen wir eine {Brezel}.', 'Do piwa jemy precla.');
  W('Kaffee und Kuchen', 'ф', 'kawa i ciasto (popołudniowy zwyczaj)', '', 'o', 'Am Sonntag gibt es bei Oma {Kaffee und Kuchen}.', 'W niedzielę u babci jest kawa i ciasto.');
  W('zum Mitnehmen', 'ф', 'na wynos', 'hier essen – na miejscu', 'o', 'Einen Kaffee {zum Mitnehmen}, bitte.', 'Kawę na wynos, proszę.');
  W('das Leitungswasser', 'с', 'woda z kranu', 'bez lm.', 'o', 'Kann ich ein Glas {Leitungswasser} haben?', 'Mogę dostać szklankę wody z kranu?');
  W('der Ruhetag', 'ч', 'dzień, w którym lokal jest zamknięty', 'lm. die Ruhetage', 'o', 'Montag ist {Ruhetag}.', 'W poniedziałek lokal jest zamknięty.');

  L('TR', 'tr_geld', 'Pieniądze i zakupy');
  W('der Geldautomat', 'ч', 'bankomat', 'lm. die Geldautomaten', 'o', 'Wo ist der nächste {Geldautomat}?', 'Gdzie jest najbliższy bankomat?');
  W('bar zahlen', 'ф', 'płacić gotówką', 'mit Karte zahlen – kartą', 'o', 'Hier kann man nur {bar zahlen}.', 'Tu można płacić tylko gotówką.');
  W('das Kleingeld', 'с', 'drobne', 'bez lm.', 'o', 'Hast du {Kleingeld} für den Automaten?', 'Masz drobne do automatu?');
  W('der Wechselkurs', 'ч', 'kurs wymiany', 'lm. die Wechselkurse', 'p', 'Wie ist der {Wechselkurs} heute?', 'Jaki jest dziś kurs wymiany?');
  W('das Pfand', 'с', 'kaucja (za butelki, puszki)', 'bez lm. · der Pfandautomat', 'o', 'Auf die Flasche gibt es 25 Cent {Pfand}.', 'Za butelkę jest 25 centów kaucji.');
  W('der Kassenbon', 'ч', 'paragon', 'lm. die Kassenbons', 'p', 'Brauchen Sie den {Kassenbon}?', 'Potrzebuje pan paragonu?');
  W('die Öffnungszeiten', 'мн', 'godziny otwarcia', 'tylko lm.', 'o', 'Die {Öffnungszeiten} stehen an der Tür.', 'Godziny otwarcia są na drzwiach.');
  W('sonntags geschlossen', 'ф', 'w niedziele zamknięte', '', 'o', 'Der Supermarkt ist {sonntags geschlossen}.', 'Supermarket w niedziele jest zamknięty.');
  W('der Flohmarkt', 'ч', 'pchli targ', 'lm. die Flohmärkte', 'o', 'Am Samstag gehen wir auf den {Flohmarkt}.', 'W sobotę idziemy na pchli targ.');
  W('Ich schaue mich nur um.', 'ф', 'tylko się rozglądam', '', 'o', 'Danke, {ich schaue mich nur um}.', 'Dziękuję, tylko się rozglądam.');
  W('die Umkleidekabine', 'ж', 'przymierzalnia', 'lm. die Umkleidekabinen', 'p', 'Wo ist die {Umkleidekabine}?', 'Gdzie jest przymierzalnia?');
  W('umtauschen', 'д', 'wymienić (towar)', 'tauscht um · tauschte um · hat umgetauscht', 'o', 'Kann ich das Hemd {umtauschen}?', 'Mogę wymienić tę koszulę?');

  L('TR', 'tr_notfall', 'Zdrowie i nagłe wypadki');
  W('Hilfe!', 'ф', 'pomocy!', '', 'o', '{Hilfe}! Rufen Sie einen Krankenwagen!', 'Pomocy! Proszę wezwać karetkę!');
  W('der Notruf', 'ч', 'telefon alarmowy (112, policja 110)', 'lm. die Notrufe', 'o', 'Den {Notruf} 112 erreicht man kostenlos.', 'Pod numer alarmowy 112 dzwoni się bezpłatnie.');
  W('die Notaufnahme', 'ж', 'izba przyjęć, SOR', 'lm. die Notaufnahmen', 'o', 'Wir müssen in die {Notaufnahme}.', 'Musimy jechać na izbę przyjęć.');
  W('die Polizei', 'ж', 'policja', 'bez lm.', 'p', 'Rufen Sie die {Polizei}!', 'Proszę wezwać policję!');
  W('Mir wurde … gestohlen.', 'ф', 'ukradziono mi…', '', 'o', '{Mir wurde} das Portemonnaie {gestohlen}.', 'Ukradziono mi portfel.');
  W('Ich habe meinen Pass verloren.', 'ф', 'zgubiłem paszport', '', 'o', 'Was soll ich tun? {Ich habe meinen Pass verloren}.', 'Co mam zrobić? Zgubiłem paszport.');
  W('die Botschaft', 'ж', 'ambasada; przesłanie', 'lm. die Botschaften · das Konsulat', 'o', 'Ich muss zur polnischen {Botschaft}.', 'Muszę iść do polskiej ambasady.');
  W('das Fundbüro', 'с', 'biuro rzeczy znalezionych', 'lm. die Fundbüros', 'o', 'Fragen Sie im {Fundbüro}.', 'Proszę zapytać w biurze rzeczy znalezionych.');
  W('der ärztliche Notdienst', 'ф', 'nocna i świąteczna pomoc lekarska (tel. 116 117)', '', 'o', 'Am Wochenende hilft der {ärztliche Notdienst}.', 'W weekend pomaga dyżurna pomoc lekarska.');
  W('die Schmerztablette', 'ж', 'tabletka przeciwbólowa', 'lm. die Schmerztabletten', 'p', 'Haben Sie eine {Schmerztablette}?', 'Ma pan tabletkę przeciwbólową?');
  W('das Pflaster', 'с', 'plaster; bruk', 'lm. die Pflaster', 'p', 'Ich brauche ein {Pflaster}.', 'Potrzebuję plastra.');
  W('Mir ist schlecht.', 'ф', 'niedobrze mi, źle się czuję', '', 'o', 'Können wir anhalten? {Mir ist schlecht}.', 'Możemy się zatrzymać? Niedobrze mi.');

  L('TR', 'tr_weg', 'Orientacja w mieście');
  W('Wie komme ich zum …?', 'ф', 'jak dojdę/dojadę do…? (r. męski/nijaki)', 'zur … – do (r. żeński)', 'o', 'Entschuldigung, {wie komme ich zum} Brandenburger Tor?', 'Przepraszam, jak dojdę do Bramy Brandenburskiej?');
  W('an der Ecke', 'ф', 'na rogu', '', 'o', 'Die Apotheke ist {an der Ecke}.', 'Apteka jest na rogu.');
  W('gegenüber', 'з', 'naprzeciwko', '+ celownik', 'o', 'Das Hotel liegt {gegenüber} dem Bahnhof.', 'Hotel leży naprzeciwko dworca.');
  W('in der Nähe', 'ф', 'w pobliżu', '', 'o', 'Gibt es hier {in der Nähe} eine Bank?', 'Czy jest tu w pobliżu bank?');
  W('die Kreuzung', 'ж', 'skrzyżowanie', 'lm. die Kreuzungen', 'o', 'An der {Kreuzung} biegen Sie rechts ab.', 'Na skrzyżowaniu proszę skręcić w prawo.');
  W('die Ampel', 'ж', 'sygnalizacja świetlna', 'lm. die Ampeln', 'o', 'Gehen Sie bis zur {Ampel}.', 'Proszę iść do świateł.');
  W('die Gasse', 'ж', 'uliczka, zaułek', 'lm. die Gassen', 'o', 'Das Café ist in einer kleinen {Gasse}.', 'Kawiarnia jest w małej uliczce.');
  W('abbiegen', 'д', 'skręcać', 'biegt ab · bog ab · ist abgebogen', 'o', 'Nach der Brücke links {abbiegen}.', 'Za mostem skręcić w lewo.');
  W('Ich habe mich verlaufen.', 'ф', 'zgubiłem się (pieszo)', 'verfahren – samochodem', 'o', 'Entschuldigung, {ich habe mich verlaufen}.', 'Przepraszam, zgubiłem się.');
  W('Können Sie mir das auf der Karte zeigen?', 'ф', 'może mi pan to pokazać na mapie?', '', 'o', 'Ich verstehe nicht ganz. {Können Sie mir das auf der Karte zeigen?}', 'Nie do końca rozumiem. Może mi pan to pokazać na mapie?');
  W('die Unterführung', 'ж', 'przejście podziemne', 'lm. die Unterführungen', 'o', 'Nehmen Sie die {Unterführung}.', 'Proszę skorzystać z przejścia podziemnego.');
  W('der Wegweiser', 'ч', 'drogowskaz', 'lm. die Wegweiser', 'o', 'Folgen Sie dem {Wegweiser} zum Schloss.', 'Proszę iść za drogowskazem do zamku.');

  L('TR', 'tr_sehen', 'Zwiedzanie');
  W('der Eintritt', 'ч', 'wstęp; wejście', 'lm. die Eintritte · Eintritt frei – wstęp wolny', 'o', 'Was kostet der {Eintritt}?', 'Ile kosztuje wstęp?');
  W('die Ermäßigung', 'ж', 'zniżka, ulga', 'lm. die Ermäßigungen', 'o', 'Gibt es eine {Ermäßigung} für Lehrer?', 'Czy jest zniżka dla nauczycieli?');
  W('die Führung', 'ж', 'zwiedzanie z przewodnikiem', 'lm. die Führungen', 'o', 'Die nächste {Führung} beginnt um 14 Uhr.', 'Następne zwiedzanie z przewodnikiem zaczyna się o 14.');
  W('der Audioguide', 'ч', 'audioprzewodnik', 'lm. die Audioguides', 't', 'Gibt es einen {Audioguide} auf Polnisch?', 'Czy jest audioprzewodnik po polsku?');
  W('Fotografieren verboten', 'ф', 'fotografowanie zabronione', '', 'p', 'Im Museum ist {Fotografieren verboten}.', 'W muzeum fotografowanie jest zabronione.');
  W('das Schloss', 'с', 'pałac, zamek (rezydencja); zamek (do drzwi)', 'lm. die Schlösser', 'o', 'Das {Schloss} Sanssouci liegt in Potsdam.', 'Pałac Sanssouci leży w Poczdamie.');
  W('die Burg', 'ж', 'zamek (warowny), gród', 'lm. die Burgen', 'p', 'Auf dem Berg steht eine alte {Burg}.', 'Na wzgórzu stoi stary zamek.');
  W('die Altstadt', 'ж', 'stare miasto', 'lm. die Altstädte', 'o', 'Wir bummeln durch die {Altstadt}.', 'Spacerujemy po starym mieście.');
  W('die Aussicht', 'ж', 'widok', 'lm. die Aussichten · der Aussichtsturm – wieża widokowa', 'o', 'Vom Turm hat man eine tolle {Aussicht}.', 'Z wieży jest wspaniały widok.');
  W('die Gedenkstätte', 'ж', 'miejsce pamięci', 'lm. die Gedenkstätten', 'o', 'Wir besuchen die {Gedenkstätte} Berliner Mauer.', 'Odwiedzamy Miejsce Pamięci Muru Berlińskiego.');
  W('das Kloster', 'с', 'klasztor', 'lm. die Klöster', 'p', 'Das {Kloster} stammt aus dem 12. Jahrhundert.', 'Klasztor pochodzi z XII wieku.');
  W('die Kirche ist geöffnet', 'ф', 'kościół jest otwarty', 'geschlossen – zamknięty', 'o', 'Tagsüber {ist die Kirche geöffnet}.', 'W ciągu dnia kościół jest otwarty.');

  L('TR', 'tr_gespraech', 'Rozmowa i grzeczność');
  W('Woher kommen Sie?', 'ф', 'skąd pan(i) pochodzi?', 'na „ty”: Woher kommst du?', 'o', 'Sie sprechen gut Deutsch! {Woher kommen Sie}?', 'Dobrze pan mówi po niemiecku! Skąd pan pochodzi?');
  W('Ich komme aus Polen.', 'ф', 'jestem z Polski', '', 'p', '{Ich komme aus Polen}, aus Krakau.', 'Jestem z Polski, z Krakowa.');
  W('Sprechen Sie bitte langsamer.', 'ф', 'proszę mówić wolniej', '', 'o', 'Entschuldigung, {sprechen Sie bitte langsamer}.', 'Przepraszam, proszę mówić wolniej.');
  W('Wie bitte?', 'ф', 'słucham? (proszę powtórzyć)', '', 'o', '{Wie bitte?} Ich habe Sie nicht verstanden.', 'Słucham? Nie zrozumiałem pana.');
  W('Wie sagt man … auf Deutsch?', 'ф', 'jak się mówi … po niemiecku?', '', 'o', '{Wie sagt man} „widelec” {auf Deutsch}?', 'Jak się mówi „widelec” po niemiecku?');
  W('Kein Problem.', 'ф', 'nie ma problemu', '', 'p', '— Darf ich hier sitzen? — {Kein Problem}.', '— Mogę tu usiąść? — Nie ma problemu.');
  W('Gern geschehen.', 'ф', 'nie ma za co', 'też: Gerne!', 'o', '— Vielen Dank! — {Gern geschehen}.', '— Dziękuję bardzo! — Nie ma za co.');
  W('Wollen wir uns duzen?', 'ф', 'przejdziemy na „ty”?', '', 'o', 'Wir sind doch Kollegen. {Wollen wir uns duzen?}', 'Przecież jesteśmy kolegami. Przejdziemy na „ty”?');
  W('Schönen Tag noch!', 'ф', 'miłego dnia!', 'Schönes Wochenende! – miłego weekendu', 'o', 'Danke und {schönen Tag noch}!', 'Dziękuję i miłego dnia!');
  W('Gute Reise!', 'ф', 'szczęśliwej podróży!', '', 'o', 'Tschüss und {gute Reise}!', 'Cześć i szczęśliwej podróży!');
  W('Grüß Gott!', 'ф', 'dzień dobry (Bawaria, Austria)', 'Servus! – cześć (płd.), Moin! – cześć (płn.)', 'o', '{Grüß Gott}, was darf es sein?', 'Dzień dobry, co podać?');
  W('Mahlzeit!', 'ф', 'smacznego / pozdrowienie w porze obiadu (w pracy)', '', 'o', '{Mahlzeit}! Gehst du auch in die Kantine?', 'Smacznego! Też idziesz do stołówki?');

  /* ===================== ARCHIWUM I HISTORIA ===================== */
  L('AR', 'ar_archiv', 'W archiwum');
  W('das Archiv', 'с', 'archiwum', 'lm. die Archive', 't', 'Ich recherchiere seit einer Woche im {Archiv}.', 'Od tygodnia prowadzę kwerendę w archiwum.');
  W('der Lesesaal', 'ч', 'czytelnia', 'lm. die Lesesäle', 'o', 'Der {Lesesaal} ist von 9 bis 16 Uhr geöffnet.', 'Czytelnia jest otwarta od 9 do 16.');
  W('der Archivar', 'ч', 'archiwista', 'lm. die Archivare · ż. die Archivarin', 'p', 'Der {Archivar} hat mir das Findbuch gezeigt.', 'Archiwista pokazał mi inwentarz.');
  W('der Bestand', 'ч', 'zespół archiwalny; zasób', 'lm. die Bestände', 'o', 'Die Akten gehören zum {Bestand} des Oberpräsidiums.', 'Akta należą do zespołu Naczelnego Prezydium.');
  W('die Signatur', 'ж', 'sygnatura', 'lm. die Signaturen', 't', 'Notieren Sie bitte die vollständige {Signatur}.', 'Proszę zanotować pełną sygnaturę.');
  W('die Akte', 'ж', 'akta, teczka', 'lm. die Akten', 'p', 'Ich habe drei {Akten} bestellt.', 'Zamówiłem trzy teczki akt.');
  W('das Blatt', 'с', 'karta, kartka (Bl.)', 'lm. die Blätter · r = recto, v = verso', 'o', 'Der Eintrag steht auf {Blatt} 45v.', 'Wpis jest na karcie 45v.');
  W('das Findbuch', 'с', 'inwentarz archiwalny, pomoc ewidencyjna', 'lm. die Findbücher · też: das Findmittel', 'o', 'Im {Findbuch} habe ich die Signatur gefunden.', 'W inwentarzu znalazłem sygnaturę.');
  W('der Benutzungsantrag', 'ч', 'wniosek o udostępnienie (karta użytkownika)', 'lm. die Benutzungsanträge', 'o', 'Füllen Sie zuerst den {Benutzungsantrag} aus.', 'Proszę najpierw wypełnić wniosek o udostępnienie.');
  W('die Sperrfrist', 'ж', 'okres karencji (zastrzeżenia dostępu)', 'lm. die Sperrfristen', 'o', 'Für Personalakten gilt eine {Sperrfrist}.', 'Akta osobowe obejmuje okres karencji.');
  W('das Digitalisat', 'с', 'skan, kopia cyfrowa', 'lm. die Digitalisate', 'o', 'Das Kirchenbuch ist als {Digitalisat} online.', 'Księga kościelna jest dostępna online jako skan.');
  W('die Abschrift', 'ж', 'odpis, kopia (przepisana)', 'lm. die Abschriften · beglaubigte Abschrift – uwierzytelniona', 'o', 'Im Archiv liegt nur eine {Abschrift} der Urkunde.', 'W archiwum jest tylko odpis dokumentu.');
  W('das Original', 'с', 'oryginał', 'lm. die Originale', 't', 'Wir durften das {Original} sehen.', 'Pozwolono nam obejrzeć oryginał.');
  W('recherchieren', 'д', 'prowadzić kwerendę, badać', 'recherchiert · recherchierte · hat recherchiert', 'p', 'Ich {recherchiere} zur Geschichte meiner Familie.', 'Prowadzę kwerendę o historii mojej rodziny.');

  L('AR', 'ar_dokumente', 'Rodzaje dokumentów');
  W('die Urkunde', 'ж', 'dokument (urzędowy), akt, dyplom', 'lm. die Urkunden', 'o', 'Die {Urkunde} trägt das Siegel des Königs.', 'Dokument nosi pieczęć króla.');
  W('das Kirchenbuch', 'с', 'księga parafialna (metrykalna)', 'lm. die Kirchenbücher', 'o', 'Die Taufe ist im {Kirchenbuch} eingetragen.', 'Chrzest jest wpisany do księgi parafialnej.');
  W('das Standesamt', 'с', 'urząd stanu cywilnego', 'lm. die Standesämter', 'o', 'Seit 1874 führte in Preußen das {Standesamt} die Register.', 'Od 1874 r. w Prusach rejestry prowadził urząd stanu cywilnego.');
  W('die Geburtsurkunde', 'ж', 'akt urodzenia', 'lm. die Geburtsurkunden · Heirats-, Sterbeurkunde', 'o', 'Ich suche die {Geburtsurkunde} meines Urgroßvaters.', 'Szukam aktu urodzenia mojego pradziadka.');
  W('das Grundbuch', 'с', 'księga wieczysta', 'lm. die Grundbücher', 'o', 'Laut {Grundbuch} gehörte das Haus der Familie Müller.', 'Według księgi wieczystej dom należał do rodziny Müllerów.');
  W('das Adressbuch', 'с', 'księga adresowa', 'lm. die Adressbücher', 'o', 'Im {Adressbuch} von 1910 steht sein Beruf.', 'W księdze adresowej z 1910 r. podano jego zawód.');
  W('der Erlass', 'ч', 'zarządzenie, dekret', 'lm. die Erlasse', 'o', 'Der {Erlass} verbot den Polnischunterricht.', 'Zarządzenie zakazało nauki polskiego.');
  W('die Verordnung', 'ж', 'rozporządzenie', 'lm. die Verordnungen', 'o', 'Die {Verordnung} trat 1908 in Kraft.', 'Rozporządzenie weszło w życie w 1908 r.');
  W('das Protokoll', 'с', 'protokół', 'lm. die Protokolle', 't', 'Das {Protokoll} der Sitzung ist erhalten.', 'Protokół posiedzenia się zachował.');
  W('der Nachlass', 'ч', 'spuścizna (archiwalna); spadek', 'lm. die Nachlässe', 'o', 'Der {Nachlass} des Professors liegt in der Bibliothek.', 'Spuścizna profesora jest w bibliotece.');
  W('der Briefwechsel', 'ч', 'korespondencja', 'lm. die Briefwechsel', 'o', 'Der {Briefwechsel} der Brüder wurde veröffentlicht.', 'Korespondencję braci opublikowano.');
  W('die Chronik', 'ж', 'kronika', 'lm. die Chroniken', 'p', 'Die {Chronik} der Schule beginnt 1871.', 'Kronika szkoły zaczyna się w 1871 r.');
  W('die Volkszählung', 'ж', 'spis ludności', 'lm. die Volkszählungen', 'o', 'Die {Volkszählung} von 1910 fragte nach der Muttersprache.', 'Spis ludności z 1910 r. pytał o język ojczysty.');

  L('AR', 'ar_schrift', 'Pismo i daty');
  W('die Kurrentschrift', 'ж', 'kurrenta (niemieckie pismo odręczne)', 'potocznie: die Kurrent', 'o', 'Der Brief ist in {Kurrentschrift} geschrieben.', 'List jest napisany kurrentą.');
  W('die Sütterlinschrift', 'ж', 'pismo Sütterlina (szkolna odmiana kurrenty 1915–1941)', '', 'o', 'Meine Oma schrieb noch {Sütterlinschrift}.', 'Moja babcia pisała jeszcze pismem Sütterlina.');
  W('die Fraktur', 'ж', 'fraktura (gotyckie pismo drukowane)', '', 'p', 'Die Zeitung ist in {Fraktur} gedruckt.', 'Gazeta jest wydrukowana frakturą.');
  W('die Handschrift', 'ж', 'pismo odręczne; rękopis', 'lm. die Handschriften', 'o', 'Die {Handschrift} des Pfarrers ist kaum lesbar.', 'Pismo proboszcza jest ledwo czytelne.');
  W('entziffern', 'д', 'odczytać, rozszyfrować', 'entziffert · entzifferte · hat entziffert', 'o', 'Ich kann dieses Wort nicht {entziffern}.', 'Nie mogę odczytać tego słowa.');
  W('unleserlich', 'п', 'nieczytelny', '', 'o', 'Der Name ist leider {unleserlich}.', 'Nazwisko jest niestety nieczytelne.');
  W('die Abkürzung', 'ж', 'skrót', 'lm. die Abkürzungen', 'o', 'Was bedeutet die {Abkürzung} „geb.”?', 'Co znaczy skrót „geb.”?');
  W('das Siegel', 'с', 'pieczęć', 'lm. die Siegel', 'p', 'Das {Siegel} ist beschädigt.', 'Pieczęć jest uszkodzona.');
  W('der Schreiber', 'ч', 'pisarz (kancelaryjny), skryba', 'lm. die Schreiber', 'o', 'Der {Schreiber} hat den Namen falsch notiert.', 'Pisarz błędnie zanotował nazwisko.');
  W('geb.', 'з', 'urodzony, z domu (geboren)', 'gest. – zmarły (gestorben), verh. – zamężna', 'o', 'Anna Kowalski, {geb.} Nowak.', 'Anna Kowalska, z domu Nowak.');
  W('die Datierung', 'ж', 'datowanie', 'lm. die Datierungen', 'p', 'Die {Datierung} der Urkunde ist umstritten.', 'Datowanie dokumentu jest sporne.');

  L('AR', 'ar_preussen', 'Prusy i ziemie polskie');
  W('das Königreich Preußen', 'ф', 'Królestwo Prus', '', 'p', 'Posen gehörte zum {Königreich Preußen}.', 'Poznań należał do Królestwa Prus.');
  W('die Teilungen Polens', 'ф', 'rozbiory Polski', '', 'p', 'Nach den {Teilungen Polens} fiel Danzig an Preußen.', 'Po rozbiorach Polski Gdańsk przypadł Prusom.');
  W('das Großherzogtum Posen', 'ф', 'Wielkie Księstwo Poznańskie', '', 'p', 'Das {Großherzogtum Posen} entstand 1815.', 'Wielkie Księstwo Poznańskie powstało w 1815 r.');
  W('die Provinz', 'ж', 'prowincja', 'lm. die Provinzen', 't', 'Die {Provinz} Westpreußen hatte ihre Hauptstadt in Danzig.', 'Prowincja Prusy Zachodnie miała stolicę w Gdańsku.');
  W('der Regierungsbezirk', 'ч', 'rejencja (okręg administracyjny)', 'lm. die Regierungsbezirke', 'o', 'Der {Regierungsbezirk} Oppeln umfasste Oberschlesien.', 'Rejencja opolska obejmowała Górny Śląsk.');
  W('der Kreis', 'ч', 'powiat; koło', 'lm. die Kreise · der Landkreis', 'o', 'Das Dorf lag im {Kreis} Gnesen.', 'Wieś leżała w powiecie gnieźnieńskim.');
  W('der Landrat', 'ч', 'starosta (powiatowy)', 'lm. die Landräte', 'o', 'Der {Landrat} berichtete über die Stimmung der Bevölkerung.', 'Starosta meldował o nastrojach ludności.');
  W('das Rittergut', 'с', 'majątek rycerski (dobra ziemskie)', 'lm. die Rittergüter', 'o', 'Das {Rittergut} gehörte einer polnischen Adelsfamilie.', 'Majątek należał do polskiej rodziny szlacheckiej.');
  W('der Kulturkampf', 'ч', 'Kulturkampf (walka z Kościołem katolickim, lata 70. XIX w.)', '', 'o', 'Im {Kulturkampf} wurde Erzbischof Ledóchowski verhaftet.', 'Podczas Kulturkampfu aresztowano arcybiskupa Ledóchowskiego.');
  W('die Germanisierung', 'ж', 'germanizacja', 'bez lm.', 'p', 'Die {Germanisierung} betraf vor allem die Schulen.', 'Germanizacja dotyczyła przede wszystkim szkół.');
  W('die Ansiedlungskommission', 'ж', 'Komisja Kolonizacyjna (1886)', '', 'o', 'Die {Ansiedlungskommission} kaufte polnischen Grundbesitz auf.', 'Komisja Kolonizacyjna wykupywała polską ziemię.');
  W('der Schulstreik', 'ч', 'strajk szkolny (Września 1901)', 'lm. die Schulstreiks', 'o', 'Der {Schulstreik} in Wreschen wurde weltbekannt.', 'Strajk szkolny we Wrześni stał się głośny na świecie.');
  W('die Volksabstimmung', 'ж', 'plebiscyt', 'lm. die Volksabstimmungen', 'o', 'Die {Volksabstimmung} in Oberschlesien fand 1921 statt.', 'Plebiscyt na Górnym Śląsku odbył się w 1921 r.');

  L('AR', 'ar_besatzung', 'Wojna i okupacja');
  W('die Besatzung', 'ж', 'okupacja; załoga', 'lm. die Besatzungen', 'o', 'Unter der deutschen {Besatzung} wurden die Universitäten geschlossen.', 'Pod okupacją niemiecką zamknięto uniwersytety.');
  W('das Generalgouvernement', 'ф', 'Generalne Gubernatorstwo (1939–1945)', '', 'p', 'Krakau war die Hauptstadt des {Generalgouvernements}.', 'Kraków był stolicą Generalnego Gubernatorstwa.');
  W('die Deportation', 'ж', 'deportacja', 'lm. die Deportationen', 't', 'Die {Deportation} der Familie ist in den Akten dokumentiert.', 'Deportacja rodziny jest udokumentowana w aktach.');
  W('das Konzentrationslager', 'с', 'obóz koncentracyjny', 'lm. die Konzentrationslager · skrót: KZ', 'o', 'Er überlebte das {Konzentrationslager} Stutthof.', 'Przeżył obóz koncentracyjny Stutthof.');
  W('das Vernichtungslager', 'с', 'obóz zagłady', 'lm. die Vernichtungslager', 'o', 'Treblinka war ein {Vernichtungslager}.', 'Treblinka była obozem zagłady.');
  W('die Zwangsarbeit', 'ж', 'praca przymusowa', 'bez lm. · der Zwangsarbeiter – robotnik przymusowy', 'o', 'Sie wurde 1942 zur {Zwangsarbeit} nach Deutschland verschleppt.', 'Wywieziono ją w 1942 r. na roboty przymusowe do Niemiec.');
  W('die Deutsche Volksliste', 'ф', 'niemiecka lista narodowościowa (Volkslista)', '', 'o', 'In Westpreußen wurden viele zur {Deutschen Volksliste} gezwungen.', 'Na Pomorzu wielu zmuszono do wpisu na Volkslistę.');
  W('der Warschauer Aufstand', 'ф', 'powstanie warszawskie (1944)', '', 'p', 'Der {Warschauer Aufstand} begann am 1. August 1944.', 'Powstanie warszawskie zaczęło się 1 sierpnia 1944 r.');
  W('die Umsiedlung', 'ж', 'przesiedlenie', 'lm. die Umsiedlungen', 'o', 'Die {Umsiedlung} der Bevölkerung wurde brutal durchgeführt.', 'Przesiedlenie ludności przeprowadzono brutalnie.');
  W('die Entschädigung', 'ж', 'odszkodowanie', 'lm. die Entschädigungen', 'o', 'Ehemalige Zwangsarbeiter erhielten eine {Entschädigung}.', 'Byli robotnicy przymusowi otrzymali odszkodowanie.');
  W('die Gestapo', 'ж', 'gestapo (tajna policja państwowa)', '', 't', 'Die {Gestapo} verhaftete ihn im Jahr 1940.', 'Gestapo aresztowało go w 1940 roku.');

  L('AR', 'ar_ddr', 'Dwa państwa niemieckie');
  W('die Teilung Deutschlands', 'ф', 'podział Niemiec', '', 'p', 'Die {Teilung Deutschlands} dauerte bis 1990.', 'Podział Niemiec trwał do 1990 roku.');
  W('der Mauerbau', 'ч', 'budowa muru (1961)', 'bez lm.', 'o', 'Nach dem {Mauerbau} 1961 war die Flucht fast unmöglich.', 'Po budowie muru w 1961 r. ucieczka była prawie niemożliwa.');
  W('die Stasi', 'ж', 'Stasi (Ministerstwo Bezpieczeństwa Państwowego NRD)', '', 't', 'Die {Stasi} überwachte Millionen Menschen.', 'Stasi inwigilowała miliony ludzi.');
  W('die Stasi-Unterlagen', 'мн', 'akta Stasi', '', 'p', 'Seit 1992 kann man in die {Stasi-Unterlagen} Einsicht nehmen.', 'Od 1992 r. można wglądać do akt Stasi.');
  W('die Akteneinsicht', 'ж', 'wgląd do akt', 'bez lm.', 'o', 'Er beantragte {Akteneinsicht} beim Bundesarchiv.', 'Złożył wniosek o wgląd do akt w Archiwum Federalnym.');
  W('der inoffizielle Mitarbeiter', 'ф', 'tajny współpracownik (IM)', '', 'p', 'Sein Nachbar war ein {inoffizieller Mitarbeiter}.', 'Jego sąsiad był tajnym współpracownikiem.');
  W('die Ostpolitik', 'ж', 'polityka wschodnia (Willy Brandt)', '', 'p', 'Die {Ostpolitik} führte zum Warschauer Vertrag von 1970.', 'Polityka wschodnia doprowadziła do układu warszawskiego z 1970 r.');
  W('der Kniefall', 'ч', 'uklęknięcie (Brandta w Warszawie, 1970)', '', 'o', 'Der {Kniefall} von Warschau wurde zum Symbol.', 'Uklęknięcie w Warszawie stało się symbolem.');
  W('die Oder-Neiße-Grenze', 'ф', 'granica na Odrze i Nysie', '', 'p', 'Die {Oder-Neiße-Grenze} wurde 1990 endgültig anerkannt.', 'Granicę na Odrze i Nysie ostatecznie uznano w 1990 r.');
  W('der Nachbarschaftsvertrag', 'ч', 'traktat o dobrym sąsiedztwie (1991)', '', 'o', 'Der deutsch-polnische {Nachbarschaftsvertrag} wurde 1991 unterzeichnet.', 'Polsko-niemiecki traktat o dobrym sąsiedztwie podpisano w 1991 r.');
  W('die Solidarność-Bewegung', 'ф', 'ruch Solidarności', '', 't', 'In der DDR beobachtete man die {Solidarność-Bewegung} mit Sorge.', 'W NRD z niepokojem obserwowano ruch Solidarności.');

  L('AR', 'ar_historiker', 'Warsztat historyka');
  W('die historische Quelle', 'ф', 'źródło historyczne', 'lm. die Quellen', 'p', 'Das Tagebuch ist eine wichtige {historische Quelle}.', 'Dziennik to ważne źródło historyczne.');
  W('die Fußnote', 'ж', 'przypis', 'lm. die Fußnoten', 'o', 'Geben Sie die Signatur in der {Fußnote} an.', 'Proszę podać sygnaturę w przypisie.');
  W('die Monografie', 'ж', 'monografia', 'lm. die Monografien', 't', 'Sie schrieb eine {Monografie} über Breslau.', 'Napisała monografię o Wrocławiu.');
  W('die Quellenedition', 'ж', 'edycja źródeł', 'lm. die Quelleneditionen', 'p', 'Die {Quellenedition} erschien in zwei Bänden.', 'Edycja źródeł ukazała się w dwóch tomach.');
  W('die Glaubwürdigkeit', 'ж', 'wiarygodność', 'bez lm.', 'o', 'Die {Glaubwürdigkeit} des Berichts ist zweifelhaft.', 'Wiarygodność relacji jest wątpliwa.');
  W('die Fälschung', 'ж', 'fałszerstwo, falsyfikat', 'lm. die Fälschungen', 'o', 'Die Urkunde erwies sich als {Fälschung}.', 'Dokument okazał się falsyfikatem.');
  W('der Zeitzeuge', 'ч', 'świadek epoki, naoczny świadek', 'lm. die Zeitzeugen · ż. die Zeitzeugin', 'o', 'Wir haben einen {Zeitzeugen} interviewt.', 'Przeprowadziliśmy wywiad ze świadkiem epoki.');
  W('der Forschungsstand', 'ч', 'stan badań', 'bez lm.', 'o', 'Der {Forschungsstand} zu diesem Thema ist dürftig.', 'Stan badań nad tym tematem jest skromny.');
  W('das Literaturverzeichnis', 'с', 'bibliografia', 'lm. die Literaturverzeichnisse', 'o', 'Das {Literaturverzeichnis} umfasst 200 Titel.', 'Bibliografia obejmuje 200 tytułów.');
  W('die Geschichtspolitik', 'ж', 'polityka historyczna', 'bez lm.', 'o', 'Über {Geschichtspolitik} wird heftig gestritten.', 'O polityce historycznej toczą się ostre spory.');
  W('die Erinnerungskultur', 'ж', 'kultura pamięci', 'bez lm.', 'o', 'Die deutsche {Erinnerungskultur} ist stark von der NS-Zeit geprägt.', 'Niemiecka kultura pamięci jest silnie naznaczona okresem nazizmu.');
})();
