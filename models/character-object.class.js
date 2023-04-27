class Character extends MovableObjects {
    x = 50;
    y = 100;
    width = 300;
    height = 300;
    world;
    offset = {
        left: 80,
        right: 80,
        bottom: 100,
        top: 150,
    }
    bubble;
    poisonBubble;
    shootStandardBubble = false;
    shootPoisonBubble = false;
    didFinSlap = false;
    intervalSharkieShootStandardBubble;
    intervalSharkieShootPoisonBubble;
    intervalSharkieDoFinSlap;
    lastIdle = 0;
    longIdle = false;
    characterSleep = false;
    imagesSwimingCharacter = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    imagesCharacterIdle = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];
    imagesCharacterLongIdle = [
        'img/1.Sharkie/2.Long_IDLE/I1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];
    imagesCharacterSleep = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];
    imagesHitThroughJellyFish = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];
    imagesHitThroughPufferfish = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];
    imagesDeadElectroShock = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];
    imagesDeadPoisoned = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];
    imagesCharacterShootStandardBubble = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    imagesCharacterShootPoisonBubble = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    imagesCharacterFinSlap = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwimingCharacter);
        this.loadImages(this.imagesCharacterIdle);
        this.loadImages(this.imagesCharacterLongIdle);
        this.loadImages(this.imagesHitThroughJellyFish);
        this.loadImages(this.imagesHitThroughPufferfish);
        this.loadImages(this.imagesDeadElectroShock);
        this.loadImages(this.imagesDeadPoisoned);
        this.loadImages(this.imagesCharacterShootStandardBubble);
        this.loadImages(this.imagesCharacterShootPoisonBubble);
        this.loadImages(this.imagesCharacterFinSlap);
        this.characterAnimationsGenerally();
    }


    /**
     * This Function Animate the Character generally.
     * 
     */
    characterAnimationsGenerally() {
        setInterval(() => { this.animateCharacter() }, 1000 / 10);
        setInterval(() => { this.characterHitAndDeathAnimations() }, 1000 / 10);
        setInterval(() => { this.characterAttackAnimations() }, 1000 / 10);
    }


    /**
     * This Function Animate the Character.
     * 
     */
    animateCharacter() {
        if (this.characterCanMoveRight())
            this.moveRight();
        if (this.characterCanMoveLeft())
            this.moveLeft();
        if (this.characterCanMoveDown())
            this.moveDown();
        if (this.characterCanMoveUp())
            this.moveUp();
        if (this.characterCanIdle())
            this.characterIdle();
    }


    /**
     * This Function check, if the Character can move right.
     * 
     * @returns {boolean} - true or false, if the Character can move right.
     */
    characterCanMoveRight() {
        return this.world.keyboard.right && this.x < 2700 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    /**
     * This Function move the Character right.
     * 
     */
    moveRight() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.world.cameraX = -this.x + 50;
        this.otherDirection = false;
        this.x += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    /**
     * This Function check, if the Character can move left.
     * 
     * @returns {boolean} - true or false, if the Character can move left.
     */
    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 0 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    /**
     * This Function move the Character left.
     * 
     */
    moveLeft() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.world.cameraX = -this.x + 50;
        this.otherDirection = true;
        this.x -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    /**
     * This Function check, if the Character can move down.
     * 
     * @returns {boolean} - true or false, if the Character can move down.
     */
    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 300 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    /**
     * This Function move the Character down.
     * 
     */
    moveDown() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.y += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    /**
     * This Function check, if the Character can move up.
     * 
     * @returns {boolean} - true or false, if the Character can move up.
     */
    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > 37 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    /**
     * This Function move the Character up.
     * 
     */
    moveUp() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.y -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    /**
     * This Function  show the hit and death Animations from the Character.
     * 
     */
    characterHitAndDeathAnimations() {
        this.hitAndDeathAnimationsJellyFish();
        this.hitAndDeathAnimationsPufferFish();
        this.hitAndDeathAnimationsEndboss();
    }


    /**
     * This Function show the hit and death Animations through the Jelly Fish.
     * 
     */
    hitAndDeathAnimationsJellyFish() {
        if (this.isHurtThroughJellyFish()) {
            this.characterIsElektroSchoked();
        } else if (this.isDeadThroughJellyFish()) {
            this.characterIsDeadThroughElectroShocks();
            setTimeout(() => { stopAllIntervals() }, 600);
            showGameOverScreen();
            playSoundGameIsLost();
            resetSounds();
        }
    }


    /**
     * This Function play Animation if Character is Electro Shocked.
     * 
     */
    characterIsElektroSchoked() {
        this.playAnimationMovableObject(this.imagesHitThroughJellyFish);
    }


    /**
     * This Function check, if the Character die through Jelly Fish.
     * 
     * @returns {boolean} - true or false, if the Character die through Jelly Fish.
     */
    isDeadThroughJellyFish() {
        return this.diedThrough == 'jellyFish';
    }


    /**
     * This Function play Animation if Character is dead through Electro Shocked.
     * 
     */
    characterIsDeadThroughElectroShocks() {
        this.playAnimationMovableObject(this.imagesDeadElectroShock);
    }


    /**
     * This Function show the hit and death Animations through the Puffer Fish.
     * 
     */
    hitAndDeathAnimationsPufferFish() {
        if (this.isHurtThroughPufferFish()) {
            this.characterIsPoisoned();
        } else if (this.isDeadThroughPufferFish()) {
            this.characterIsDeadThroughPoisoned();
            setTimeout(() => { stopAllIntervals() }, 600);
            showGameOverScreen();
            playSoundGameIsLost();
            resetSounds();
        }
    }


    /**
     * This Function play Animation if Character is Poisoned.
     * 
     */
    characterIsPoisoned() {
        this.playAnimationMovableObject(this.imagesHitThroughPufferfish);
    }


    /**
     * This Function check, if the Character die through Puffer Fish.
     * 
     * @returns {boolean} - true or false, if the Character die through Puffer Fish.
     */
    isDeadThroughPufferFish() {
        return this.diedThrough == 'pufferFish';
    }


    /**
     * This Function show the hit and death Animations through the Endboss.
     * 
     */
    hitAndDeathAnimationsEndboss() {
        if (this.isHurtThroughEndboss()) {
            this.characterIsPoisoned();
        } else if (this.isDeadThroughEndboss()) {
            this.characterIsDeadThroughPoisoned();
            setTimeout(() => { stopAllIntervals() }, 600);
            showGameOverScreen();
            playSoundGameIsLost();
            resetSounds();
        }
    }


    /**
     * This Function check, if the Character die through Endboss.
     * 
     * @returns {boolean} - true or false, if the Character die through Endboss.
     */
    isDeadThroughEndboss() {
        return this.diedThrough == 'endboss';
    }


    /**
     * This Function play Animation if Character is Poisoned.
     * 
     */
    characterIsDeadThroughPoisoned() {
        this.playAnimationMovableObject(this.imagesDeadPoisoned);
    }


    /**
     * This Function check the direction from the Character, to shoot Bubbles in other Direction.
     * 
     */
    flipSharkieToShootBubbleInOtherDirection() {
        if (!this.otherDirection) {
            this.bubble = new Bubble(this.world.character.x + 220, this.world.character.y + 165);
        } else {
            this.bubble = new Bubble(this.world.character.x + 40, this.world.character.y + 170);
        }
        if (!this.otherDirection) {
            this.poisonBubble = new PoisonBubble(this.world.character.x + 220, this.world.character.y + 165);
        } else {
            this.poisonBubble = new PoisonBubble(this.world.character.x + 40, this.world.character.y + 170);
        }
    }


    /**
     * This Function play Attack Animations from the Character.
     * 
     */
    characterAttackAnimations() {
        this.flipSharkieToShootBubbleInOtherDirection();
        if (this.characterCanShootStandardBubble()) {
            this.characterShootBubbleStandard();
        } else if (this.characterCanShootPoisonBubble()) {
            this.characterShootPoisonBubble();
        } else if (this.characterCanDoFinSlap()) {
            this.characterDoFinSlap();
        }
    }


    /**
     * This Function check, if the Character can shoot normal Bubbles.
     * 
     * @returns {boolean} - true or false, if the Character can shoot normal Bubbles.
     */
    characterCanShootStandardBubble() {
        return this.world.keyboard.y && !this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.space && !this.didFinSlap && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    /**
     * With this Function shoot the Character normal Bubbles.
     * 
     */
    characterShootBubbleStandard() {
        playSoundShootBubble();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterShootStandardBubble();
        this.characterCarryOutShootBubbleStandard();
        this.clearIntervalShootedBubbleStandard();
    }


    /**
     * This Function play the Animation from Character, if shoot normal Bubbles.
     * 
     */
    playAnimationCharacterShootStandardBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootStandardBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootStandardBubble);
            this.shootStandardBubble = true;
        }, 60);
    }


    /**
     * This Function carry out to shoot normal Bubbles.
     * 
     */
    characterCarryOutShootBubbleStandard() {
        setTimeout(() => {
            this.world.bubbles.push(this.bubble);
            this.bubble.bubbleFlying(this.otherDirection);
            this.removeStandardBubbleAfterFewSeconds(this.bubble);
        }, 450);
    }


    /**
     * This Function clear the interval after shoot normal Bubbles.
     * 
     */
    clearIntervalShootedBubbleStandard() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootStandardBubble);
            this.shootStandardBubble = false;
        }, 500);
    }


    /**
     * This Function remove the normal Bubble after shoot, after a few Seconds.
     * 
     */
    removeStandardBubbleAfterFewSeconds(bubble) {
        setTimeout(() => {
            this.world.bubbles.splice(bubble, 1);
        }, 500);
    }


    /**
     * This Function check, if the Character can shoot poison Bubbles.
     * 
     * @returns {boolean} - true or false, if the Character can shoot poison Bubbles.
     */
    characterCanShootPoisonBubble() {
        return this.world.keyboard.x && !this.world.keyboard.y && !this.shootPoisonBubble && this.world.poisonVesselCapacity > 0 && !this.world.keyboard.space && !this.didFinSlap && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    /**
     * With this Function shoot the Character poison Bubbles.
     * 
     */
    characterShootPoisonBubble() {
        playSoundShootBubble();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterShootPoisonBubble();
        this.characterCarryOutShootBubblePoison();
        this.clearIntervalShootedBubblePoison();
    }


    /**
     * This Function play the Animation from Character, if shoot poison Bubbles.
     * 
     */
    playAnimationCharacterShootPoisonBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootPoisonBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootPoisonBubble);
            this.shootPoisonBubble = true;
        }, 60);
    }


    /**
     * This Function carry out to shoot poison Bubbles.
     * 
     */
    characterCarryOutShootBubblePoison() {
        this.world.poisonVesselCapacity--;
        this.reduceProgressFromProgressbarPoisonVesselIfCharacterShoot();
        this.world.prorgressBarPoison.updateProgressbar(this.world.character.porgressPoisonVessel);
        setTimeout(() => {
            this.world.poisonBubbles.push(this.poisonBubble);
            this.poisonBubble.bubbleFlying(this.world.character.otherDirection);
            this.removePoisonBubbleAfterFewSeconds(this.poisonBubble);
        }, 450);
    }



    /**
     * This Function remove the poison Bubble after shoot, after a few Seconds.
     * 
     */
    removePoisonBubbleAfterFewSeconds(poisonBubble) {
        setTimeout(() => {
            this.world.poisonBubbles.splice(poisonBubble, 1);
        }, 500);
    }


    /**
     * This Function clear the interval after shoot poison Bubbles.
     * 
     */
    clearIntervalShootedBubblePoison() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootPoisonBubble);
            this.shootPoisonBubble = false;
        }, 500);
    }


    /**
     * This Function check, if the Character can do the Fin Slap Attack.
     * 
     * @returns {boolean} - true or false, if the Character can do the Fin Slap Attack
     */
    characterCanDoFinSlap() {
        return this.world.keyboard.space && !this.didFinSlap && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.y && !this.shootStandardBubble && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    /**
     * With this Function the Character do the Fin Slap Attack.
     * 
     */
    characterDoFinSlap() {
        playSoundCharacterDoFinSlap();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterDoFinSlap();
        this.clearIntervalDidFinSlap();
    }


    /**
     * This Function play Animation from the Fin Slap Attack.
     * 
     */
    playAnimationCharacterDoFinSlap() {
        this.currentImage = 0;
        this.didFinSlap = true;
        this.intervalSharkieDoFinSlap = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterFinSlap);
        }, 60);
    }


    /**
     * This Function clear the interval after the Fin Slap Attack.
     * 
     */
    clearIntervalDidFinSlap() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieDoFinSlap);
            this.didFinSlap = false;
        }, 550);
    }


    /**
     * This Function check, if the Character can idle.
     * 
     * @returns {boolean} - true or false, if the Character can idle
     */
    characterCanIdle() {
        let timeSpanIdle = new Date().getTime() - this.lastIdle;
        timeSpanIdle = timeSpanIdle / 1000;
        return timeSpanIdle > 0.8;
    }


    /**
     * With this Function the Character idle.
     * 
     */
    characterIdle() {
        let lastFourLongIdleImages = this.imagesCharacterLongIdle.slice(-4);
        if (this.characterStillNotIdle()) {
            this.characterStartIdle();
        }
        if (this.characterStillNotLongIdle()) {
            this.characterStartLongIdle();
        }
        if (this.characterStartSleeping()) {
            this.characterSleeping(lastFourLongIdleImages);
        }
    }


    /**
     * This Function check, if the Character stil not idle.
     * 
     * @returns {boolean} - true or false, if the Character still not idle
     */
    characterStillNotIdle() {
        return !this.longIdle && !this.characterSleep;
    }


    /**
     * With this Function the Character start idle.
     * 
     */
    characterStartIdle() {
        this.playAnimationMovableObject(this.imagesCharacterIdle);
        setTimeout(() => {
            this.longIdle = true;
        }, 1800);
    }


    /**
     * This Function check, if the Character is still not long idle.
     * 
     * @returns {boolean} - true or false, if the character still not long idle
     */
    characterStillNotLongIdle() {
        return this.longIdle;
    }


    /**
     * With this Function Character start long idle.
     * 
     */
    characterStartLongIdle() {
        this.playAnimationMovableObject(this.imagesCharacterLongIdle);
        setTimeout(() => {
            this.characterSleep = true;
        }, 250);
    }


    /**
     * This Function check, if the character is sleep or not.
     * 
     * @returns {boolean} - true or false, if the Character still not sleep.
     */
    characterStartSleeping() {
        return this.characterSleep;
    }


    /**
     * With this Function Character start sleep.
     * 
     */
    characterSleeping(lastFourLongIdleImages) {
        playSoundCharacterIdle();
        this.playAnimationMovableObject(lastFourLongIdleImages);
        if (this.y <= 260) {
            this.y += 2;
        }
    }


    /**
     * This Function save the time stamp after Animation.
     * 
     */
    saveTimeStampAfterAnimation() {
        this.longIdle = false;
        this.characterSleep = false;
        this.lastIdle = new Date().getTime();
        audioCharacterIdle.pause();
        audioCharacterIdle.currentTime = 0;
    }
}


