class ProgressBarPoison extends ProgessBar {
    x = 5;
    y = 90;
    imagesProgressbarCoin = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];


    constructor() {
        super().loadImages(this.imagesProgressbarCoin);
        this.updateProgressbar(0);
    }


    updateProgressbar(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesProgressbarCoin[this.showImageIndexProgessbarPoisonVessel()]; // ==> Zeigt immer den aktuellen Index vom Bild an, damit immer der richtige Fortschritt von der Progressbar angezeigt wird.
        this.img = this.imageCache[imagePath];
    }
}