const questions = [
  {q:"Vilket prov är mest förknippat med hjärtsvikt?", a:["Troponin","NT-proBNP","D-dimer","CRP"], c:1, e:"NT-proBNP används som stöd vid diagnostik och uppföljning av hjärtsvikt."},
  {q:"Vilken åtgärd är viktigast först vid en akut försämrad patient med andningspåverkan?", a:["Dokumentera","Bedöma ABCDE","Ge mat","Ta vikt"], c:1, e:"ABCDE ger en strukturerad första bedömning av potentiellt livshotande tillstånd."},
  {q:"Vilket läkemedel tillhör gruppen DOAK?", a:["Warfarin","Apixaban","Enalapril","Metoprolol"], c:1, e:"Apixaban är en direktverkande oral antikoagulantia (DOAK)."}
];
let qIndex=0;

function renderQuestion(){
  const q=questions[qIndex];
  document.getElementById("questionText").textContent=q.q;
  document.getElementById("answers").innerHTML=q.a.map((x,i)=>`<button data-index="${i}">${String.fromCharCode(65+i)}&nbsp;&nbsp; ${x}</button>`).join("");
  document.getElementById("quizResult").classList.add("hidden");
  document.querySelectorAll("#answers button").forEach(btn=>btn.addEventListener("click",answer));
}
function answer(e){
  const btn=e.currentTarget, q=questions[qIndex], chosen=Number(btn.dataset.index);
  document.querySelectorAll("#answers button").forEach(b=>b.disabled=true);
  if(chosen===q.c){btn.classList.add("correct"); showResult("✓ Rätt svar! "+q.e)}
  else {btn.classList.add("wrong"); document.querySelectorAll("#answers button")[q.c].classList.add("correct"); showResult("Inte riktigt. "+q.e)}
}
function showResult(t){const el=document.getElementById("quizResult");el.textContent=t;el.classList.remove("hidden")}
document.getElementById("nextQuestion").addEventListener("click",()=>{qIndex=(qIndex+1)%questions.length;renderQuestion()});

const modal=document.getElementById("modal");
function openModal(title,body){document.getElementById("modalTitle").textContent=title;document.getElementById("modalBody").innerHTML=body;modal.classList.remove("hidden")}
document.getElementById("closeModal").onclick=()=>modal.classList.add("hidden");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});

document.querySelectorAll(".subject").forEach(b=>b.addEventListener("click",()=>{
  const s=b.dataset.subject;
  openModal(s,`<p>Här kan du bygga ett eget studieområde för <strong>${s}</strong>.</p><ul><li>Sammanfattningar</li><li>Flashcards</li><li>Tentafrågor</li><li>Snabba repetitionstest</li></ul><p><em>Detta är en första prototyp – innehållet kan fyllas på med dina kursmoment.</em></p>`)
}));
document.getElementById("skillsMore").onclick=()=>openModal("Praktiska moment","<p>Välj ett moment för att få en checklista med förberedelser, genomförande, observationer och dokumentation.</p><ul><li>PVK</li><li>KAD</li><li>Venprovtagning</li><li>Blodtransfusion</li><li>Infusion</li><li>NEWS2</li><li>SBAR</li></ul>");
document.getElementById("vfuExample").onclick=()=>openModal("VFU – patientfall","<p><strong>Situation:</strong> Patient med tilltagande andningspåverkan.</p><p><strong>Bedömning:</strong> Kontrollera vitalparametrar och genomför strukturerad ABCDE-bedömning.</p><p><strong>Plan:</strong> Identifiera omvårdnadsbehov, formulera mål och planera åtgärder. Dokumentera och utvärdera effekten.</p><p><strong>Kommunikation:</strong> Använd SBAR vid rapportering.</p>");
document.getElementById("diseaseMore").onclick=()=>openModal("Sjukdomsdatabas","<p>En framtida version kan innehålla hundratals diagnoser med samma tydliga struktur:</p><ul><li>Definition och patofysiologi</li><li>Symtom och diagnostik</li><li>Behandling</li><li>Omvårdnad</li><li>Viktiga prover och observationer</li><li>Tentafrågor</li></ul>");

document.querySelectorAll(".disease-chips button").forEach(b=>b.addEventListener("click",()=>{
  openModal(b.textContent,`<p><strong>${b.textContent}</strong> kan få en egen studiesida med definition, symtom, diagnostik, behandling och omvårdnad.</p><p>Innehållet bör kopplas till aktuella och kvalitetssäkrade källor innan publicering.</p>`)
}));

document.getElementById("searchInput").addEventListener("input",e=>{
  const term=e.target.value.toLowerCase().trim();
  document.querySelectorAll(".subject,.panel,.section-heading").forEach(el=>{
    if(!term){el.style.display="";return}
    el.style.display=el.textContent.toLowerCase().includes(term)?"":"none";
  });
});
renderQuestion();
