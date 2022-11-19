window.addEventListener('DOMContentLoaded', () => {
    //! tabs
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
    //! timer
    const deadLine = '2022-12-1';
    function getTimeRemaining(endDate) {
        const timeNow = Date.now();
        const endTime = new Date(endDate).getTime();
        const remnantTime = endTime - timeNow;
        const days = Math.floor(remnantTime / 1000 / 60 / 60 / 24);
        const hours = Math.floor((remnantTime / 1000 / 60 / 60 % 24));
        const minutes = Math.floor((remnantTime / 1000 / 60 % 60));
        const seconds = Math.floor((remnantTime / 1000 % 60));
        return {remnantTime, days, hours, minutes, seconds,};
    }

    function setTimerOnPage(selector, endDate) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds');
                
        function updateTimer() {
            const timerObject = getTimeRemaining(endDate);
            days.textContent = addZero(timerObject.days);
            hours.textContent = addZero(timerObject.hours);
            minutes.textContent = addZero(timerObject.minutes);
            seconds.textContent = addZero(timerObject.seconds);
            recurtionTimer(timerObject);
        }
            function recurtionTimer(object) {
                const setTime = setTimeout(updateTimer, 1000);
                if(object.remnantTime <= 0)clearTimeout(setTime);
            }
                function addZero(number) {
                    if(number >= 0 && number <= 10) {
                        return `0${number}`;
                    }else {
                        return number;
                    }
                }
        return updateTimer();
    }
    setTimerOnPage('.timer', deadLine);
    //! modal
    const buttons = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('[data-close]');
    function addClassShow(event) {
        if(event.target && event.target.matches('[data-modal]')) {
            addShow();
        }
    }
    function addShow() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.classList.add('hidden');
        clearTimeout(time);
    }
    const time = setTimeout(addShow, 30000);
    function addClassHide(event) {
        if((event.target && event.target.matches('[data-close]')) || (event.target && event.target.matches('.modal')) || (event.target && event.code === 'Escape' && modal.classList.contains('show'))) {
            modal.classList.remove('show');
            document.body.classList.remove('hidden');
            modal.classList.add('hide');
        }
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', addClassShow);
    });
    close.addEventListener('click', addClassHide);
    modal.addEventListener('click', addClassHide);
    document.addEventListener('keydown', addClassHide);
    function openModalScroll(){
        const body = document.querySelector('body');
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 2) { //!    window.scrollY  do not support safari IOS...
            addShow();
            window.removeEventListener('scroll', openModalScroll);
        }
    }
    window.addEventListener('scroll', openModalScroll);
});