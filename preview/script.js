
const overlay = document.querySelector('.overlay');
const btn = overlay.querySelectorAll('button')[0];
const button = overlay.querySelectorAll('button')[1];
const btnLast = overlay.querySelectorAll('button')[2];
const removeBtn = function() {
    btnLast.remove();
};
const writeTarget  = function(event) {
    console.log(event.currentTarget);
    console.log(event.type);
    btn.removeEventListener('click', writeTarget);
};



overlay.addEventListener('click', removeBtn);
btn.addEventListener('click', writeTarget );
button.addEventListener('click', writeTarget, {once: true});

const link = document.querySelector('a');
link.addEventListener('click', event => event.preventDefault());