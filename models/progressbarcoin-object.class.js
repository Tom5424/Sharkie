class ProgressBarCoin extends ProgessBar {
    x = 5;
    y = 35;
    imagesProgressbarCoin = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/orange/100_ copia 2.png',
    ];


    constructor() {
        super().loadImages(this.imagesProgressbarCoin);
        this.updateProgressbar(0);
    }


    updateProgressbar(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesProgressbarCoin[this.showImageIndexProgessbarCoin()]; // ==> Zeigt immer den aktuellen Index vom Bild an, damit immer der richtige Fortschritt von der Progressbar angezeigt wird.
        this.img = this.imageCache[imagePath];
    }

}