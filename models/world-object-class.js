class World {
    character = new Character();
    // backgrond = new Background();
    world;
    ctx;


    constructor() {
        this.draw();
    }


    draw() {
        ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        // ctx.drawImage(this.backgrond.img, this.backgrond.x, this.backgrond.y, this.backgrond.width, this.backgrond.height);

        requestAnimationFrame(() => {
            this.draw();
        });
    }
}