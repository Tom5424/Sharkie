class Character extends MovableObjects {
    x = 20;
    y = 100;
    width = 300;
    height = 300;
    characterImage = ['img/1.Sharkie/3.Swim/1.png'];


    constructor() {
        super().loadImage(this.characterImage);
    }
}