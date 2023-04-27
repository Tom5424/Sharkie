class World {
    character = new Character();
    level = level1;
    prorgressBarLife = new ProgressBarLife();
    prorgressBarCoin = new ProgressBarCoin();
    prorgressBarPoison = new ProgressBarPoison();
    prorgressBarLifeEndboss = new ProgressBarLifeEndboss();
    bubbles = [];
    poisonBubbles = [];
    poisonVesselCapacity = 0;
    ctx;
    canvas;
    keyboard;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.linkCharacterWithWorld();
        this.checkCollisionsGenerally();
    }


    /**
     * This Function draw all objects on the Canvas.
     * 
     */
    draw() {
        checkTouchBtnsForMobileDevices();
        this.clearCanvas();
        this.ctx.translate(this.cameraX, 0);  // ==> Push Camera forward
        this.drawBackgrounds();
        this.drawCollectables();
        this.drawEnemiesAndEndboss();
        this.drawBubblesToShoot();
        this.ctx.translate(-this.cameraX, 0);   // ==> Push Camera backward
        this.drawProgressBars();
        this.ctx.translate(this.cameraX, 0);  // ==> Push Camera forward
        this.drawCharacter();
        this.ctx.translate(-this.cameraX, 0);  // ==> Push Camera backward
        this.repeatDrawing();
    }


    /**
     * This Function draw only the background objects on the Canvas.
     * 
     */
    drawBackgrounds() {
        this.addObjectsToMap(this.level.backgrounds);
    }


    /**
     * This Function draw only the Collectables objects on the Canvas.
     * 
     */
    drawCollectables() {
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonVessels);
    }


    /**
     * This Function draw only the Enemies and Endboss objects on the Canvas.
     * 
     */
    drawEnemiesAndEndboss() {
        this.addObjectsToMap(this.level.pufferFishes);
        this.addObjectsToMap(this.level.jellyFishes);
        this.addObjectToMap(this.level.endboss);
    }


    /**
     * This Function draw only the Bubbles to shoot on the Canvas.
     * 
     */
    drawBubblesToShoot() {
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
    }


    /**
     * This Function draw only the ProgressBars objects on the Canvas.
     * 
     */
    drawProgressBars() {
        this.addObjectToMap(this.prorgressBarLife);
        this.addObjectToMap(this.prorgressBarCoin);
        this.addObjectToMap(this.prorgressBarPoison);
        if (this.drawHpBarFromEnbossIfEnbossFightStart())  // ==> This Function only trigger when the Endboss is close enough, to draws his HP bar.
            this.addObjectToMap(this.prorgressBarLifeEndboss);
    }


    /**
     * This Function draw only the Character objects on the Canvas.
     * 
     */
    drawCharacter() {
        this.addObjectToMap(this.character);
    }


    /**
     * This Function draw the HP Bar from the Endboss, if the Character is close enough.
     * 
     * @returns {boolean} - true or false if the Character is close enough to draw the HP Bar from Endboss.
     */
    drawHpBarFromEnbossIfEnbossFightStart() {
        return this.character.x + 350 >= this.level.endboss.x - 300;
    }


    /**
     * This Function clear the Canvas.
     * 
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    /**
     * This Function add a object to the Canvas.
     * 
     */
    addObjectToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object)
        }
        object.drawAllObjetcs(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }


    /**
     * This Function add objects to the Canvas.
     * 
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addObjectToMap(object);
        });
    }


    /**
     * This Function flip the Image from the object.
     * 
     * @param {string} object - The current object to add.
     */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }


    /**
     * This Function flip the Image back from the object.
     * 
     * @param {string} object - The current object to add.
     */
    flipImageBack(object) {
        this.ctx.restore();
        object.x = object.x * -1;
    }


    /**
     * This Function repeat the draw function, to draw all objects.
     * 
     */
    repeatDrawing() {
        requestAnimationFrame(() => {
            this.draw();
        })
    }


    /**
     * This Function link the Character with the World.
     * 
     */
    linkCharacterWithWorld() {
        this.character.world = this;
    }


    /**
     * This Function check the collisions generally.
     * 
     */
    checkCollisionsGenerally() {
        setInterval(() => {
            this.characterIsCollidingWithJellyFish();
            this.characterIsCollidingWithPufferFish();
            this.characterIsCollidingWithEndboss();
            this.characterHaveCollectedCoins();
            this.characterHaveCollectedPoisonVessel();
            this.bubbleIsCollidingWithJellyFish();
            this.poisonBubbleIsCollidingWithEndboss();
            this.characterHitWithFinSlap();
        }, 1000 / 5);
    }


    /**
    * This Function check the collisions with the Jelly Fish enemies.
    * 
    */
    characterIsCollidingWithJellyFish() {
        this.level.jellyFishes.forEach(jellyFish => {
            if (this.character.isColliding(jellyFish)) {
                this.character.hitThroughJellyFish();
                playSoundHurtThroughElectroShocked();
                this.prorgressBarLife.updateProgressbar(this.character.energy);
            }
        });
    }


    /**
    * This Function check the collisions with the Puffer Fish enemies.
    * 
    */
    characterIsCollidingWithPufferFish() {
        this.level.pufferFishes.forEach(pufferFish => {
            if (this.character.isColliding(pufferFish)) {
                this.character.hitThroughPufferFish();
                playSoundHurtCharacter();
                this.prorgressBarLife.updateProgressbar(this.character.energy)
            }
        });
    }


    /**
    * This Function check the collisions with the Endboss.
    * 
    */
    characterIsCollidingWithEndboss() {
        if (this.character.isColliding(this.level.endboss)) {
            this.character.hitThroughEndboss();
            playSoundHurtCharacter();
            this.prorgressBarLife.updateProgressbar(this.character.energy);
        }
    }


    /**
    * This Function check the collisions with the Coins to collect them.
    * 
    */
    characterHaveCollectedCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isCollected(coin)) {
                playSoundCoinCollected();
                this.findIndexFromCoins(coin);
                this.character.raiseProgressFromProgressbarCoin();
                this.prorgressBarCoin.updateProgressbar(this.character.porgressCoin);
            }
        });
    }


    /**
     * This Function search after the index from the Coins.
     * 
     * @param {number} indexFromCoin - The current index from the Coin. 
     */
    findIndexFromCoins(indexFromCoin) {
        let index = this.level.coins.indexOf(indexFromCoin);
        this.coinIsCollected(index);
    }


    /**
     * This Function remove the Coin from the Array after collect.
     * 
     * @param {number} index - The current index from the Coin. 
     */
    coinIsCollected(index) {
        this.level.coins.splice(index, 1);
    }


    /**
     * This Function check the collision with the poisonVessels to collect them. 
     * 
     */
    characterHaveCollectedPoisonVessel() {
        this.level.poisonVessels.forEach(poisonVessel => {
            if (this.character.isCollected(poisonVessel)) {
                playSoundBottleCollected();
                this.poisonVesselCapacity++;
                this.findIndexFromPoisonVessel(poisonVessel);
                this.character.raiseProgressFromProgressbarPoisonVessel();
                this.prorgressBarPoison.updateProgressbar(this.character.porgressPoisonVessel);
            }
        });
    }


    /**
     * This Function search after the index from the PoisonVessels.
     * 
     * @param {number} indexFromPoisonVessel - The current index from the PoisonVessel
     */
    findIndexFromPoisonVessel(indexFromPoisonVessel) {
        let index = this.level.poisonVessels.indexOf(indexFromPoisonVessel);
        this.poisonVesselIsCollected(index);
    }


    /**
     * This Function remove the PoisonVessel from the Array after collect.
     * 
     * @param {number} index - The current index from the PoisonVessels. 
     */
    poisonVesselIsCollected(index) {
        this.level.poisonVessels.splice(index, 1);
    }


    /**
     * This Function check the collision between the normal Bubble and the Jelly Fish.
     * 
     */
    bubbleIsCollidingWithJellyFish() {
        this.level.jellyFishes.forEach(jellyFish => {
            this.bubbles.forEach(bubble => {
                if (bubble.isColliding(jellyFish)) {
                    this.removeBubbleAfterHit(bubble);
                    jellyFish.jellyFishIsDead();
                    jellyFish.jellFishFliesUpAndDisappear(jellyFish);
                }
            });
        });
    }


    /**
     * This Function reove the bubble after hit.
     * 
     * @param {string} bubble - The current bubble 
     */
    removeBubbleAfterHit(bubble) {
        let indexBubble = this.bubbles.indexOf(bubble);
        this.bubbles.splice(indexBubble, 1);
    }


    /**
     * This Function check the collision between the poison Bubble and the Endboss.
     * 
     */
    poisonBubbleIsCollidingWithEndboss() {
        this.poisonBubbles.forEach(poisonBubble => {
            if (poisonBubble.isColliding(this.level.endboss)) {
                this.removePoisonBubbleAfterHitEndboss(poisonBubble);
                this.level.endboss.characterHitEndboss();
                this.prorgressBarLifeEndboss.updateProgressbar(this.level.endboss.energyEndboss);
            }
        });
    }


    /**
     * This Function remove the poison Bubble after hit. 
     * 
     * @param {string} poisonBubble - The current Poison Buuble. 
     */
    removePoisonBubbleAfterHitEndboss(poisonBubble) {
        let indexPoisonBubble = this.poisonBubbles.indexOf(poisonBubble);
        this.poisonBubbles.splice(indexPoisonBubble, 1);
    }


    /**
     * This Function check the collision with the Fins Slap attack against the Puffer Fish.
     * 
     */
    characterHitWithFinSlap() {
        this.level.pufferFishes.forEach(pufferFish => {
            if (this.character.hitThroughFinSlap(pufferFish) && !this.character.isDeadThroughPufferFish() && !this.character.isColliding(pufferFish) && this.keyboard.space) {
                pufferFish.pufferFishIsDead();
                pufferFish.pufferFliesUpAndDisappear(pufferFish);
            }
        });
    }
}
