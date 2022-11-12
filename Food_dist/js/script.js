window.addEventListener('DOMContentLoaded', () => {
    const tabheader__item = document.querySelectorAll('.tabheader__item');
    const tabcontent = document.querySelectorAll('.tabcontent');
    const tabheader__items = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabcontent.forEach(tab => {
            tab.classList.remove('show', 'fade' );
            tab.classList.add('hide');
        });
    }
    function showTabContent(index = 0) {
        tabcontent[index].classList.remove('hide');
        tabcontent[index].classList.add('show');
    }
    function removeClassActive() {
        tabheader__item.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
        });
    }
    function addClassActive(index = 0) {
        tabheader__item[index].classList.add('tabheader__item_active');
    }
    function addClassFade(index) {
        tabcontent[index].classList.add('fade');
    }

    hideTabContent(); showTabContent();
    removeClassActive(); addClassActive();

    function clickOnParent(event) {
        if(event.target && event.target.classList.contains('tabheader__item')) {
            tabheader__item.forEach((tab, index) => {
                if(event.target === tab) {
                    hideTabContent(); showTabContent(index);
                    removeClassActive(); addClassActive(index);
                    addClassFade(index);
                }
            });
        }
    }
    tabheader__items.addEventListener('click', clickOnParent);
});