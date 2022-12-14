window.addEventListener('DOMContentLoaded', () => {
    class Customizator {
    constructor() {
        this.blockButton = document.createElement('div');
        this.colorChange = document.createElement('input');

        this.blockButton.addEventListener('click', (ev) => this.scaleChange(ev));
        this.colorChange.addEventListener('input', (ev) => this.onColorChange(ev));

        this.scale = localStorage.getItem('scale') || 1;
        this.color = localStorage.getItem('color') || '#ffffff';

        this.reset = document.createElement('div');
        this.reset.addEventListener('click', () => this.onReset());

    }
    onReset() {
        localStorage.clear();
        this.scale = 1;
        this.color = '#ffffff';
        this.setBgColor();
        this.scaleChange();
    }

    scaleChange(ev) {
        const body = document.querySelector('body');
        if(ev) {
            this.scale = +ev.target.value.replace(/x/g, '');
        }
        const recursyCheck = (element) => {
            element.childNodes.forEach(node => {
                    if(node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, '').length > 0) {
                        if(!node.parentNode.getAttribute('data-fontSize')) {
                        const value = window.getComputedStyle(node.parentNode, null).fontSize;
                        node.parentNode.setAttribute('data-fontSize', +value.replace(/px/, ''));
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fontSize') * this.scale + 'px';
                        }else {
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fontSize') * this.scale + 'px';
                        }
                    }else {
                        recursyCheck(node);
                    }
            });
        };
        recursyCheck(body);
        localStorage.setItem('scale', this.scale);
    }

    onColorChange(ev) {
        const body = document.querySelector('body');
        body.style.backgroundColor = ev.target.value;
        localStorage.setItem('color', ev.target.value);
    }

    setBgColor() {
        const body = document.querySelector('body');
        body.style.backgroundColor = this.color;
        this.colorChange.value = this.color;
    }

    styles() {
        const styles = document.createElement('style');
        styles.innerHTML = `
            .panel {
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: fixed;
                top: 10px;
                right: 0;
                border: 1px solid rgba(0, 0, 0, .2);
                box-shadow: 0 0 20px rgba(0, 0, 0, .5);
                width: 300px;
                height: 60px;
                background-color: #fff;

            }

            .scale {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100px;
                height: 40px;
            }
            .scale_btn {
                display: block;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(0, 0, 0, .2);
                border-radius: 4px;
                font-size: 18px;
            }

            .color {
                width: 40px;
                height: 40px;
            }
            .reset {
                font-size: 40px;
                cursor: pointer;
            }
        `;
        document.querySelector('head').append(styles);
    }

    render() {
        this.styles();
        this.setBgColor();
        this.scaleChange();
        const button_1 = document.createElement('input');
        const button_2 = document.createElement('input');
        const panel = document.createElement('div');

        this.blockButton.classList.add('scale');
        this.colorChange.classList.add('color');
        button_1.classList.add('scale_btn');
        button_2.classList.add('scale_btn');
        panel.classList.add('panel');
        this.reset.classList.add('reset');
        this.reset.innerHTML = '&times';
        button_1.setAttribute('type', 'button');
        button_1.setAttribute('value', '1x');
        button_2.setAttribute('type', 'button');
        button_2.setAttribute('value', '1.5x');
        this.colorChange.setAttribute('type', 'color');//? added color changer
        this.colorChange.setAttribute('value', '#ffffff');
        this.blockButton.append(button_1, button_2);
        panel.append(this.blockButton,  this.colorChange, this.reset);

        document.querySelector('body').append(panel);
    }
}

const panel = new Customizator();
panel.render();
});