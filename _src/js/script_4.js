'use strict';
const parentUl = document.querySelector(".promo__interactive-list");
const nodeListDead = document.querySelectorAll('.promo__interactive-item');
const divDeleteDead = document.querySelectorAll('.delete');

const input = document.querySelector(".adding__input");
const button = document.querySelector("button");

button.addEventListener("click", createNewMovieList);
function createNewMovieList(event) {
    event.preventDefault();
    const viewedMovie = input.value;
    createElement("li", `${viewedMovie}<div class="delete"></div>`, parentUl);
    const nodeListDead = document.querySelectorAll(".promo__interactive-item");
    const divDeleteDead = document.querySelectorAll(".delete");
    addListener(Array.from(divDeleteDead), Array.from(nodeListDead));
    // button.removeEventListener("click", createNewMovieList);
}

function deleteElement(arrEl, index) {
    arrEl[index].remove();
}
function addListener(arrDel, arrEl) {
    arrDel.forEach((item, index) => item.addEventListener("click", () => deleteElement(arrEl, index) ) );
}
addListener(Array.from(divDeleteDead), Array.from(nodeListDead));

function createElement(el, string, parent) {
    const elemLi = document.createElement(el);
    elemLi.innerHTML = string;
    elemLi.className = "promo__interactive-item";
    parent.append(elemLi);

}