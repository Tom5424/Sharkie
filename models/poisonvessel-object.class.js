class PoisonVessel extends MovableObjects {
    x;
    y;
    width = 80;
    height = 80;
    imagesPoisonVessel = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ];


    constructor(img, x, y) {
        super();
        img = img;
        this.x = x;
        this.y = y;
        this.loadImage(img);
        this.loadImages(this.imagesPoisonVessel);
        this.animatePoisonVessel();
    }


    /**
     * This Function Animate the Poison Vessel.
     * 
     */
    animatePoisonVessel() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesPoisonVessel);
        }, 100);
    }
}