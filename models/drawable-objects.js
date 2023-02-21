class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arrayImages) {
        arrayImages.forEach(arrayImage => {
            let img = new Image();
            img.src = arrayImage
            this.imageCache[arrayImage] = img;
        });
    }


    draw() {
        this.addToMap();
        this.repeatDrawing();
    }


    addToMap() {
        this.addObjectsToMap();
        this.addCharacterToMap();
    }


    addObjectsToMap() {
        [this.level.backgrounds, this.level.enemies].forEach(objects => {
            objects.forEach(Object => {
                ctx.drawImage(Object.img, Object.x, Object.y, Object.width, Object.height);
            });
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