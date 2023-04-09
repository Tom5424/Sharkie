class ProgressBarPoison extends ProgessBar {
    x = 5;
    y = 90;
    imagesProgressbarPoisonVessel = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png',
    ];


    constructor() {
        super().loadImages(this.imagesProgressbarPoisonVessel);
        this.updateProgressbar(0);
    }


    updateProgressbar(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesProgressbarPoisonVessel[this.showImageIndexProgessbarPoisonVessel()]; // ==> Zeigt immer den aktuellen Index vom Bild an, damit immer der richtige Fortschritt von der Progressbar angezeigt wird.
        this.img = this.imageCache[imagePath];
    }
}

