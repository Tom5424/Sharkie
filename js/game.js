let canvas;
let world;
let keyboard = new Keyboard();


function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    playBackgroundMusic();
}