class World extends DrawableObjects {
    level = new Level();
    character = new Character();
    prorgressBarLife = new ProgressBarLife();
    prorgressBarCoin = new ProgressBarCoin();
    prorgressBarPoison = new ProgressBarPoison();
    ctx;
    canvas;
    keyboard;


    constructor(canvas, keyboard) {
        super();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.linkCharacterWithWorld();
    }


    linkCharacterWithWorld() {
        this.character.world = this;
    }






}