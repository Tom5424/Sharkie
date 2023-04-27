class Coins extends MovableObjects {
    x;
    y;
    width = 50;
    height = 50;
    imagesAnimatedCoins = [
        'img/4. Marcadores/1. Coins/coin1Twist.png',
        'img/4. Marcadores/1. Coins/coin2Twist.png',
        'img/4. Marcadores/1. Coins/coin3Twist.png',
        'img/4. Marcadores/1. Coins/coin4Twist.png',
        'img/4. Marcadores/1. Coins/coin5Twist.png',
        'img/4. Marcadores/1. Coins/coin6Twist.png',
    ];


    constructor(img, x, y) {
        super();
        img = img;
        this.x = x;
        this.y = y;
        this.loadImage(img);
        this.loadImages(this.imagesAnimatedCoins);
        this.animateCoins();
    }


    /**
     * This Function Animate the Coins.
     * 
     */
    animateCoins() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesAnimatedCoins);
        }, 1000 / 10);
    }
}
