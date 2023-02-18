class Character extends MovableObjects {
    x = 100;
    y = 150;
    width = 300;
    height = 300;
    // img;
    characterImage = ['img/1.Sharkie/3.Swim/1.png'];


    constructor() {
        super().loadImage(this.characterImage);
    }
}