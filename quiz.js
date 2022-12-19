const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

let questionIndex = 0;
let selectedAnswer = null;
let correctCount = 0;
let wrongCount = 0;

const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submitBtn = document.querySelector(".submit");
const playBtn = document.querySelector(".play");
const gameScrn = document.querySelector(".game");
const resultScrn = document.querySelector(".result");

const CorrectAnswers = resultScrn.querySelector(".correct");
const WrongAnswers = resultScrn.querySelector(".wrong");
const ScoreResult = resultScrn.querySelector(".score");

const selectedAnswers = () => {
  answersContainer.querySelectorAll("input").forEach(element => {
    element.addEventListener("click", (event)=> {
      selectedAnswer = event.target.value;
    })
  })
}

const showQuestion = (index) => {
  if(index === data.length) {
    showResult();
  } else {
    question.textContent = data[index].question;
    answersContainer.innerHTML = data[index].answers.map((item, index) => `
    <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for=${index}>${item.answer}</label>
     </div>
    `).join("")
    selectedAnswers()
  }
}

const onSubmit = () => {
  submitBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex)
    } else {
      alert("!!!!")
    }
  })
}

const showResult = () => {
  gameScrn.style.display = "none";
  resultScrn.style.display = "block";

  CorrectAnswers.textContent = `Correct Answers: ${correctCount}`;
  WrongAnswers.textContent = `Wrong Answers: ${wrongCount}`;
  ScoreResult.textContent = `Score: ${(correctCount - wrongCount) * 10}`;
}

const resetResult = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
}

playBtn.addEventListener("click", () => {
  gameScrn.style.display = "block";
  resultScrn.style.display = "none";
  resetResult();
  showQuestion(questionIndex);
})

onSubmit()
showQuestion(questionIndex)

