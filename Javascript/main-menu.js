const settingsMenu = document.querySelector('.settings-menu');
const closeButton = document.getElementById('close-button');
const startButton = document.getElementById('startButton');
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const question = document.getElementById('question')



function ShowSettings() {
  settingsMenu.classList.remove('unshowed');
  settingsMenu.classList.add('showed');
  settingsMenu.style.display = 'flex'; // show it
}

closeButton.addEventListener('click', () => {
  settingsMenu.classList.remove('showed');
  settingsMenu.classList.add('unshowed');

  // Wait until animation is done before hiding
  settingsMenu.addEventListener('animationend', function handler() {
    settingsMenu.style.display = 'none';
    settingsMenu.removeEventListener('animationend', handler);
  });
});


// bgm
const musicIcon = document.getElementById('music-icon')
const BGM = document.getElementById('bgm')
let music = false


function Start(){
  
  const splashScreen = document.querySelector('.splash-screen')

  splashScreen.addEventListener('transitionend', () => {
    document.getElementById('bgm').play()
    splashScreen.remove()
    music = true;
  })


  splashScreen.classList.add('hide')
}

function Unmute(){

  if(music){
    BGM.pause()
    music = false;
    musicIcon.classList.replace('fa-volume-high', 'fa-volume-xmark')
  }else{
    BGM.play()
    music = true;
    musicIcon.classList.replace('fa-volume-xmark', 'fa-volume-high')
  }

}



function GoToGame() {
      mainMenu.style.display = 'none';
      gameScreen.style.display = 'flex'; // match your `.wrapper` flex style
    }

function GoBackToMenu() {
  gameScreen.style.display = 'none';
  mainMenu.style.display = 'flex';
}
function Mathematic(){
  gameScreen.style.display = 'none'
  mathQuiz.style.display = 'flex'
}    

function GoBackToGame() {
  mathQuiz.style.display = 'none';
  gameScreen.style.display = 'flex';
  quizGame.style.visibility = 'hidden'
  startButton.style.display = 'block'
  startButton.textContent = 'start'
  results.style.display = 'none'
}