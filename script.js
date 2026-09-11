const subjects=[
 {id:"anatomi",name:"Anatomi & fysiologi",icon:"🫀",desc:"Struktur och funktion"},
 {id:"farmakologi",name:"Farmakologi",icon:"💊",desc:"Läkemedel och biverkningar"},
 {id:"omvardnad",name:"Omvårdnad",icon:"❤️",desc:"Personcentrerad vård"},
 {id:"mikrobiologi",name:"Mikrobiologi",icon:"🦠",desc:"Infektioner och smitta"},
 {id:"akut",name:"Akut omhändertagande",icon:"🚑",desc:"ABCDE och akuta tillstånd"},
 {id:"medicin",name:"Medicinska sjukdomar",icon:"🩺",desc:"Vanliga diagnoser"},
 {id:"lakemedelsberakning",name:"Läkemedelsberäkning",icon:"🧮",desc:"Dos, styrka och infusion"},
 {id:"vfu",name:"VFU & kliniska moment",icon:"🏥",desc:"Praktiska färdigheter"}
];

const questions=[
{id:"a1",s:"anatomi",d:"Grund",q:"Vilket organ ansvarar främst för gasutbytet mellan luft och blod?",o:["Hjärtat","Lungorna","Levern","Njurarna"],a:1,e:"I alveolerna i lungorna sker diffusion av syre till blodet och koldioxid från blodet."},
{id:"a2",s:"anatomi",d:"Medel",q:"Vad är hjärtats normala pacemaker?",o:["AV-noden","His-bunten","Sinusknutan","Purkinjefibrerna"],a:2,e:"Sinusknutan initierar normalt hjärtats elektriska impulser och bestämmer grundrytmen."},
{id:"a3",s:"anatomi",d:"Medel",q:"Vilket hormon ökar återupptaget av vatten i njurarnas samlingsrör?",o:["Insulin","ADH","TSH","Kortisol"],a:1,e:"ADH ökar vattenpermeabiliteten i samlingsrören och bidrar till att koncentrera urinen."},
{id:"f1",s:"farmakologi",d:"Grund",q:"Vilken effekt har en betablockerare typiskt på hjärtat?",o:["Ökad hjärtfrekvens","Minskad hjärtfrekvens","Ökad blodglukosfrisättning","Ökad salivproduktion"],a:1,e:"Betablockad minskar bland annat hjärtfrekvens och kontraktilitet, beroende på preparat och dos."},
{id:"f2",s:"farmakologi",d:"Medel",q:"Vilket läkemedel är en antikoagulantia av typen DOAK?",o:["Apixaban","Paracetamol","Omeprazol","Amoxicillin"],a:0,e:"Apixaban är en direkt faktor Xa-hämmare och tillhör gruppen DOAK."},
{id:"f3",s:"farmakologi",d:"Grund",q:"Vilken vanlig biverkning är särskilt viktig att uppmärksamma vid opioidbehandling?",o:["Förstoppning","Ökad hörsel","Ökad urinproduktion","Hyperaktivitet"],a:0,e:"Opioider kan ge förstoppning, illamående och sedering. Andningsdepression är en allvarlig risk."},
{id:"o1",s:"omvardnad",d:"Grund",q:"Vad är huvudsyftet med personcentrerad vård?",o:["Att alla patienter får exakt samma vård","Att utgå från patientens behov, resurser och önskemål","Att minska dokumentationen","Att enbart följa medicinska ordinationer"],a:1,e:"Personcentrerad vård innebär att patienten ses som en person och aktiv partner i vården."},
{id:"o2",s:"omvardnad",d:"Medel",q:"Vilken del av omvårdnadsprocessen innebär att formulera mål och välja åtgärder?",o:["Datainsamling","Planering","Utvärdering","Observation"],a:1,e:"Efter bedömning och identifierade problem planeras mål och omvårdnadsåtgärder."},
{id:"m1",s:"mikrobiologi",d:"Grund",q:"Vad innebär handdesinfektion främst?",o:["Att sterilisera huden","Att minska mängden mikroorganismer på händerna","Att ta bort all hudflora permanent","Att ersätta handtvätt i alla situationer"],a:1,e:"Handdesinfektion minskar mängden mikroorganismer och är en central åtgärd för att förebygga smittspridning."},
{id:"m2",s:"mikrobiologi",d:"Medel",q:"Vad betyder ESBL i kliniskt sammanhang?",o:["En typ av virus","En mekanism som kan ge bakterier resistens mot flera betalaktamantibiotika","En svampinfektion","Ett vaccin"],a:1,e:"ESBL är enzymer som bryter ned flera betalaktamantibiotika och kan medföra antibiotikaresistens."},
{id:"ak1",s:"akut",d:"Grund",q:"Vilken bokstav i ABCDE står för Airway?",o:["A","B","C","D"],a:0,e:"A står för Airway – bedömning av fri luftväg. Därefter följer Breathing, Circulation, Disability och Exposure."},
{id:"ak2",s:"akut",d:"Medel",q:"Vad bör prioriteras vid en akut försämring enligt ABCDE?",o:["Att dokumentera först","Att behandla livshotande problem när de upptäcks","Att ta en fullständig anamnes innan åtgärd","Att vänta på rond"],a:1,e:"ABCDE bygger på systematisk bedömning och att livshotande problem åtgärdas direkt när de identifieras."},
{id:"med1",s:"medicin",d:"Grund",q:"Vilket prov används ofta som biomarkör vid misstänkt hjärtinfarkt?",o:["Troponin","CRP","Ferritin","TSH"],a:0,e:"Troponin är en viktig biomarkör för myokardskada och används tillsammans med klinik och EKG."},
{id:"med2",s:"medicin",d:"Medel",q:"Vilket symtom är typiskt vid hjärtsvikt?",o:["Dyspné","Ökad synskärpa","Hyperaktivitet","Minskad trötthet"],a:0,e:"Dyspné, trötthet och perifera ödem är vanliga symtom vid hjärtsvikt."},
{id:"lb1",s:"lakemedelsberakning",d:"Grund",q:"Ordinationen är 500 mg och tabletterna innehåller 250 mg. Hur många tabletter ges?",o:["0,5","1","2","4"],a:2,e:"Antal tabletter = ordinerad dos / styrka = 500 / 250 = 2 tabletter."},
{id:"lb2",s:"lakemedelsberakning",d:"Medel",q:"En infusion på 1000 mL ska gå på 8 timmar. Vilken ungefärlig infusionshastighet blir det i mL/h?",o:["80","100","125","160"],a:2,e:"1000 mL / 8 h = 125 mL/h."},
{id:"v1",s:"vfu",d:"Grund",q:"Vad används SBAR främst till?",o:["Läkemedelsberäkning","Strukturerad kommunikation","Sterilisering","Provtagning"],a:1,e:"SBAR strukturerar kommunikationen genom Situation, Bakgrund, Aktuellt tillstånd och Rekommendation."},
{id:"v2",s:"vfu",d:"Medel",q:"Vad är viktigt före administrering av ett läkemedel?",o:["Kontrollera ordination och patientidentitet","Hoppa över signering","Ge läkemedlet utan att kontrollera allergier","Dokumentera innan läkemedlet ges"],a:0,e:"Säker läkemedelshantering kräver bland annat kontroll av ordination, identitet, läkemedel, dos, tid och relevanta risker."}
];

