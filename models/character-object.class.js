class Character extends MovableObjects {
    x = 50;
    y = 100;
    width = 300;
    height = 300;
    world;
    lastIdle = new Date().getTime();
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
    intervalSharkieShootStandardBubble;
    intervalSharkieShootPoisonBubble;
    imagesSwimingCharacter = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    // imagesIdleCharacter = [
    //     'img/1.Sharkie/1.IDLE/1.png',
    //     'img/1.Sharkie/1.IDLE/2.png',
    //     'img/1.Sharkie/1.IDLE/3.png',
    //     'img/1.Sharkie/1.IDLE/4.png',
    //     'img/1.Sharkie/1.IDLE/5.png',
    //     'img/1.Sharkie/1.IDLE/6.png',
    //     'img/1.Sharkie/1.IDLE/7.png',
    //     'img/1.Sharkie/1.IDLE/8.png',
    //     'img/1.Sharkie/1.IDLE/9.png',
    //     'img/1.Sharkie/1.IDLE/10.png',
    //     'img/1.Sharkie/1.IDLE/11.png',
    //     'img/1.Sharkie/1.IDLE/12.png',
    //     'img/1.Sharkie/1.IDLE/13.png',
    //     'img/1.Sharkie/1.IDLE/14.png',
    //     'img/1.Sharkie/1.IDLE/15.png',
    //     'img/1.Sharkie/1.IDLE/16.png',
    //     'img/1.Sharkie/1.IDLE/17.png',
    //     'img/1.Sharkie/1.IDLE/18.png',
    // ];
    // imagesLongIdleCharacter = [
    //     'img/1.Sharkie/2.Long_IDLE/i1.png',
    //     'img/1.Sharkie/2.Long_IDLE/i2.png',
    //     'img/1.Sharkie/2.Long_IDLE/i3.png',
    //     'img/1.Sharkie/2.Long_IDLE/i4.png',
    //     'img/1.Sharkie/2.Long_IDLE/i5.png',
    //     'img/1.Sharkie/2.Long_IDLE/i6.png',
    //     'img/1.Sharkie/2.Long_IDLE/i7.png',
    //     'img/1.Sharkie/2.Long_IDLE/i8.png',
    //     'img/1.Sharkie/2.Long_IDLE/i9.png',
    //     'img/1.Sharkie/2.Long_IDLE/i10.png',
    //     'img/1.Sharkie/2.Long_IDLE/i11.png',
    //     'img/1.Sharkie/2.Long_IDLE/i12.png',
    //     'img/1.Sharkie/2.Long_IDLE/i13.png',
    //     'img/1.Sharkie/2.Long_IDLE/i14.png',
    // ];
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


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwimingCharacter);
        // this.loadImages(this.imagesIdleCharacter);
        // this.loadImages(this.imagesLongIdleCharacter);
        this.loadImages(this.imagesHitThroughJellyFish);
        this.loadImages(this.imagesHitThroughPufferfish);
        this.loadImages(this.imagesDeadElectroShock);
        this.loadImages(this.imagesDeadPoisoned);
        this.loadImages(this.imagesCharacterShootStandardBubble);
        this.loadImages(this.imagesCharacterShootPoisonBubble);
        this.animateCharacter();
    }


    animateCharacter() {
        setInterval(() => { this.characterMove() }, 1000 / 10);
        setInterval(() => { this.characterHitAnimationsThroughEnemies() }, 1000 / 10);
        setInterval(() => { this.characterShootStandardBubbles() }, 1000 / 10);
        setInterval(() => { this.characterShootPoisonBubble() }, 1000 / 10);
    }


    characterMove() {
        if (this.characterCanMoveRight()) {
            this.moveRight();
        } else if (this.characterCanMoveLeft()) {
            this.moveLeft();
        } else if (this.characterCanMoveDown()) {
            this.moveDown();
        } else if (this.characterCanMoveUp()) {
            this.moveUp();
        }
    }


    characterCanMoveRight() {
        return this.world.keyboard.right;
    }


    moveRight() {
        this.world.cameraX = -this.x + 50;
        this.otherDirection = false;
        this.x += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 0;
    }


    moveLeft() {
        this.world.cameraX = -this.x + 50;
        this.otherDirection = true;
        this.x -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 350;
    }


    moveDown() {
        this.y += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > 30;
    }


    moveUp() {
        this.y -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterHitAnimationsThroughEnemies() {
        if (this.isHurtThroughJellyFish()) {
            this.characterIsElektroSchoked();
        } else if (this.isDeadThroughJellyFish()) {
            this.characterIsDeadThroughElectroShocks();
        } else if (this.isHurtThroughPufferFish()) {
            this.characterIsPoisoned();
        } else if (this.isDeadThroughPufferFish()) {
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


    characterShootStandardBubbles() {
        this.flipSharkieToShootBubbleInOtherDirection();
        if (this.characterCanShootStandardBubble()) {
            this.playAnimationCharacterShootStandardBubble();
            this.characterShootBubbleStandard();
            this.clearIntervalShootedBubbleStandard();
        }
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


    characterCanShootStandardBubble() {
        return this.world.keyboard.y && !this.shootStandardBubble && !this.world.keyboard.up && !this.world.keyboard.down && !this.world.keyboard.right && !this.world.keyboard.left;
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
            this.bubble.bubbleFlying(this.world.character.otherDirection);
            this.removeBubbleAfterFewSeconds(this.bubble);
        }, 450);
    }


    clearIntervalShootedBubbleStandard() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootStandardBubble);
            this.shootStandardBubble = false;
        }, 550);
    }


    removeBubbleAfterFewSeconds(bubble) {
        setTimeout(() => {
            this.world.bubbles.splice(bubble, 1);
        }, 800);
    }


    characterShootPoisonBubble() {
        this.flipSharkieToShootBubbleInOtherDirection();
        if (this.characterCanShootPoisonBubble()) {
            this.playAnimationCharacterShootPoisonBubble();
            this.characterShootBubblePoison();
            this.clearIntervalShootedBubblePoison();
        }
    }


    characterCanShootPoisonBubble() {
        return this.world.keyboard.x && !this.shootPoisonBubble && !this.world.keyboard.up && !this.world.keyboard.down && !this.world.keyboard.right && !this.world.keyboard.left;
    }


    playAnimationCharacterShootPoisonBubble() {
        this.currentImage = 0;
        this.intervalSharkieShootPoisonBubble = setInterval(() => {
            this.playAnimationMovableObject(this.imagesCharacterShootPoisonBubble);
            this.shootPoisonBubble = true;
        }, 60);
    }


    characterShootBubblePoison() {
        setTimeout(() => {
            this.world.poisonBubbles.push(this.poisonBubble);
            this.poisonBubble.bubbleFlying(this.world.character.otherDirection);
            this.removeBubbleAfterFewSeconds(this.poisonBubble);
        }, 450);
    }


    clearIntervalShootedBubblePoison() {
        setTimeout(() => {
            clearInterval(this.intervalSharkieShootPoisonBubble);
            this.shootPoisonBubble = false;
        }, 550);
    }
}

