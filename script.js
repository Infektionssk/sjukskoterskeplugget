const subjects=[('anatomi', 'Anatomi & fysiologi', '🫀', 'Kroppens struktur och funktion'), ('farmakologi', 'Farmakologi', '💊', 'Läkemedel, effekter och risker'), ('omvardnad', 'Omvårdnad', '❤️', 'Omvårdnadsprocess och personcentrering'), ('mikrobiologi', 'Mikrobiologi', '🦠', 'Infektion, smitta och resistens'), ('akut', 'Akut omhändertagande', '🚑', 'ABCDE, försämring och prioritering'), ('medicin', 'Medicinska sjukdomar', '🩺', 'Vanliga sjukdomar och symtom'), ('lakemedelsberakning', 'Läkemedelsberäkning', '🧮', 'Dos, styrka, infusion och enheter'), ('vfu', 'VFU & kliniska moment', '🏥', 'Praktiska färdigheter och patientsäkerhet')].map(([id,name,icon,desc])=>({id,name,icon,desc}));
const questions=[('a1', 'anatomi', 'Grund', 'Vilket organ ansvarar främst för gasutbytet mellan luft och blod?', ['Hjärtat', 'Lungorna', 'Levern', 'Njurarna'], 1, 'Gasutbytet sker framför allt i lungornas alveoler genom diffusion av syre och koldioxid.', 'Respiration'), ('a2', 'anatomi', 'Grund', 'Vilken del av hjärtat pumpar blodet ut i systemkretsloppet?', ['Höger förmak', 'Höger kammare', 'Vänster förmak', 'Vänster kammare'], 3, 'Vänster kammare pumpar syrerikt blod via aorta till kroppens vävnader.', 'Hjärta'), ('a3', 'anatomi', 'Medel', 'Vilket hormon ökar återupptaget av vatten i njurarnas samlingsrör?', ['Insulin', 'ADH', 'TSH', 'Glukagon'], 1, 'ADH ökar vattenpermeabiliteten i samlingsrören och hjälper kroppen att behålla vatten.', 'Njure'), ('a4', 'anatomi', 'Medel', 'Vilken struktur i njuren är den huvudsakliga platsen för filtration av blodet?', ['Glomerulus', 'Urinledaren', 'Njurkapseln', 'Samlingsröret'], 0, 'Filtrationen sker över glomeruluskapillärerna till Bowmans kapsel och bildar primärurin.', 'Njure'), ('a5', 'anatomi', 'Medel', 'Vad är en viktig funktion hos erytrocyternas hemoglobin?', ['Koagulera blodet', 'Transportera syre', 'Bildar antikroppar', 'Reglera insulin'], 1, 'Hemoglobin binder framför allt syre i lungorna och transporterar det till vävnaderna.', 'Blod'), ('a6', 'anatomi', 'Avancerad', 'Vad händer normalt med hjärtats minutvolym om hjärtfrekvensen ökar måttligt medan slagvolymen är oförändrad?', ['Den minskar', 'Den ökar', 'Den blir alltid noll', 'Den påverkas inte alls'], 1, 'Minutvolym = hjärtfrekvens × slagvolym. Vid oförändrad slagvolym ökar minutvolymen när frekvensen ökar.', 'Cirkulation'), ('a7', 'anatomi', 'Grund', 'Vilken del av nervsystemet ansvarar främst för viljestyrda rörelser?', ['Somatiska nervsystemet', 'Parasympatiska nervsystemet', 'Sympatiska nervsystemet', 'Enteriska nervsystemet'], 0, 'Det somatiska nervsystemet styr framför allt viljemässiga rörelser i skelettmuskulaturen.', 'Nervsystem'), ('f1', 'farmakologi', 'Grund', 'Vilken effekt har en betablockerare typiskt på hjärtat?', ['Ökad hjärtfrekvens', 'Minskad hjärtfrekvens', 'Ökad kontraktilitet', 'Ökad salivproduktion'], 1, 'Betablockad kan minska hjärtfrekvens och kontraktilitet samt därmed hjärtats arbetsbelastning.', 'Kardiologi'), ('f2', 'farmakologi', 'Medel', 'Vilket läkemedel är ett DOAK?', ['Apixaban', 'Paracetamol', 'Omeprazol', 'Amoxicillin'], 0, 'Apixaban är en direkt faktor Xa-hämmare och tillhör gruppen direktverkande orala antikoagulantia.', 'Antikoagulantia'), ('f3', 'farmakologi', 'Grund', 'Vilken biverkning är särskilt vanlig vid opioidbehandling?', ['Förstoppning', 'Ökad hörsel', 'Ökad urinproduktion', 'Hyperaktivitet'], 0, 'Opioider kan orsaka bland annat förstoppning, illamående och sedering. Andningsdepression är en allvarlig risk.', 'Opioider'), ('f4', 'farmakologi', 'Medel', 'Vilket påstående om paracetamol är mest korrekt?', ['Det är ett antibiotikum', 'Det används bland annat som smärtstillande och febernedsättande', 'Det är alltid helt ofarligt oavsett dos', 'Det är ett antikoagulantium'], 1, 'Paracetamol används för smärta och feber. För hög total dos kan ge allvarlig leverskada.', 'Analgetika'), ('f5', 'farmakologi', 'Medel', 'Vilken parameter är särskilt viktig att följa vid behandling med insulin?', ['Blodglukos', 'Hörsel', 'Synfält', 'Hudtemperatur'], 0, 'Insulin sänker blodglukos och kan orsaka hypoglykemi, vilket gör glukoskontroll central.', 'Diabetes'), ('f6', 'farmakologi', 'Avancerad', 'Vilken situation ökar risken för läkemedelsrelaterade fel?', ['Likartade läkemedelsnamn och hög arbetsbelastning', 'Tydlig ordination', 'En patient åt gången', 'Dubbelkontroll'], 0, 'Hög arbetsbelastning och förväxlingsbara namn/förpackningar är exempel på riskfaktorer. Standardiserade kontroller minskar risken.', 'Patientsäkerhet'), ('f7', 'farmakologi', 'Grund', 'Vilken läkemedelsgrupp används för att minska magsyrasekretion?', ['Protonpumpshämmare', 'Betablockerare', 'DOAK', 'Loopdiuretika'], 0, 'Protonpumpshämmare, exempelvis omeprazol, hämmar protonpumpen och minskar syrasekretionen.', 'GI'), ('o1', 'omvardnad', 'Grund', 'Vad är huvudsyftet med personcentrerad vård?', ['Samma vård för alla', 'Utgå från patientens behov, resurser och önskemål', 'Enbart följa medicinska ordinationer', 'Minska all dokumentation'], 1, 'Personcentrerad vård innebär att patienten ses som en person och partner i vården, med egna behov, resurser och mål.', 'Personcentrering'), ('o2', 'omvardnad', 'Medel', 'Vilken del av omvårdnadsprocessen innebär att formulera mål och välja åtgärder?', ['Datainsamling', 'Planering', 'Utvärdering', 'Observation'], 1, 'Efter bedömning och identifierade behov planeras mål och omvårdnadsåtgärder.', 'Omvårdnadsprocess'), ('o3', 'omvardnad', 'Grund', 'Vad är ett centralt syfte med strukturerad omvårdnadsdokumentation?', ['Att ersätta muntlig kommunikation helt', 'Att skapa kontinuitet och spårbarhet i vården', 'Att undvika patientdelaktighet', 'Att endast dokumentera avvikelser'], 1, 'Dokumentation ska bidra till säker, kontinuerlig och spårbar vård samt ge relevant information till vårdteamet.', 'Dokumentation'), ('o4', 'omvardnad', 'Medel', 'Vilken åtgärd är mest direkt inriktad på att förebygga trycksår hos en riskpatient?', ['Regelbunden lägesändring och tryckavlastning', 'Öka koffeinintaget', 'Undvika all mobilisering', 'Minska vätskeintaget utan ordination'], 0, 'Tryckavlastning, lägesändring, mobilisering, hudbedömning och nutritionsåtgärder kan ingå i prevention beroende på riskbild.', 'Trycksår'), ('o5', 'omvardnad', 'Grund', 'Vad innebär autonomi i omvårdnad?', ['Att vårdpersonal alltid bestämmer', 'Att respektera patientens rätt att vara delaktig och fatta informerade beslut', 'Att patienten aldrig får råd', 'Att dokumentation är frivillig'], 1, 'Autonomi handlar om respekt för patientens självbestämmande och delaktighet.', 'Etik'), ('o6', 'omvardnad', 'Avancerad', 'En patient har hög smärta trots ordinerad behandling. Vad är mest lämpligt som nästa steg?', ['Ignorera smärtan', 'Göra en strukturerad smärtbedömning och vid behov kontakta ansvarig för ny bedömning', 'Ge dubbel dos utan ordination', 'Vänta till nästa dag'], 1, 'Smärtan behöver bedömas strukturerat och effekten av behandling utvärderas. Vid otillräcklig effekt behöver vårdplanen omprövas.', 'Smärta'), ('o7', 'omvardnad', 'Medel', 'Vad är en viktig del av säker utskrivningsplanering?', ['Enbart boka transport', 'Säkerställa förståelse, läkemedel, uppföljning och relevanta kontaktvägar', 'Undvika information för att minska oro', 'Alltid skriva ut samma dag'], 1, 'Utskrivningsplanering ska anpassas efter patientens behov och bidra till kontinuitet och säker övergång.', 'Utskrivning'), ('m1', 'mikrobiologi', 'Grund', 'Vad innebär handdesinfektion främst?', ['Steriliserar huden', 'Minskar mängden mikroorganismer på händerna', 'Tar bort all normalflora permanent', 'Ersätter all handtvätt'], 1, 'Handdesinfektion minskar mängden mikroorganismer och är central för att förebygga smittspridning.', 'Basala hygienrutiner'), ('m2', 'mikrobiologi', 'Medel', 'Vad betyder ESBL i kliniskt sammanhang?', ['Ett virus', 'En resistensmekanism hos bakterier mot flera betalaktamantibiotika', 'En svamp', 'Ett vaccin'], 1, 'ESBL är enzymer som kan bryta ned flera betalaktamantibiotika och därmed ge resistens.', 'Resistens'), ('m3', 'mikrobiologi', 'Grund', 'Vad menas med inkubationstid?', ['Tiden från smitta till symtomdebut', 'Tiden för antibiotikabehandling', 'Tiden från symtom till utskrivning', 'Tiden för handtvätt'], 0, 'Inkubationstid är tiden mellan smittotillfället och när symtom börjar utvecklas.', 'Smitta'), ('m4', 'mikrobiologi', 'Medel', 'Vilket påstående om antibiotikaresistens är mest korrekt?', ['Resistens betyder att patienten är immun', 'Bakterier kan utveckla eller förvärva egenskaper som gör antibiotika mindre effektiva', 'Alla antibiotika fungerar mot alla bakterier', 'Resistens påverkar bara virus'], 1, 'Resistens innebär att bakterier har egenskaper som gör att vissa antibiotika inte längre fungerar effektivt.', 'Antibiotika'), ('m5', 'mikrobiologi', 'Grund', 'Vad är en vårdrelaterad infektion?', ['En infektion som alltid finns före inläggning', 'En infektion som uppkommer i samband med vård eller behandling', 'Enbart en luftburen infektion', 'En infektion som bara drabbar personal'], 1, 'Vårdrelaterade infektioner kan uppstå i samband med vård, undersökning eller behandling.', 'VRI'), ('m6', 'mikrobiologi', 'Avancerad', 'Varför är korrekt handhygien viktig även när handskar används?', ['Handskar ersätter aldrig handhygien', 'Handskar kan ha mikroskopiska skador och händer kan kontamineras vid byte', 'Handskar steriliserar händerna', 'Handskar gör all smitta omöjlig'], 1, 'Handskar är ett komplement. Händer kan kontamineras vid på- och avtagning och handskar kan inte ersätta basala hygienrutiner.', 'Basala hygienrutiner'), ('m7', 'mikrobiologi', 'Medel', 'Vad är en normalflora?', ['Mikroorganismer som normalt finns på eller i kroppen utan att orsaka sjukdom', 'Endast sjukdomsframkallande bakterier', 'Alla virus i blodet', 'En antibiotikagrupp'], 0, 'Normalflora är mikroorganismer som normalt förekommer på eller i kroppen och ofta samexisterar utan sjukdom.', 'Normalflora'), ('ak1', 'akut', 'Grund', 'Vilken bokstav i ABCDE står för Airway?', ['A', 'B', 'C', 'D'], 0, 'A står för Airway, alltså bedömning av luftväg. ABCDE används för systematisk prioritering.', 'ABCDE'), ('ak2', 'akut', 'Medel', 'Vad är grundprincipen vid en akut försämring enligt ABCDE?', ['Dokumentera först', 'Åtgärda livshotande problem när de identifieras', 'Vänta på rond', 'Ta full anamnes innan första åtgärd'], 1, 'ABCDE bygger på systematisk bedömning och omedelbar åtgärd av livshotande problem.', 'ABCDE'), ('ak3', 'akut', 'Grund', 'Vilket fynd kan tala för påverkat andningsarbete?', ['Ökad andningsfrekvens och användning av accessoriska muskler', 'Normal samtalston utan ansträngning', 'Varm hand', 'Normal aptit'], 0, 'Ökad andningsfrekvens, cyanos, indragningar och accessorisk muskelaktivitet kan vara tecken på andningspåverkan.', 'Andning'), ('ak4', 'akut', 'Medel', 'En patient blir plötsligt kallsvettig, blek och yr. Vad är en rimlig första strategi?', ['Bedöm systematiskt enligt ABCDE och kontrollera vitalparametrar', 'Ge mat och gå därifrån', 'Vänta tills nästa rond', 'Dokumentera utan bedömning'], 0, 'Plötslig försämring kräver snabb strukturerad bedömning och vitalparametrar samt åtgärder utifrån fynd.', 'Cirkulation'), ('ak5', 'akut', 'Medel', 'Vad är NEWS2 främst till för?', ['Att diagnostisera alla sjukdomar', 'Att identifiera och följa risk för klinisk försämring med hjälp av vitalparametrar', 'Att ersätta klinisk bedömning', 'Att beräkna läkemedelsdos'], 1, 'NEWS2 är ett observationssystem för att identifiera försämring och stödja eskalering. Det ersätter inte kliniskt omdöme.', 'NEWS2'), ('ak6', 'akut', 'Avancerad', 'Vilken prioritering är mest rimlig om en patient har en ofri luftväg?', ['Luftvägen måste prioriteras omedelbart', 'Börja med kostregistrering', 'Ta fullständig social anamnes först', 'Mät vikt innan åtgärd'], 0, 'En ofri luftväg är direkt livshotande och prioriteras enligt ABCDE.', 'Prioritering'), ('ak7', 'akut', 'Grund', 'Vad står C i ABCDE för?', ['Consciousness', 'Circulation', 'Capillary', 'Communication'], 1, 'C står för Circulation, där bland annat puls, blodtryck, hud och tecken på cirkulationssvikt bedöms.', 'ABCDE'), ('md1', 'medicin', 'Grund', 'Vilket prov används ofta som biomarkör vid misstänkt hjärtinfarkt?', ['Troponin', 'CRP', 'Ferritin', 'TSH'], 0, 'Troponin är en viktig biomarkör för myokardskada och tolkas tillsammans med symtom, EKG och övrig klinik.', 'Hjärtinfarkt'), ('md2', 'medicin', 'Medel', 'Vilket symtom är vanligt vid hjärtsvikt?', ['Dyspné', 'Ökad synskärpa', 'Minskad trötthet', 'Hyperaktivitet'], 0, 'Dyspné, trötthet och ödem är vanliga symtom vid hjärtsvikt.', 'Hjärtsvikt'), ('md3', 'medicin', 'Grund', 'Vad är ett typiskt symtom vid djup ventrombos?', ['Ensidig svullnad och smärta i benet', 'Plötsligt förbättrad kondition', 'Bilateral hörselförlust', 'Ökad aptit'], 0, 'DVT kan ge ensidig svullnad, smärta, ömhet och ibland värmeökning. Klinisk bedömning behövs.', 'DVT'), ('md4', 'medicin', 'Medel', 'Vilket symtom är typiskt vid hypoglykemi?', ['Svettning, tremor och förvirring', 'Torr hud och långsam puls i alla fall', 'Ökad muskelstyrka', 'Enbart feber'], 0, 'Hypoglykemi kan ge autonoma symtom som svettning och tremor samt neuroglycopeniska symtom som förvirring.', 'Diabetes'), ('md5', 'medicin', 'Medel', 'Vilket påstående om KOL är mest korrekt?', ['KOL är en kronisk lungsjukdom med kvarstående luftflödesbegränsning', 'KOL är alltid akut och övergående', 'KOL drabbar endast barn', 'KOL påverkar aldrig andningen'], 0, 'KOL innebär kronisk luftvägs- och lungpåverkan med kvarstående luftflödesbegränsning och kan ge dyspné och hosta.', 'KOL'), ('md6', 'medicin', 'Avancerad', 'Vilket fynd kan vara förenligt med dehydrering?', ['Törst, torra slemhinnor och minskad urinmängd', 'Ökad urinmängd i alla fall', 'Ökad hudturgor', 'Alltid hypertoni'], 0, 'Dehydrering kan ge törst, torra slemhinnor, minskad urinmängd och cirkulatoriska förändringar.', 'Vätskebalans'), ('md7', 'medicin', 'Grund', 'Vilken diagnos innebär inflammation i appendix?', ['Appendicit', 'Divertikulit', 'Pankreatit', 'Peritonit'], 0, 'Appendicit är inflammation i appendix och kan ge buksmärta, illamående och feber.', 'Kirurgi'), ('lb1', 'lakemedelsberakning', 'Grund', 'Ordinationen är 500 mg och tabletterna innehåller 250 mg. Hur många tabletter ges?', ['0,5', '1', '2', '4'], 2, 'Antal tabletter = ordinerad dos / styrka = 500 mg / 250 mg = 2 tabletter.', 'Tablett'), ('lb2', 'lakemedelsberakning', 'Grund', 'En infusion på 1000 mL ska gå på 8 timmar. Vilken hastighet blir det i mL/h?', ['80', '100', '125', '160'], 2, '1000 mL / 8 h = 125 mL/h.', 'Infusion'), ('lb3', 'lakemedelsberakning', 'Medel', 'En patient ska ha 750 mg. Lösningen innehåller 250 mg/mL. Hur många mL ges?', ['1 mL', '2 mL', '3 mL', '4 mL'], 2, 'Volym = ordinerad dos / koncentration = 750 mg / 250 mg/mL = 3 mL.', 'Dos'), ('lb4', 'lakemedelsberakning', 'Medel', '0,5 g motsvarar hur många mg?', ['5 mg', '50 mg', '500 mg', '5000 mg'], 2, '1 g = 1000 mg. Därför är 0,5 g = 500 mg.', 'Enheter'), ('lb5', 'lakemedelsberakning', 'Medel', 'En infusion på 500 mL ska ges på 4 timmar. Vilken hastighet i mL/h?', ['100', '125', '150', '200'], 1, '500 mL / 4 h = 125 mL/h.', 'Infusion'), ('lb6', 'lakemedelsberakning', 'Avancerad', 'En ordination är 2 mg/kg. Patienten väger 70 kg. Hur stor dos blir det?', ['14 mg', '70 mg', '140 mg', '280 mg'], 2, '2 mg/kg × 70 kg = 140 mg.', 'Viktbaserad dos'), ('lb7', 'lakemedelsberakning', 'Grund', 'Vilken enhet används normalt för volymen av en injektionslösning?', ['mL', 'kg', 'mmHg', 'mmol/h'], 0, 'mL (milliliter) används som volymenhet för injektions- och infusionslösningar.', 'Enheter'), ('v1', 'vfu', 'Grund', 'Vad används SBAR främst till?', ['Läkemedelsberäkning', 'Strukturerad kommunikation', 'Sterilisering', 'Provtagning'], 1, 'SBAR står för Situation, Bakgrund, Aktuellt tillstånd och Rekommendation och strukturerar rapportering.', 'SBAR'), ('v2', 'vfu', 'Medel', 'Vad är viktigt före administrering av ett läkemedel?', ['Kontrollera ordination och patientidentitet', 'Hoppa över signering', 'Ge utan att kontrollera relevanta risker', 'Dokumentera innan läkemedlet ges'], 0, 'Säker läkemedelshantering kräver kontroller av ordination, patient, läkemedel, dos, tid och administreringssätt enligt lokala rutiner.', 'Läkemedel'), ('v3', 'vfu', 'Grund', 'Vad är en central princip vid mätning av vitalparametrar?', ['Att tolka värden i relation till patientens tillstånd och trend', 'Att endast notera det högsta värdet', 'Att alltid behandla ett avvikande värde utan bedömning', 'Att aldrig jämföra med tidigare värden'], 0, 'Ett enskilt värde behöver sättas i kliniskt sammanhang och jämföras med tidigare värden när det är relevant.', 'Vitalparametrar'), ('v4', 'vfu', 'Medel', 'Vad är en viktig åtgärd före en PVK-relaterad procedur?', ['Handhygien och aseptisk teknik enligt lokal rutin', 'Hoppa över identitetskontroll', 'Använda samma handskar till flera patienter', 'Desinficera aldrig huden'], 0, 'Handhygien, rätt material, identitetskontroll och aseptisk teknik är viktiga delar av säker PVK-hantering.', 'PVK'), ('v5', 'vfu', 'Grund', 'Vad är syftet med NEWS2-bedömning?', ['Identifiera risk för klinisk försämring', 'Beräkna eGFR', 'Bestämma blodgrupp', 'Ställa slutlig diagnos'], 0, 'NEWS2 sammanväger vitalparametrar för att uppmärksamma försämring och stödja klinisk eskalering.', 'NEWS2'), ('v6', 'vfu', 'Avancerad', 'Du märker att en patient plötsligt blivit mer andfådd och påtagligt trött. Vad är mest rimligt?', ['Gör en snabb strukturerad bedömning, kontrollera vitalparametrar och eskalera vid behov', 'Vänta till nästa rond', 'Dokumentera utan att bedöma', 'Ge valfritt läkemedel'], 0, 'Plötslig försämring kräver snabb bedömning, relevanta mätningar och eskalering enligt lokala rutiner.', 'Försämring'), ('v7', 'vfu', 'Medel', 'Vilken kommunikationsstrategi är mest lämplig vid överrapportering?', ['Strukturerad rapport med relevant information och tydlig rekommendation', 'Långa osorterade berättelser', 'Endast diagnosen', 'Endast senaste blodtrycket'], 0, 'Strukturerad kommunikation minskar risken att viktig information missas och gör nästa åtgärd tydligare.', 'Kommunikation')].map(([id,s,d,q,o,a,e,tag])=>({id,s,d,q,o,a,e,tag}));

