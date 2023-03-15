class Keyboard {
    left = false;
    right = false;
    down = false;
    up = false;
    y = false;
    x = false;
    space = false;


    constructor() {
        this.addKeyboardEvents();
        this.removeKeyboardEvents();
    }


    addKeyboardEvents() {
        window.addEventListener('keydown', (event) => {
            // console.log(event.key);
            if (event.key == 'ArrowUp')
                this.up = true;
            if (event.key == 'ArrowDown')
                this.down = true;
            if (event.key == 'ArrowLeft')
                this.left = true;
            if (event.key == 'ArrowRight')
                this.right = true;
            if (event.key == 'y')
                this.y = true;
            if (event.key == 'x')
                this.x = true;
        });
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
            if (event.key == 'y')
                this.y = false;
            if (event.key == 'x')
                this.x = false;
        });
    }


}