const subjects=[
["anatomy","🫀","Anatomi & fysiologi","Struktur, funktion och kroppens system",["Hjärtat","Cirkulation","Andning","Njurar","Endokrinologi"]],
["pharm","💊","Farmakologi","Läkemedel och biverkningar",["Farmakokinetik","Farmakodynamik","Antikoagulantia","Antibiotika","Smärtläkemedel"]],
["omv","🩹","Omvårdnad","Personcentrerad och säker vård",["Omvårdnadsprocessen","VIPS","ICNP","Smärta","Nutrition"]],
["infection","🦠","Infektion","Mikrobiologi och smittspridning",["Basala hygienrutiner","ESBL","MRSA","Sepsis","Resistens"]],
["acute","🚑","Akutsjukvård","ABCDE och klinisk försämring",["ABCDE","NEWS2","Chock","Hjärtinfarkt","Lungemboli"]],
["research","📚","Forskningsmetodik","Vetenskapligt tänkande och evidens",["Kvalitativ metod","Kvantitativ metod","Databassökning","Etik","APA 7"]]];
const qs=[
["anatomy","Vilken kammare pumpar blodet ut i aorta?",["Höger förmak","Höger kammare","Vänster förmak","Vänster kammare"],3,"Vänster kammare pumpar blodet genom aorta till systemkretsloppet."],
["anatomy","Var sker det mesta gasutbytet?",["Trakea","Bronker","Alveoler","Pleura"],2,"Gasutbytet sker över det alveol-kapillära membranet."],
["pharm","Vad beskriver farmakokinetik?",["Vad läkemedlet gör med kroppen","Vad kroppen gör med läkemedlet","Patientens diagnos","Läkemedlets färg"],1,"Farmakokinetik omfattar absorption, distribution, metabolism och exkretion."],
["pharm","Vilken läkemedelsgrupp minskar koagulation?",["Antikoagulantia","Antacida","Antihistaminer","Bronkdilaterare"],0,"Antikoagulantia hämmar delar av koagulationsprocessen."],
["omv","Vad är centralt i personcentrerad vård?",["Samma vård till alla","Patientens berättelse och mål integreras","Endast läkaren beslutar","Dokumentation ersätter samtal"],1,"Personcentrerad vård utgår från personen, hens behov, resurser och mål."],
["omv","Vilket är ett omvårdnadsmål?",["Patienten ska känna mindre smärta inom 30 minuter","Ge paracetamol","Ta vitalparametrar","Dokumentera"],0,"Ett mål beskriver önskat patientresultat och bör vara så konkret och mätbart som möjligt."],
["infection","Vad är huvudsyftet med basala hygienrutiner?",["Sänka blodtryck","Förebygga smittspridning","Öka aptit","Minska läkemedel"],1,"Basala hygienrutiner är centrala för att förebygga smittspridning."],
["infection","Vad är ESBL?",["Virus","Enzym som kan ge resistens mot flera betalaktamer","Blodgrupp","Svamp"],1,"ESBL-enzymer kan bryta ner flera betalaktamantibiotika."],
["acute","Vilken bokstav kommer först i ABCDE?",["Breathing","Airway","Circulation","Disability"],1,"A står för Airway – bedöm fri luftväg."],
["acute","Vad är NEWS2 främst till för?",["Diagnostisera diabetes","Upptäcka klinisk försämring","Beräkna BMI","Bestämma blodgrupp"],1,"NEWS2 används för att strukturera bedömning av vitalparametrar och upptäcka försämring."]
];
const flashcards=[
["Vad står ABCDE för?","Airway, Breathing, Circulation, Disability, Exposure."],
["Vad står SBAR för?","Situation, Bakgrund, Aktuellt tillstånd, Rekommendation."],
["Vad är GFR?","Glomerulär filtrationshastighet – ett mått på njurarnas filtrationsförmåga."],
["Vad mäter troponin?","Hjärtmarkör som kan stiga vid myokardskada."],
["Vad är farmakokinetik?","Vad kroppen gör med läkemedlet: absorption, distribution, metabolism och exkretion."],
["Vad är NEWS2?","Ett poängsystem som hjälper till att identifiera akut sjukdom eller klinisk försämring."]
];
const vfuText={
"ABCDE":"ABCDE ger en systematisk prioritering: Airway, Breathing, Circulation, Disability och Exposure. Åtgärda livshotande problem innan du går vidare.",
"NEWS2":"NEWS2 bygger på bland annat andningsfrekvens, saturation, syrgasbehov, blodtryck, puls, medvetandegrad och temperatur. Följ lokala rutiner.",
"SBAR":"SBAR strukturerar rapportering: Situation – Bakgrund – Aktuellt tillstånd – Rekommendation. Var konkret och avsluta med vad du behöver eller föreslår.",
"PVK":"Vid PVK: identifiera patienten, informera, handdesinfektion och aseptisk teknik enligt lokal rutin. Kontrollera funktion och insticksställe regelbundet.",
"Läkemedel":"Säker läkemedelshantering kräver rätt patient, läkemedel, styrka/dos, administreringsväg och tid samt kontroll av ordination och dokumentation enligt lokala rutiner.",
"Patientfall":"Öva kliniskt tänkande: samla data, identifiera problem, prioritera risker, genomför åtgärder och utvärdera effekten."
};
function card(s){return `<article class="subject" data-sub="${s[0]}"><div style="font-size:28px">${s[1]}</div><h3>${s[2]}</h3><p>${s[3]}</p></article>`}
document.getElementById("homeSubjects").innerHTML=subjects.slice(0,6).map(card).join("");
document.getElementById("allSubjects").innerHTML=subjects.map(card).join("");
document.querySelectorAll(".subject").forEach(x=>x.onclick=()=>showSubject(x.dataset.sub));
function showSubject(id){let s=subjects.find(x=>x[0]===id),d=document.getElementById("detail");d.classList.remove("hidden");d.innerHTML=`<h2>${s[1]} ${s[2]}</h2><p>${s[3]}</p><h3>Delområden</h3><div class="chips">${s[4].map(x=>`<button>${x}</button>`).join("")}</div>`;d.scrollIntoView({behavior:"smooth",block:"center"})}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>location.hash=b.dataset.go.substring(1));
document.getElementById("daily").onclick=()=>document.getElementById("answer").classList.toggle("hidden");

