class Keyboard {
    left = false;
    right = false;
    down = false;
    up = false;
    space = false;


    constructor() {
        this.addKeyboardEvents();
        this.removeKeyboardEvents();
    }


    addKeyboardEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.key == 'ArrowUp')
                this.up = true;
            if (event.key == 'ArrowDown')
                this.down = true;
            if (event.key == 'ArrowLeft')
                this.left = true;
            if (event.key == 'ArrowRight')
                this.right = true;
        })
    }


    removeKeyboardEvents() {
        window.addEventListener('keyup', (event) => {
            if (event.key == 'ArrowUp')
                this.up = false;
            if (event.key == 'ArrowDown')
                this.down = false;
            if (event.key == 'ArrowLeft')
                this.left = false;
            if (event.key == 'ArrowRight')
                this.right = false;
        })
    }


}