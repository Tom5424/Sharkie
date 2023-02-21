class DrawableObjects {
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw() {
        this.addObjectToMap();
        this.addCharacterToMap();
        this.repeatDrawing();
    }


    addObjectToMap() {
        this.level.backgrounds.forEach(background => {
            ctx.drawImage(background.img, background.x, background.y, background.width, background.height);
        });
        this.level.enemies.forEach(enemy => {
            ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
    }


    addCharacterToMap() {
        ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }


    repeatDrawing() {
        requestAnimationFrame(() => {
            this.draw();
        })
    }
}