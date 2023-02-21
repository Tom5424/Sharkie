class Background extends MovableObjects {
    x = 0;
    y;
    width = 900;
    height = 420;


    constructor(img, y) {
        super().loadImage(img);
        this.y = y;
        img = img;
    }
}