class MovableObjects extends DrawableObjects {
    otherDirection = false;
    speed = 2;
    offset = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
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
    extraDamageAgainstEndboss = 6;


    /**
     * This Function play Animations from the corresponding Movable Object.
     * 
     * @param {array} imagesMovableObject - The current Array from the Movable Object
     */
    playAnimationMovableObject(imagesMovableObject) {
        let index = this.currentImage % imagesMovableObject.length;
        let currentPath = imagesMovableObject[index];
        this.img = this.imageCache[currentPath];
        this.currentImage++;
    }


    /**
     * With this Function the Jelly Fish swim up and down.
     * 
     */
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


    /**
     * This Function check Collisions between Character and Enemies. 
     * 
     * @param {string} collidingObject - The Colliding Object 
     * @returns {boolean} true or false, if a collision occurs
     */
    isColliding(collidingObject) {
        return this.x + this.offset.left < collidingObject.x + collidingObject.width - collidingObject.offset.right &&  // ==> hinten
            this.x + this.width - this.offset.right > collidingObject.x + collidingObject.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > collidingObject.y + collidingObject.offset.top && // ==> unten
            this.y + this.offset.top < collidingObject.y + collidingObject.height - collidingObject.offset.bottom; // ==> oben
    }


    /**
     * This Function check Collisions between Character and Collectables. 
     * 
     * @param {string} collectedObject - The Colliding Object 
     * @returns {boolean} true or false, if a collision occurs
     */
    isCollected(collectedObject) {
        return this.x + this.offset.left < collectedObject.x + collectedObject.width - collectedObject.offset.right &&  // ==> hinten
            this.x + this.width - this.offset.right > collectedObject.x + collectedObject.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > collectedObject.y + collectedObject.offset.top && // ==> unten
            this.y + this.offset.top < collectedObject.y + collectedObject.height - collectedObject.offset.bottom; // ==> oben
    }


    /**
     * With this Function the Character get a hit through Puffer Fish. 
     * 
     */
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


    /**
     * This Function check, if the Character is hurt through Puffer Fish.
     * 
     * @returns {boolean} - true or false, if the Character is hurt through Puffer Fish.
     */
    isHurtThroughPufferFish() {
        let timeSpan = new Date().getTime() - this.lastHitThroughPoisoned;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    /**
     * With this Function the Character get a hit through Jelly Fish. 
     * 
     */
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


    /**
     * This Function check, if the Character is hurt through Jelly Fish.
     * 
     * @returns {boolean} - true or false, if the Character is hurt through Jelly Fish.
     */
    isHurtThroughJellyFish() {
        let timeSpan = new Date().getTime() - this.lastHitThroughEletroSchock;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    /**
     * With this Function the Character get a hit through Endboss. 
     * 
     */
    hitThroughEndboss() {
        this.energy -= 14;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitThroughEndboss = new Date().getTime();
        }
        if (this.energy == 0) {
            this.diedThrough = 'endboss';
        }
    }


    /**
     * This Function check, if the Character is hurt through Endboss.
     * 
     * @returns {boolean} - true or false, if the Character is hurt through Endboss.
     */
    isHurtThroughEndboss() {
        let timeSpan = new Date().getTime() - this.lastHitThroughEndboss;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1;
    }


    /**
     * With this Function the Character hit the Endboss.
     * 
     */
    characterHitEndboss() {
        if (this.characterCanDoExtraDamge()) {
            this.characterDoExtraDamage();
        } else {
            this.characterDoNormalDamage();
        }
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.characterLastHitAgainstEndboss = new Date().getTime();
        }
    }


    /**
     * This Function check, if the Character can do extra Damage.
     * 
     * @returns {boolean} - true or false, if the Character can do extra Damage
     */
    characterCanDoExtraDamge() {
        return world.character.porgressCoin == 100;
    }


    /**
     * With this Function the Character can do extra Damage.
     * 
     */
    characterDoExtraDamage() {
        this.energyEndboss -= 13 + this.extraDamageAgainstEndboss;
    }


    /**
     * With this Function the Character do normal Damage.
     * 
     */
    characterDoNormalDamage() {
        this.energyEndboss -= 13;
    }


    /**
     * This Function check, if the Endboss is hurt.
     * 
     * @returns {boolean} - true or false, if the Endboss is hurt.
     */
    endbossIsHurt() {
        let timeSpan = new Date().getTime() - this.characterLastHitAgainstEndboss;
        timeSpan = timeSpan / 1000;
        return timeSpan < 1 && audioHurtEndboss.play();
    }


    /**
     * This Function raise the Progress from the Progressbar Coin.
     * 
     */
    raiseProgressFromProgressbarCoin() {
        this.porgressCoin += 10;
    }


    /**
     * This Function raise the Progress from the Progressbar Poison Vessel.
     * 
     */
    raiseProgressFromProgressbarPoisonVessel() {
        this.porgressPoisonVessel += 10;
    }


    /**
     * This Function reduce the Progress from the Progressbar Poison Vessel.
     * 
     */
    reduceProgressFromProgressbarPoisonVesselIfCharacterShoot() {
        this.porgressPoisonVessel -= 10;
    }


    /**
     * With this Function the Bubble is Flying.
     * 
     */
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


    /**
     * With this Function the Jelly Fish Flies and Disappear from the Map.
     * 
     */
    jellFishFliesUpAndDisappear(jellyFish) {
        let indexJellyFish = world.level.jellyFishes.indexOf(jellyFish);
        setInterval(() => {
            this.y -= 20 - this.speed;
        }, 1000 / 20);
        setTimeout(() => {
            world.level.jellyFishes.splice(indexJellyFish, 1);
        }, 4000);
    }


    /**
     * This Function check, if the Character can hit with the Fin Slap Attack.
     * 
     * @param {string} pufferFish - The current Puffer Fish 
     * @returns {boolean} true or false, if the Character can hit the Puffer Fish the Fin Slap Attack
     */
    hitThroughFinSlap(pufferFish) {
        return this.x + this.offset.left - 20 < pufferFish.x + pufferFish.width - pufferFish.offset.right &&  // ==> hinten
            this.x + this.width - this.offset.right + 35 > pufferFish.x + pufferFish.offset.left && // ==> vorne 
            this.y + this.height - this.offset.bottom > pufferFish.y + pufferFish.offset.top && // ==> unten
            this.y + this.offset.top < pufferFish.y + pufferFish.height - pufferFish.offset.bottom; // ==> oben
    }


    /**
     * With this Function the Puffer Fish Flies and Disappear from the Map.
     * 
     */
    pufferFliesUpAndDisappear(pufferFish) {
        let indexPufferFish = world.level.pufferFishes.indexOf(pufferFish);
        setInterval(() => {
            if (!pufferFish.otherDirection) {
                this.y -= 30 - this.speed;
                this.x += 30 + this.speed;
            } else {
                this.y -= 30 - this.speed;
                this.x -= 30 - this.speed;
            }
        }, 1000 / 20);
        this.erasePufferFishFromArray(indexPufferFish);
    }


    /**
     * This Function remove the Puffer Fish from the Array, after hit.
     * 
     * @param {number} indexPufferFish - The current index from Puffer Fish 
     */
    erasePufferFishFromArray(indexPufferFish) {
        setTimeout(() => {
            world.level.pufferFishes.splice(indexPufferFish, 1);
        }, 4000);
    }
}
