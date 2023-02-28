class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    cameraX = 0;


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
        this.ctx.translate(this.cameraX, 0);  // Push Camera forward
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonVessels);
        this.ctx.translate(-this.cameraX, 0);   // Push Camera backward
        this.addObjectToMap(this.prorgressBarLife);
        this.addObjectToMap(this.prorgressBarCoin);
        this.addObjectToMap(this.prorgressBarPoison);
        this.ctx.translate(this.cameraX, 0);  // Push Camera forward
        this.addObjectToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);  // Push Camera backward
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


    addObjectToMap(singleObject) {
        this.flipImage(singleObject);
        this.ctx.drawImage(singleObject.img, singleObject.x, singleObject.y, singleObject.width, singleObject.height);
        this.flipImageBack(singleObject);
    }


    flipImage(singleObject) {
        if (singleObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;
        }
    }


    flipImageBack(singleObject) {
        if (singleObject.otherDirection) {
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