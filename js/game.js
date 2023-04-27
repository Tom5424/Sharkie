let canvas;
let world;
let keyboard = new Keyboard();
let gameIsStarted = false;
let gameIsOver = false;


/**
 * This Function Start the whole Game.
 * 
 */
function startGame() {
    soundIsOn = false;
    gameIsOver = false;
    gameIsStarted = true;
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('enterFullScreenIcon').classList.remove('d-none');
    document.getElementById('iconSoundOn').classList.remove('d-none');
    initLevel()
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    playBackgroundMusic();
}


/**
 * This Function check the width of the Screen and show the touch Buttons or not.
 * 
 */
function checkTouchBtnsForMobileDevices() {
    let mediaQuerie = window.matchMedia('(max-width: 800px)');
    if (mediaQuerie.matches && gameIsStarted) {
        showTouchBtns();
    } else {
        hideTouchBtns();
    }
    if (gameIsOver) {
        hideTouchBtnsIfGameIsOverOrWin();
    }
}


/**
 * This Function show the touch Buttons.
 * 
 */
function showTouchBtns() {
    document.getElementById('btnMobileLeft').classList.remove('d-none');
    document.getElementById('btnMobileRight').classList.remove('d-none');
    document.getElementById('btnMobileDown').classList.remove('d-none');
    document.getElementById('btnMobileUp').classList.remove('d-none');
    document.getElementById('btnMobileFinSlapAttack').classList.remove('d-none');
    document.getElementById('btnMobileShootStandardBubble').classList.remove('d-none');
    document.getElementById('btnMobileShootPoisonBubble').classList.remove('d-none');
}


/**
 * This Function hide the touch Buttons.
 * 
 */
function hideTouchBtns() {
    document.getElementById('btnMobileLeft').classList.add('d-none');
    document.getElementById('btnMobileRight').classList.add('d-none');
    document.getElementById('btnMobileDown').classList.add('d-none');
    document.getElementById('btnMobileUp').classList.add('d-none');
    document.getElementById('btnMobileFinSlapAttack').classList.add('d-none');
    document.getElementById('btnMobileShootStandardBubble').classList.add('d-none');
    document.getElementById('btnMobileShootPoisonBubble').classList.add('d-none');
}


/**
 * This Function hide the touch Buttons, if the game is over.
 * 
 */
function hideTouchBtnsIfGameIsOverOrWin() {
    document.getElementById('btnMobileLeft').classList.add('d-none');
    document.getElementById('btnMobileRight').classList.add('d-none');
    document.getElementById('btnMobileDown').classList.add('d-none');
    document.getElementById('btnMobileUp').classList.add('d-none');
    document.getElementById('btnMobileFinSlapAttack').classList.add('d-none');
    document.getElementById('btnMobileShootStandardBubble').classList.add('d-none');
    document.getElementById('btnMobileShootPoisonBubble').classList.add('d-none');
}


/**
 * This Function stop all intervals.
 * 
 */
function stopAllIntervals() {
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }
}


/**
 * This Function restart the Game.
 * 
 */
function tryAgain() {
    soundIsOn = false;
    closeFullScreen();
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('gameOverScreen').classList.add('d-none');
    startGame();
    playBackgroundMusic();
    checkSounds();
}


/**
 * With this Function you can go to the Main Menu from Win Screen.
 * 
 */
function goToMainMenuFromWinScreen() {
    gameIsStarted = false;
    gameIsOver = true;
    checkSounds();
    closeFullScreen();
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('iconSoundOff').classList.add('d-none');
    document.getElementById('iconSoundOn').classList.add('d-none');
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
}


/**
 * With this Function you can go to the Main Menu from Game Over Screen.
 * 
 */
function goToMainMenuFromGameOverScreen() {
    gameIsStarted = false;
    gameIsOver = true;
    checkSounds();
    closeFullScreen();
    document.getElementById('gameOverScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('iconSoundOff').classList.add('d-none');
    document.getElementById('iconSoundOn').classList.add('d-none');
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
}


/**
 * This Function show the Win Screen.
 * 
 */
function showWinScreen() {
    gameIsStarted = false;
    gameIsOver = true;
    resetSounds();
    setTimeout(() => {
        hideAndShowElementsForWinScreen();
    }, 600);
}


/**
 * This Function hide all Elements to show the Win Screen.
 * 
 */
function hideAndShowElementsForWinScreen() {
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
    document.getElementById('iconSoundOn').classList.add('d-none');
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
}


/**
 * This Function show the Game Over Screen.
 * 
 */
function showGameOverScreen() {
    gameIsStarted = false;
    gameIsOver = true;
    resetSounds();
    setTimeout(() => {
        hideAndShowElementsForGameOverScreen();
    }, 550);
    showInImageHowDieTheCharacter();
}


/**
 * This Function hide all Elements to show the Game Over Screen.
 * 
 */
function hideAndShowElementsForGameOverScreen() {
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
}


/**
 * This Function shows the corresponding Image, how the haracter die.
 * 
 */
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


/**
 * This Function check the Fullscreen and show or not.
 * 
 */
function checkFullScreen() {
    if (!document.fullscreenElement) {
        enterFullScreen();
    } else {
        closeFullScreen();
    }
}


/**
 * With this Function you can enter the Fullscreen.
 * 
 */
function enterFullScreen() {
    let main = document.getElementById('main');
    main.requestFullscreen();
    document.getElementById('enterFullScreenIcon').classList.add('d-none');
    document.getElementById('exitFullSCreenIcon').classList.remove('d-none');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('winScreen').classList.add('fullscreen');
    document.getElementById('gameOverScreen').classList.add('fullscreen');
}


/**
 * With this Function you can close the Fullscreen.
 * 
 */
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



/**
 * This Function open the how to play Menu.
 * 
 */
function openMenuHowToPlay() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


/**
 * This Function close the how to play Menu.
 * 
 */
function closeMenuHowToPlay() {
    document.getElementById('headline').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


/**
 * This Function open the Movement and Attack Description from the Game.
 * 
 */
function openMovementAndAttackDescription() {
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineMovementAndAttack').classList.remove('d-none');
    document.getElementById('MovementAndAttackDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
}


/**
 * This Function close the Movement and Attack Description from the Game.
 * 
 */
function closeMovementAndAttackDescription() {
    document.getElementById('MovementAndAttackDescription').classList.add('d-none');
    document.getElementById('headlineMovementAndAttack').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


/**
 * This Function open the Collectables Description from the Game.
 * 
 */
function openCollectablesDescription() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineCollectablesDescription').classList.remove('d-none');
    document.getElementById('collectablesDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


/**
 * This Function close the Collectables Description from the Game.
 * 
 */
function closeCollectablesDescription() {
    document.getElementById('headlineCollectablesDescription').classList.add('d-none');
    document.getElementById('collectablesDescription').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}


/**
 * This Function open the Game Description from the Game.
 * 
 */
function openGameDescription() {
    document.getElementById('headline').classList.add('d-none');
    document.getElementById('headlineGameDescription').classList.remove('d-none');
    document.getElementById('gameDescription').classList.remove('d-none');
    document.getElementById('menuHowToPlay').classList.add('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.add('d-none');
}


/**
 * This Function close the Game Description from the Game.
 * 
 */
function closeGameDescription() {
    document.getElementById('headlineGameDescription').classList.add('d-none');
    document.getElementById('gameDescription').classList.add('d-none');
    document.getElementById('menuHowToPlay').classList.remove('d-none');
    document.getElementById('headlineHowToPlayMenu').classList.remove('d-none');
}