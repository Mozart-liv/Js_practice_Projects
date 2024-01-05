const question = [
    {
        question : "Who invented law of gravity?",
        answers : [
            {text:"Thomas Edison", correct:false},
            {text:"Graham Bell", correct:false},
            {text:"Archimedes", correct:false},
            {text:"Newton", correct:true},
        ]
    },
    {
        question : "Who invented Dynamite?",
        answers : [
            {text:"Thomas Edison", correct:false},
            {text:"Graham Bell", correct:false},
            {text:"Alfred Nobel", correct:true},
            {text:"Dmitri Mendeleev", correct:false},
        ]
    },
    {
        question : "Who is Pianist?",
        answers : [
            {text:"William Shakespeare", correct:false},
            {text:"Frédéric Chopin", correct:true},
            {text:"Socrates", correct:false},
            {text:"george washington", correct:false},
        ]
    },
    {
        question : "Who is father of Communism?",
        answers : [
            {text:"Adolf Hitler", correct:false},
            {text:"John Locke", correct:false},
            {text:"Socrates", correct:false},
            {text:"Karl Marx", correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextBtn = document.getElementById("next-button")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.append(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    };
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++ ;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNext(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNext();
    }else{
        startQuiz();
    }
});

startQuiz();

