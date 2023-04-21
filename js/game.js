let canvas;
let world;
let keyboard = new Keyboard();


function startGame() {
    showLoadingScreen();
    setTimeout(() => {
        initLevel();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
        unmuteSounds();
        showMobileBtns();
        playBackgroundMusic();
        document.getElementById('canvas').classList.remove('d-none');
        document.getElementById('enterFullScreenIcon').classList.remove('d-none');
        document.getElementById('iconSoundOff').classList.remove('d-none');
        document.getElementById('loadingScreen').classList.add('d-none');
    }, 8000);
}


function showLoadingScreen() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('loadingScreen').classList.remove('d-none');
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
}


function showMobileBtns() {
    document.getElementById('btnMobileLeft').classList.remove('d-none');
    document.getElementById('btnMobileRight').classList.remove('d-none');
    document.getElementById('btnMobileDown').classList.remove('d-none');
    document.getElementById('btnMobileUp').classList.remove('d-none');
    document.getElementById('btnMobileFinSlapAttack').classList.remove('d-none');
    document.getElementById('btnMobileShootStandardBubble').classList.remove('d-none');
    document.getElementById('btnMobileShootPoisonBubble').classList.remove('d-none');
}


function stopAllIntervals() {
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }
}


function tryAgain() {
    closeFullScreen();
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('gameOverScreen').classList.add('d-none');
    document.getElementById('loadingScreen').classList.remove('d-none');
    startGame();
    resetSounds();
    document.getElementById('iconSoundOn').classList.add('d-none');
    document.getElementById('iconSoundOff').classList.add('d-none');
}


function goToMainMenuFromWinScreen() {
    closeFullScreen();
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('iconSoundOff').classList.add('d-none');
    document.getElementById('iconSoundOn').classList.add('d-none');
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
}


function goToMainMenuFromGameOverScreen() {
    closeFullScreen();
    document.getElementById('gameOverScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('iconSoundOff').classList.add('d-none');
    document.getElementById('iconSoundOn').classList.add('d-none');
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
}


function showWinScreen() {
    resetSounds();
    setTimeout(() => {
        document.getElementById('enterFullScreenIcon').classList.add('d-none');
        document.getElementById('iconSoundOff').classList.add('d-none');
        document.getElementById('btnMobileLeft').classList.add('d-none');
        document.getElementById('btnMobileRight').classList.add('d-none');
        document.getElementById('btnMobileDown').classList.add('d-none');
        document.getElementById('btnMobileUp').classList.add('d-none');
        document.getElementById('btnMobileFinSlapAttack').classList.add('d-none');
        document.getElementById('btnMobileShootStandardBubble').classList.add('d-none');
        document.getElementById('btnMobileShootPoisonBubble').classList.add('d-none');
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('winScreen').classList.remove('d-none');
        document.getElementById('winScreen').classList.add('scaleUpCenter');
    }, 600);
}


function showGameOverScreen() {
    resetSounds();
    setTimeout(() => {
        document.getElementById('enterFullScreenIcon').classList.add('d-none');
        document.getElementById('iconSoundOff').classList.add('d-none');
        document.getElementById('iconSoundOn').classList.add('d-none');
        document.getElementById('btnMobileLeft').classList.add('d-none');
        document.getElementById('btnMobileRight').classList.add('d-none');
        document.getElementById('btnMobileDown').classList.add('d-none');
        document.getElementById('btnMobileUp').classList.add('d-none');
        document.getElementById('btnMobileFinSlapAttack').classList.add('d-none');
        document.getElementById('btnMobileShootStandardBubble').classList.add('d-none');
        document.getElementById('btnMobileShootPoisonBubble').classList.add('d-none');
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
        document.getElementById('winScreen').classList.add('fullscreen');
        document.getElementById('gameOverScreen').classList.add('fullscreen');
    }
}


function closeFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        document.getElementById('enterFullScreenIcon').classList.remove('d-none');
        document.getElementById('exitFullSCreenIcon').classList.add('d-none');
        document.getElementById('canvas').classList.remove('fullscreen');
        document.getElementById('winScreen').classList.remove('fullscreen');
        document.getElementById('gameOverScreen').classList.remove('fullscreen');
    }
}


function openMenuHowToPlay() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


function closeMenuHowToPlay() {
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


function openMovementAndAttackDescription() {
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineMovementAndAttack').classList.remove('d-none');
    document.getElementById('MovementAndAttackDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
}


function closeMovementAndAttackDescription() {
    document.getElementById('MovementAndAttackDescription').classList.add('d-none');
    document.getElementById('headlineMovementAndAttack').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


function openCollectablesDescription() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineCollectablesDescription').classList.remove('d-none');
    document.getElementById('collectablesDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


function closeCollectablesDescription() {
    document.getElementById('headlineCollectablesDescription').classList.add('d-none');
    document.getElementById('collectablesDescription').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


function openGameDescription() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineGameDescription').classList.remove('d-none');
    document.getElementById('gameDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


function closeGameDescription() {
    document.getElementById('headlineGameDescription').classList.add('d-none');
    document.getElementById('gameDescription').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}