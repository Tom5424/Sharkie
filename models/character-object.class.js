class Character extends MovableObjects {
    x = 20;
    y = 100;
    width = 300;
    height = 300;
    world;
    speed = 0.5;
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
            this.playAnimationMovableObject(this.imagesSwimingCharacter);
        } else if (this.characterCanMoveLeft()) {
            this.moveLeft();
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
        return this.x += 10 + this.speed;
    }


    characterCanMoveLeft() {
        return this.world.keyboard.left
    }


    moveLeft() {
        return this.x -= 10 - this.speed;
    }


    characterCanMoveDown() {
        return this.world.keyboard.down
    }


    moveDown() {
        return this.y += 10 + this.speed;
    }


    characterCanMoveUp() {
        return this.world.keyboard.up
    }


    moveUp() {
        return this.y -= 10 - this.speed;
    }
}