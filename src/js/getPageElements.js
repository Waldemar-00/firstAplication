'use strict';

const box = document.querySelector('#box');
box.style.cssText = 'background-color: orange; width: 300px; height: 300px;';

const buttons = document.querySelectorAll('button');
buttons.forEach(item => item.style.cssText = 'background-color: grey; width: 100px; height: 50px; border-radius: 50%;');

const circle = document.querySelector('.circles');
const circleChildren = circle.children;
const hearts = document.querySelectorAll('.heart');

const div = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
document.body.insertAdjacentHTML('beforebegin', '<h1>HeLLo, FriEnd!</h1>');
div.classList.add('black');
div.textContent = 'Prepend';
div.style.cssText = 'color: yellow';

div1.innerHTML  = '<h2>HeLLo</h2>';
div1.classList.add('black');

div2.classList.add('black');
div2.textContent = 'After';
div2.style.cssText = 'color: blue';

document.body.prepend(div);
document.body.append(div1);
buttons[2].after(div2);

circleChildren[0].remove();
circleChildren[0].remove();
circleChildren[0].replaceWith(hearts[0]);



