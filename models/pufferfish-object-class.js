class PufferFish extends MovableObjects {
    x = 750;
    y = 150;
    width = 100;
    height = 100;
    pufferFishImage = ['img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'];


    constructor() {
        super().loadImage(this.pufferFishImage);
        this.moveLeft();
        this.pufferFishPosition();
    }


    pufferFishPosition() {
        this.x = Math.random() * 1100 + 350;
        this.y = Math.random() * 250 + 100;
    }
}