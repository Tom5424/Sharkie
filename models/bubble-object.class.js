class Bubble extends MovableObjects {
    width = 40;
    height = 40;
    x;
    y;


    constructor(x, y, otherDirection) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.otherDirection = otherDirection;
        this.x = x;
        this.y = y;
    }
}