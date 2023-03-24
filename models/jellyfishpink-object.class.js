class JellyFishPink extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalJellyFishPinkMove;
    imagesSwimingJellyFishPink = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];
    imagesDeadJellyFishPink = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.imagesSwimingJellyFishPink);
        this.loadImages(this.imagesDeadJellyFishPink);
        this.jellyFishPosition();
        this.animateJellyFish();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animateJellyFish() {
        this.intervalJellyFishPinkMove = setInterval(() => {
            this.jellyFishSwimmingAnimation()
            this.jeyllyFishSwimUpAndDown();
        }, 250);
    }


    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishPink);
    }


    jellyFishIsDead() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesDeadJellyFishPink);
        }, 1000 / 10);
        clearInterval(this.intervalJellyFishPinkMove);
    }
}
