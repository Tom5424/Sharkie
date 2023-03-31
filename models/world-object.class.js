class World {
    level = new Level();
    character = new Character();
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
    hitFinSlap = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.linkCharacterWithWorld();
        this.checkCollisionsGenerally();
    }


    draw() {
        this.clearCanvas();
        this.ctx.translate(this.cameraX, 0);  // ==> Push Camera forward
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.poisonVessels);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.pufferFishes);
        this.addObjectsToMap(this.level.jellyFishes);
        this.addObjectToMap(this.level.endboss);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
        this.ctx.translate(-this.cameraX, 0);   // ==> Push Camera backward
        this.addObjectToMap(this.prorgressBarLife);
        this.addObjectToMap(this.prorgressBarCoin);
        this.addObjectToMap(this.prorgressBarPoison);
        if (this.drawHpBarFromEnbossIfEnbossFightStart())  // ==> This Function only trigger when the Endboss is close enough, to draws his HP bar.
            this.addObjectToMap(this.prorgressBarLifeEndboss);
        this.ctx.translate(this.cameraX, 0);  // ==> Push Camera forward
        this.addObjectToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);  // ==> Push Camera backward
        this.repeatDrawing();
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    addObjectToMap(object) {
        if (object.otherDirection) {
            this.flipImage()
        }
        object.drawAllObjetcs(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack();
        }
        object.drawRectangleCharacter(this.ctx);
        object.drawRectanglePufferFish(this.ctx);
        object.drawRectangleJellyFish(this.ctx);
        object.drawRectanglePosionVessels(this.ctx);
        object.drawRectangleCoins(this.ctx);
        object.drawRectangleBubble(this.ctx);
        object.drawRectanglePoisonBubble(this.ctx);
        object.drawRectangleEndboss(this.ctx);
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addObjectToMap(object);
        });
    }


    drawHpBarFromEnbossIfEnbossFightStart() {
        return this.character.x + 350 >= this.level.endboss.x - 300;
    }


    flipImage() {
        this.ctx.save();
        this.ctx.translate(this.character.width, 0);
        this.ctx.scale(-1, 1);
        this.character.x = this.character.x * -1;
    }


    flipImageBack() {
        this.ctx.restore();
        this.character.x = this.character.x * -1;
    }


    repeatDrawing() {
        requestAnimationFrame(() => {
            this.draw();
        })
    }


    linkCharacterWithWorld() {
        this.character.world = this;
    }


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


    characterIsCollidingWithJellyFish() {
        this.level.jellyFishes.forEach(jellyFish => {
            if (this.character.isColliding(jellyFish)) {
                this.character.hitThroughJellyFish();
                this.prorgressBarLife.updateProgressbar(this.character.energy);
            }
        });
    }


    characterIsCollidingWithPufferFish() {
        this.level.pufferFishes.forEach(pufferFish => {
            if (this.character.isColliding(pufferFish)) {
                this.character.hitThroughPufferFish();
                this.prorgressBarLife.updateProgressbar(this.character.energy)
            }
        });
    }


    characterIsCollidingWithEndboss() {
        if (this.character.isColliding(this.level.endboss)) {
            this.character.hitThroughEndboss();
            this.prorgressBarLife.updateProgressbar(this.character.energy);
        }
    }


    characterHaveCollectedCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isCollected(coin)) {
                this.findIndexFromCoins(coin);
                this.character.raiseProgressFromProgressbarCoin();
                this.prorgressBarCoin.updateProgressbar(this.character.porgressCoin);
            }
        });
    }


    findIndexFromCoins(indexFromCoin) {
        let index = this.level.coins.indexOf(indexFromCoin);
        this.coinIsCollected(index)
    }


    coinIsCollected(index) {
        this.level.coins.splice(index, 1);
    }


    characterHaveCollectedPoisonVessel() {
        this.level.poisonVessels.forEach(poisonVessel => {
            if (this.character.isCollected(poisonVessel)) {
                this.poisonVesselCapacity++;
                this.findIndexFromPoisonVessel(poisonVessel);
                this.character.raiseProgressFromProgressbarPoisonVessel();
                this.prorgressBarPoison.updateProgressbar(this.character.porgressPoisonVessel);
            }
        });
    }


    findIndexFromPoisonVessel(indexFromPoisonVessel) {
        let index = this.level.poisonVessels.indexOf(indexFromPoisonVessel);
        this.poisonVesselIsCollected(index);
    }


    poisonVesselIsCollected(index) {
        this.level.poisonVessels.splice(index, 1);
    }


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


    removeBubbleAfterHit(bubble) {
        let indexBubble = this.bubbles.indexOf(bubble);
        this.bubbles.splice(indexBubble, 1);
    }


    poisonBubbleIsCollidingWithEndboss() {
        this.poisonBubbles.forEach(poisonBubble => {
            if (poisonBubble.isColliding(this.level.endboss)) {
                this.removePoisonBubbleAfterHitEndboss(poisonBubble);
                this.level.endboss.characterHitEndboss();
                this.prorgressBarLifeEndboss.updateProgressbar(this.level.endboss.energyEndboss);
            }
        });
    }


    removePoisonBubbleAfterHitEndboss(poisonBubble) {
        let indexPoisonBubble = this.poisonBubbles.indexOf(poisonBubble);
        this.poisonBubbles.splice(indexPoisonBubble, 1);
    }


    characterHitWithFinSlap() {
        this.level.pufferFishes.forEach(pufferFish => {
            if (this.character.hitThroughFinSlap(pufferFish) && !this.character.isHurtThroughPufferFish()) {
                if (!this.character.isDeadThroughPufferFish()) {
                    pufferFish.pufferFishIsDead();
                    pufferFish.pufferFliesUpAndDisappear(pufferFish);
                }
            } else {
                this.character.isColliding(pufferFish);
            }
        });
    }

}
