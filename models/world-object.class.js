class World {
    level = new Level();
    character = new Character();
    ctx;
    canvas;
    keyboard;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.linkCharacterWithWorld();
    }


    linkCharacterWithWorld() {
        this.character.world = this;
    }


    draw() {
        this.clearCanvas();
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectToMap(this.character);
        this.repeatDrawing();
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
        });
    }


    addObjectToMap(character) {
        this.ctx.drawImage(character.img, character.x, character.y, character.width, character.height);
    }


    repeatDrawing() {
        requestAnimationFrame(() => {
            this.draw();
        })
    }
}