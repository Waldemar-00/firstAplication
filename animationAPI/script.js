'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
    // {transform: 'translateY(0)',},
    // {transform: 'translateY(100px)'},
    // {transform: 'translateY(-100px)'},
    // {transform: 'translateY(0)'},
    // ], 
    // {duration: 3000,
    // iterations: Infinity,
    // }
    // );
// 
//btnPhone.addEventListener('click', () => phoneAnimation);
let phoneAnimation;
let macbookAnimation;
function phAnimation() {
    phoneAnimation = 
    images[0].animate([
    {transform: 'translateY(0) rotate(0deg)', filter: 'opacity(0.9)'}, 
    {transform: 'translateY(100px) rotate(120deg)', filter: 'opacity(0.75)'},
    {transform: 'translateY(-100px) rotate(240deg)', filter: 'opacity(0.65)'}, 
    {transform: 'translateY(0) rotate(360deg)', filter: 'opacity(0.8)'}], 
    {duration: 3000, iterations: Infinity,});
}
function stopPhAnimation() {
    if(!phoneAnimation)return;
    else phoneAnimation.cancel();
}
btnPhone.addEventListener('click', () => {
    stopMmcAnimation();
    if(!phoneAnimation) {
        phAnimation();
    } else if(phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else phoneAnimation.pause();
});

function mcAnimation() {
    macbookAnimation = images[1].animate([
        {transform: 'translateX(0) rotate(0deg)', filter: 'opacity(0.9)'}, 
        {transform: 'translateX(100px) rotate(120deg)', filter: 'opacity(0.75)'},
        {transform: 'translateX(-100px) rotate(240deg)', filter: 'opacity(0.65)'},
        {transform: 'translateX(0) rotate(360deg)', filter: 'opacity(0.8)'}], 
        {duration: 3000, iterations: Infinity,});
}
function stopMmcAnimation() {
    if(!macbookAnimation)return;
    else macbookAnimation.cancel();
}
btnMacbook.addEventListener('click', () => {
    stopPhAnimation();
    if (!macbookAnimation) mcAnimation();
    else if (macbookAnimation.playState === 'paused')  macbookAnimation.play();
    else macbookAnimation.pause();
});