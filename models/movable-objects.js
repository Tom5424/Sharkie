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
    lastHitThroughEndboss = 0;
    characterLastHitAgainstEndboss = 0;
    energy = 100;
    energyEndboss = 100;
    porgressCoin = 0;
    porgressPoisonVessel = 0;
    diedThrough = '';
    swimUp = false;


    playAnimationMovableObject(imagesMovableObject) {
        let index = this.currentImage % imagesMovableObject.length;
        let currentPath = imagesMovableObject[index];
        this.img = this.imageCache[currentPath];
        this.currentImage++;
    }


    jeyllyFishSwimUpAndDown() {
        if (this.y > 150 && !this.swimUp) {
            this.y -= 15 - Math.round(Math.random() * 10);
        } else {
            this.swimUp = true;
            this.y += 15 + Math.round(Math.random() * 10);
        }
        if (this.y > 500) {
            this.swimUp = false;
            this.y -= 15 - Math.round(Math.random() * 10);
        }
    }


    isColliding(collidingObject) {
        return this.x + this.offset.left < collidingObject.x + collidingObject.width - collidingObject.offset.right &&  // ==> hinten
            this.x + this.width - this.offset.right > collidingObject.x + collidingObject.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > collidingObject.y + collidingObject.offset.top && // ==> unten
            this.y + this.offset.top < collidingObject.y + collidingObject.height - collidingObject.offset.bottom; // ==> oben
    }


    isCollected(collectedObject) {
        return this.x + this.offset.left < collectedObject.x + collectedObject.width - collectedObject.offset.right &&  // ==> hinten
            this.x + this.width - this.offset.right > collectedObject.x + collectedObject.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > collectedObject.y + collectedObject.offset.top && // ==> unten
            this.y + this.offset.top < collectedObject.y + collectedObject.height - collectedObject.offset.bottom; // ==> oben
    }


    hitThroughPufferFish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughPoisoned = new Date().getTime();
        }
        if (this.energy == 0) {
            this.diedThrough = 'pufferFish';
        }
    }


    isHurtThroughPufferFish() {
        let timeSpan = new Date().getTime() - this.lastHitThroughPoisoned;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    hitThroughJellyFish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughEletroSchock = new Date().getTime();
        }
        if (this.energy == 0) {
            this.diedThrough = 'jellyFish';
        }
    }


    isHurtThroughJellyFish() {
        let timeSpan = new Date().getTime() - this.lastHitThroughEletroSchock;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }



    hitThroughEndboss() {
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughEndboss = new Date().getTime();
        }
        if (this.energy == 0) {
            this.diedThrough = 'endboss';
        }
    }


    isHurtThroughEndboss() {
        let timeSpan = new Date().getTime() - this.lastHitThroughEndboss;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    characterHitEndboss() {
        this.energyEndboss -= 18;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.characterLastHitAgainstEndboss = new Date().getTime();
        }
    }


    endbossIsHurt() {
        let timeSpan = new Date().getTime() - this.characterLastHitAgainstEndboss;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }



    raiseProgressFromProgressbarCoin() {
        this.porgressCoin += 10;
    }


    raiseProgressFromProgressbarPoisonVessel() {
        this.porgressPoisonVessel += 10;
    }


    reduceProgressFromProgressbarPoisonVesselIfCharacterShoot() {
        this.porgressPoisonVessel -= 10;
    }


    endbossGetHit() {
        this.energyEndboss -= 15;
    }


    bubbleFlying(otherDirection) {
        setInterval(() => {
            if (!otherDirection) {
                this.x += 25 + this.speed;
                this.y -= 8 - this.speed;
            } else {
                this.x -= 25 - this.speed;
                this.y -= 8 - this.speed;
            }
        }, 1000 / 20);
    }


    jellFishFliesUpAndDisappear(jellyFish) {
        let indexJellyFish = world.level.jellyFishes.indexOf(jellyFish);
        setInterval(() => {
            this.y -= 15 - this.speed;
        }, 1000 / 20);
        setTimeout(() => {
            world.level.jellyFishes.splice(indexJellyFish, 1);
        }, 4000);
    }


    hitThroughFinSlap(pufferFish) {
        return this.x + this.width - 70 > pufferFish.x + 2 &&
            this.x + 2 < pufferFish.x + pufferFish.width - 70 &&
            this.y + this.height - 90 > pufferFish.y + 40 &&
            this.y + 25 < pufferFish.y + pufferFish.height - 80;
    }


    pufferFliesUpAndDisappear(pufferFish) {
        let indexPufferFish = world.level.pufferFishes.indexOf(pufferFish);
        setInterval(() => {
            this.y -= 30 - this.speed;
            this.x += 30 + this.speed;
        }, 1000 / 20);
        setTimeout(() => {
            world.level.pufferFishes.splice(indexPufferFish, 1);
        }, 4000);
    }
}