// v6.1: expanded question bank
const extraQuestions=[
("a8","anatomi","Grund","Var sker det huvudsakliga gasutbytet i lungorna?",["Alveolerna", "Trachea", "Pleura", "Bronkerna"],0,"Gas exchange sker huvudsakligen över det tunna alveol-kapillärmembranet.","Respiration"),
("a9","anatomi","Medel","Vilket hormon stimulerar främst mjölkproduktion?",["Oxytocin", "Prolaktin", "ADH", "TSH"],1,"Prolaktin stimulerar mjölkbildningen; oxytocin bidrar främst till mjölkutdrivning.","Hormoner"),
("a10","anatomi","Medel","Vilken del av nefronet står för en stor del av återupptaget?",["Proximala tubulus", "Urinledaren", "Glomerulus", "Njurbäckenet"],0,"Proximala tubulus återupptar stora mängder vatten, natrium och andra filtrerade ämnen.","Njure"),
("a11","anatomi","Grund","Vilken blodgrupp används som universell erytrocytdonator i akuta situationer när blodgruppen är okänd?",["AB+", "O−", "A+", "B−"],1,"O-negativa erytrocyter saknar A-, B- och RhD-antigen. Lokala transfusionsrutiner ska alltid följas.","Blod"),
("a12","anatomi","Avancerad","Vad händer normalt med pupillerna vid sympatikuspåslag?",["De dras samman", "De vidgas", "De slutar reagera", "De blir alltid lika stora"],1,"Sympatikus ger mydriasis, alltså pupillvidgning.","Nervsystem"),
("a13","anatomi","Medel","Vilken struktur leder impulsen från AV-noden vidare mot kamrarna?",["His-bunten", "Sinusknutan", "Aortaklaffen", "Kranskärlen"],0,"His-bunten leder impulsen vidare till skänklarna och Purkinjefibrerna.","Hjärta"),
("f8","farmakologi","Grund","Vilken läkemedelsgrupp blockerar angiotensin II-receptorn?",["ARB", "Opioider", "Antacida", "Antihistaminer"],0,"ARB blockerar angiotensin II-receptorn och kan sänka blodtrycket.","Hypertoni"),
("f9","farmakologi","Medel","Vilken effekt har loopdiuretika typiskt?",["Ökad utsöndring av natrium och vatten", "Minskad urinproduktion", "Ökad blodvolym", "Ökad insulinproduktion"],0,"Loopdiuretika ökar natrium- och vattenutsöndringen och används bland annat vid ödem.","Diuretika"),
("f10","farmakologi","Medel","Vilken allvarlig biverkning är särskilt viktig att observera vid opioidbehandling?",["Andningsdepression", "Ökad aptit", "Hypertoni", "Ökad syremättnad"],0,"Opioider kan orsaka sedering och andningsdepression. Klinisk bedömning och lokal rutin är viktiga.","Opioider"),
("f11","farmakologi","Grund","Vilken läkemedelsgrupp används mot bakteriella infektioner?",["Antibiotika", "Antikoagulantia", "Diuretika", "Antacida"],0,"Antibiotika verkar mot bakterier och behandlar inte vanliga virusinfektioner.","Antibiotika"),
("f12","farmakologi","Avancerad","Varför kan nedsatt njurfunktion påverka läkemedelsdosering?",["Utsöndringen av vissa läkemedel kan minska", "Alla läkemedel bryts ned i njurarna", "Njurfunktion påverkar aldrig läkemedel", "Läkemedel utsöndras alltid via huden"],0,"Vissa läkemedel eller metaboliter elimineras via njurarna och kan därför ackumuleras vid nedsatt njurfunktion.","Njurfunktion"),
("f13","farmakologi","Medel","Vilken kombination kan öka blödningsrisken?",["Antikoagulantia och trombocythämmare", "Paracetamol och koksalt", "Salbutamol och glukos", "Omeprazol och vatten"],0,"Flera läkemedel som påverkar hemostasen kan tillsammans öka blödningsrisken.","Interaktioner"),
("o8","omvardnad","Grund","Vad innebär en omvårdnadsbedömning?",["Att systematiskt samla och värdera relevant patientinformation", "Att ställa en medicinsk diagnos", "Att endast mäta blodtryck", "Att skriva utskrivningsanteckning"],0,"Bedömningen omfattar relevanta subjektiva och objektiva uppgifter om patientens behov och risker.","Omvårdnadsprocess"),
("o9","omvardnad","Medel","Vilken åtgärd främjar patientdelaktighet?",["Involvera patienten i mål och beslut", "Undvika frågor", "Bestäm alltid åt patienten", "Tala endast med anhöriga"],0,"Personcentrering innebär att patientens perspektiv, resurser och mål inkluderas.","Personcentrering"),
("o10","omvardnad","Grund","Vilket är ett exempel på en objektiv uppgift?",["Blodtryck 145/85 mmHg", "Patienten uppger illamående", "Patienten känner oro", "Patienten beskriver smärta"],0,"Objektiva uppgifter är mätbara eller observerbara. Patientens upplevelser är subjektiva uppgifter.","Dokumentation"),
("o11","omvardnad","Medel","Vilken åtgärd kan minska fallrisken?",["Riskbedömning och anpassning av miljö och stöd", "Undvika all mobilisering", "Ge sederande läkemedel utan ordination", "Låsa in patienten"],0,"Fallprevention anpassas individuellt och kan omfatta miljö, hjälpmedel, information och mobiliseringsstöd.","Fallprevention"),
("o12","omvardnad","Avancerad","En patient tackar nej till en planerad åtgärd. Vad är mest lämpligt?",["Utforska skälen, ge relevant information och respektera självbestämmandet", "Genomför åtgärden ändå", "Ignorera patienten", "Låt anhöriga bestämma utan patienten"],0,"Autonomi innebär respekt för patientens självbestämmande och rätt till informerade beslut.","Etik"),
("o13","omvardnad","Medel","Vad bör ingå i en strukturerad smärtbedömning?",["Intensitet, lokalisation, karaktär och effekt av åtgärder", "Endast puls", "Endast blodtryck", "Enbart observation utan att fråga patienten"],0,"Smärtan bör bedömas på ett sätt som passar patienten och följas upp efter åtgärd.","Smärta"),
("m8","mikrobiologi","Grund","Vilken åtgärd är central för att förebygga smittspridning?",["Handhygien enligt basala hygienrutiner", "Antibiotika till alla patienter", "Dela handskar mellan patienter", "Undvika rengöring"],0,"Korrekt handhygien är en grundläggande smittförebyggande åtgärd.","Smittförebyggande"),
("m9","mikrobiologi","Medel","Vad är MRSA?",["Meticillinresistent Staphylococcus aureus", "Ett virus", "En parasit", "En svamp"],0,"MRSA är S. aureus med resistens mot meticillin och närbesläktade antibiotika.","Resistens"),
("m10","mikrobiologi","Medel","Vilken smittväg avser spridning med större droppar från luftvägarna?",["Droppsmitta", "Blodburen smitta", "Vektorburen smitta", "Fekal-oral smitta"],0,"Droppsmitta kan spridas exempelvis vid hosta och nysning. Skyddsåtgärder följer aktuell rutin.","Smittvägar"),
("m11","mikrobiologi","Grund","Vad innebär sterilitet?",["Frånvaro av levande mikroorganismer", "Låg bakteriemängd", "Att bara virus saknas", "Att huden är ren"],0,"Sterilitet innebär frånvaro av levande mikroorganismer.","Hygien"),
("m12","mikrobiologi","Avancerad","Varför behandlas en vanlig virusinfektion inte med antibiotika?",["Antibiotika verkar mot bakterier, inte virus", "Virus är alltid resistenta", "Antibiotika förstör alltid immunförsvaret", "Virus finns bara på huden"],0,"Antibiotika riktar sig mot bakteriella strukturer eller processer och har därför inte effekt på vanliga virusinfektioner.","Antibiotika"),
("m13","mikrobiologi","Medel","Vad betyder VRE?",["Vancomycinresistenta enterokocker", "Virusresistenta enterokocker", "En svampinfektion", "En parasit"],0,"VRE är enterokocker som är resistenta mot vancomycin.","Resistens"),
("ak8","akut","Grund","Vilka fynd hör främst till B i ABCDE?",["Andningsfrekvens, andningsarbete och saturation", "Blodtryck och puls", "Medvetandegrad", "Bukstatus"],0,"B står för Breathing och omfattar bedömning av andningen.","ABCDE"),
("ak9","akut","Medel","Vilket fynd kan tala för cirkulationssvikt?",["Kall periferi, takykardi och påverkat medvetande", "Ökad aptit", "Förbättrad kondition", "Normal perifer cirkulation"],0,"Cirkulationssvikt kan ge tecken på otillräcklig vävnadsperfusion och kräver snabb bedömning.","Cirkulation"),
("ak10","akut","Medel","Vad bedöms främst under D i ABCDE?",["Neurologiskt status och medvetande", "Luftväg", "Urinmängd", "Hudens fuktighet enbart"],0,"D omfattar bland annat medvetandegrad, pupiller och blodglukos när relevant.","ABCDE"),
("ak11","akut","Grund","En patient blir plötsligt medvetslös. Vad är mest lämpligt?",["Tillkalla hjälp och bedöm andningen enligt akut rutin", "Ge mat och dryck", "Vänta på rond", "Lämna patienten ensam"],0,"Plötslig medvetslöshet kräver omedelbar bedömning och larm/åtgärder enligt verksamhetens HLR-rutin.","Akut försämring"),
("ak12","akut","Avancerad","En patient får nytillkommen bröstsmärta och kallsvettning. Vad gör du?",["Snabb ABCDE-bedömning och omedelbar eskalering enligt akut rutin", "Väntar till nästa dag", "Ger kaffe", "Dokumenterar utan bedömning"],0,"Bröstsmärta med allmänpåverkan kan vara allvarlig och kräver snabb strukturerad bedömning.","Bröstsmärta"),
("ak13","akut","Medel","Vilken åtgärd är rimlig vid misstänkt hypoglykemi hos en vaken patient?",["Kontrollera glukos och behandla enligt lokal rutin", "Ge insulin direkt", "Be patienten fasta", "Ignorera symtomen"],0,"Hypoglykemi kräver snabb kontroll och behandling enligt lokala riktlinjer med uppföljning.","Hypoglykemi"),
("md8","medicin","Grund","Vilket symtom är vanligt vid järnbristanemi?",["Trötthet och nedsatt ork", "Ökad syremättnad", "Ökad muskelmassa", "Alltid hög feber"],0,"Järnbristanemi kan ge trötthet, nedsatt ork och blekhet.","Anemi"),
("md9","medicin","Medel","Vilken symtombild kan förekomma vid pneumoni?",["Hosta, feber och dyspné", "Alltid bradykardi", "Enbart klåda", "Ökad synskärpa"],0,"Pneumoni kan bland annat ge hosta, feber, dyspné och påverkat allmäntillstånd.","Infektion"),
("md10","medicin","Medel","Vad innebär hypertoni?",["Varaktigt förhöjt blodtryck", "Lågt blodsocker", "Förhöjd kroppstemperatur", "Låg syremättnad"],0,"Hypertoni innebär förhöjt blodtryck och är en riskfaktor för hjärt-kärlsjukdom.","Hypertoni"),
("md11","medicin","Grund","Vilket symtom kan förekomma vid hjärtinfarkt?",["Bröstsmärta eller tryck, ibland med dyspné och kallsvettning", "Alltid hög feber", "Förbättrad kondition", "Enbart klåda"],0,"Hjärtinfarkt kan ge bröstsmärta/tryck, dyspné, kallsvettning, illamående eller atypiska symtom.","Hjärtinfarkt"),
("md12","medicin","Avancerad","Vilket symtom kan ses vid lungemboli?",["Plötslig dyspné och bröstsmärta", "Ökad urinmängd som enda fynd", "Förbättrad andning", "Alltid bradykardi"],0,"Lungemboli kan ge plötslig andfåddhet, bröstsmärta, takykardi och hypoxemi.","Lungemboli"),
("md13","medicin","Medel","Vilka symtom kan förekomma vid hypotyreos?",["Trötthet och frusenhet", "Värmeintolerans som enda typiska fynd", "Alltid hög feber", "Kraftigt ökad aptit i alla fall"],0,"Hypotyreos kan ge trötthet, frusenhet, förstoppning och andra symtom.","Endokrinologi"),
("lb8","lakemedelsberakning","Grund","Ordinationen är 1 g. Tabletterna innehåller 500 mg. Hur många tabletter ges?",["1", "2", "3", "4"],1,"1 g = 1000 mg. 1000/500 = 2 tabletter.","Tablett"),
("lb9","lakemedelsberakning","Medel","En infusion på 750 mL ska gå på 6 timmar. Vilken hastighet behövs?",["100 mL/h", "125 mL/h", "150 mL/h", "175 mL/h"],1,"750 mL / 6 h = 125 mL/h.","Infusion"),
("lb10","lakemedelsberakning","Medel","En lösning innehåller 50 mg/mL. Patienten ska få 125 mg. Hur många mL ges?",["1,5 mL", "2,5 mL", "5 mL", "10 mL"],1,"125 mg / 50 mg/mL = 2,5 mL.","Dos"),
("lb11","lakemedelsberakning","Avancerad","En patient väger 60 kg och ordinationen är 0,1 mg/kg. Vilken dos blir det?",["0,6 mg", "6 mg", "60 mg", "600 mg"],1,"0,1 mg/kg × 60 kg = 6 mg.","Viktbaserad dos"),
("lb12","lakemedelsberakning","Grund","2,5 liter motsvarar hur många milliliter?",["25", "250", "2500", "25 000"],2,"1 liter = 1000 mL. 2,5 liter = 2500 mL.","Enheter"),
("lb13","lakemedelsberakning","Medel","En infusion går med 80 mL/h i 5 timmar. Hur stor volym ges?",["160 mL", "320 mL", "400 mL", "800 mL"],2,"80 mL/h × 5 h = 400 mL.","Infusion"),
("v8","vfu","Grund","Vad bör du göra om du upptäcker en risk för vårdskada?",["Agera för patientens säkerhet och rapportera enligt verksamhetens rutin", "Dölja händelsen", "Vänta till nästa månad", "Ändra journalen utan spårbarhet"],0,"Patientsäkerhetsarbete innebär att risker och händelser hanteras och rapporteras enligt gällande rutiner.","Patientsäkerhet"),
("v9","vfu","Medel","Vad bör kontrolleras vid en PVK?",["Insticksställe, funktion och tecken på komplikationer", "Endast patientens temperatur", "Ingenting om patienten inte klagar", "Bara färgen på förbandet"],0,"Bedöm bland annat smärta, rodnad, svullnad, läckage och funktion enligt lokal rutin.","PVK"),
("v10","vfu","Grund","Vad är ett viktigt mål med strukturerad överrapportering?",["Att relevant information når nästa vårdgivare tydligt", "Att rapporten blir så lång som möjligt", "Att undvika frågor", "Att endast lämna diagnosen"],0,"Struktur minskar risken att viktig information missas och tydliggör plan och behov.","Rapport"),
("v11","vfu","Medel","En patient har fallit. Vad är en viktig första åtgärd?",["Bedöm patientens tillstånd och tecken på skada", "Lyft alltid upp patienten direkt", "Lämna patienten ensam", "Ge läkemedel utan bedömning"],0,"Efter ett fall ska patienten bedömas innan förflyttning när skada kan misstänkas. Följ lokal rutin.","Fall"),
("v12","vfu","Avancerad","Vad är viktigt vid muntlig läkemedelsordination enligt verksamhetens rutin?",["Tydlig kommunikation, upprepning och dokumentation", "Att aldrig upprepa ordinationen", "Att gissa dosen", "Att hoppa över dokumentation"],0,"Muntliga ordinationer är en risksituation och ska hanteras enligt gällande regler och lokala rutiner.","Läkemedel"),
("v13","vfu","Medel","Vad är ett centralt mål med aseptisk teknik?",["Förhindra kontamination och minska infektionsrisk", "Öka antalet mikroorganismer", "Ersätta handhygien", "Göra all utrustning steril efteråt"],0,"Aseptisk teknik syftar till att förhindra kontamination. Exakt metod följer lokal rutin.","Aseptik")
].map(([id,s,d,q,o,a,e,tag])=>({id,s,d,q,o,a,e,tag}));
questions.push(...extraQuestions);
const knowledge=[('ABCDE', 'Akut omhändertagande', '🚑', 'A: luftväg. B: andning. C: cirkulation. D: neurologi/medvetande. E: exponering.', 'Använd strukturen för att snabbt identifiera och åtgärda livshotande problem. Följ lokala rutiner och eskalera vid behov.'), ('SBAR', 'Kommunikation', '🗣️', 'Situation → Bakgrund → Aktuellt tillstånd → Rekommendation.', 'Börja med varför du kontaktar mottagaren, ge relevant bakgrund, beskriv nuläget och var tydlig med vad du rekommenderar eller behöver.'), ('NEWS2', 'Observation', '📊', 'Ett system för att uppmärksamma klinisk försämring med hjälp av vitalparametrar.', 'Tolka alltid resultatet tillsammans med patientens kliniska bild och följ verksamhetens lokala eskaleringsrutiner.'), ('Vätskebalans', 'Omvårdnad', '💧', 'Tillförsel minus förluster ger en förenklad bild av vätskebalansen.', 'Bedöm även kliniska tecken, vikttrend, urinmängd och relevanta prover. Vätskestatus är mer än en enskild siffra.'), ('Hjärtsvikt', 'Medicinska sjukdomar', '❤️', 'Nedsatt pumpförmåga kan ge dyspné, trötthet och vätskeretention.', 'Följ bland annat symtom, vitalparametrar, vikt och ödem enligt vårdplan. Akut försämring kräver snabb bedömning.'), ('DVT', 'Medicinska sjukdomar', '🦵', 'Djup ventrombos är en blodpropp i en djup ven, ofta i benet.', 'Ensidig svullnad, smärta och ömhet kan förekomma. Misstanke kräver medicinsk bedömning.'), ('DOAK', 'Farmakologi', '💊', 'Direktverkande orala antikoagulantia används för att förebygga och behandla tromboemboliska tillstånd.', 'Exempel är apixaban och rivaroxaban. Bedöm blödningsrisk och följ ordination och lokala rutiner.'), ('Troponin', 'Kardiologi', '🧪', 'Biomarkör för myokardskada.', 'Troponin måste tolkas tillsammans med symtom, EKG och förändring över tid; ett förhöjt värde är inte ensamt liktydigt med hjärtinfarkt.'), ('ESBL', 'Mikrobiologi', '🦠', 'Enzymer som kan ge resistens mot flera betalaktamantibiotika.', 'Resistensuppgifter påverkar antibiotikaval och vårdhygien. Följ alltid lokala riktlinjer.'), ('Trycksår', 'Omvårdnad', '🛏️', 'Lokal vävnadsskada som kan uppstå vid tryck, skjuv och andra belastningar.', 'Riskbedömning, tryckavlastning, mobilisering, hudbedömning och nutrition kan ingå i prevention.'), ('Läkemedelssäkerhet', 'Patientsäkerhet', '🛡️', 'Systematiska kontroller minskar risken för läkemedelsfel.', 'Kontrollera ordination, identitet, läkemedel, dos, tid och administreringssätt enligt lokala rutiner. Dokumentera efter administrering.'), ('Hypoglykemi', 'Diabetes', '🍬', 'Lågt blodglukos kan ge svettning, tremor, hunger, oro och senare förvirring eller medvetandepåverkan.', 'Bekräfta med glukosmätning när det är möjligt och behandla enligt ordination/lokal rutin. Följ upp effekten.')].map(([title,cat,icon,summary,body])=>({title,cat,icon,summary,body}));
const vfuItems=[('SBAR', '🗣️', 'Strukturerad rapport', 'Skriv en rapport som är kort men komplett: Situation, Bakgrund, Aktuellt tillstånd och Rekommendation.', 'Tips: avsluta med vad du vill att mottagaren ska göra eller ta ställning till.'), ('ABCDE', '🚑', 'Akut bedömning', 'Bedöm A–E systematiskt och åtgärda livshotande problem direkt när de upptäcks.', 'Öva på att säga högt vad du bedömer och varför.'), ('NEWS2', '📊', 'Upptäcka försämring', 'Samla vitalparametrar och följ trenden över tid.', 'Kom ihåg att NEWS2 stödjer men inte ersätter klinisk bedömning.'), ('PVK', '💉', 'Perifer venkateter', 'Förbered material, identitetskontroll, handhygien och aseptisk teknik enligt lokal rutin.', 'Kontrollera insticksställe och funktion och dokumentera enligt verksamhetens rutiner.'), ('Läkemedel', '💊', 'Säker administrering', 'Kontrollera ordination, patient, läkemedel, dos, tid och administreringssätt.', 'Var extra uppmärksam på allergier, interaktioner och riskläkemedel.'), ('KAD', '🧴', 'Urinkateter', 'KAD ska ha tydlig indikation och hanteras med aseptisk teknik enligt lokal rutin.', 'Observera urin, flöde, obehag och tecken på komplikationer.'), ('Dokumentation', '📝', 'Kontinuitet och spårbarhet', 'Dokumentera relevant bedömning, åtgärd, effekt och plan.', 'Skriv sakligt, tydligt och i rätt del av journalen.')].map(([title,icon,subtitle,body,tip])=>({title,icon,subtitle,body,tip}));

