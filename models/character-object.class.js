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

    characterAnimationsGenerally() {
        setInterval(() => { this.animateCharacter() }, 1000 / 10);
        setInterval(() => { this.characterHitAndDeathAnimations() }, 1000 / 10);
        setInterval(() => { this.characterAttackAnimations() }, 1000 / 10);
    }


    animateCharacter() {
        if (this.characterCanMoveRight()) {
            this.moveRight();
        } else if (this.characterCanMoveLeft()) {
            this.moveLeft();
        } else if (this.characterCanMoveDown()) {
            this.moveDown();
        } else if (this.characterCanMoveUp()) {
            this.moveUp();
        } else if (this.characterCanIdle()) {
            this.characterIdle();
        }
    }


    characterCanMoveRight() {
        return this.world.keyboard.right && this.x < 2700 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    moveRight() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.world.cameraX = -this.x + 50;
        this.otherDirection = false;
        this.x += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 0 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    moveLeft() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.world.cameraX = -this.x + 50;
        this.otherDirection = true;
        this.x -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 300 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    moveDown() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.y += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > 37 && !this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap;
    }


    moveUp() {
        playSoundCharacterMove();
        this.saveTimeStampAfterAnimation();
        this.y -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterHitAndDeathAnimations() {
        this.hitAndDeathAnimationsJellyFish();
        this.hitAndDeathAnimationsPufferFish();
        this.hitAndDeathAnimationsEndboss();
    }


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


    characterIsElektroSchoked() {
        this.playAnimationMovableObject(this.imagesHitThroughJellyFish);
    }


    isDeadThroughJellyFish() {
        return this.diedThrough == 'jellyFish';
    }


    characterIsDeadThroughElectroShocks() {
        this.playAnimationMovableObject(this.imagesDeadElectroShock);
    }


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


    characterIsPoisoned() {
        this.playAnimationMovableObject(this.imagesHitThroughPufferfish);
    }


    isDeadThroughPufferFish() {
        return this.diedThrough == 'pufferFish';
    }


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


    isDeadThroughEndboss() {
        return this.diedThrough == 'endboss';
    }


    characterIsDeadThroughPoisoned() {
        this.playAnimationMovableObject(this.imagesDeadPoisoned);
    }


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


    characterCanShootStandardBubble() {
        return this.world.keyboard.y && !this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.space && !this.didFinSlap && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    characterShootBubbleStandard() {
        playSoundShootBubble();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterShootStandardBubble();
        this.characterCarryOutShootBubbleStandard();
        this.clearIntervalShootedBubbleStandard();
    }


    playAnimationCharacterShootStandardBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootStandardBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootStandardBubble);
            this.shootStandardBubble = true;
        }, 60);
    }


    characterCarryOutShootBubbleStandard() {
        setTimeout(() => {
            this.world.bubbles.push(this.bubble);
            this.bubble.bubbleFlying(this.otherDirection);
            this.removeStandardBubbleAfterFewSeconds(this.bubble);
        }, 450);
    }


    clearIntervalShootedBubbleStandard() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootStandardBubble);
            this.shootStandardBubble = false;
        }, 500);
    }


    removeStandardBubbleAfterFewSeconds(bubble) {
        setTimeout(() => {
            this.world.bubbles.splice(bubble, 1);
        }, 500);
    }


    characterCanShootPoisonBubble() {
        return this.world.keyboard.x && !this.world.keyboard.y && !this.shootPoisonBubble && this.world.poisonVesselCapacity > 0 && !this.world.keyboard.space && !this.didFinSlap && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    characterShootPoisonBubble() {
        playSoundShootBubble();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterShootPoisonBubble();
        this.characterCarryOutShootBubblePoison();
        this.clearIntervalShootedBubblePoison();
    }


    playAnimationCharacterShootPoisonBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootPoisonBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootPoisonBubble);
            this.shootPoisonBubble = true;
        }, 60);
    }


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


    removePoisonBubbleAfterFewSeconds(poisonBubble) {
        setTimeout(() => {
            this.world.poisonBubbles.splice(poisonBubble, 1);
        }, 500);
    }


    clearIntervalShootedBubblePoison() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootPoisonBubble);
            this.shootPoisonBubble = false;
        }, 500);
    }


    characterCanDoFinSlap() {
        return this.world.keyboard.space && !this.didFinSlap && !this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.y && !this.shootStandardBubble && !this.isHurtThroughJellyFish() && !this.isHurtThroughPufferFish() && !this.isHurtThroughEndboss();
    }


    characterDoFinSlap() {
        playSoundCharacterDoFinSlap();
        this.saveTimeStampAfterAnimation();
        this.playAnimationCharacterDoFinSlap();
        this.clearIntervalDidFinSlap();
    }


    playAnimationCharacterDoFinSlap() {
        this.currentImage = 0;
        this.didFinSlap = true;
        this.intervalSharkieDoFinSlap = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterFinSlap);
        }, 60);
    }


    clearIntervalDidFinSlap() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieDoFinSlap);
            this.didFinSlap = false;
        }, 550);
    }


    characterCanIdle() {
        let timeSpanIdle = new Date().getTime() - this.lastIdle;
        timeSpanIdle = timeSpanIdle / 1000;
        return timeSpanIdle > 2;
    }


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


    characterStillNotIdle() {
        return !this.longIdle && !this.characterSleep;
    }


    characterStartIdle() {
        this.playAnimationMovableObject(this.imagesCharacterIdle);
        setTimeout(() => {
            this.longIdle = true;
        }, 1800);
    }


    characterStillNotLongIdle() {
        return this.longIdle;
    }


    characterStartLongIdle() {
        this.playAnimationMovableObject(this.imagesCharacterLongIdle);
        setTimeout(() => {
            this.characterSleep = true;
        }, 250);
    }


    characterStartSleeping() {
        return this.characterSleep;
    }


    characterSleeping(lastFourLongIdleImages) {
        playSoundCharacterIdle();
        this.playAnimationMovableObject(lastFourLongIdleImages);
        if (this.y <= 260) {
            this.y += 2;
        }
    }


    saveTimeStampAfterAnimation() {
        this.longIdle = false;
        this.characterSleep = false;
        this.lastIdle = new Date().getTime();
        audioCharacterIdle.pause();
        audioCharacterIdle.currentTime = 0;
    }
}


