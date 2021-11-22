const quizData = [{
    question: 'What your boyfriend?',
    a: 'John',
    b: 'Bob',
    c: 'Thinh HandSome Boy',
    d: 'Doe',
    correctAnswer: 'c'
}, {
    question: 'How old is he?',
    a: '12',
    b: '13',
    c: '20',
    d: '19',
    correctAnswer: 'c'
}, {
    question: 'Are you the type of person?',
    a: 'Beautiful girl',
    b: 'Messy',
    c: 'Lazy',
    d: 'All of them',
    correctAnswer: 'd'
}, {
    question: 'Do you take a bath?',
    a: 'Not too much',
    b: 'Yes, I do',
    c: 'Never',
    d: 'Sometime',
    correctAnswer: 'd'
}, {
    question: 'What is the brand of your laptop?',
    a: 'Lenovo',
    b: 'Hp',
    c: 'Dell',
    d: 'MacBook',
    correctAnswer: 'c'
}]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const buttonSubmit = document.getElementById('buttonSubmit')

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
buttonSubmit.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correctAnswer){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
            
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions. Miss Tú!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


