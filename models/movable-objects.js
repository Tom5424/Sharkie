class MovableObjects extends DrawableObjects {


    moveLeft() {
        setInterval(() => {
            this.x = this.x - 5;
        }, 1000 / 15);
    }
}