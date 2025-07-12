const questions = [
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"SriLanka", correct:false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antartica", correct:true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text:"Australia", correct:true},
            {text:"Asia", correct:false},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuesIndex = 0;
let score = 0;

function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",() =>{
    if(currentQuesIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
startQuiz();