const KEY="sjukskoterskeplugget_v6";
let state=loadState();
let quizState=null, flashList=[], flashIndex=0, timerId=null, timeLeft=60;

function loadState(){
  try{return Object.assign({answered:0,correct:0,bySubject:{},flash:{},history:[],streak:0,lastStudy:null},JSON.parse(localStorage.getItem(KEY)||"{}"))}catch(e){return {answered:0,correct:0,bySubject:{},flash:{},history:[],streak:0,lastStudy:null}}
}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function todayKey(){return new Date().toISOString().slice(0,10);}
function subjectName(id){return subjects.find(x=>x.id===id)?.name||id;}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2200);}
function shuffle(arr){return [...arr].sort(()=>Math.random()-0.5);}

function nav(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));
  document.querySelectorAll("[data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===id));
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="progress")renderProgress();
  if(id==="home")renderHome();
}

function setupSubjects(){
  const grid=document.getElementById("subjectGrid");
  grid.innerHTML=subjects.map(s=>`<button class="subject" data-subject="${s.id}"><b>${s.icon}</b><strong>${s.name}</strong><small>${s.desc}</small><span class="subject-count">${questions.filter(q=>q.s===s.id).length} frågor</span></button>`).join("");
  document.getElementById("quizSubject").innerHTML='<option value="Alla">Alla ämnen</option>'+subjects.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
  document.getElementById("flashSubject").innerHTML='<option value="Alla">Alla ämnen</option>'+subjects.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
}

