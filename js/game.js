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


function showWinScreen() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
}