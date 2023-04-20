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
        this.addTouchEvents();
        this.removeTouchEvents();
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
            if (event.key == 'y')
                this.y = true;
            if (event.key == 'x')
                this.x = true;
            if (event.key == ' ')
                this.space = true;
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
            if (event.key == ' ')
                this.space = false;
        });
    }


    addTouchEvents() {
        setTimeout(() => {
            document.getElementById('btnMobileRight').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.right = true;
            })
            document.getElementById('btnMobileLeft').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.left = true;
            })
            document.getElementById('btnMobileDown').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.down = true;
            })
            document.getElementById('btnMobileUp').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.up = true;
            })
            document.getElementById('btnMobileFinSlapAttack').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.space = true;
            })
            document.getElementById('btnMobileShootStandardBubble').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.y = true;
            })
            document.getElementById('btnMobileShootPoisonBubble').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.x = true;
            })
        }, 800);

    }


    removeTouchEvents() {
        setTimeout(() => {
            document.getElementById('btnMobileRight').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.right = false;
            })
            document.getElementById('btnMobileLeft').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.left = false;
            })
            document.getElementById('btnMobileDown').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.down = false;
            })
            document.getElementById('btnMobileUp').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.up = false;
            })
            document.getElementById('btnMobileFinSlapAttack').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.space = false;
            })
            document.getElementById('btnMobileShootStandardBubble').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.y = false;
            })
            document.getElementById('btnMobileShootPoisonBubble').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.x = false;
            })
        }, 800);

    }
}