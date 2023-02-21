let canvas;
let ctx
let world;


function startGame() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(ctx, world);
}