class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    cameraX = 0;


    /**
     * This Function load the Image from the Object.
     * 
     * @param {string} path - The current Path from the Image 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This Function load the Images from the Object.
     * 
     * @param {array} pathCurrentArrays - The current Path from the Images 
     */
    loadImages(pathCurrentArrays) {
        pathCurrentArrays.forEach(pathCurrentArray => {
            let img = new Image();
            img.src = pathCurrentArray
            this.imageCache[pathCurrentArray] = img;
        });
    }


    /**
     * This Function draw all Objects.
     * 
     * @param {string} ctx - The context to draw on canvas
     */
    drawAllObjetcs(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            // console.warn(this.img);
        }
    }
}