class JellyFishGreen extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingJellyFishGreen = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];


    constructor() {
        super();
        this.loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.imagesSwimingJellyFishGreen);
        this.jellyFishPosition();
        this.animateEnemies();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 150;
    }


    animateEnemies() {
        let y = 0;
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingJellyFishGreen);
        }, 250);
        setInterval(() => {
            y++;
            // this.y -= 15 - this.speed;
            if (y < 20) {
                this.y -= 15 - this.speed;
            } else if (y > 20) {
                this.y += 15 + this.speed;
            }
        }, 250);
    }
}
