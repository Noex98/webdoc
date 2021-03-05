
const quizzOverlay = document.getElementById("quizz"); //The quizz wrapper
const questions = document.querySelectorAll(".quizz__quesWrap"); //Wrappers containing the questions
const headline = document.getElementById("header");

//Ends the quizz
function quizzEnd() {
    quizzOverlay.style.display = "none";
    document.body.style.overflowY = "auto";
}

//Called whenever an answer is submitted
function answer(QuestionNumber, yes){
    //Svar til: Er du en del af en virksomhed?
    if (QuestionNumber == 1){
        if (yes == true){
            questions.item(0).style.display = "none";
            questions.item(1).style.display = "block";
        } else {
            questions.item(0).style.display = "none";
            questions.item(2).style.display = "block";
        }
    }
    //Svar til: Vil du gerne have flere kunder i butikken?
    else if (QuestionNumber == 2){
        if (yes == true){
            headline.innerText = `Digital marketing viser vejen til jeres butik`;
            quizzEnd();
        } else {
            questions.item(1).style.display = "none";
            questions.item(2).style.display = "block";
        }
    }
    //Svar til: Vil du gerne lære mere om marketing?
    else if (QuestionNumber == 3){
        if (yes == true){
            headline.innerText = `Digital marketing er kommet for at blive`;
            quizzEnd();
        } else {
            headline.innerText = `Der er ingen vej udenom`;
            quizzEnd();
        }
    }
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