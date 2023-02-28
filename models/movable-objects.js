class MovableObjects extends DrawableObjects {
    otherDirection = false;
    speed = 2;

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
}