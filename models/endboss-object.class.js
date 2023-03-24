class Endboss extends MovableObjects {
    x = 3200;
    y = -50;
    width = 550;
    height = 600;
    hadFirstContactWithEndboss = false;
    intervalEndbossSpawn;
    intervalEndbossSwiming;
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
    imagesEndbossAttack = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];
    imagesEndbossHurt = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];
    imagesEndbossDead = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];


    constructor() {
        super().loadImages(this.imagesEndbossSpawn);
        this.loadImages(this.imagesEndbossSwiming);
        this.loadImages(this.imagesEndbossAttack);
        this.loadImages(this.imagesEndbossHurt);
        this.loadImages(this.imagesEndbossDead);
        this.animateEndboss();
    }


    animateEndboss() {
        this.endbossFightStart();
        this.endbossFightIsInProgress();
        this.endbossFightIsDone();
    }


    endbossFightStart() {
        this.intervalEndbossSpawn = setInterval(() => {
            if (this.endbossCanSpawn()) {
                this.endbossSpawn();
            }
        }, 150);
    }


    endbossCanSpawn() {
        return world.character.x > 2600 && !this.hadFirstContactWithEndboss;
    }


    endbossSpawn() {
        this.playAnimationMovableObject(this.imagesEndbossSpawn);
        setTimeout(() => {
            clearInterval(this.intervalEndbossSpawn);
            this.hadFirstContactWithEndboss = true;
        }, 1300);
    }


    endbossFightIsInProgress() {
        this.intervalEndbossSwiming = setInterval(() => {
            if (this.endbossIsSpawn()) {
                this.endbossStartSwiming();
            }
            if (this.endbossIsHurt()) {
                this.endbossHurt();
            }
        }, 200);
    }


    endbossIsSpawn() {
        return this.hadFirstContactWithEndboss;
    }


    endbossStartSwiming() {
        this.playAnimationMovableObject(this.imagesEndbossSwiming);
        this.playAnimationMovableObject(this.imagesEndbossAttack);
        this.endbossMoveLeft();
    }


    endbossMoveLeft() {
        this.x -= 20 - this.speed;
    }


    endbossHurt() {
        this.playAnimationMovableObject(this.imagesEndbossHurt);
    }


    endbossFightIsDone() {
        setInterval(() => {
            if (this.endbossIsDead()) {
                this.gameIsOver(this.intervalEndbossSwiming);
            }
        }, 200);
    }


    endbossIsDead() {
        return this.energyEndboss == 0;
    }


    gameIsOver() {
        setTimeout(() => {
            clearInterval(this.intervalEndbossSwiming);
            this.playAnimationMovableObject(this.imagesEndbossDead);
        }, 1000);
    }
}