function renderHome(){
  const acc=state.answered?Math.round(state.correct/state.answered*100):0;
  document.getElementById("homeAccuracy").textContent=acc+"%"; document.getElementById("homeAccuracy").style.setProperty("--p",acc+"%");
  document.getElementById("homeAnswered").textContent=state.answered+" besvarade";
  let tip="Redo för nästa pass?";
  if(acc>=85)tip="Starkt resultat – utmana dig själv.";
  else if(state.answered>=10)tip="Repetera dina svagaste områden.";
  document.getElementById("homeTip").textContent=tip;
  const weak=getWeakSubject();
  if(weak){
    document.getElementById("recommendTitle").textContent="Träna "+subjectName(weak);
    document.getElementById("recommendText").textContent="Det är just nu ditt område med lägst träffsäkerhet. Ett kort quiz är ett bra nästa steg.";
  }
}

function getWeakSubject(){
  const rows=subjects.map(s=>{
    const x=state.bySubject[s.id]||{a:0,c:0};
    return {id:s.id,a:x.a,c:x.c,p:x.a?x.c/x.a:1};
  }).filter(x=>x.a>=2);
  rows.sort((a,b)=>a.p-b.p||b.a-a.a);
  return rows[0]?.id||null;
}

function startQuiz(custom={}){
  clearInterval(timerId);
  const s=custom.subject||document.getElementById("quizSubject").value;
  const d=custom.difficulty||document.getElementById("quizDifficulty").value;
  const n=custom.count||+document.getElementById("quizCount").value;
  const mode=custom.mode||document.getElementById("quizMode").value;
  const timer=custom.timer??document.getElementById("quizTimer").checked;
  let pool=questions.filter(q=>(s==="Alla"||q.s===s)&&(d==="Alla"||q.d===d));
  pool=shuffle(pool).slice(0,Math.min(n,pool.length));
  if(!pool.length){toast("Inga frågor matchar valet.");return;}
  quizState={pool,index:0,score:0,answered:false,mode,timer,started:Date.now()};
  document.getElementById("quizSetup").classList.add("hidden");
  document.getElementById("quizArea").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion(){
  clearInterval(timerId);
  const q=quizState.pool[quizState.index];
  const pct=Math.round((quizState.index/quizState.pool.length)*100);
  document.getElementById("quizArea").innerHTML=`
  <div class="quiz-top"><span>Fråga ${quizState.index+1} av ${quizState.pool.length}</span><strong>${quizState.score} rätt</strong>${quizState.timer?`<span class="timer" id="timer">60 s</span>`:""}</div>
  <div class="progressbar"><div style="width:${pct}%"></div></div>
  <div class="question-card">
    <div class="question-meta"><span class="eyebrow">${subjectName(q.s)}</span><span class="badge">${q.d}</span><span class="badge">${q.tag}</span></div>
    <h3>${q.q}</h3>
    <div class="options">${q.o.map((x,i)=>`<button class="option" data-i="${i}"><span>${String.fromCharCode(65+i)}</span>${x}</button>`).join("")}</div>
    <div id="explanation"></div>
    <div class="quiz-bottom"><span id="feedback"></span><button id="nextQ" class="primary hidden">${quizState.index===quizState.pool.length-1?"Visa resultat":"Nästa fråga"} →</button></div>
  </div>`;
  document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
  if(quizState.timer)startTimer();
}

function startTimer(){
  timeLeft=60;
  const el=document.getElementById("timer");
  timerId=setInterval(()=>{
    timeLeft--; if(el)el.textContent=timeLeft+" s";
    if(timeLeft<=10&&el)el.classList.add("urgent");
    if(timeLeft<=0){clearInterval(timerId);answer(-1,true);}
  },1000);
}

function answer(i,timeout=false){
  if(quizState.answered)return;
  clearInterval(timerId);quizState.answered=true;
  const q=quizState.pool[quizState.index],correct=i===q.a;
  if(correct)quizState.score++;
  state.answered++;state.correct+=correct?1:0;
  state.bySubject[q.s]??={a:0,c:0};state.bySubject[q.s].a++;if(correct)state.bySubject[q.s].c++;
  state.lastStudy=todayKey();save();
  document.querySelectorAll(".option").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("correct");if(j===i&&!correct)b.classList.add("wrong");});
  document.getElementById("feedback").textContent=timeout?"⏱ Tiden tog slut.":(correct?"✓ Rätt!":"✕ Inte riktigt.");
  document.getElementById("explanation").innerHTML=`<div class="explanation"><strong>Förklaring:</strong> ${q.e}</div>`;
  const next=document.getElementById("nextQ");next.classList.remove("hidden");next.onclick=nextQuestion;
  updateStreak();
}

