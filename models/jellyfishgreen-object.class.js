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


    constructor() {
        super();
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.imagesSwimingJellyFishGreen);
        this.loadImages(this.imagesDeadJellyFishGreen);
        this.jellyFishPosition();
        this.jellyFishMoveAnimations();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    jellyFishMoveAnimations() {
        this.intervalJellyFishGreenMove = setInterval(() => {
            this.jellyFishSwimmingAnimation()
            this.jeyllyFishSwimUpAndDown();
        }, 250);
    }


    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishGreen);
    }


    jellyFishIsDead() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesDeadJellyFishGreen);
        }, 1000 / 10);
        clearInterval(this.intervalJellyFishGreenMove);
    }
}



