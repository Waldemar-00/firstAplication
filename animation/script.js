const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box'); 

// function myAnimation() {
    // let pos = 0;
    // const id = setTimeout(frame, 10);
    // function frame() {
        // if (pos == 300) {
            // clearTimeout(id);
        // } else {
            // pos++;
            // elem.style.top = pos + "px";
            // elem.style.left = pos + 'px';
        // }
        // setTimeout(frame, 10);
    // }
// }
// btn.addEventListener('click', myAnimation);

let pos = 0;
function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

const id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);