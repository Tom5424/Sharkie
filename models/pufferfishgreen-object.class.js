class PufferFishGreen extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingPufferFishGreen = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    imagesPufferFishGreenStartBlowUp = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];
    imagesPufferFishGreenSwimmingBlowUp = [
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


    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishGreen);
        this.loadImages(this.imagesPufferFishGreenStartBlowUp);
        this.loadImages(this.imagesPufferFishGreenSwimmingBlowUp);
        this.loadImages(this.imagesDeadPufferFishGreen);
        this.pufferFishPosition();
        this.moveLeft();
        this.animatePufferFish();
    }


    pufferFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animatePufferFish() {
        setInterval(() => {
            let distanceBetweenPufferFishAndCharacterX = Math.ceil(this.x - world.character.x); // Math.ceil() ==> Rundet immer zur nächst höheren Zahl auf.
            this.pufferFishMovesPuffedUp(distanceBetweenPufferFishAndCharacterX);
            this.pufferFishMoveLeft(distanceBetweenPufferFishAndCharacterX);
        }, 200);
    }


    pufferFishMovesPuffedUp(distanceBetweenPufferFishAndCharacterX) {
        if (distanceBetweenPufferFishAndCharacterX - 20 < 300 && !this.pufferFishIsBlowUp) {
            this.playAnimationMovableObject(this.imagesPufferFishGreenStartBlowUp);
            this.pufferFishIsBlowUp = true;
        } else if (this.pufferFishIsBlowUp) {
            this.playAnimationMovableObject(this.imagesPufferFishGreenSwimmingBlowUp);
        }
    }


    pufferFishMoveLeft(distanceBetweenPufferFishAndCharacterX) {
        if (distanceBetweenPufferFishAndCharacterX - 100 > 180) {
            this.playAnimationMovableObject(this.imagesSwimingPufferFishGreen);
        }
    }


    // pufferFishIsDead() {
    //     // this.pufferFishDead = true;
    //     // if (this.pufferFishDead) {
    //     setInterval(() => {
    //         this.playAnimationMovableObject(this.imagesDeadPufferFishGreen);
    //     }, 100);
    //     // }
    // }
}

