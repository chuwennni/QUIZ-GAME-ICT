const settingsMenu = document.querySelector('.settings-menu');
const closeButton = document.getElementById('close-button');

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