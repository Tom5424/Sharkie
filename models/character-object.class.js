class Character extends MovableObjects {
    x = 20;
    y = 100;
    width = 300;
    height = 300;
    imagesSwimingCharacter = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwimingCharacter);
        this.animateCharacter();
    }


    animateCharacter() {
        setInterval(() => {
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }, 250);
    }
}