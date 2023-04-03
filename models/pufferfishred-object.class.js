class PufferFishRed extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    intervalSwimmingAnimationPufferFishRed;
    imagesPufferFishRedSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];
    imagesPufferFishRedBubbleeSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];
    imagesDeadPufferFishRed = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.imagesPufferFishRedSwimming);
        this.loadImages(this.imagesPufferFishRedBubbleeSwimming);
        this.loadImages(this.imagesDeadPufferFishRed);
        this.animatePufferFishGenerally();
    }


    animatePufferFishGenerally() {
        this.intervalSwimmingAnimationPufferFishRed = setInterval(() => { this.pufferFishSwimmingAnimation(), this.pufferFishRedMoveLeftAndRight() }, 120);
    }


    pufferFishSwimmingAnimation() {
        this.playAnimationMovableObject(this.imagesPufferFishRedSwimming);
    }


    pufferFishIsDead() {
        clearInterval(this.intervalSwimmingAnimationPufferFishRed);
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png');
    }


    pufferFishRedMoveLeftAndRight() {
        if (this.x > 2200 && !this.otherDirection) {
            this.x -= 10 - this.speed;
        } else {
            this.otherDirection = true;
            this.x += 10 + this.speed;
        }
        if (this.x > 2500) {
            this.otherDirection = false;
            this.x -= 10 - this.speed;
        }
    }
}