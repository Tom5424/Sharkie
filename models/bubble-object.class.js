class Bubble extends MovableObjects {
    width = 45;
    height = 45;
    x;
    y;


    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
    }
}