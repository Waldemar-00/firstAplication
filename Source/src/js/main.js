window.addEventListener('DOMContentLoaded', () => {
    class Customizator {
    constructor() {

    }
    render() {
        this.blockButton = document.createElement('div');
        this.colorChange = document.createElement('input');
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