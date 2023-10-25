const questions = [
    {
        question: "Which is larget animal in the world?",
        answer:[
            {text:"Shark", correct:false},
            {text:"Blue wale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false}
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answer:[
            {text:"Vatican city", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Shri Lanka", correct:false}
        ]
    },
    {
        question: "Which is larget desert in the world?",
        answer:[
            {text:"Kalhari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antarctica", correct:true}
        ]
    },
    {
        question: "Which is smallest continenet in the world?",
        answer:[
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false}
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answer:[
            {text:"Shark", correct:false},
            {text:"Blue wale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false}
        ]
    }
]


const questionEle = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex+1;
   questionEle.textContent = questionNo + ". " + currentQuestion.question;

   currentQuestion.answer.forEach(answer => {
    const button = document.createElement('button')
    button.textContent = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);

   })
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true'
  if(isCorrect){
    selectedBtn.classList.add('correct')
    score++;
  }else{
    selectedBtn.classList.add('incorrect')
  }
  Array.from(answerBtn.children)
   .forEach(button => {
     if(button.dataset.correct === 'true'){
        button.classList.add('correct')
     }
     button.disabled = true
   })

   nextBtn.style.display = 'block';
}


function showScore(){
     resetState()
     questionEle.textContent = `You scored ${score} out of ${questions.length}!`;
     
     nextBtn.textContent = 'Retake'
     nextBtn.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click' ,() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();