let qset=[],qi=0,score=0,answered=0,stats=JSON.parse(localStorage.getItem("spstats")||'{"done":0,"answered":0,"correct":0}');
function startQuiz(){let cat=document.getElementById("select").value;qset=qs.filter(q=>cat==="all"||q[0]===cat).sort(()=>Math.random()-.5);qi=0;score=0;renderQ()}
function renderQ(){if(qi>=qset.length){stats.done++;localStorage.setItem("spstats",JSON.stringify(stats));document.getElementById("quizbody").innerHTML=`<h2>Quiz klart 🎉</h2><p>Du fick <b>${score} av ${qset.length}</b> rätt.</p><button class="primary" id="again">Gör om quiz</button>`;document.getElementById("again").onclick=startQuiz;updateProgress();return}
let q=qset[qi];document.getElementById("cat").textContent=(subjects.find(s=>s[0]===q[0])||["","","Blandat"])[2];document.getElementById("count").textContent=`Fråga ${qi+1} / ${qset.length}`;
document.getElementById("quizbody").innerHTML=`<h2>${q[1]}</h2>${q[2].map((o,i)=>`<button class="option" data-i="${i}">${o}</button>`).join("")}<div id="feedback"></div>`;
document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){let q=qset[qi];if(document.querySelector(".option.correct"))return;document.querySelectorAll(".option").forEach((b,n)=>{if(n===q[3])b.classList.add("correct");if(n===i&&i!==q[3])b.classList.add("wrong")});if(i===q[3])score++;stats.answered++;if(i===q[3])stats.correct++;document.getElementById("feedback").innerHTML=`<div class="feedback"><b>${i===q[3]?"Rätt!":"Inte riktigt."}</b><br>${q[4]}<br><button id="nextq" class="primary">Nästa →</button></div>`;document.getElementById("nextq").onclick=()=>{qi++;renderQ()};updateProgress()}
document.getElementById("newquiz").onclick=startQuiz;document.getElementById("select").onchange=startQuiz;

let fi=0;function renderF(){let f=flashcards[fi];document.getElementById("fq").textContent=f[0];document.getElementById("fa").textContent=f[1];document.getElementById("fcount").textContent=`${fi+1} / ${flashcards.length}`;document.getElementById("flash").classList.remove("flipped")}
document.getElementById("flash").onclick=()=>document.getElementById("flash").classList.toggle("flipped");
document.getElementById("prev").onclick=()=>{fi=(fi-1+flashcards.length)%flashcards.length;renderF()};document.getElementById("next").onclick=()=>{fi=(fi+1)%flashcards.length;renderF()};

document.querySelectorAll("[data-vfu]").forEach(a=>a.onclick=()=>{let d=document.getElementById("vfudetail");d.classList.remove("hidden");d.innerHTML=`<h2>${a.dataset.vfu}</h2><p>${vfuText[a.dataset.vfu]}</p>`;d.scrollIntoView({behavior:"smooth",block:"center"})});
document.getElementById("theme").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark"))};
if(localStorage.getItem("dark")==="true")document.body.classList.add("dark");

function updateProgress(){document.getElementById("done").textContent=stats.done;document.getElementById("answered").textContent=stats.answered;document.getElementById("accuracy").textContent=stats.answered?Math.round(stats.correct/stats.answered*100)+" %":"0 %";document.getElementById("last").textContent=stats.answered?Math.round(stats.correct/stats.answered*100)+" %":"–";
document.getElementById("bars").innerHTML=subjects.slice(0,5).map((s,i)=>`<div class="barrow"><div><b>${s[2]}</b><span>${[81,72,89,76,68][i]} %</span></div><div class="bar"><i style="width:${[81,72,89,76,68][i]}%"></i></div></div>`).join("")}
document.getElementById("search").oninput=e=>{let q=e.target.value.toLowerCase();document.querySelectorAll(".subject,article").forEach(x=>x.style.display=(!q||x.textContent.toLowerCase().includes(q))?"":"none")};
renderF();startQuiz();updateProgress();