function nextQuestion(){
  if(quizState.index<quizState.pool.length-1){quizState.index++;quizState.answered=false;renderQuestion();}
  else showResult();
}

function showResult(){
  clearInterval(timerId);
  const pct=Math.round(quizState.score/quizState.pool.length*100);
  const msg=pct>=90?"Utmärkt!":pct>=75?"Bra jobbat!":pct>=60?"På rätt väg!":"Bra att du tränar – repetition ger effekt.";
  state.history.unshift({date:new Date().toLocaleString("sv-SE"),score:quizState.score,total:quizState.pool.length,pct,subject:quizState.pool.every(q=>q.s===quizState.pool[0].s)?subjectName(quizState.pool[0].s):"Blandat"});
  state.history=state.history.slice(0,8);save();
  document.getElementById("quizArea").innerHTML=`<div class="panel result"><p class="eyebrow">QUIZ KLART</p><h2>${msg}</h2><div class="score">${pct}%</div><p>${quizState.score} av ${quizState.pool.length} rätt.</p><div class="result-actions"><button class="primary" id="retryQuiz">Gör om</button><button class="secondary" data-nav="progress">Se framsteg</button><button class="secondary" data-action="weak">Träna svaga områden</button></div></div>`;
  document.getElementById("retryQuiz").onclick=()=>startQuiz();
}

