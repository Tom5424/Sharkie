class ProgressBarLifeEndboss extends ProgessBar {
    x = 690;
    y = 35;
    imagesProgressbarLifeEndboss = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png',
    ];


    constructor() {
        super().loadImages(this.imagesProgressbarLifeEndboss);
        this.updateProgressbar(100);
    }


    /**
     * This Function update the Progessbar, to show the current Progress.
     * 
     * @param {number} percentage - The current percentage, to show the right Progress
     */
    updateProgressbar(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesProgressbarLifeEndboss[this.showImageIndexProgessbarLife()]; // ==> Zeigt immer den aktuellen Index vom Bild an, damit immer der richtige Fortschritt von der Progressbar angezeigt wird.
        this.img = this.imageCache[imagePath];
    }
}