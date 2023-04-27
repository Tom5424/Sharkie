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
        this.animateJellyFishGenerally();
    }


    /**
     * This Function Animate the Jelly Fish generally.
     * 
     */
    animateJellyFishGenerally() {
        this.intervalJellyFishPurpleMove = setInterval(() => { this.jellyFishSwimmingAnimation(), this.jeyllyFishSwimUpAndDown() }, 220);
    }


    /**
     * This Function show the swimming Animation from the Jelly Fish.
     * 
     */
    jellyFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingJellyFishPurble);
    }


    /**
     * This Function show the dead Animation from the Jelly Fish.
     * 
     */
    jellyFishIsDead() {
        clearInterval(this.intervalJellyFishPurpleMove);
        setInterval(() => { this.playAnimationMovableObject(this.imagesDeadJellyFishPurple) }, 1000 / 10);
    }
}
