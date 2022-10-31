const list = document.querySelectorAll(".promo__interactive-item");
console.log('contains_______________add');
list.forEach(item => item.classList.add("add"));//! add
list.forEach(item => console.log( item.classList.contains("add")));//! contains
console.log('contains_______________toggle');
list.forEach(item => item.classList.toggle("add")); //! toggle
list.forEach(item => console.log( item.classList.contains("add")));//! contains
console.log('contains_______________toggle');
list.forEach(item => item.classList.toggle("add")); //! toggle
list.forEach(item => console.log( item.classList.contains("add")));//! contains
console.log('contains_______________remove');
list.forEach(item => item.classList.remove("add")); //! toggle
list.forEach(item => console.log( item.classList.contains("add")));//! contains

