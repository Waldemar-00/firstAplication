'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

const phoneAnimation = images[0].animate([
    {transform: 'translateY(0)',},
    {transform: 'translateY(100px)'},
    {transform: 'translateY(-100px)'},
    {transform: 'translateY(0)'},
    ], 
    {duration: 3000,
    iterations: Infinity,
    }
    );

//btnPhone.addEventListener('click', () => phoneAnimation);