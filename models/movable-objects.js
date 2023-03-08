class MovableObjects extends DrawableObjects {
    otherDirection = false;
    speed = 2;
    offset = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
    lastHitThroughEletroSchock = 0;
    lastHitThroughPoisoned = 0;
    energy = 100;


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
            this.x + this.offset.left < collidingObject.x + collidingObject.width - collidingObject.offset.right &&  // ==> hinten
            this.y + this.height - this.offset.bottom > collidingObject.y + collidingObject.offset.top && // ==> unten
            this.y + this.offset.top < collidingObject.y + collidingObject.height - collidingObject.offset.bottom // ==> oben
    }


    hitThroughPufferFish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughPoisoned = new Date().getTime();
        }
    }


    isHurtThroughPoisoned() {
        let timeSpan = new Date().getTime() - this.lastHitThroughPoisoned;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    isDeadThroughPoisoned() {
        return this.energy == 0;
    }


    hitThroughJellyFish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughEletroSchock = new Date().getTime();
        }
    }


    // hit() {
    //     this.energy -= 10;
    //     if (this.energy < 0) {
    //         this.energy = 0;
    //     } else {
    //         this.lastHitThroughEletroSchock = new Date().getTime();
    //     }
    // }


    // isHurt() {
    //     let timeSpan = new Date().getTime() - this.lastHitThroughEletroSchock;
    //     timeSpan = timeSpan / 1000;
    //     return timeSpan < 1;
    // }


    isHurtThroughElectroShock() {
        let timeSpan = new Date().getTime() - this.lastHitThroughEletroSchock;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    isDeadThroughElectroShock() {
        return this.energy == 0;
    }


}