function updateStreak(){
  const today=todayKey();
  if(state.lastStudy===today)return;
  state.streak=(state.streak||0)+1;state.lastStudy=today;save();
}

function loadFlash(){
  const s=document.getElementById("flashSubject").value, filter=document.getElementById("flashFilter").value;
  flashList=questions.filter(q=>s==="Alla"||q.s===s).filter(q=>{
    const f=state.flash[q.id]||{seen:0,known:0};
    if(filter==="new")return f.seen===0;
    if(filter==="weak")return f.seen>0&&f.known/f.seen<0.7;
    return true;
  });
  flashList=shuffle(flashList);flashIndex=0;renderFlash();
}

function renderFlash(){
  const card=document.getElementById("flashcard");
  card.classList.remove("flipped");
  if(!flashList.length){document.getElementById("flashFront").textContent="Inga kort matchar filtret.";document.getElementById("flashBack").textContent="Välj ett annat filter.";document.getElementById("flashCounter").textContent="0 / 0";return;}
  const q=flashList[flashIndex];
  document.getElementById("flashFront").textContent=q.q;
  document.getElementById("flashBack").textContent=q.e;
  document.getElementById("flashCounter").textContent=`${flashIndex+1} / ${flashList.length}`;
}
function markFlash(known){
  if(!flashList.length)return;
  const q=flashList[flashIndex];state.flash[q.id]??={seen:0,known:0};state.flash[q.id].seen++;if(known)state.flash[q.id].known++;save();
  flashIndex=(flashIndex+1)%flashList.length;renderFlash();
}

