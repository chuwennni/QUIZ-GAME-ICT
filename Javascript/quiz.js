import { questions } from "./questions.js";

const quizGame = document.getElementById('quizGame');
const startButton = document.getElementById('startButton');
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const resultContainer = document.getElementById('results');
const mathQuiz = document.getElementById('mathQuiz');
const resultAnswers = document.getElementById('result')
const insult = document.getElementById('insult')

let attempts = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

startButton.addEventListener('click', StartGame);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentCorrect = null;

function StartGame() {
  quizGame.style.visibility = 'visible';
  startButton.style.display = 'none'

  const randomIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomIndex];
  currentCorrect = selectedQuestion.correct;

  question.textContent = selectedQuestion.question;

  const allChoices = [...selectedQuestion.choices];
  shuffleArray(allChoices);

  answer1.textContent = allChoices[0];
  answer2.textContent = allChoices[1];
  answer3.textContent = allChoices[2];
  answer4.textContent = allChoices[3];

  answer1.onclick = () => checkAnswer(allChoices[0]);
  answer2.onclick = () => checkAnswer(allChoices[1]);
  answer3.onclick = () => checkAnswer(allChoices[2]);
  answer4.onclick = () => checkAnswer(allChoices[3]);
}

function checkAnswer(selected) {
  attempts++;

  if (selected === currentCorrect) {
    correctAnswers++;
  } else {
    wrongAnswers++;
  }

  if (attempts === 10) {
    Results();
  } else {
    StartGame(); // Load next question
  }
}

function Results() {
  mathQuiz.style.display = 'none';
  startButton.style.display = 'none';
  resultContainer.style.display = 'flex'
  
  const result = correctAnswers - wrongAnswers;
  if(result < 0){
    resultAnswers.textContent = '0'
  }else if(result === 1){
    insult.textContent = 'okay nato'
  }else if(result === 2){
    insult.textContent = 'puro ka kasi daldal eh'
  }else if(result === 3){
    insult.textContent = 'lollipop lang yan'
  }else if(result === 4){
    insult.textContent = 'kaya mo yan!, hindi na pala'
  }else if(result === 5){
    insult.textContent = 'pede nayan'
  }else if(result === 6){
    insult.textContent = 'try mo kaya mag chat gpt'
  }else if(result === 7){
    insult.textContent = 'ni...nig...nigeri... nigeria'
  }else if(result === 8){
    insult.textContent = 'miss mo?'
  }else if(result === 9){
    insult.textContent = 'airplane'
  }else if(result === 10){
    insult.textContent = 'basic HAHAHA'
  }
  resultAnswers.textContent = `${result}/10`


  attempts = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
}
