class Endboss extends MovableObjects {
    x = 2500;
    y = -50;
    width = 550;
    height = 600;
    hadFirstContactWithEndboss = false;
    imagesEndbossSpawn = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];
    imagesEndbossSwiming = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];


    constructor() {
        super().loadImages(this.imagesEndbossSpawn);
        this.loadImages(this.imagesEndbossSwiming);
        this.animateEndboss();
    }


    animateEndboss() {
        let intervalEndbossSpawn = setInterval(() => {
            if (this.endbossCanSpawn()) {
                this.endbossSpawn(intervalEndbossSpawn);
            }
        }, 150);
        setInterval(() => {
            if (this.endbossIsSpawn()) {
                this.endbossStartMoving();
            }
        }, 1000 / 10);
    }


    endbossCanSpawn() {
        return world.character.x > 2200 && !this.hadFirstContactWithEndboss;
    }


    endbossSpawn(intervalEndbossSpawn) {
        this.playAnimationMovableObject(this.imagesEndbossSpawn);
        setTimeout(() => {
            clearInterval(intervalEndbossSpawn);
            this.hadFirstContactWithEndboss = true;
        }, 1300);
    }


    endbossIsSpawn() {
        return this.hadFirstContactWithEndboss;
    }


    endbossStartMoving() {
        this.playAnimationMovableObject(this.imagesEndbossSwiming);
        this.endbossMoveLeft();
    }


    endbossMoveLeft() {
        this.x -= 10 - this.speed;
    }
}