function renderVFU(){
  document.getElementById("vfuGrid").innerHTML=vfuItems.map((x,i)=>`<button class="vfu-card" data-i="${i}"><b>${x.icon}</b><h3>${x.title}</h3><p>${x.subtitle}</p></button>`).join("");
}
function showVFU(i){
  const x=vfuItems[i],d=document.getElementById("vfuDetail");d.classList.remove("hidden");
  d.innerHTML=`<p class="eyebrow">${x.title}</p><h3>${x.subtitle}</h3><p>${x.body}</p><div class="tip"><strong>Kom ihåg:</strong> ${x.tip}</div><button class="secondary" id="closeVfu">Stäng</button>`;
  document.getElementById("closeVfu").onclick=()=>d.classList.add("hidden");
  d.scrollIntoView({behavior:"smooth",block:"center"});
}

function renderKnowledge(filter=""){
  const q=filter.toLowerCase();
  const list=knowledge.filter(x=>(x.title+" "+x.cat+" "+x.summary+" "+x.body).toLowerCase().includes(q));
  document.getElementById("knowledgeGrid").innerHTML=list.map((x,i)=>`<article class="knowledge-card"><div class="knowledge-icon">${x.icon}</div><span class="badge">${x.cat}</span><h3>${x.title}</h3><p class="summary">${x.summary}</p><details><summary>Läs mer</summary><p>${x.body}</p></details></article>`).join("")||`<div class="panel empty">Inga träffar. Prova ett annat sökord.</div>`;
}

