let audioBackgroundMusic = new Audio('audio/background-music.mp3');
let audioBackgroundMusicEndboss = new Audio('audio/background-music-bossfight.mp3');
let audioEndbossBites = new Audio('audio/bite-sound-endbossfight.mp3');
let audioBottleCollected = new Audio('audio/bottle-collected.mp3');
let audioCoinCollected = new Audio('audio/coin-collected.mp3');
let audioCharacterIdle = new Audio('audio/character-idle.mp3');
let audioCharacterMove = new Audio('audio/character-move.mp3');
let audioFinSlap = new Audio('audio/fin-slap.mp3');
let audioGameIsLost = new Audio('audio/game-is-lost.mp3');
let audioGameIsWin = new Audio('audio/game-is-win.mp3');
let audioHurtElectroshocked = new Audio('audio/hurt-electroshocked.mp3');
let audioHurtCharacter = new Audio('audio/hurt-character.mp3');
let audioHurtEndboss = new Audio('audio/hurt-endboss.mp3');
let audioShootBubble = new Audio('audio/shoot-bubble.mp3');
let audioEndbossSpawn = new Audio('audio/endboss-spawn.mp3');



function playBackgroundMusic() {
    audioBackgroundMusic.play();
    audioBackgroundMusic.volume = 0.2;
    audioBackgroundMusic.loop = true;
}


function playBackgroundMusicEndboss() {
    audioBackgroundMusicEndboss.play();
    audioBackgroundMusicEndboss.volume = 0.3;
    audioBackgroundMusic.pause();
}


function playSoundBottleCollected() {
    audioBottleCollected.play();
}


function playSoundCoinCollected() {
    audioCoinCollected.play();
}


function playSoundCharacterIdle() {
    audioCharacterIdle.play();
    audioCharacterIdle.volume = 0.10;
}


function playSoundCharacterMove() {
    audioCharacterMove.play();
    audioCharacterMove.volume = 0.5;
}


function playSoundCharacterDoFinSlap() {
    audioFinSlap.play();
}


function playSoundGameIsLost() {
    audioGameIsLost.play();
}


function playSoundGameIsWin() {
    audioGameIsWin.play();
}


function playSoundHurtThroughElectroShocked() {
    audioHurtElectroshocked.play();
}


function playSoundHurtCharacter() {
    audioHurtCharacter.play();
    audioHurtCharacter.volume = 0.5;
}


function playSoundHurtEndboss() {
    audioHurtEndboss.play();
    audioHurtEndboss.volume = 0.5;
}


function playSoundShootBubble() {
    audioShootBubble.play();
}


function playSoundEndbossBites() {
    audioEndbossBites.play();
    audioEndbossBites.playbackRate = 2.0;
}


function playSoundEndbossSpawn() {
    audioEndbossSpawn.play();
}


