class JellyFishPink extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingJellyFishPink = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];


    constructor() {
        super();
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.imagesSwimingJellyFishPink);
        this.jellyFishPosition();
        this.animateEnemies();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 150;
    }


    animateEnemies() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingJellyFishPink);
        }, 200);
    }
}
