class ProgessBar extends DrawableObjects {
    width = 300;
    height = 65;
    percentage = 100;


    /**
     * This Function show the index from the Progressbar Life.
     * 
     * @returns {boolean} - true or false to show the current Image index
     */
    showImageIndexProgessbarLife() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


    /**
     * This Function show the index from the Progressbar Coin.
     * 
     * @returns {boolean} - true or false to show the current Image index
     */
    showImageIndexProgessbarCoin() {
        if (this.percentage == 90 || this.percentage == 100) {
            return 5;
        } else if (this.percentage == 70 || this.percentage == 80) {
            return 4;
        } else if (this.percentage == 50 || this.percentage == 60) {
            return 3;
        } else if (this.percentage == 30 || this.percentage == 40) {
            return 2;
        } else if (this.percentage == 10 || this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }


    /**
     * This Function show the index from the Progressbar Poison Vessel.
     * 
     * @returns {boolean} - true or false to show the current Image index
     */
    showImageIndexProgessbarPoisonVessel() {
        if (this.percentage == 90 || this.percentage == 100) {
            return 5;
        } else if (this.percentage == 70 || this.percentage == 80) {
            return 4;
        } else if (this.percentage == 50 || this.percentage == 60) {
            return 3;
        } else if (this.percentage == 30 || this.percentage == 40) {
            return 2;
        } else if (this.percentage == 10 || this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }

}