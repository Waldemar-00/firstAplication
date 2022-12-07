window.addEventListener('DOMContentLoaded', () => {
    class Customizator {
    constructor() {
        this.blockButton = document.createElement('div');
        this.colorChange = document.createElement('input');

        this.blockButton.addEventListener('click', (ev) => this.scaleChange(ev));
        this.colorChange.addEventListener('input', (ev) => this.onColorChange(ev));

    }

    scaleChange(ev) {
        let  scale;
        const body = document.querySelector('body');
        if(ev.target.value) {
            scale = +ev.target.value.replace(/x/, '');
        }
        function recursyCheck(element) {
            element.childNodes.forEach(node => {
                    if(node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, '').length > 0) {
                        if(!node.parentNode.getAttribute('data-fontSize')) {
                        const value = window.getComputedStyle(node.parentNode, null).fontSize;
                        node.parentNode.setAttribute('data-fontSize', +value.replace(/px/, ''));
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fontSize') * scale + 'px';
                        }else {
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fontSize') * scale + 'px';
                        }
                    }else {
                        recursyCheck(node);
                    }
            });
        }
        recursyCheck(body);
    }

    onColorChange(ev) {
        const body = document.querySelector('body');
        body.style.backgroundColor = ev.target.value;
    }

    render() {
        const button_1 = document.createElement('input');
        const button_2 = document.createElement('input');
        const panel = document.createElement('div');

        this.blockButton.classList.add('scale');
        this.colorChange.classList.add('color');
        button_1.classList.add('scale_btn');
        button_2.classList.add('scale_btn');
        panel.classList.add('panel');

        button_1.setAttribute('type', 'button');
        button_1.setAttribute('value', '1x');
        button_2.setAttribute('type', 'button');
        button_2.setAttribute('value', '1.5x');
        this.colorChange.setAttribute('type', 'color');
        this.colorChange.setAttribute('value', '#ffffff');
        
        this.blockButton.append(button_1, button_2);
        panel.append(this.blockButton,  this.colorChange);

        document.querySelector('body').append(panel);
    }
}

const panel = new Customizator();
panel.render();
});