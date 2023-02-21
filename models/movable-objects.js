class MovableObjects extends DrawableObjects {


    moveLeft() {
        setInterval(() => {
            this.x = this.x - 5;
        }, 1000 / 15);
    }


    playAnimationMovableObject(imagesMovableObject) {
        let index = this.currentImage % imagesMovableObject.length;
        let path = imagesMovableObject[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}