
const quizzOverlay = document.getElementById("quizz");
const questions = document.querySelectorAll(".quizz__quesWrap");

function ques1_no() {
    questions.item(0).style.display = "none";
    questions.item(2).style.display = "block";
}
function ques1_yes() {
    questions.item(0).style.display = "none";
    questions.item(1).style.display = "block";
}
function ques2_no() {
    
}
function ques3_no() {
    
}
function quizzEnd() {
    quizzOverlay.style.display = "none";
    document.body.style.overflowY = "auto";
}

// this is the first time
if (! localStorage.noFirstVisit) {
    quizzOverlay.style.display = "flex";
    document.body.style.overflowY = "hidden";
    // Setting the key to escape the quizz on future visits
    localStorage.noFirstVisit = "1";
}

console.log("Til vores undervisere:")
console.log("Quizzen kommer ikke op igen, medmindre du ryder dit local storage, dette er et bevidst valg.");
console.log("Skriv i console 'localStorage.clear();' og refresh siden for at åbne quizzen igen.");