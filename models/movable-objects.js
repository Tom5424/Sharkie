class MovableObjects extends DrawableObjects {
    otherDirection = false;
    speed = 2;
    energy = 100;
    offset = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }


    moveLeft() {
        setInterval(() => {
            this.x = this.x - 5;
        }, 1000 / 15);
    }


    playAnimationMovableObject(imagesMovableObject) {
        let index = this.currentImage % imagesMovableObject.length;
        let currentPath = imagesMovableObject[index];
        this.img = this.imageCache[currentPath];
        this.currentImage++;
    }


    // moveJellyFish() {
    //     let i = 0;
    //     setInterval(() => {
    //         if (i < 5) {
    //             this.y -= 15 - this.speed;
    //         } else {
    //             this.y += 15 + this.speed;
    //         }
    //         i++;
    //     }, 800);
    // }


    isColliding(collidingObject) {
        return this.x + this.width - this.offset.right > collidingObject.x + collidingObject.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > collidingObject.y + collidingObject.offset.top && // ==> unten
            this.x + this.offset.left < collidingObject.x + collidingObject.width - collidingObject.offset.right &&  // ==> hinten
            this.y + this.offset.top < collidingObject.y + collidingObject.height - collidingObject.offset.bottom // ==> oben
    }


    isHurt() {
        return this.energy -= 5;
    }


    isDead() {
        return this.energy = 0;
    }
}