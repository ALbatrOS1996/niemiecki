/* ============================================================
   ROZSZERZENIE SŁOWNICTWA (2026-11) – nowe lekcje A2–C2
   Lekcje trafiają na koniec swojego poziomu (sortowanie na dole pliku).
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== A2 ===================== */
  L('A2', 'a2_wetter', 'Pogoda i pory roku');
  W('der Nebel', 'ч', 'mgła', 'lm. die Nebel', 'o', 'Am Morgen lag dichter {Nebel} über dem Fluss.', 'Rano nad rzeką leżała gęsta mgła.');
  W('der Blitz', 'ч', 'błyskawica, piorun', 'lm. die Blitze', 'o', 'Der {Blitz} schlug in den Baum ein.', 'Piorun uderzył w drzewo.');
  W('der Donner', 'ч', 'grzmot', 'bez lm.', 'o', 'Man hört schon den {Donner}.', 'Słychać już grzmot.');
  W('das Glatteis', 'с', 'gołoledź', 'bez lm.', 'o', 'Vorsicht, auf der Straße ist {Glatteis}!', 'Uwaga, na drodze jest gołoledź!');
  W('die Wolke', 'ж', 'chmura', 'lm. die Wolken', 'o', 'Am Himmel ist keine {Wolke}.', 'Na niebie nie ma ani jednej chmury.');
  W('das Gewitter', 'с', 'burza', 'lm. die Gewitter', 'o', 'Am Abend kam ein schweres {Gewitter}.', 'Wieczorem przyszła silna burza.');
  W('die Temperatur', 'ж', 'temperatura', 'lm. die Temperaturen', 't', 'Die {Temperatur} sinkt unter null.', 'Temperatura spada poniżej zera.');
  W('sonnig', 'п', 'słoneczny', '', 'o', 'Morgen wird es {sonnig} und warm.', 'Jutro będzie słonecznie i ciepło.');
  W('schneien', 'д', 'padać (o śniegu)', 'es schneit · schneite · hat geschneit', 'o', 'In den Bergen hat es {geschneit}.', 'W górach spadł śnieg.');
  W('bewölkt', 'п', 'pochmurny', '', 'o', 'Heute ist es den ganzen Tag {bewölkt}.', 'Dziś cały dzień jest pochmurno.');
  W('die Hitze', 'ж', 'upał', 'bez lm.', 'o', 'Bei dieser {Hitze} bleibe ich zu Hause.', 'Przy tym upale zostaję w domu.');
  W('die Wettervorhersage', 'ж', 'prognoza pogody', 'lm. die Wettervorhersagen', 'o', 'Laut {Wettervorhersage} wird es kalt.', 'Według prognozy pogody będzie zimno.');

  L('A2', 'a2_stadt', 'Miasto i usługi');
  W('die Reinigung', 'ж', 'pralnia chemiczna', 'lm. die Reinigungen', 'o', 'Ich bringe den Anzug in die {Reinigung}.', 'Zanoszę garnitur do pralni.');
  W('das Paket', 'с', 'paczka', 'lm. die Pakete', 't', 'Das {Paket} kommt morgen an.', 'Paczka przyjdzie jutro.');
  W('der Briefkasten', 'ч', 'skrzynka pocztowa', 'lm. die Briefkästen', 'o', 'Wirf den Brief in den {Briefkasten}.', 'Wrzuć list do skrzynki.');
  W('die Bank', 'ж', 'bank', 'lm. die Banken (ławka: die Bänke)', 't', 'Ich muss noch zur {Bank}.', 'Muszę jeszcze iść do banku.');
  W('der Friseur', 'ч', 'fryzjer', 'lm. die Friseure', 'p', 'Ich gehe morgen zum {Friseur}.', 'Jutro idę do fryzjera.');
  W('die Metzgerei', 'ж', 'sklep mięsny', 'lm. die Metzgereien', 'o', 'In der {Metzgerei} kaufe ich Wurst.', 'W sklepie mięsnym kupuję kiełbasę.');
  W('das Schwimmbad', 'с', 'basen, pływalnia', 'lm. die Schwimmbäder', 'o', 'Am Samstag gehen wir ins {Schwimmbad}.', 'W sobotę idziemy na basen.');
  W('die Feuerwehr', 'ж', 'straż pożarna', 'bez lm.', 'o', 'Die {Feuerwehr} kam nach fünf Minuten.', 'Straż pożarna przyjechała po pięciu minutach.');
  W('das Einwohnermeldeamt', 'с', 'biuro meldunkowe', 'lm. die Einwohnermeldeämter', 'o', 'Melden Sie sich beim {Einwohnermeldeamt} an.', 'Proszę zameldować się w biurze meldunkowym.');
  W('die Briefmarke', 'ж', 'znaczek pocztowy', 'lm. die Briefmarken', 'o', 'Ich brauche eine {Briefmarke} für einen Brief nach Polen.', 'Potrzebuję znaczka na list do Polski.');
  W('abholen', 'д', 'odebrać (np. paczkę, kogoś)', 'holt ab · holte ab · hat abgeholt', 'o', 'Ich {hole} dich um sieben {ab}.', 'Odbiorę cię o siódmej.');
  W('der Schalter', 'ч', 'okienko (w urzędzie, banku)', 'lm. die Schalter', 'o', 'Bitte gehen Sie zu {Schalter} drei.', 'Proszę podejść do okienka numer trzy.');

  L('A2', 'a2_einkaufen', 'Zakupy i pieniądze');
  W('der Rabatt', 'ч', 'rabat, zniżka', 'lm. die Rabatte', 't', 'Studenten bekommen zehn Prozent {Rabatt}.', 'Studenci dostają 10% zniżki.');
  W('das Portemonnaie', 'с', 'portfel', 'lm. die Portemonnaies · też: der Geldbeutel', 'p', 'Mein {Portemonnaie} ist leer.', 'Mój portfel jest pusty.');
  W('die Kundenkarte', 'ж', 'karta stałego klienta', 'lm. die Kundenkarten', 'o', 'Haben Sie eine {Kundenkarte}?', 'Ma pan kartę stałego klienta?');
  W('das Wechselgeld', 'с', 'reszta (pieniądze)', 'bez lm.', 'o', 'Sie haben das {Wechselgeld} vergessen!', 'Zapomniał pan reszty!');
  W('ausverkauft', 'п', 'wyprzedany', '', 'o', 'Die Schuhe sind leider {ausverkauft}.', 'Buty są niestety wyprzedane.');
  W('zurückgeben', 'д', 'oddawać, zwracać', 'gibt zurück · gab zurück · hat zurückgegeben', 'o', 'Ich möchte diese Jacke {zurückgeben}.', 'Chciałbym zwrócić tę kurtkę.');
  W('die Lieferung', 'ж', 'dostawa', 'lm. die Lieferungen', 'o', 'Die {Lieferung} dauert drei Tage.', 'Dostawa trwa trzy dni.');
  W('der Einkaufswagen', 'ч', 'wózek na zakupy', 'lm. die Einkaufswagen', 'o', 'Der {Einkaufswagen} ist schon voll.', 'Wózek jest już pełny.');
  W('günstig', 'п', 'korzystny, tani', '', 'o', 'Das Hotel ist sehr {günstig}.', 'Hotel jest bardzo tani.');
  W('ausgeben', 'д', 'wydawać (pieniądze)', 'gibt aus · gab aus · hat ausgegeben', 'o', 'Ich habe zu viel Geld {ausgegeben}.', 'Wydałem za dużo pieniędzy.');
  W('sparen', 'д', 'oszczędzać', 'spart · sparte · hat gespart', 'o', 'Wir {sparen} für den Urlaub.', 'Oszczędzamy na urlop.');
  W('die Selbstbedienung', 'ж', 'samoobsługa', 'bez lm.', 'o', 'Hier ist {Selbstbedienung}.', 'Tu jest samoobsługa.');

  L('A2', 'a2_verben', 'Czasowniki codzienne');
  W('aufwachen', 'д', 'budzić się', 'wacht auf · wachte auf · ist aufgewacht', 'o', 'Ich bin heute um fünf {aufgewacht}.', 'Obudziłem się dziś o piątej.');
  W('sich anziehen', 'д', 'ubierać się', 'zieht sich an · zog sich an · hat sich angezogen', 'o', 'Die Kinder {ziehen sich} schnell {an}.', 'Dzieci szybko się ubierają.');
  W('sich beeilen', 'д', 'spieszyć się', 'beeilt sich · beeilte sich · hat sich beeilt', 'o', '{Beeil dich}, der Bus kommt!', 'Pospiesz się, autobus jedzie!');
  W('bemerken', 'д', 'zauważać', 'bemerkt · bemerkte · hat bemerkt', 'o', 'Hast du nichts {bemerkt}?', 'Nic nie zauważyłeś?');
  W('erklären', 'д', 'wyjaśniać', 'erklärt · erklärte · hat erklärt', 'o', 'Kannst du mir das {erklären}?', 'Możesz mi to wyjaśnić?');
  W('versuchen', 'д', 'próbować', 'versucht · versuchte · hat versucht', 'o', 'Ich {versuche} es noch einmal.', 'Spróbuję jeszcze raz.');
  W('leihen', 'д', 'pożyczać', 'leiht · lieh · hat geliehen', 'o', 'Kannst du mir dein Fahrrad {leihen}?', 'Możesz mi pożyczyć rower?');
  W('mitnehmen', 'д', 'zabierać ze sobą', 'nimmt mit · nahm mit · hat mitgenommen', 'o', 'Vergiss nicht, einen Schirm {mitzunehmen}.', 'Nie zapomnij zabrać parasola.');
  W('sich ausruhen', 'д', 'odpoczywać', 'ruht sich aus · ruhte sich aus · hat sich ausgeruht', 'o', 'Am Sonntag {ruhe} ich {mich aus}.', 'W niedzielę odpoczywam.');
  W('ausschalten', 'д', 'wyłączać', 'schaltet aus · schaltete aus · hat ausgeschaltet', 'o', 'Bitte {schalte} das Licht {aus}.', 'Proszę, wyłącz światło.');
  W('reparieren', 'д', 'naprawiać', 'repariert · reparierte · hat repariert', 'p', 'Er hat das Fahrrad selbst {repariert}.', 'Sam naprawił rower.');
  W('benutzen', 'д', 'używać', 'benutzt · benutzte · hat benutzt', 'o', 'Darf ich dein Handy {benutzen}?', 'Mogę użyć twojego telefonu?');

  /* ===================== B1 ===================== */
  L('B1', 'b1_wohnen', 'Mieszkanie i wynajem');
  W('der Hausmeister', 'ч', 'dozorca, gospodarz domu', 'lm. die Hausmeister', 'o', 'Der {Hausmeister} hat einen Ersatzschlüssel.', 'Dozorca ma zapasowy klucz.');
  W('der Vermieter', 'ч', 'wynajmujący, właściciel mieszkania', 'lm. die Vermieter', 'o', 'Der {Vermieter} repariert die Heizung.', 'Właściciel naprawia ogrzewanie.');
  W('der Mieter', 'ч', 'najemca, lokator', 'lm. die Mieter', 'o', 'Alle {Mieter} müssen die Treppe putzen.', 'Wszyscy lokatorzy muszą sprzątać klatkę.');
  W('die Nebenkosten', 'мн', 'opłaty dodatkowe (media)', 'tylko lm.', 'o', 'Die {Nebenkosten} sind nicht inklusive.', 'Opłaty za media nie są wliczone.');
  W('die Kaution', 'ж', 'kaucja', 'lm. die Kautionen', 'p', 'Die {Kaution} beträgt drei Monatsmieten.', 'Kaucja wynosi trzy czynsze.');
  W('der Mietvertrag', 'ч', 'umowa najmu', 'lm. die Mietverträge', 'o', 'Ich habe den {Mietvertrag} unterschrieben.', 'Podpisałem umowę najmu.');
  W('einrichten', 'д', 'urządzać (mieszkanie)', 'richtet ein · richtete ein · hat eingerichtet', 'o', 'Wir haben die Wohnung modern {eingerichtet}.', 'Urządziliśmy mieszkanie nowocześnie.');
  W('die Hausordnung', 'ж', 'regulamin domu', 'lm. die Hausordnungen', 'o', 'Laut {Hausordnung} ist ab 22 Uhr Ruhe.', 'Według regulaminu od 22 obowiązuje cisza.');
  W('die Heizung', 'ж', 'ogrzewanie, kaloryfer', 'lm. die Heizungen', 'o', 'Die {Heizung} funktioniert nicht.', 'Ogrzewanie nie działa.');
  W('möbliert', 'п', 'umeblowany', '', 'p', 'Ich suche eine {möblierte} Wohnung.', 'Szukam umeblowanego mieszkania.');
  W('die Wohngemeinschaft', 'ж', 'wspólne mieszkanie (WG)', 'lm. die Wohngemeinschaften · skrót: WG', 'o', 'Als Student wohnte ich in einer {Wohngemeinschaft}.', 'Jako student mieszkałem we wspólnym mieszkaniu.');
  W('kündigen', 'д', 'wypowiedzieć (umowę)', 'kündigt · kündigte · hat gekündigt', 'o', 'Er hat die Wohnung {gekündigt}.', 'Wypowiedział umowę najmu mieszkania.');

  L('B1', 'b1_verkehr', 'Samochód i ruch drogowy');
  W('der Führerschein', 'ч', 'prawo jazdy', 'lm. die Führerscheine', 'o', 'Sie hat gerade den {Führerschein} gemacht.', 'Właśnie zrobiła prawo jazdy.');
  W('der Blitzer', 'ч', 'fotoradar (pot.)', 'lm. die Blitzer', 'o', 'Vor dem Dorf steht ein {Blitzer}.', 'Przed wsią stoi fotoradar.');
  W('der Stau', 'ч', 'korek (drogowy)', 'lm. die Staus', 'o', 'Wir standen eine Stunde im {Stau}.', 'Staliśmy godzinę w korku.');
  W('tanken', 'д', 'tankować', 'tankt · tankte · hat getankt', 'p', 'Ich muss noch {tanken}.', 'Muszę jeszcze zatankować.');
  W('die Tankstelle', 'ж', 'stacja benzynowa', 'lm. die Tankstellen', 'o', 'Die nächste {Tankstelle} ist zehn Kilometer entfernt.', 'Najbliższa stacja jest 10 km stąd.');
  W('der Unfall', 'ч', 'wypadek', 'lm. die Unfälle', 'o', 'Auf der Autobahn gab es einen {Unfall}.', 'Na autostradzie był wypadek.');
  W('überholen', 'д', 'wyprzedzać', 'überholt · überholte · hat überholt', 'o', 'Hier darf man nicht {überholen}.', 'Tu nie wolno wyprzedzać.');
  W('der Parkplatz', 'ч', 'parking, miejsce parkingowe', 'lm. die Parkplätze', 'p', 'Ich finde keinen {Parkplatz}.', 'Nie mogę znaleźć miejsca do parkowania.');
  W('die Geschwindigkeit', 'ж', 'prędkość', 'lm. die Geschwindigkeiten', 'o', 'Die {Geschwindigkeit} ist hier begrenzt.', 'Prędkość jest tu ograniczona.');
  W('die Werkstatt', 'ж', 'warsztat', 'lm. die Werkstätten', 'p', 'Das Auto ist in der {Werkstatt}.', 'Samochód jest w warsztacie.');
  W('der Reifen', 'ч', 'opona', 'lm. die Reifen', 'o', 'Ich habe einen platten {Reifen}.', 'Mam przebitą oponę.');
  W('die Umleitung', 'ж', 'objazd', 'lm. die Umleitungen', 'o', 'Wegen Bauarbeiten gibt es eine {Umleitung}.', 'Z powodu robót jest objazd.');

  L('B1', 'b1_bewerbung', 'Szukanie pracy');
  W('die Bewerbung', 'ж', 'podanie o pracę, aplikacja', 'lm. die Bewerbungen', 'o', 'Ich habe zehn {Bewerbungen} geschickt.', 'Wysłałem dziesięć aplikacji.');
  W('die Probezeit', 'ж', 'okres próbny', 'lm. die Probezeiten', 'o', 'Die {Probezeit} dauert sechs Monate.', 'Okres próbny trwa sześć miesięcy.');
  W('das Anschreiben', 'с', 'list motywacyjny', 'lm. die Anschreiben', 'o', 'Das {Anschreiben} sollte nicht länger als eine Seite sein.', 'List motywacyjny nie powinien być dłuższy niż strona.');
  W('das Vorstellungsgespräch', 'с', 'rozmowa kwalifikacyjna', 'lm. die Vorstellungsgespräche', 'o', 'Morgen habe ich ein {Vorstellungsgespräch}.', 'Jutro mam rozmowę kwalifikacyjną.');
  W('die Stellenanzeige', 'ж', 'ogłoszenie o pracę', 'lm. die Stellenanzeigen', 'o', 'Ich habe die {Stellenanzeige} im Internet gefunden.', 'Znalazłem ogłoszenie w internecie.');
  W('die Kenntnisse', 'мн', 'znajomość, wiedza (np. języka)', 'tylko lm. w tym znaczeniu', 'o', 'Sie hat gute {Kenntnisse} in Englisch.', 'Dobrze zna angielski.');
  W('der Arbeitsvertrag', 'ч', 'umowa o pracę', 'lm. die Arbeitsverträge', 'o', 'Der {Arbeitsvertrag} ist auf ein Jahr befristet.', 'Umowa o pracę jest zawarta na rok.');
  W('befristet', 'п', 'na czas określony', 'unbefristet – na czas nieokreślony', 'o', 'Er hat nur eine {befristete} Stelle.', 'Ma tylko posadę na czas określony.');
  W('arbeitslos', 'п', 'bezrobotny', '', 'o', 'Er ist seit einem Jahr {arbeitslos}.', 'Od roku jest bezrobotny.');
  W('die Teilzeit', 'ж', 'niepełny etat', 'bez lm. · Vollzeit – pełny etat', 'o', 'Sie arbeitet in {Teilzeit}.', 'Pracuje na pół etatu.');
  W('der Arbeitgeber', 'ч', 'pracodawca', 'lm. die Arbeitgeber · Arbeitnehmer – pracownik', 'o', 'Mein {Arbeitgeber} zahlt pünktlich.', 'Mój pracodawca płaci terminowo.');
  W('einstellen', 'д', 'zatrudniać', 'stellt ein · stellte ein · hat eingestellt', 'o', 'Die Firma {stellt} neue Mitarbeiter {ein}.', 'Firma zatrudnia nowych pracowników.');

  L('B1', 'b1_feste', 'Święta i tradycje');
  W('das Fest', 'с', 'święto, uroczystość', 'lm. die Feste', 'o', 'Das {Fest} dauert drei Tage.', 'Święto trwa trzy dni.');
  W('Weihnachten', 'ф', 'Boże Narodzenie', 'Frohe Weihnachten! – Wesołych Świąt!', 'o', 'Zu {Weihnachten} fahren wir zu den Eltern.', 'Na Boże Narodzenie jedziemy do rodziców.');
  W('Ostern', 'ф', 'Wielkanoc', 'Frohe Ostern!', 'o', 'An {Ostern} suchen die Kinder Eier.', 'Na Wielkanoc dzieci szukają jajek.');
  W('der Heiligabend', 'ч', 'Wigilia', 'lm. die Heiligabende', 'o', 'Am {Heiligabend} gibt es Geschenke.', 'W Wigilię są prezenty.');
  W('Silvester', 'ф', 'sylwester', '', 'p', 'Wo feierst du {Silvester}?', 'Gdzie spędzasz sylwestra?');
  W('der Feiertag', 'ч', 'dzień świąteczny (wolny)', 'lm. die Feiertage', 'o', 'Am {Feiertag} sind die Geschäfte zu.', 'W święto sklepy są zamknięte.');
  W('feiern', 'д', 'świętować', 'feiert · feierte · hat gefeiert', 'o', 'Wir {feiern} heute ihren Geburtstag.', 'Świętujemy dziś jej urodziny.');
  W('der Weihnachtsmarkt', 'ч', 'jarmark bożonarodzeniowy', 'lm. die Weihnachtsmärkte', 'o', 'Der {Weihnachtsmarkt} in Nürnberg ist berühmt.', 'Jarmark w Norymberdze jest słynny.');
  W('der Brauch', 'ч', 'zwyczaj', 'lm. die Bräuche', 'o', 'Das ist ein alter {Brauch}.', 'To stary zwyczaj.');
  W('der Adventskranz', 'ч', 'wieniec adwentowy', 'lm. die Adventskränze', 'o', 'Auf dem Tisch steht ein {Adventskranz}.', 'Na stole stoi wieniec adwentowy.');
  W('gratulieren', 'д', 'gratulować', 'gratuliert · gratulierte · hat gratuliert', 'p', 'Ich {gratuliere} dir zum Geburtstag!', 'Gratuluję ci urodzin!');
  W('der Karneval', 'ч', 'karnawał', 'lm. die Karnevale · też: Fasching, Fastnacht', 't', 'Den {Karneval} in Köln muss man erleben.', 'Karnawał w Kolonii trzeba przeżyć.');

  /* ===================== B2 ===================== */
  L('B2', 'b2_digital', 'Internet i cyfryzacja');
  W('die Digitalisierung', 'ж', 'cyfryzacja', 'bez lm.', 'p', 'Die {Digitalisierung} verändert die Schule.', 'Cyfryzacja zmienia szkołę.');
  W('der Datenschutz', 'ч', 'ochrona danych', 'bez lm.', 'o', 'Der {Datenschutz} ist in Deutschland sehr streng.', 'Ochrona danych jest w Niemczech bardzo ścisła.');
  W('das Konto', 'с', 'konto', 'lm. die Konten', 'p', 'Ich habe mein {Konto} gelöscht.', 'Usunąłem swoje konto.');
  W('hochladen', 'д', 'wgrywać, wrzucać (do sieci)', 'lädt hoch · lud hoch · hat hochgeladen', 'o', 'Sie hat das Video {hochgeladen}.', 'Wrzuciła film do sieci.');
  W('die Anwendung', 'ж', 'aplikacja, zastosowanie', 'lm. die Anwendungen', 'o', 'Die {Anwendung} läuft auf jedem Handy.', 'Aplikacja działa na każdym telefonie.');
  W('der Nutzer', 'ч', 'użytkownik', 'lm. die Nutzer', 'o', 'Die Plattform hat Millionen {Nutzer}.', 'Platforma ma miliony użytkowników.');
  W('die Suchmaschine', 'ж', 'wyszukiwarka', 'lm. die Suchmaschinen', 'o', 'Gib das in die {Suchmaschine} ein.', 'Wpisz to w wyszukiwarkę.');
  W('künstliche Intelligenz', 'ф', 'sztuczna inteligencja', 'skrót: KI', 'p', 'Die {künstliche Intelligenz} schreibt schon Texte.', 'Sztuczna inteligencja pisze już teksty.');
  W('der Speicher', 'ч', 'pamięć (urządzenia)', 'lm. die Speicher', 'o', 'Der {Speicher} ist voll.', 'Pamięć jest pełna.');
  W('die Verschlüsselung', 'ж', 'szyfrowanie', 'lm. die Verschlüsselungen', 'o', 'Die {Verschlüsselung} schützt die Daten.', 'Szyfrowanie chroni dane.');
  W('das soziale Netzwerk', 'ф', 'portal społecznościowy', 'lm. die sozialen Netzwerke', 'o', 'Sie ist in keinem {sozialen Netzwerk} aktiv.', 'Nie jest aktywna w żadnym portalu społecznościowym.');
  W('die Abhängigkeit', 'ж', 'uzależnienie, zależność', 'lm. die Abhängigkeiten', 'o', 'Viele sprechen von einer {Abhängigkeit} vom Smartphone.', 'Wielu mówi o uzależnieniu od smartfona.');

  L('B2', 'b2_migration', 'Migracja i integracja');
  W('die Einwanderung', 'ж', 'imigracja', 'bez lm.', 'o', 'Die {Einwanderung} ist ein großes Thema.', 'Imigracja to duży temat.');
  W('auswandern', 'д', 'emigrować', 'wandert aus · wanderte aus · ist ausgewandert', 'o', 'Sein Großvater ist nach Amerika {ausgewandert}.', 'Jego dziadek wyemigrował do Ameryki.');
  W('der Flüchtling', 'ч', 'uchodźca', 'lm. die Flüchtlinge', 'o', 'Viele {Flüchtlinge} kamen 2015.', 'Wielu uchodźców przybyło w 2015 r.');
  W('die Staatsangehörigkeit', 'ж', 'obywatelstwo', 'lm. die Staatsangehörigkeiten', 'o', 'Er hat die deutsche {Staatsangehörigkeit}.', 'Ma obywatelstwo niemieckie.');
  W('die Aufenthaltserlaubnis', 'ж', 'zezwolenie na pobyt', 'lm. die Aufenthaltserlaubnisse', 'o', 'Sie hat eine {Aufenthaltserlaubnis} für drei Jahre.', 'Ma zezwolenie na pobyt na trzy lata.');
  W('der Asylantrag', 'ч', 'wniosek o azyl', 'lm. die Asylanträge', 'p', 'Er hat einen {Asylantrag} gestellt.', 'Złożył wniosek o azyl.');
  W('die Heimat', 'ж', 'ojczyzna, strony rodzinne', 'bez lm.', 'o', 'Er vermisst seine {Heimat}.', 'Tęskni za ojczyzną.');
  W('der Gastarbeiter', 'ч', 'robotnik cudzoziemski (lata 50–70.)', 'lm. die Gastarbeiter', 'o', 'In den 60er-Jahren kamen viele {Gastarbeiter} aus der Türkei.', 'W latach 60. przybyło wielu robotników z Turcji.');
  W('die Vielfalt', 'ж', 'różnorodność', 'bez lm.', 'o', 'Die kulturelle {Vielfalt} bereichert die Stadt.', 'Różnorodność kulturowa wzbogaca miasto.');
  W('das Vorurteil', 'с', 'uprzedzenie', 'lm. die Vorurteile', 'o', 'Wir müssen {Vorurteile} abbauen.', 'Musimy zwalczać uprzedzenia.');
  W('sich einleben', 'д', 'zadomowić się', 'lebt sich ein · lebte sich ein · hat sich eingelebt', 'o', 'Die Familie hat {sich} schnell {eingelebt}.', 'Rodzina szybko się zadomowiła.');
  W('die Abschiebung', 'ж', 'deportacja', 'lm. die Abschiebungen', 'o', 'Ihm droht die {Abschiebung}.', 'Grozi mu deportacja.');

  L('B2', 'b2_psyche', 'Psychika i samopoczucie');
  W('die Stimmung', 'ж', 'nastrój, atmosfera', 'lm. die Stimmungen', 'o', 'Die {Stimmung} auf der Party war toll.', 'Atmosfera na imprezie była świetna.');
  W('die Erleichterung', 'ж', 'ulga', 'bez lm.', 'o', 'Zu meiner {Erleichterung} war alles in Ordnung.', 'Ku mojej uldze wszystko było w porządku.');
  W('die Scham', 'ж', 'wstyd', 'bez lm.', 'o', 'Er wurde rot vor {Scham}.', 'Zaczerwienił się ze wstydu.');
  W('das Selbstbewusstsein', 'с', 'pewność siebie', 'bez lm. · NIE: samoświadomość', 'f', 'Er hat wenig {Selbstbewusstsein}.', 'Ma mało pewności siebie.');
  W('enttäuscht', 'п', 'rozczarowany', '', 'o', 'Ich bin von dir {enttäuscht}.', 'Jestem tobą rozczarowany.');
  W('erschöpft', 'п', 'wyczerpany', '', 'o', 'Nach der Arbeit bin ich völlig {erschöpft}.', 'Po pracy jestem kompletnie wyczerpany.');
  W('die Geduld', 'ж', 'cierpliwość', 'bez lm.', 'o', 'Mit Kindern braucht man viel {Geduld}.', 'Z dziećmi trzeba dużo cierpliwości.');
  W('sich ärgern', 'д', 'złościć się', 'ärgert sich · ärgerte sich · hat sich geärgert', 'o', 'Ärgere {dich} nicht darüber!', 'Nie złość się o to!');
  W('sich Sorgen machen', 'ф', 'martwić się', 'um + Akk.', 'o', 'Mach {dir} keine {Sorgen}!', 'Nie martw się!');
  W('die Neugier', 'ж', 'ciekawość', 'bez lm.', 'o', 'Aus {Neugier} öffnete er den Brief.', 'Z ciekawości otworzył list.');
  W('gelassen', 'п', 'spokojny, opanowany', '', 'o', 'Sie bleibt in jeder Situation {gelassen}.', 'W każdej sytuacji zachowuje spokój.');
  W('das Gewissen', 'с', 'sumienie', 'bez lm.', 'o', 'Ich habe ein schlechtes {Gewissen}.', 'Mam wyrzuty sumienia.');

  L('B2', 'b2_jahrhundert', 'Historia XX wieku');
  W('der Weltkrieg', 'ч', 'wojna światowa', 'lm. die Weltkriege', 'o', 'Der Zweite {Weltkrieg} begann 1939.', 'Druga wojna światowa wybuchła w 1939 r.');
  W('die Hyperinflation', 'ж', 'hiperinflacja (1923)', 'bez lm.', 'p', 'Die {Hyperinflation} von 1923 ruinierte viele Familien.', 'Hiperinflacja 1923 r. zrujnowała wiele rodzin.');
  W('die Gleichschaltung', 'ж', 'podporządkowanie instytucji nazistom (1933)', 'bez lm.', 'o', 'Nach 1933 folgte die {Gleichschaltung} der Presse.', 'Po 1933 r. nastąpiło podporządkowanie prasy.');
  W('die Novemberpogrome', 'мн', 'pogromy listopadowe (1938)', 'tylko lm.', 'o', 'Bei den {Novemberpogromen} 1938 brannten Synagogen.', 'Podczas pogromów listopadowych 1938 r. płonęły synagogi.');
  W('die Luftbrücke', 'ж', 'most powietrzny (Berlin 1948–49)', 'bez lm.', 'o', 'Die {Luftbrücke} versorgte West-Berlin fast ein Jahr lang.', 'Most powietrzny zaopatrywał Berlin Zachodni przez prawie rok.');
  W('die Besatzungszone', 'ж', 'strefa okupacyjna', 'lm. die Besatzungszonen', 'o', 'Deutschland wurde in vier {Besatzungszonen} geteilt.', 'Niemcy podzielono na cztery strefy okupacyjne.');
  W('das Wirtschaftswunder', 'с', 'cud gospodarczy', 'bez lm.', 'o', 'In den 50er-Jahren erlebte die BRD das {Wirtschaftswunder}.', 'W latach 50. RFN przeżyła cud gospodarczy.');
  W('der Mauerfall', 'ч', 'upadek muru (1989)', 'bez lm.', 'o', 'Nach dem {Mauerfall} öffnete sich die Grenze.', 'Po upadku muru granica się otworzyła.');
  W('der Volksaufstand', 'ч', 'powstanie ludowe (NRD, 17 VI 1953)', 'lm. die Volksaufstände', 'o', 'Der {Volksaufstand} in der DDR wurde von sowjetischen Panzern niedergeschlagen.', 'Powstanie w NRD stłumiły radzieckie czołgi.');
  W('die Studentenbewegung', 'ж', 'ruch studencki (1968)', 'lm. die Studentenbewegungen', 'p', 'Die {Studentenbewegung} von 1968 veränderte die Gesellschaft.', 'Ruch studencki 1968 r. zmienił społeczeństwo.');
  W('der Kalte Krieg', 'ф', 'zimna wojna', 'bez lm.', 'o', 'Im {Kalten Krieg} war Deutschland geteilt.', 'W czasie zimnej wojny Niemcy były podzielone.');
  W('die Montanunion', 'ж', 'Europejska Wspólnota Węgla i Stali (1951)', 'bez lm.', 'o', 'Die {Montanunion} war der Anfang der europäischen Einigung.', 'EWWiS była początkiem zjednoczenia Europy.');

  /* ===================== C1 ===================== */
  L('C1', 'c1_militaer', 'Wojna i wojsko');
  W('die Streitkräfte', 'мн', 'siły zbrojne', 'tylko lm.', 'o', 'Die {Streitkräfte} wurden mobilisiert.', 'Siły zbrojne zostały zmobilizowane.');
  W('der Feldzug', 'ч', 'kampania wojenna', 'lm. die Feldzüge', 'o', 'Der {Feldzug} gegen Polen dauerte fünf Wochen.', 'Kampania przeciw Polsce trwała pięć tygodni.');
  W('die Front', 'ж', 'front', 'lm. die Fronten', 't', 'Er wurde an die {Front} geschickt.', 'Został wysłany na front.');
  W('der Waffenstillstand', 'ч', 'zawieszenie broni, rozejm', 'lm. die Waffenstillstände', 'o', 'Am 11. November 1918 wurde der {Waffenstillstand} unterzeichnet.', '11 listopada 1918 r. podpisano rozejm.');
  W('kapitulieren', 'д', 'kapitulować', 'kapituliert · kapitulierte · hat kapituliert', 't', 'Die Stadt {kapitulierte} nach drei Wochen.', 'Miasto skapitulowało po trzech tygodniach.');
  W('der Gefangene', 'ч', 'jeniec, więzień', 'lm. die Gefangenen', 'o', 'Die {Gefangenen} wurden in Lager gebracht.', 'Jeńców przewieziono do obozów.');
  W('der Angriff', 'ч', 'atak, natarcie', 'lm. die Angriffe', 'o', 'Der {Angriff} begann im Morgengrauen.', 'Natarcie zaczęło się o świcie.');
  W('der Aufstand', 'ч', 'powstanie', 'lm. die Aufstände', 'o', 'Der Warschauer {Aufstand} brach am 1. August 1944 aus.', 'Powstanie warszawskie wybuchło 1 sierpnia 1944 r.');
  W('die Wehrpflicht', 'ж', 'obowiązkowa służba wojskowa', 'bez lm.', 'o', 'Die {Wehrpflicht} wurde 2011 ausgesetzt.', 'Obowiązkową służbę zawieszono w 2011 r.');
  W('das Bündnis', 'с', 'sojusz', 'lm. die Bündnisse', 'o', 'Polen ist seit 1999 Mitglied des {Bündnisses}.', 'Polska jest członkiem sojuszu od 1999 r.');
  W('die Aufrüstung', 'ж', 'zbrojenie się', 'bez lm.', 'o', 'Die {Aufrüstung} führte zu Spannungen.', 'Zbrojenia doprowadziły do napięć.');
  W('die Gefallenen', 'мн', 'polegli', 'tylko lm.', 'o', 'Das Denkmal erinnert an die {Gefallenen}.', 'Pomnik upamiętnia poległych.');

  L('C1', 'c1_religion', 'Religia i Kościół');
  W('der Dom', 'ч', 'katedra', 'lm. die Dome', 'p', 'Der Kölner {Dom} ist ein Meisterwerk der Gotik.', 'Katedra w Kolonii to arcydzieło gotyku.');
  W('der Glaube', 'ч', 'wiara', 'bez lm. · D. des Glaubens', 'o', 'Der {Glaube} gab ihm Kraft.', 'Wiara dawała mu siłę.');
  W('der Ablass', 'ч', 'odpust', 'lm. die Ablässe', 'o', 'Luther kritisierte den Handel mit dem {Ablass}.', 'Luter krytykował handel odpustami.');
  W('evangelisch', 'п', 'ewangelicki', 'katholisch – katolicki', 'p', 'Die Familie war {evangelisch}.', 'Rodzina była ewangelicka.');
  W('der Mönch', 'ч', 'mnich', 'lm. die Mönche', 'o', 'Ein {Mönch} schrieb die Chronik ab.', 'Mnich przepisał kronikę.');
  W('der Pfarrer', 'ч', 'proboszcz, pastor', 'lm. die Pfarrer', 'o', 'Der {Pfarrer} hielt eine lange Predigt.', 'Proboszcz wygłosił długie kazanie.');
  W('die Predigt', 'ж', 'kazanie', 'lm. die Predigten', 'o', 'Die {Predigt} dauerte eine Stunde.', 'Kazanie trwało godzinę.');
  W('das Bistum', 'с', 'biskupstwo, diecezja', 'lm. die Bistümer', 'o', 'Das {Bistum} wurde im Jahr 1000 gegründet.', 'Biskupstwo założono w roku 1000.');
  W('die Taufe', 'ж', 'chrzest', 'lm. die Taufen', 'o', 'Die {Taufe} ist im Kirchenbuch vermerkt.', 'Chrzest jest odnotowany w księdze parafialnej.');
  W('der Gottesdienst', 'ч', 'nabożeństwo, msza', 'lm. die Gottesdienste', 'o', 'Der {Gottesdienst} beginnt um zehn.', 'Nabożeństwo zaczyna się o dziesiątej.');
  W('die Säkularisation', 'ж', 'sekularyzacja (dóbr kościelnych)', 'bez lm. · 1803', 'p', 'Nach der {Säkularisation} wurden viele Klöster aufgelöst.', 'Po sekularyzacji wiele klasztorów zlikwidowano.');
  W('die Wallfahrt', 'ж', 'pielgrzymka', 'lm. die Wallfahrten', 'o', 'Jedes Jahr gibt es eine {Wallfahrt} nach Altötting.', 'Co roku jest pielgrzymka do Altötting.');

  L('C1', 'c1_presse', 'Język prasy');
  W('zufolge', 'з', 'według (po rzeczowniku, + Dat.)', 'Berichten zufolge – według doniesień', 'o', 'Dem Bericht {zufolge} ist die Zahl der Arbeitslosen gestiegen.', 'Według raportu liczba bezrobotnych wzrosła.');
  W('angeblich', 'пр', 'rzekomo', '', 'o', 'Der Minister wusste {angeblich} nichts davon.', 'Minister rzekomo nic o tym nie wiedział.');
  W('der Vorwurf', 'ч', 'zarzut', 'lm. die Vorwürfe', 'o', 'Er weist alle {Vorwürfe} zurück.', 'Odrzuca wszystkie zarzuty.');
  W('der Rücktritt', 'ч', 'dymisja, ustąpienie', 'lm. die Rücktritte', 'o', 'Die Opposition fordert seinen {Rücktritt}.', 'Opozycja żąda jego dymisji.');
  W('die Umfrage', 'ж', 'sondaż, ankieta', 'lm. die Umfragen', 'o', 'Laut einer {Umfrage} liegt die Partei vorne.', 'Według sondażu partia prowadzi.');
  W('der Anschlag', 'ч', 'zamach', 'lm. die Anschläge', 'o', 'Bei dem {Anschlag} starben zehn Menschen.', 'W zamachu zginęło dziesięć osób.');
  W('die Verhandlungen', 'мн', 'negocjacje', 'lm. od die Verhandlung', 'o', 'Die {Verhandlungen} sind gescheitert.', 'Negocjacje zakończyły się fiaskiem.');
  W('der Streik', 'ч', 'strajk', 'lm. die Streiks', 't', 'Der {Streik} legte den Bahnverkehr lahm.', 'Strajk sparaliżował ruch kolejowy.');
  W('bestätigen', 'д', 'potwierdzać', 'bestätigt · bestätigte · hat bestätigt', 'o', 'Die Regierung hat die Nachricht {bestätigt}.', 'Rząd potwierdził wiadomość.');
  W('der Sprecher', 'ч', 'rzecznik', 'lm. die Sprecher', 'o', 'Ein {Sprecher} des Ministeriums erklärte …', 'Rzecznik ministerstwa wyjaśnił…');
  W('der Haushalt', 'ч', 'budżet (państwa)', 'lm. die Haushalte', 'o', 'Der Bundestag hat den {Haushalt} beschlossen.', 'Bundestag uchwalił budżet.');
  W('die Ermittlungen', 'мн', 'śledztwo', 'lm. od die Ermittlung', 'o', 'Die Staatsanwaltschaft hat {Ermittlungen} eingeleitet.', 'Prokuratura wszczęła śledztwo.');

  /* ===================== C2 ===================== */
  L('C2', 'c2_partikeln', 'Partykuły i niuanse');
  W('doch', 'з', 'przecież; ależ tak (sprzeciw)', '— Kommst du nicht? — Doch!', 'o', 'Das weißt du {doch}!', 'Przecież to wiesz!');
  W('halt', 'з', 'po prostu, cóż (pot.)', '= eben', 'o', 'Das ist {halt} so.', 'Tak po prostu jest.');
  W('ohnehin', 'пр', 'i tak, tak czy owak', '= sowieso', 'o', 'Ich wollte {ohnehin} gehen.', 'I tak chciałem iść.');
  W('etwa', 'з', 'około; czyżby', 'Bist du etwa krank?', 'o', 'Hast du {etwa} keine Zeit?', 'Czyżbyś nie miał czasu?');
  W('schließlich', 'пр', 'w końcu; przecież (uzasadnienie)', '', 'o', 'Er ist {schließlich} der Chef.', 'W końcu to on jest szefem.');
  W('allerdings', 'пр', 'jednakże; owszem', '', 'o', 'Das Hotel ist schön, {allerdings} teuer.', 'Hotel jest ładny, jednakże drogi.');
  W('immerhin', 'пр', 'bądź co bądź, przynajmniej', '', 'o', '{Immerhin} hat er sich entschuldigt.', 'Przynajmniej przeprosił.');
  W('ausgerechnet', 'пр', 'akurat, właśnie (z irytacją)', '', 'o', '{Ausgerechnet} heute regnet es!', 'Akurat dziś pada!');
  W('eigentlich', 'пр', 'właściwie, w gruncie rzeczy', '', 'o', 'Was willst du {eigentlich}?', 'Czego ty właściwie chcesz?');
  W('überhaupt', 'пр', 'w ogóle', 'überhaupt nicht – wcale nie', 'o', 'Das interessiert mich {überhaupt} nicht.', 'Wcale mnie to nie interesuje.');
  W('jedenfalls', 'пр', 'w każdym razie', '', 'o', '{Jedenfalls} war es ein schöner Abend.', 'W każdym razie był to miły wieczór.');
  W('wohl', 'з', 'chyba, pewnie', 'Er ist wohl krank. – Pewnie jest chory.', 'o', 'Das wird {wohl} stimmen.', 'To pewnie się zgadza.');
})();

/* Nowe lekcje na koniec swojego poziomu; ścieżki tematyczne na sam koniec (nie blokują A1). */
(function () {
  var R = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 }, t = UA.TOPICS.slice();
  t.sort(function (a, b) { return (R[a.level] || 9) - (R[b.level] || 9); });
  UA.TOPICS.length = 0; Array.prototype.push.apply(UA.TOPICS, t);
})();
