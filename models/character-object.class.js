class Character extends MovableObjects {
    x = -40;
    y = 100;
    width = 300;
    height = 300;
    world;
    speed = 1;
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
            this.otherDirection = false;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        } else if (this.characterCanMoveLeft()) {
            this.moveLeft();
            this.otherDirection = true;
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        } else if (this.characterCanMoveDown()) {
            this.moveDown();
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        } else if (this.characterCanMoveUp()) {
            this.moveUp();
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        }
    }


    characterCanMoveRight() {
        return this.world.keyboard.right;
    }


    moveRight() {
        return this.x += 12 + this.speed;
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left && this.x > -40;
    }


    moveLeft() {
        return this.x -= 12 - this.speed;
    }


    characterCanMoveDown() {
        return this.world.keyboard.down && this.y < 255;
    }


    moveDown() {
        return this.y += 12 + this.speed;
    }


    characterCanMoveUp() {
        return this.world.keyboard.up && this.y > -124;
    }


    moveUp() {
        return this.y -= 12 - this.speed;
    }
}