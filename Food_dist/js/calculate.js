window.addEventListener('DOMContentLoaded', () => {

    const rezult = document.querySelector('.calculating__result span');
    let weight,
        height,
        age,
        sex = 'female',
        ratio = 1.375;
    function calculate() {
        if(!weight || !height || !age || !sex || !ratio) {
            rezult.textContent = '0000';
            return;
        }
        if(sex === 'female') {
            rezult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else {
            rezult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8  * height) - (5.7 * age)) * ratio);
        }
    }

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach(elem => elem.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-ratio')) {
                ratio = e.target.getAttribute('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
            }
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
            calculate();
        }));
    }
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', (e) => {
            switch (e.target.getAttribute('id')) {
                case 'weight': weight = input.value;
                    break;
                case 'height': height = input.value;
                    break;
                case 'age': age = input.value;
                    break;
            }
            console.log(weight, height, age);
            calculate();
        });
    }
    getDynamicInformation('#weight');
    getDynamicInformation('#height');
    getDynamicInformation('#age');

    

});
