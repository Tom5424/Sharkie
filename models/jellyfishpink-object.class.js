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
        this.animateJellyFishGenerally();
    }


    /**
     * This Function Animate the Jelly Fish generally.
     * 
     */
    animateJellyFishGenerally() {
        this.intervalJellyFishPinkMove = setInterval(() => { this.jeyllyFishSwimUpAndDown(), this.jellyFishSwimmingAnimation() }, 220);
    }


    /**
     * This Function show the swimming Animation from the Jelly Fish.
     * 
     */
    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishPink);
    }


    /**
     * This Function show the dead Animation from the Jelly Fish.
     * 
     */
    jellyFishIsDead() {
        clearInterval(this.intervalJellyFishPinkMove);
        setInterval(() => { this.playAnimationMovableObject(this.imagesDeadJellyFishPink) }, 1000 / 10);
    }
}
