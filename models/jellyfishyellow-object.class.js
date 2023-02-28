class JellyFishYellow extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingJellyFishYellow = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];


    constructor() {
        super();
        this.loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.imagesSwimingJellyFishYellow);
        this.jellyFishPosition();
        this.animateEnemies();
    }


    jellyFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 150;
    }


    animateEnemies() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingJellyFishYellow);
        }, 200);
    }
}
