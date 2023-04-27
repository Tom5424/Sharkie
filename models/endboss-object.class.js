class Endboss extends MovableObjects {
    x = 3200;
    y = -50;
    width = 650;
    height = 650;
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
        this.animateEndbossGenerally();
    }


    /**
     * This Function Animate the Character generally.
     * 
     */
    animateEndbossGenerally() {
        this.intervalEndbossSpawn = setInterval(() => { this.endbossFightStart() }, 150);
        this.intervalEndbossSwiming = setInterval(() => { this.endbossFightIsInProgress() }, 160);
        setInterval(() => { this.endbossFightIsDone() }, 200);
    }


    /**
     * With this Function the Endboss Figth Start.
     * 
     */
    endbossFightStart() {
        if (this.endbossCanSpawn()) {
            this.endbossSpawn();
        }
    }


    /**
     * This Function check, if the Endboss can spawn.
     * 
     * @returns {boolean} - true or false, if Endboss can spawn
     */
    endbossCanSpawn() {
        return world.character.x > 2600 && !this.hadFirstContactWithEndboss && audioEndbossSpawn.play();
    }


    /**
     * With this Function the Endboss spawn.
     * 
     */
    endbossSpawn() {
        this.playAnimationMovableObject(this.imagesEndbossSpawn);
        setTimeout(() => {
            clearInterval(this.intervalEndbossSpawn);
            this.hadFirstContactWithEndboss = true;
        }, 1300);
    }


    /**
     * With this Function Endboss Figth is in Progress.
     * 
     */
    endbossFightIsInProgress() {
        if (this.endbossIsSpawn()) {
            playBackgroundMusicEndboss();
            this.endbossStartSwiming();
        }
        if (this.endbossIsHurt()) {
            this.endbossHurtAndDashForward();
        }
        if (this.endbossCanStartRageMode()) {
            this.endbossRage();
        }
    }


    /**
     * This Function check, if the Endboss can spawn.
     * 
     * @returns {boolean} - true or false, if the Endboss can spawn
     */
    endbossIsSpawn() {
        return this.hadFirstContactWithEndboss;
    }


    /**
     * With this Function the Endboss start swimming.
     * 
     */
    endbossStartSwiming() {
        this.playAnimationMovableObject(this.imagesEndbossAttack);
        this.endbossMoveLeft();
    }


    /**
     * With this Function the Endboss move left.
     * 
     */
    endbossMoveLeft() {
        if (!this.endbossIsHurt()) {
            playSoundEndbossBites();
        }
        this.x -= 10 - this.speed;
    }


    /**
     * With this Function the Endboss dash forward, if he get a hit.
     * 
     */
    endbossHurtAndDashForward() {
        this.playAnimationMovableObject(this.imagesEndbossHurt);
        this.x -= 11 - this.speed;
    }


    /**
     * This Function check, if the Endboss can rage, if his HP is equal or lower then 50.
     * 
     * @returns {boolean} - true or false, if the Endboss can start raging
     */
    endbossCanStartRageMode() {
        return this.energyEndboss <= 50;
    }


    /**
     * With this Function the Endboss swimm faster.
     * 
     */
    endbossRage() {
        this.x -= 11 - this.speed;
    }


    /**
     * With this Function the Endboss figth is done.
     * 
     */
    endbossFightIsDone() {
        if (this.endbossIsDead()) {
            this.gameIsOver(this.intervalEndbossSwiming);
        }
    }


    /**
     * This Function check, if the Endboss is dead.
     * 
     * @returns {boolean} - true or false, if the Endboss is dead.
     */
    endbossIsDead() {
        return this.energyEndboss == 0;
    }


    /**
     * With this Function the game is over.
     * 
     */
    gameIsOver() {
        clearInterval(this.intervalEndbossSwiming);
        this.playAnimationMovableObject(this.imagesEndbossDead);
        setTimeout(() => { stopAllIntervals() }, 620);
        showWinScreen();
        playSoundGameIsWin();
        resetSounds();
    }
}