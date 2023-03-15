class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    cameraX = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(pathCurrentArrays) {
        pathCurrentArrays.forEach(pathCurrentArray => {
            let img = new Image();
            img.src = pathCurrentArray
            this.imageCache[pathCurrentArray] = img;
        });
    }


    drawAllObjetcs(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn(this.img);
        }
    }


    drawRectangleCharacter(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 55, this.y + 140, this.width - 110, this.height - 210);
            ctx.stroke();
        }
    }


    drawRectanglePufferFish(ctx) {
        if (this instanceof PufferFishGreen || this instanceof PufferFishRed || this instanceof PufferFishRedGlow) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x - 5, this.y + 5, this.width, this.height - 35);
            ctx.stroke();
        }
    }


    drawRectangleJellyFish(ctx) {
        if (this instanceof JellyFishGreen || this instanceof JellyFishYellow || this instanceof JellyFishPurple || this instanceof JellyFishPink) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 5, this.y + 5, this.width - 10, this.height - 15);
            ctx.stroke();
        }
    }


    drawRectanglePosionVessels(ctx) {
        if (this instanceof PoisonVessel) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + 15, this.y + 30, this.width - 30, this.height - 30);
            ctx.stroke();
        }
    }


    drawRectangleCoins(ctx) {
        if (this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    drawRectangleBubble(ctx) {
        if (this instanceof Bubble) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    drawRectanglePoisonBubble(ctx) {
        if (this instanceof PoisonBubble) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
            ctx.stroke();
        }
    }

}