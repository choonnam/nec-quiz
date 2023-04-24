const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Berlin"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "Russia",
      b: "Canada",
      c: "China"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the smallest country in the world?",
    answers: {
      a: "Monaco",
      b: "Vatican City",
      c: "Liechtenstein"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (let letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} : ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
       <div class="answer"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answer');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  alert(`You got ${numCorrect} out of ${myQuestions.length} questions correct!`);
}

buildQuiz();

submitButton.addEventListener('click', showResults);
