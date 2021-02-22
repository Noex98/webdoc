
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

//If scrollposition is not 0 at load, dont show the quizz
window.pageYOffset !== 0 ? quizzEnd() : console.log("Dont show quizz");