const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key'); //collection of keys

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function musicOnClick(){
        
       if (event.target.classList.contains('piano-key') ) {
        const key = event.target.dataset.note;
        const src = `assets/audio/${key}.mp3`;
        playAudio(src);
        event.target.classList.add('piano-key-active');
        event.target.classList.add('piano-key-active-pseudo');
     }
    
    piano.addEventListener('mouseover', musicOnClick); 
    piano.addEventListener('mouseout', buttonBack2);
}

function buttonOn () { 
    const code = event.code[3]; 
    const keyLetter = document.querySelector(`.piano-key[data-letter = "${code}"`);
    
    if (!keyLetter || event.repeat == true) return;
        
    const key = keyLetter.dataset.note;
    const src = `assets/audio/${key}.mp3`;
    playAudio(src);
    keyLetter.classList.add('piano-key-active');
    }
    
function buttonBack () {
    piano.removeEventListener('mouseover', musicOnClick);
    piano.removeEventListener('mouseout', buttonBack2);
    const keys = document.querySelectorAll('.piano-key');
    keys.forEach(el => { 
       if (el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active')
       }
       if (el.classList.contains('piano-key-active-pseudo')) {
        el.classList.remove('piano-key-active-pseudo')
       }
    });
}  

function buttonBack2 () {
    piano.removeEventListener('mouseout', buttonBack2);
    const keys = document.querySelectorAll('.piano-key');
    keys.forEach(el => { 
       if (el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active')
       }
       if (el.classList.contains('piano-key-active-pseudo')) {
        el.classList.remove('piano-key-active-pseudo')
       }
    });
}  

piano.addEventListener('mousedown', musicOnClick);//играет музыка и нажимается клавиша (мышкой)
//piano.addEventListener('mouseup', buttonBack); // отжимается клавиша над пианино(мышкой)
document.body.addEventListener('mouseup', buttonBack);// отжимается клавиша везде(мышкой)

window.addEventListener('keydown', buttonOn); //играет музыка, нажимается клавиша (кнопкой)
window.addEventListener('keyup', buttonBack); //отжимается клавиша (кнопкой)

// Переключение Notes/Letters

const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');

btnNotes.addEventListener('click',shiftBtnNotes );
btnLetters.addEventListener('click',shiftBtnLetters);

function shiftBtnNotes() {
    
    const keys = document.querySelectorAll('.piano-key');
    keys.forEach(el => { 
        el.classList.remove('btnLetters');
        el.classList.add('btnNotes');
    })
    btnLetters.classList.remove('btn-active');
    btnNotes.classList.add('btn-active');
}

function shiftBtnLetters() {
    
    const keys = document.querySelectorAll('.piano-key');
    keys.forEach(el => { 
        el.classList.remove('btnNotes');
        el.classList.add('btnLetters');
    })
    btnNotes.classList.remove('btn-active');
    btnLetters.classList.add('btn-active');
}

// функциональность кнопки Fullscreen

const btnFullscr = document.querySelector('.fullscreen');

btnFullscr.addEventListener('click', FullScrOnOff);

function FullScrOnOff() {
  
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } 
      else document.documentElement.requestFullscreen();
}


