class PoisonBubble extends MovableObjects {
    width = 40;
    height = 40;
    x;
    y;


    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
    }
}