class PufferFishRed extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    pufferFishSwimRight = false;
    imagesSwimingPufferFishRed = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];
    imagesPufferFishRedStartBlowUp = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    ];
    imagesPufferFishRedSwimmingBlowUp = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];


    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishRed);
        this.loadImages(this.imagesPufferFishRedStartBlowUp);
        this.loadImages(this.imagesPufferFishRedSwimmingBlowUp);
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
            this.playAnimationMovableObject(this.imagesPufferFishRedStartBlowUp);
            this.pufferFishIsBlowUp = true;
        } else if (this.pufferFishIsBlowUp) {
            this.playAnimationMovableObject(this.imagesPufferFishRedSwimmingBlowUp);
        }
    }


    pufferFishMoveLeft(distanceBetweenPufferFishAndCharacterX) {
        if (distanceBetweenPufferFishAndCharacterX - 100 > 180) {
            this.playAnimationMovableObject(this.imagesSwimingPufferFishRed);
        }
    }

}