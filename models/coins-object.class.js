class Coins extends MovableObjects {
    x;
    y;
    width = 50;
    height = 50;
    imagesCoins = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];


    constructor(img, x, y) {
        super();
        img = img;
        this.x = x;
        this.y = y;
        this.loadImage(img);
        this.loadImages(this.imagesCoins);
        // this.coinsPosition();
        this.animateCoins();
    }


    // coinsPosition() {
    //     this.x = Math.random() * 1100 + 350;
    //     this.y = Math.random() * 250 + 100;
    // }


    animateCoins() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesCoins);
        }, 250);
    }
}
