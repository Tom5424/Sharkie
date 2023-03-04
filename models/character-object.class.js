class Character extends MovableObjects {
    x = 0;
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
    imagesSwimingCharacter = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    imagesIdleCharacter = [
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
    imagesLongIdleCharacter = [
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
    imagesElectricShock = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];
    imagesPoisoned = [
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



    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwimingCharacter);
        this.loadImages(this.imagesIdleCharacter);
        this.loadImages(this.imagesLongIdleCharacter);
        this.loadImages(this.imagesElectricShock);
        this.loadImages(this.imagesPoisoned);
        this.loadImages(this.imagesDeadElectroShock);
        this.loadImages(this.imagesDeadPoisoned);
        this.animateCharacter();
    }


    animateCharacter() {
        setInterval(() => { this.characterMove() }, 1000 / 10);
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
        return this.world.keyboard.right && this.x < 1800;
    }


    moveRight() {
        this.world.cameraX = -this.x - 10;
        this.otherDirection = false;
        this.x += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 0;
    }


    moveLeft() {
        this.world.cameraX = -this.x - 10;
        this.otherDirection = true;
        this.x -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 255;
    }


    moveDown() {
        this.y += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > -124;
    }


    moveUp() {
        this.y -= 15 - this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterIsElecticShocked() {
        if (this.energy > 0) {
            this.playAnimationMovableObject(this.imagesElectricShock);
        } else {
            this.isDead();
            this.characterIsDeadElectroShock();
        }
    }


    characterIsDeadElectroShock() {
        this.playAnimationMovableObject(this.imagesDeadElectroShock);
    }


    characterIsPoisoned() {
        if (this.energy > 0) {
            this.playAnimationMovableObject(this.imagesPoisoned);
        } else {
            this.isDead();
            this.characterIsDeadPoisoned();
        }
    }


    characterIsDeadPoisoned() {
        this.playAnimationMovableObject(this.imagesDeadPoisoned);
    }


}


