const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Arctic', correct: false },
            { text: 'Africa', correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Paris', correct: true }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Leo Tolstoy', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Nitrogen', correct: false },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: "What is 7 x 8?",
        answers: [
            { text: '54', correct: false },
            { text: '56', correct: true },
            { text: '64', correct: false },
            { text: '48', correct: false }
        ]
    },

    
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Arctic', correct: false },
            { text: 'Africa', correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Paris', correct: true }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Leo Tolstoy', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Nitrogen', correct: false },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: "What is 7 x 8?",
        answers: [
            { text: '54', correct: false },
            { text: '56', correct: true },
            { text: '64', correct: false },
            { text: '48', correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: '100°C', correct: true },
            { text: '90°C', correct: false },
            { text: '80°C', correct: false },
            { text: '110°C', correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: 'Osmium', correct: false },
            { text: 'Oxygen', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Silver', correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Iron', correct: false },
            { text: 'Quartz', correct: false }
        ]
    }

];

const questionelement = document.querySelector("#question");
const answerbtns = document.querySelector("#answer-buttons");
const nextbtn = document.querySelector("#next-btn");
let currquestionindex = 0;
let score = 0;

function startquiz() {
    currquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = 'Next';
    showquestion();
}

function showquestion() {
    resetState();
    let currquestion = questions[currquestionindex];
    let questionno = currquestionindex + 1;
    questionelement.innerHTML = `${questionno}. ${currquestion.question}`;

    currquestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectanswer);
    });
}

function resetState() {
    nextbtn.style.display = 'none';
    while (answerbtns.firstChild) {
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectanswer(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === 'true';
    if (iscorrect) {
        selectedbtn.classList.add('correct');
        score++;
    } else {
        selectedbtn.classList.add('incorrect');
    }
    Array.from(answerbtns.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextbtn.style.display = 'block';
}

function showscore() {
    resetState();
    questionelement.innerHTML = `<span style="font-size:1.4em;color:#2575fc;font-weight:700;">You scored ${score} out of ${questions.length}!</span>`;
    nextbtn.innerHTML = 'Play Again';
    nextbtn.style.display = 'block';
}

function handlenextbutton() {
    currquestionindex++;
    if (currquestionindex < questions.length) {
        showquestion();
    } else {
        showscore();
    }
}

nextbtn.addEventListener('click', function () {
    if (currquestionindex < questions.length) {
        handlenextbutton();
    } else {
        startquiz();
    }
});

startquiz();