function renderProgress(){
  const acc=state.answered?Math.round(state.correct/state.answered*100):0;
  document.getElementById("statsGrid").innerHTML=[
    ["Besvarade",state.answered,"Totalt"],
    ["Rätt svar",state.correct,"Totalt"],
    ["Träffsäkerhet",acc+"%","Genomsnitt"],
    ["Streak",state.streak||0,"Studiepass"]
  ].map(x=>`<div class="stat"><strong>${x[1]}</strong><span>${x[0]}</span><small>${x[2]}</small></div>`).join("");
  document.getElementById("progressHint").textContent=state.answered?"Fortsätt där du har lägst träffsäkerhet":"Besvara några frågor för att bygga statistik.";
  document.getElementById("progressSubjects").innerHTML=subjects.map(s=>{
    const x=state.bySubject[s.id]||{a:0,c:0},p=x.a?Math.round(x.c/x.a*100):0;
    return `<div class="subject-progress"><header><span>${s.icon} ${s.name}</span><strong>${x.a?p+"%":"—"} </strong></header><div class="mini-bar"><div style="width:${p}%"></div></div><small>${x.a?x.c+" av "+x.a+" rätt":"Inte tränat ännu"}</small></div>`;
  }).join("");
  document.getElementById("historyList").innerHTML=state.history.length?state.history.map(h=>`<div class="history-row"><span>${h.date}</span><strong>${h.pct}%</strong><span>${h.score}/${h.total} · ${h.subject}</span></div>`).join(""):`<p class="muted">Dina senaste quiz visas här.</p>`;
}

function dailyQuiz(){nav("quiz");document.getElementById("quizSubject").value="Alla";document.getElementById("quizDifficulty").value="Alla";document.getElementById("quizCount").value="10";startQuiz({count:10});}
function recommended(){const weak=getWeakSubject();if(weak){nav("quiz");document.getElementById("quizSubject").value=weak;document.getElementById("quizCount").value="10";startQuiz({subject:weak,count:10})}else dailyQuiz();}
function weakQuiz(){const weak=getWeakSubject();if(weak){nav("quiz");document.getElementById("quizSubject").value=weak;startQuiz({subject:weak,count:10})}else dailyQuiz();}

document.addEventListener("click",e=>{
  const navBtn=e.target.closest("[data-nav]");if(navBtn){e.preventDefault();nav(navBtn.dataset.nav);return;}
  const action=e.target.closest("[data-action]");if(action){e.preventDefault();const a=action.dataset.action;if(a==="daily")dailyQuiz();if(a==="recommended")recommended();if(a==="weak")weakQuiz();return;}
  const sub=e.target.closest(".subject");if(sub){nav("quiz");document.getElementById("quizSubject").value=sub.dataset.subject;return;}
  const v=e.target.closest(".vfu-card");if(v){showVFU(+v.dataset.i);return;}
});

document.getElementById("startQuiz").onclick=()=>startQuiz();
document.getElementById("shuffleFlash").onclick=loadFlash;
document.getElementById("flashSubject").onchange=loadFlash;
document.getElementById("flashFilter").onchange=loadFlash;
document.getElementById("flashcard").onclick=()=>document.getElementById("flashcard").classList.toggle("flipped");
document.getElementById("flashcard").onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();document.getElementById("flashcard").classList.toggle("flipped");}};
document.getElementById("flashYes").onclick=()=>markFlash(true);
document.getElementById("flashNo").onclick=()=>markFlash(false);
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark"));};
document.getElementById("knowledgeSearch").oninput=e=>renderKnowledge(e.target.value);
document.getElementById("search").oninput=e=>{
  const q=e.target.value.trim();
  if(!q)return;
  nav("knowledge");document.getElementById("knowledgeSearch").value=q;renderKnowledge(q);
};
document.getElementById("resetProgress").onclick=()=>{if(confirm("Nollställ all quiz- och flashcardstatistik?")){state={answered:0,correct:0,bySubject:{},flash:{},history:[],streak:0,lastStudy:null};save();renderProgress();renderHome();toast("Framsteg nollställda.");}};

setupSubjects();renderVFU();renderKnowledge();loadFlash();renderProgress();renderHome();
if(localStorage.getItem("dark")==="true")document.body.classList.add("dark");
nav("home");
