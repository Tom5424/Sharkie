class JellyFishPink extends MovableObjects {
    x;
    y;
    width = 100;
    height = 100;
    imagesSwimingJellyFishPink = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.imagesSwimingJellyFishPink);
        this.jellyFishPosition();
        this.animateEnemies();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animateEnemies() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingJellyFishPink);
        }, 200);
        setInterval(() => {
            // this.moveJellyFish();
        }, 800);
    }
}
