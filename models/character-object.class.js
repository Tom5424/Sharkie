class Character extends MovableObjects {
    x = 60;
    y = 100;
    width = 300;
    height = 300;
    world;
    speed = 2;
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
        return this.world.keyboard.right;
    }


    moveRight() {
        this.world.cameraX = -this.x;
        this.otherDirection = false;
        this.x += 15 + this.speed;
        this.playAnimationMovableObject(this.imagesSwimingCharacter);
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > 60;
    }


    moveLeft() {
        this.world.cameraX = -this.x;
        this.x -= 15 - this.speed;
        this.otherDirection = true;
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
}