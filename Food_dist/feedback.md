# Feedback

## 1. Install something like ESLint or/and Prettier, you need code formating

This code is awkwardly formatted

```js
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
```

## 2. Don't initialize variables within one `const` or `let`, use multiline initialization

Not good practise

```js
let age,
    height,
    weight;

const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds');

```

Good practise

```js
let age
let height
let weight

const timer = document.querySelector(selector)
const days = timer.querySelector('#days')
const hours = timer.querySelector('#hours')
const minutes = timer.querySelector('#minutes')
const seconds = timer.querySelector('#seconds')
```

## 3. Always Use full form of if/else statement

It's about readability, it's hard to read oneline `if` or `else` statement

Bad practise

```js
if(this.classes.length === 0)div.classList.add('menu__item', 'tabcontent');
else this.classes.forEach(el => div.classList.add(el));
```

Good practise

```js
if (this.classes.length === 0) {
  div.classList.add('menu__item', 'tabcontent');
} else {
  // as the word class is a reserved world in js the developers use something like klass clazz, c to create the variable class
  this.classes.forEach(klass => div.classList.add(klass));
}
```

## 4. Use conditional (ternary) operator

It's okay but can be better

```js
offerSlides.forEach((slide, index) => {
  if(index === 2) {
    slide.classList.add('show');
  } else {
    slide.classList.add('hide');
  }
});
```

```js
offerSlides.forEach((slide, index) => {
  slide.classList.add(index === 2 ? 'show' : 'hide')
});
```

## 5. Consider using toogle

Good practise

```js
if(current.innerHTML == index + 1) {
  slide.classList.add('show');
  slide.classList.remove('hide');
} else {
  slide.classList.add('hide');
  slide.classList.remove('show');
}
```

The code above can be replaced with

```js
slide.classList.toggle('hide');
slide.classList.toggle('show');
```

## 6. Use constants

Bad practice

1) the LS key `sex` is used in many places all over the codebase, it's going to be hard to refactor the code in the future
2) reading from LS twice

```js
let sex;
if(localStorage.getItem('sex'))sex = localStorage.getItem('sex');
else {
  sex = 'female';
  localStorage.setItem('sex', sex);
}
```

Good practice

```js
// constants.js
export const FEMALE_SEX = 'female';
export const MALE_SEX = 'male';
export const SEX_DEFAULT_VALUE = FEMALE_SEX;
export const SEX_LS_KEY = 'sex';

export const RATIO_DEFAULT_VALUE = 1.375;
export const RATIO_LS_KEY = 'ratio';

export const API_URL = `http://localhost:3000`

// calculate.js
import { FEMALE_SEX, SEX_DEFAULT_VALUE, SEX_LS_KEY, API_URL} from './constants';


const lsSex = localStorage.getItem(SEX_LS_KEY)
if (!lsSex) {
  localStorage.setItem(SEX_LS_KEY, SEX_DEFAULT_VALUE);
}

let sex = lsSex || SEX_DEFAULT_VALUE;

// in any other place
localStorage.setItem(SEX_LS_KEY, sex);

// in another place
postData(`${API_URL}/requests`, json).then(() => { }
```

## 7. Regex annotations

Frontend-developers don't use regex all the time, hence they are not good at reading regex. To make developers lives easier, please use comments for regex or use clear variable names.

```js
// checks if input contains non-digits
if(input.value.match(/\D/g)) {
    input.style.border = '2px solid red';
} else input.style.border = 'none';
```

```js
const hasNonDigits = input.value.match(/\D/g)
input.style.border = hasNonDigits ? : '2px solid red' : 'none'
```

## 8. Try avoiding innerHTML

It's about separation, don't mix up everything together (html, css, js). This creates spaghetti code, which is hard to maintain.

Bad practise

```js
thanksModal.innerHTML = `
<div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${messege}</div>
</div>
`;
```

Good practise

```js
someElement.addEventListener('<event type name>', function() {
  // you have to have the myModal in html ;)
  const modal = document.querySelector('#myModal');
  const title = modal.querySelector('.modal__title');
  title.textContent = 'something'
  modal.classList.toggle('show');
})
```

## 9. Update element css with help of  classes instead of updating css directly

It's about separation, don't mix up everything together (html, css, js). This creates spaghetti code, which is hard to maintain.

Bad practice

```js
input.style.border = '2px solid red'
```

Good practice

```js
// you have to have the error class defined in css ;)
input.classList.add('error')
```
