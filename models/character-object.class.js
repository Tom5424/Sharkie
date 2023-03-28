class Character extends MovableObjects {
    x = 50;
    y = 100;
    width = 300;
    height = 300;
    world;
    offset = {
        left: 80,
        right: 80,
        bottom: 90,
        top: 180
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
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png',
        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png',
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
        setInterval(() => { this.characterMoveAnimations() }, 1000 / 10);
        setInterval(() => { this.animateCharacter() }, 1000 / 10);
        setInterval(() => { this.characterAttackAnimations() }, 1000 / 10);
    }


    characterMoveAnimations() {
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
        return this.world.keyboard.right && this.x < 2700;
    }


    moveRight() {
        if (!this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.y && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap) {
            this.characterSleep = false;
            this.longIdle = false;
            this.lastIdle = new Date().getTime();
            this.world.cameraX = -this.x + 50;
            this.otherDirection = false;
            this.x += 15 + this.speed;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 0;
    }


    moveLeft() {
        if (!this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.y && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap) {
            this.characterSleep = false;
            this.longIdle = false;
            this.lastIdle = new Date().getTime();
            this.world.cameraX = -this.x + 50;
            this.otherDirection = true;
            this.x -= 15 - this.speed;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }
    }


    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 350;
    }


    moveDown() {
        if (!this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.y && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap) {
            this.characterSleep = false;
            this.longIdle = false;
            this.lastIdle = new Date().getTime();
            this.y += 15 + this.speed;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }
    }


    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > 37;
    }


    moveUp() {
        if (!this.world.keyboard.x && !this.shootStandardBubble && !this.world.keyboard.y && !this.shootPoisonBubble && !this.world.keyboard.space && !this.didFinSlap) {
            this.characterSleep = false;
            this.longIdle = false;
            this.lastIdle = new Date().getTime();
            this.y -= 15 - this.speed;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }
    }


    animateCharacter() {
        if (this.isHurtThroughJellyFish()) {
            this.characterIsElektroSchoked();
        } else if (this.isDeadThroughJellyFish()) {
            this.characterIsDeadThroughElectroShocks();
        } else if (this.isHurtThroughPufferFish()) {
            this.characterIsPoisoned();
        } else if (this.isDeadThroughPufferFish()) {
            this.characterIsDeadThroughPoisoned();
        } else if (this.isHurtThroughEndboss()) {
            this.characterIsPoisoned();
        } else if (this.isDeadThroughEndboss()) {
            this.characterIsDeadThroughPoisoned();
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


    characterIsPoisoned() {
        this.playAnimationMovableObject(this.imagesHitThroughPufferfish);
    }


    isDeadThroughPufferFish() {
        return this.diedThrough == 'pufferFish';
    }


    characterIsDeadThroughPoisoned() {
        this.playAnimationMovableObject(this.imagesDeadPoisoned);
    }


    isDeadThroughEndboss() {
        return this.diedThrough == 'endboss';
    }


    flipSharkieToShootBubbleInOtherDirection() {
        if (!this.otherDirection) {
            this.bubble = new Bubble(this.world.character.x + 220, this.world.character.y + 165);
        } else {
            this.bubble = new Bubble(this.world.character.x + 50, this.world.character.y + 170);
        }
        if (!this.otherDirection) {
            this.poisonBubble = new PoisonBubble(this.world.character.x + 220, this.world.character.y + 165);
        } else {
            this.poisonBubble = new PoisonBubble(this.world.character.x + 50, this.world.character.y + 170);
        }
    }


    characterAttackAnimations() {
        this.flipSharkieToShootBubbleInOtherDirection();
        if (this.characterCanShootStandardBubble() && !this.characterCanIdle()) {
            this.playAnimationCharacterShootStandardBubble();
            this.characterShootBubbleStandard();
            this.clearIntervalShootedBubbleStandard();
        } else if (this.characterCanShootPoisonBubble()) {
            this.playAnimationCharacterShootPoisonBubble();
            this.characterShootBubblePoison();
            this.clearIntervalShootedBubblePoison();
        } else if (this.characterCanDoFinSlap()) {
            this.playAnimationCharacterDoFinSlap();
            this.clearIntervalDidFinSlap();
        }
    }


    characterCanShootStandardBubble() {
        return this.world.keyboard.y && !this.shootStandardBubble;
    }


    playAnimationCharacterShootStandardBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootStandardBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootStandardBubble);
            this.shootStandardBubble = true;
        }, 60);
    }


    characterShootBubbleStandard() {
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
        return this.world.keyboard.x && !this.shootPoisonBubble && !this.characterCanIdle() && this.world.poisonVesselCapacity > 0;
    }


    playAnimationCharacterShootPoisonBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootPoisonBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootPoisonBubble);
            this.shootPoisonBubble = true;
        }, 60);
    }


    characterShootBubblePoison() {
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
        return this.world.keyboard.space && !this.didFinSlap && !this.characterCanIdle();
    }


    playAnimationCharacterDoFinSlap() {
        this.currentImage = 0;
        this.didFinSlap = true;
        this.intervalSharkieDoFinSlap = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterFinSlap);
        }, 70);
    }


    clearIntervalDidFinSlap() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieDoFinSlap);
            this.didFinSlap = false;
        }, 630);
    }


    characterCanIdle() {
        let timeSpanIdle = new Date().getTime() - this.lastIdle;
        timeSpanIdle = timeSpanIdle / 1000;
        return timeSpanIdle > 3;
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
        return !this.longIdle && !this.characterSleep && !this.world.keyboard.space && !this.didFinSlap;
    }


    characterStartIdle() {
        this.playAnimationMovableObject(this.imagesCharacterIdle);
        setTimeout(() => {
            this.longIdle = true;
        }, 1000);
    }


    characterStillNotLongIdle() {
        return this.longIdle;
    }


    characterStartLongIdle() {
        this.playAnimationMovableObject(this.imagesCharacterLongIdle);
        setTimeout(() => {
            this.characterSleep = true;
        }, 200);
    }


    characterStartSleeping() {
        return this.characterSleep;
    }


    characterSleeping(lastFourLongIdleImages) {
        this.playAnimationMovableObject(lastFourLongIdleImages);
    }
}


