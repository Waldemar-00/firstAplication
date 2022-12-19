window.addEventListener('DOMContentLoaded', () => {

    const rezult = document.querySelector('.calculating__result span');
    let weight,
        height,
        age,
        sex,
        ratio;
    if(localStorage.getItem('sex'))sex = localStorage.getItem('sex');
    else {
        sex = 'female';
        localStorage.setItem('sex', sex);
    }
    if(localStorage.getItem('ratio'))ratio = localStorage.getItem('ratio');
    else {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    }

function setDataInDiv(selector, activeClass, valueLS, dataOrId ) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if(elem.getAttribute(dataOrId) === localStorage.getItem(valueLS))elem.classList.add(activeClass);
    });
}
setDataInDiv('.calculating__choose-item', 'calculating__choose-item_active', 'sex', 'id');
setDataInDiv('[data-ratio]', 'calculating__choose-item_active', 'ratio', 'data-ratio');

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
                localStorage.setItem('ratio', ratio);
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', sex);
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
            if(input.value.match(/\D/g)) {
                input.style.border = '2px solid red';
            } else input.style.border = 'none';

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
