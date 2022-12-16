//'use strict';
// window.addEventListener('DOMContentLoaded', () => {
    // // const shouldShowPopup = () => localStorage.getItem('site_consent') === 'true'? true : false;//finding property in window.localStorage, return value
    // const toggleToLocalStorage = (value) => localStorage.setItem('site_consent', value);
// 
    // const popup = document.querySelector('.popup');
    // const buttonCansel = document.querySelector('[data-cancel]');
    // const buttonAllow = document.querySelector('[data-allow]');
// 
    // if(!shouldShowPopup()) {
        // popup.classList.add('popup_active');
        // buttonAllow.addEventListener('click', () => {
            // toggleToLocalStorage(true);
            // popup.classList.remove('popup_active');
            // console.log('Something loading...');
        // });
        // buttonCansel.addEventListener('click', () => {
            // toggleToLocalStorage(false);
            // popup.classList.remove('popup_active');
        // });
    // }
// });
// 
window.addEventListener('DOMContentLoaded', () => {
    const shouldShowPopup = () => localStorage.getItem('site_consent') === 'true'? true : false;//finding property in window.localStorage, return value
    const toggleToLocalStorage = (value) => localStorage.setItem('site_consent', value);

    const popup = document.querySelector('.popup');
    const buttonCansel = document.querySelector('[data-cancel]');
    const buttonAllow = document.querySelector('[data-allow]');

    if(!shouldShowPopup()) {
        popup.classList.add('popup_active');
        buttonAllow.addEventListener('click', () => {
            toggleToLocalStorage(true);
            popup.classList.remove('popup_active');
            console.log('Something loading...');
        });
        buttonCansel.addEventListener('click', () => {
            toggleToLocalStorage(false);
            popup.classList.remove('popup_active');
        });
    }
});