class PufferFishGreen extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalSwimmingAnimationPufferFishGreen;
    imagesSwimingPufferFishGreen = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    imagesPufferFishGreenBubbleeSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];
    imagesDeadPufferFishGreen = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishGreen);
        this.loadImages(this.imagesPufferFishGreenBubbleeSwimming);
        this.loadImages(this.imagesDeadPufferFishGreen);
        this.animatePufferFishGenerally();
    }


    /**
     * This Function Animate the Puffer Fish generally.
     * 
     */
    animatePufferFishGenerally() {
        this.intervalSwimmingAnimationPufferFishGreen = setInterval(() => { this.pufferFishSwimmingAnimation(), this.pufferFishGreenMoveLeftAndRight() }, 120);
    }


    /**
     * This Function show the swimming Animation from the Puffer Fish.
     * 
     */
    pufferFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesSwimingPufferFishGreen);
    }


    /**
     * This Function show the dead Animation from Puffer Fish.
     * 
     */
    pufferFishIsDead() {
        clearInterval(this.intervalSwimmingAnimationPufferFishGreen);
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png');
    }


    /**
     * With this Function the Green Puffer Fish swimm back and forth (left and right).
     * 
     */
    pufferFishGreenMoveLeftAndRight() {
        if (this.x > 2500 && !this.otherDirection) {
            this.x -= 10 - this.speed;
        } else {
            this.otherDirection = true;
            this.x += 10 + this.speed;
        }
        if (this.x > 2800) {
            this.otherDirection = false;
            this.x -= 10 - this.speed;
        }
    }
}

