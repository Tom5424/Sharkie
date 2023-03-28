class JellyFishGreen extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalJellyFishGreenMove;
    imagesSwimingJellyFishGreen = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];
    imagesDeadJellyFishGreen = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.imagesSwimingJellyFishGreen);
        this.loadImages(this.imagesDeadJellyFishGreen);
        this.animateJellyFishGenerally();
    }


    animateJellyFishGenerally() {
        this.intervalJellyFishGreenMove = setInterval(() => { this.jellyFishSwimmingAnimation(), this.jeyllyFishSwimUpAndDown() }, 220);
    }


    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishGreen);
    }


    jellyFishIsDead() {
        clearInterval(this.intervalJellyFishGreenMove);
        setInterval(() => { this.playAnimationMovableObject(this.imagesDeadJellyFishGreen) }, 1000 / 10);
    }
}



