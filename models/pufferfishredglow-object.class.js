class PufferFishRedGlow extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingPufferFishRedGlow = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',

    ];
    imagesPufferFishRedGlowStartBlowUp = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    ];
    imagesPufferFishRedGlowSwimmingBlowUp = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];



    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishRedGlow);
        this.loadImages(this.imagesPufferFishRedGlowStartBlowUp);
        this.loadImages(this.imagesPufferFishRedGlowSwimmingBlowUp);
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
            this.playAnimationMovableObject(this.imagesPufferFishRedGlowStartBlowUp);
            this.pufferFishIsBlowUp = true;
        } else if (this.pufferFishIsBlowUp) {
            this.playAnimationMovableObject(this.imagesPufferFishRedGlowSwimmingBlowUp);
        }
    }


    pufferFishMoveLeft(distanceBetweenPufferFishAndCharacterX) {
        if (distanceBetweenPufferFishAndCharacterX - 100 > 180) {
            this.playAnimationMovableObject(this.imagesSwimingPufferFishRedGlow);
        }
    }
}