class DrawableObjects {
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}