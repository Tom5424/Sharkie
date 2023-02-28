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


    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishRedGlow);
        this.moveLeft();
        this.pufferFishPosition();
        this.animateEnemies();
    }


    pufferFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }


    animateEnemies() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingPufferFishRedGlow);
        }, 200);
    }
}