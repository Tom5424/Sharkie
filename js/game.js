let canvas;
let ctx
let world;
let level;
let character;
let enemies;


function startGame() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    world = new World(ctx, world, character);
}