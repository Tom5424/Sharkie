class JellyFishPurple extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalJellyFishPurpleMove;
    imagesSwimingJellyFishPurble = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];
    imagesDeadJellyFishPurple = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y
        this.loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.imagesSwimingJellyFishPurble);
        this.loadImages(this.imagesDeadJellyFishPurple);
        this.jellyFishPosition();
        this.animateJellyFish();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animateJellyFish() {
        this.intervalJellyFishPurpleMove = setInterval(() => {
            this.jellyFishSwimmingAnimation()
            this.jeyllyFishMoveUpAndDown();
        }, 250);
    }


    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishPurble);
    }


    jellyFishIsDead() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesDeadJellyFishPurple);
        }, 1000 / 10);
        clearInterval(this.intervalJellyFishPurpleMove);
    }
}
