class PufferFishRedGlow extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalSwimmingAnimationPufferFishRedGlow;
    imagesPufferFishRedGlowSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',

    ];
    imagesPufferFishRedGlowBubleeSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];
    imagesDeadPufferFishRedGlow = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesPufferFishRedGlowSwimming);
        this.loadImages(this.imagesPufferFishRedGlowBubleeSwimming);
        this.loadImages(this.imagesDeadPufferFishRedGlow);
        this.animatePufferFishGenerally();
    }


    animatePufferFishGenerally() {
        this.intervalSwimmingAnimationPufferFishRedGlow = setInterval(() => { this.pufferFishSwimmingAnimation(), this.pufferFishRedGlowMoveLeftAndRight() }, 120);
    }


    pufferFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesPufferFishRedGlowSwimming);
    }


    pufferFishIsDead() {
        clearInterval(this.intervalSwimmingAnimationPufferFishRedGlow);
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png');
    }


    pufferFishRedGlowMoveLeftAndRight() {
        if (this.x > 2000 && !this.otherDirection) {
            this.x -= 10 - this.speed;
        } else {
            this.otherDirection = true;
            this.x += 10 + this.speed;
        }
        if (this.x > 2300) {
            this.otherDirection = false;
            this.x -= 10 - this.speed;
        }
    }
}