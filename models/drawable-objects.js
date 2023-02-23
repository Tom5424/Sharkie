class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;


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
}