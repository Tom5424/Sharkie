let canvas;
let world;
let keyboard = new Keyboard();


// function getId(id) {
//     document.getElementById(id);
// }


function startGame() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    playBackgroundMusic();
}


function stopAllIntervals() {
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }
}


function btnTryAgain() {
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('gameOverScreen').classList.add('d-none');
    resetSounds();
    startGame();
}


function showWinScreen() {
    setTimeout(() => {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('winScreen').classList.remove('d-none');
        document.getElementById('winScreen').classList.add('scaleUpCenter');
    }, 550);
}


function showGameOverScreen() {
    setTimeout(() => {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('gameOverScreen').classList.remove('d-none');
        document.getElementById('gameOverScreen').classList.add('scaleUpCenter');
    }, 550);
    showInImageHowDieTheCharacter();
}


function showInImageHowDieTheCharacter() {
    if (world.character.isDeadThroughPufferFish() || world.character.isDeadThroughEndboss()) {
        document.getElementById('gameOverScreenImgDeadByPoison').classList.remove('d-none');
        document.getElementById('gameOverScreenImgDeadByElectroShock').classList.add('d-none');
        document.getElementById('gameOverScreenImgDeadByPoison').classList.add('gameOverScreenImgDeadByPoison');
    }
    if (world.character.isDeadThroughJellyFish()) {
        document.getElementById('gameOverScreenImgDeadByElectroShock').classList.remove('d-none');
        document.getElementById('gameOverScreenImgDeadByPoison').classList.add('d-none');
        document.getElementById('gameOverScreenImgDeadByElectroShock').classList.add('gameOverScreenImgDeadByElectroShock');
    }
}


function enterFullScreen() {
    let main = document.getElementById('main');
    if (!document.fullscreenElement) {
        main.requestFullscreen();
        document.getElementById('enterFullScreenIcon').classList.add('d-none');
        document.getElementById('exitFullSCreenIcon').classList.remove('d-none');
        document.getElementById('canvas').classList.add('fullscreen');
        document.getElementById('winScreenBG').classList.add('fullscreen');
        document.getElementById('gameOverScreenBG').classList.add('fullscreen');
    }
}


function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById('enterFullScreenIcon').classList.remove('d-none');
        document.getElementById('exitFullSCreenIcon').classList.add('d-none');
        document.getElementById('canvas').classList.remove('fullscreen');
        document.getElementById('winScreenBG').classList.remove('fullscreen');
        document.getElementById('gameOverScreenBG').classList.remove('fullscreen');
    }
}