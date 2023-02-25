class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    cameraX = -100;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(pathCurrentArrays) {
        pathCurrentArrays.forEach(pathCurrentArray => {
            let img = new Image();
            img.src = pathCurrentArray
            this.imageCache[pathCurrentArray] = img;
        });
    }


    draw() {
        this.clearCanvas();
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.enemies)
        this.addObjectToMap(this.character);
        this.repeatDrawing();
        this.ctx.translate(-this.cameraX, 0);
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
        this.flipImage();
        this.ctx.drawImage(character.img, character.x, character.y, character.width, character.height);
        this.flipImageBack();
    }


    flipImage() {
        if (this.character.otherDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;
        }
    }


    flipImageBack() {
        if (this.character.otherDirection) {
            this.ctx.restore();
            this.character.x = this.character.x * -1;
        }
    }


    repeatDrawing() {
        requestAnimationFrame(() => {
            this.draw();
        })
    }





}