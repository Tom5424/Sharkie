class Background extends MovableObjects {
    x;
    y;
    width = 1000;
    height = 450;


    constructor(img, x, y) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        img = img;
    }
}