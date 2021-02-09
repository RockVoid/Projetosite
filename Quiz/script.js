const quizData = [
    {
        question: "How old are Roque?",
        a: "19",
        b: "20",
        c: "18",
        d: "21",
        correct: "a",
    },
    {
        question: "Who is the President of US?",
        a: "Jonathan Krantz",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Jair Messias",
        correct: "b",
    },
    {
        question: "What does HTTP stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Hypertext Tranfer Protocol",
        correct: "d",
    },
    {
        question: "Who is the president of Brazil?",
        a: "Bonossauro",
        b: "Bolsoaro",
        c: "Bolssonaro",
        d: "Bubassauro",
        correct: "c",
    },
    {
        question: "Programming is fun?",
        a: "Nan",
        b: "Kinda",
        c: "Sure",
        d: "Never",
        correct: "c",
    },
    {
        question: "What year was launched Youtube?",
        a: "2004",
        b: "2003",
        c: "2010",
        d: "2005",
        correct: "d",
    }
];


const $quiz = document.getElementById("quiz");
const $answers = document.querySelectorAll(".answer");
const $question = document.getElementById("question");
const $text_a = document.getElementById("text_a");
const $text_b = document.getElementById("text_b");
const $text_c = document.getElementById("text_c");
const $text_d = document.getElementById("text_d");
const $submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    $question.innerText = currentQuizData.question;
    $text_a.innerText = currentQuizData.a;
    $text_b.innerText = currentQuizData.b;
    $text_c.innerText = currentQuizData.c;
    $text_d.innerText = currentQuizData.d;
}

const getSelected = () => {
    let answer = undefined;

    $answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

const deselectAnswers = () => {
    $answers.forEach((answerEl => {
        answerEl.checked = false;
    }))
}

$submit.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Congrats, you answered correctly ${score} of ${quizData.length} questions!</h2>

                <button class="btn reload" onclick="location.reload()">
                    Reload
                </button>
            `;
        }
    }
});

loadQuiz();