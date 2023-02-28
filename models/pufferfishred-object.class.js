class PufferFishRed extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    imagesSwimingPufferFishRed = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];


    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.imagesSwimingPufferFishRed);
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
            this.playAnimationMovableObject(this.imagesSwimingPufferFishRed);
        }, 200);
    }
}