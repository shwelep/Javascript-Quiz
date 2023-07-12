const quizData = [
    {
        question: "What is the correct syntax for a JavaScript comment?",
        a: "// This is a comment",
        b: "/* This is a comment */",
        c: "<!-- This is a comment -->",
        d: "## This is a comment",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a valid HTML tag?",
        a: "<section>",
        b: "<article>",
        c: "<block>",
        d: "<header>",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Science System",
        c: "Cascading Scripting System",
        d: "Creative Style Sheets",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        a: "string",
        b: "number",
        c: "boolean",
        d: "list",
        correct: "d"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        a: "The current function",
        b: "The global object",
        c: "The object that the function is a method of",
        d: "The parent object of the current object",
        correct: "c"
    },
    {
        question: "Which of the following is NOT a CSS positioning property?",
        a: "absolute",
        b: "relative",
        c: "fixed",
        d: "expand",
        correct: "d"
    },
    {
        question: "What does the HTML 'img' tag do?",
        a: "Defines a clickable button",
        b: "Defines an image",
        c: "Defines a paragraph",
        d: "Defines a link",
        correct: "b"
    },
    {
        question: "Which of the following is NOT a JavaScript comparison operator?",
        a: "==",
        b: ">=",
        c: "<>",
        d: "===",
        correct: "c"
    },
    {
        question: "Which of the following is NOT a CSS box model property?",
        a: "padding",
        b: "margin",
        c: "border",
        d: "display",
        correct: "d"
    },
    {
        question: "What does the 'new' keyword do in JavaScript?",
        a: "Creates a new object",
        b: "Defines a new function",
        c: "Creates a new variable",
        d: "Defines a new class",
        correct: "a"
    }
];


const quiz = document.getElementById('quiz')
const answerElement = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit-btn')

let currentQuiz = 0
let score= 0

loadQuiz()

function loadQuiz(){
    deselectAns()
    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAns(){
    answerElement.forEach(answerElement  => answerElement.checked = false)
}

function getSelected(){
    let answer 
    answerElement.forEach(answerElement=> {
        if (answerElement.checked){
            answer = answerElement.id
        }
    }) 
    return answer
}


submit.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        } 

        currentQuiz++

         if (currentQuiz< quizData.length){
            loadQuiz()
         } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
        
         }
    }
})