class Background extends MovableObjects {
    x;
    y;
    width = 900;
    height = 420;


    constructor(img, x, y) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        img = img;
    }
}