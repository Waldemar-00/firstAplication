'use strict';
const parentUl = document.querySelector(".promo__interactive-list");
const nodeListDead = document.querySelectorAll('.promo__interactive-item');
const divDeleteDead = document.querySelectorAll('.delete');

const input = document.querySelector(".adding__input");
const button = document.querySelector("button");
const checkbox = document.querySelector('.checkbox');

function createNewMovieList(event) {
    event.preventDefault();
    checkInputValue();
    if (checkbox.checked) createElement("li", `${input.value.bold()}<div class="delete"></div>`, parentUl);
    else createElement("li", `${input.value}<div class="delete"></div>`, parentUl);
    const nodeListDead = document.querySelectorAll(".promo__interactive-item");
    const divDeleteDead = document.querySelectorAll(".delete");
    addListener(Array.from(divDeleteDead), Array.from(nodeListDead));
    // button.removeEventListener("click", createNewMovieList);
}
button.addEventListener("click", createNewMovieList);

function deleteElement(arrEl, index) {
    arrEl[index].remove();
}
function addListener(arrDel, arrEl) {
    arrDel.forEach((item, index) => item.addEventListener("click", () => deleteElement(arrEl, index) ) );
}
addListener(Array.from(divDeleteDead), Array.from(nodeListDead));

function checkInputValue() {
    if(input.value.length > 22){ 
        input.value = `${input.value.slice(0, 21)}...`;
    } 
    if(checkbox.checked)console.log(input.value);
    return input.value;
}

function createElement(el, string, parent) {
    const elemLi = document.createElement(el);
    elemLi.innerHTML = string;
    elemLi.className = "promo__interactive-item";
    parent.append(elemLi);
}