const vfuItems=[
["SBAR","🗣️","Strukturerad rapport","Situation → Bakgrund → Aktuellt → Rekommendation."],
["ABCDE","🚑","Akut bedömning","A luftväg, B andning, C cirkulation, D medvetande/neurologi, E exponering."],
["PVK","💉","Perifer venkateter","Kontrollera indikation, identitet, hygien, insticksställe och funktion enligt lokala rutiner."],
["NEWS2","📊","Vitalparametrar","Systematisk bedömning av bland annat andning, saturation, blodtryck, puls, medvetande och temperatur."],
["KAD","🧴","Urinkateter","Aseptisk teknik och tydlig indikation är centralt. Följ lokala riktlinjer."],
["Läkemedel","💊","Säker administrering","Kontrollera ordination, patient, läkemedel, dos, tid, administreringssätt och dokumentation."]
];

let state=JSON.parse(localStorage.getItem("sjukskoterskeplugget"))||{answered:0,correct:0,bySubject:{},streak:0};
let quizState=null, flashList=[], flashIndex=0;

function save(){localStorage.setItem("sjukskoterskeplugget",JSON.stringify(state))}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1800)}
function subjectName(id){return subjects.find(x=>x.id===id)?.name||id}
function nav(id){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));document.querySelectorAll("[data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===id));window.scrollTo({top:0,behavior:"smooth"});if(id==="progress")renderProgress();if(id==="quiz")resetQuizSetup()}
function setupSubjects(){
 const grid=document.getElementById("subjectGrid");
 grid.innerHTML=subjects.map(s=>`<button class="subject" data-subject="${s.id}"><b>${s.icon}</b><strong>${s.name}</strong><small>${s.desc}</small></button>`).join("");
 ["quizSubject","flashSubject"].forEach(id=>{
  const el=document.getElementById(id);el.innerHTML='<option value="Alla">Alla ämnen</option>'+subjects.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
 });
 grid.querySelectorAll(".subject").forEach(b=>b.onclick=()=>{nav("quiz");document.getElementById("quizSubject").value=b.dataset.subject});
}
function resetQuizSetup(){document.getElementById("quizSetup").classList.remove("hidden");document.getElementById("quizArea").classList.add("hidden")}
function startQuiz(){
 const s=document.getElementById("quizSubject").value,d=document.getElementById("quizDifficulty").value,n=+document.getElementById("quizCount").value;
 let pool=questions.filter(q=>(s==="Alla"||q.s===s)&&(d==="Alla"||q.d===d));
 pool.sort(()=>Math.random()-.5);pool=pool.slice(0,n);
 if(!pool.length){toast("Inga frågor matchar valet.");return}
 quizState={pool,index:0,score:0,answered:false};
 document.getElementById("quizSetup").classList.add("hidden");document.getElementById("quizArea").classList.remove("hidden");renderQuestion();
}
function renderQuestion(){
 const q=quizState.pool[quizState.index],pct=Math.round((quizState.index/quizState.pool.length)*100);
 document.getElementById("quizArea").innerHTML=`<div class="quiz-top"><span>Fråga ${quizState.index+1} av ${quizState.pool.length}</span><strong>${quizState.score} rätt</strong></div><div class="progressbar"><div style="width:${pct}%"></div></div><div class="question-card"><span class="eyebrow">${subjectName(q.s)} • ${q.d}</span><h3>${q.q}</h3><div class="options">${q.o.map((x,i)=>`<button class="option" data-i="${i}">${String.fromCharCode(65+i)}. ${x}</button>`).join("")}</div><div id="explanation"></div><div class="quiz-bottom"><span id="feedback"></span><button id="nextQ" class="primary hidden">${quizState.index===quizState.pool.length-1?"Visa resultat":"Nästa fråga"} →</button></div></div>`;
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
 if(quizState.answered)return;quizState.answered=true;
 const q=quizState.pool[quizState.index],correct=i===q.a;
 if(correct)quizState.score++;
 state.answered++;state.correct+=correct?1:0;state.bySubject[q.s]??={a:0,c:0};state.bySubject[q.s].a++;if(correct)state.bySubject[q.s].c++;save();
 document.querySelectorAll(".option").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("correct");if(j===i&&!correct)b.classList.add("wrong")});
 document.getElementById("feedback").textContent=correct?"✓ Rätt!":"✕ Inte riktigt.";
 document.getElementById("explanation").innerHTML=`<div class="explanation"><strong>Förklaring:</strong> ${q.e}</div>`;
 document.getElementById("nextQ").classList.remove("hidden");document.getElementById("nextQ").onclick=nextQuestion;
}
function nextQuestion(){if(quizState.index<quizState.pool.length-1){quizState.index++;quizState.answered=false;renderQuestion()}else showResult()}
function showResult(){const pct=Math.round(quizState.score/quizState.pool.length*100);document.getElementById("quizArea").innerHTML=`<div class="panel result"><p class="eyebrow">QUIZ KLART</p><h2>Bra jobbat!</h2><div class="score">${pct}%</div><p>${quizState.score} av ${quizState.pool.length} rätt.</p><button class="primary" onclick="startQuiz()">Gör om quiz</button> <button class="secondary" onclick="nav('progress')">Se framsteg</button></div>`}
function loadFlash(){const s=document.getElementById("flashSubject").value;flashList=questions.filter(q=>s==="Alla"||q.s===s).map(q=>({f:q.q,b:q.e}));flashList.sort(()=>Math.random()-.5);flashIndex=0;renderFlash()}
function renderFlash(){if(!flashList.length)return;const q=flashList[flashIndex];const card=document.getElementById("flashcard");card.classList.remove("flipped");document.getElementById("flashFront").textContent=q.f;document.getElementById("flashBack").textContent=q.b;document.getElementById("flashCounter").textContent=`${flashIndex+1} / ${flashList.length}`}
function vfu(){
 document.getElementById("vfuGrid").innerHTML=vfuItems.map((x,i)=>`<button class="vfu-card" data-i="${i}"><b>${x[1]}</b><h3>${x[0]}</h3><p>${x[2]}</p></button>`).join("");
 document.querySelectorAll(".vfu-card").forEach(b=>b.onclick=()=>{const x=vfuItems[+b.dataset.i];const d=document.getElementById("vfuDetail");d.classList.remove("hidden");d.innerHTML=`<p class="eyebrow">${x[0]}</p><h3>${x[2]}</h3><p>${x[3]}</p><button class="secondary" onclick="document.getElementById('vfuDetail').classList.add('hidden')">Stäng</button>`;d.scrollIntoView({behavior:"smooth",block:"center"})});
}
function renderProgress(){
 const acc=state.answered?Math.round(state.correct/state.answered*100):0;
 document.getElementById("statsGrid").innerHTML=[["Besvarade",state.answered],["Rätt svar",state.correct],["Träffsäkerhet",acc+"%"],["Streak",state.streak]].map(x=>`<div class="stat"><strong>${x[1]}</strong><span>${x[0]}</span></div>`).join("");
 document.getElementById("progressSubjects").innerHTML=subjects.map(s=>{const x=state.bySubject[s.id]||{a:0,c:0};const p=x.a?Math.round(x.c/x.a*100):0;return `<div class="subject-progress"><header><span>${s.icon} ${s.name}</span><strong>${p}%</strong></header><div class="mini-bar"><div style="width:${p}%"></div></div></div>`}).join("");
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-nav]");
  if(!b)return;
  e.preventDefault();
  nav(b.dataset.nav);
});
document.getElementById("startQuiz").onclick=startQuiz;
document.getElementById("flashSubject").onchange=loadFlash;
document.getElementById("shuffleFlash").onclick=loadFlash;
document.getElementById("flashcard").onclick=()=>document.getElementById("flashcard").classList.toggle("flipped");
document.getElementById("nextFlash").onclick=()=>{flashIndex=(flashIndex+1)%flashList.length;renderFlash()};
document.getElementById("prevFlash").onclick=()=>{flashIndex=(flashIndex-1+flashList.length)%flashList.length;renderFlash()};
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark"))};
document.getElementById("resetProgress").onclick=()=>{if(confirm("Nollställ all quizstatistik?")){state={answered:0,correct:0,bySubject:{},streak:0};save();renderProgress();toast("Framsteg nollställda.")}};
document.getElementById("search").oninput=e=>{const q=e.target.value.trim().toLowerCase();document.querySelectorAll(".subject,.vfu-card").forEach(x=>x.classList.toggle("search-hit",q && x.textContent.toLowerCase().includes(q)))};
if(localStorage.getItem("dark")==="true")document.body.classList.add("dark");
setupSubjects();vfu();loadFlash();renderProgress();nav("home");