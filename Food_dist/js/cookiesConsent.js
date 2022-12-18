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

//! COOKIE STORAGE
// window.addEventListener('DOMContentLoaded', () => {
    // const cookieStorage = {
        // getItem: () => {
            // const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => (
                // {...acc, [key.trim()] : value}), {});
                // console.log(cookies);
                // return cookies;
        // },
        // setItem: (key, value) => {
            // document.cookie = `${key}=${value};expires=Sun, 17 Apr 2023 00:00:00 GMT`;
        // },
    // };
    // 
     // const shouldShowPopup = () => cookieStorage.getItem().site_consent === 'true' ? true : false;//finding property in window.localStorage, return value
    // const toggleToLocalStorage = (value) => cookieStorage.setItem('site_consent' , value);
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
// 
        // buttonCansel.addEventListener('click', () => {
            // toggleToLocalStorage(false);
            // popup.classList.remove('popup_active');
            // console.log('Cansel clicked');
        // });
    // }
// });

//! COOKIE CLASS

window.addEventListener('DOMContentLoaded', () => {
    class Cookie {
        constructor({selectorPopup, selectorButtonCansel, selectorButtonAllow, activeClass = ''} = {}) {
            this.popup = document.querySelector(selectorPopup);
            this.buttonCansel = document.querySelector(selectorButtonCansel);
            this.buttonAllow = document.querySelector(selectorButtonAllow);
            this.activeClass = activeClass;
            this.siteConsent = 'site_consent';
        }
        getItem() {
            const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => (
                            {...acc, [key.trim()] : value}), {});
                                return cookies;
                                
        } 
        setItem(key, value) {
            document.cookie = `${key}=${value};expires=Sun, 17 Apr 2023 00:00:00 GMT`;
        }
        hasConsent() {
            return this.getItem()[this.siteConsent] === 'true' ? true : false;
        }
        status(bool) {
            this.setItem(this.siteConsent, bool);
            if(this.hasConsent()) {
                loading();
            }
        }
        clickButtons() {
            this.buttonAllow.addEventListener('click', () => {
            this.status(true);
            this.popup.classList.remove(this.activeClass);
            });

            this.buttonCansel.addEventListener('click', () => {
            this.status(false);
            this.popup.classList.remove(this.activeClass);
            console.log('Cansel clicked');
            });
        }

        start() {
            try {
                if(this.hasConsent()) {
                    loading();
                }else {
                    this.popup.classList.add(this.activeClass);
                    this.clickButtons();
                }
            }catch (e) {
                console.error(new Error('Error'));
            }
        }
    }
    function loading() {
    console.log('Loading...');
    }
    new Cookie({
        selectorPopup: '.popup',
        selectorButtonCansel: '[data-cancel]',
        selectorButtonAllow: '[data-allow]',
        activeClass: 'popup_active',
        }).start();
});