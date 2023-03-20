class JellyFishYellow extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalJellyFishYellowMove;
    imagesSwimingJellyFishYellow = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];
    imagesDeadJellyFishYellow = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.imagesSwimingJellyFishYellow);
        this.loadImages(this.imagesDeadJellyFishYellow);
        this.jellyFishPosition();
        this.animateJellyFish();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animateJellyFish() {
        this.intervalJellyFishYellowMove = setInterval(() => {
            this.jellyFishSwimmingAnimation()
            this.jeyllyFishMoveUpAndDown();
        }, 250);
    }


    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishYellow);
    }


    jellyFishIsDead() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesDeadJellyFishYellow);
        }, 1000 / 10);
        clearInterval(this.intervalJellyFishYellowMove);
    }
}
