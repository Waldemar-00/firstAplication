window.addEventListener('DOMContentLoaded', () => {
    const sliderPrev = document.querySelector('.offer__slider-prev');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    const sliderNext = document.querySelector('.offer__slider-next');
    const offerSlides = document.querySelectorAll('.offer__slide');
    const slidersWrapper = document.querySelector('.offer__slider-wrapper');
    const slidersInner = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidersWrapper).width;

    const parentSlides = document.querySelector('.offer__slider');
    const dots = [];
    
    slidersInner.style.width = 100 * offerSlides.length + '%';
    slidersInner.style.display = 'flex';
    slidersInner.style.transition = 'all 0.6s';
    offerSlides.forEach(slide => { slide.style.width = width; });

    parentSlides.style.position ='relative';

    slidersWrapper.style.overflow = 'hidden';
    const wrapperDots = document.createElement('ol');
    wrapperDots.classList.add('carousel-indicators');
    parentSlides.append(wrapperDots);

    for(let i = 0; i < offerSlides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if(i === 2)dot.style.opacity = 1;
        dots.push(dot);
        wrapperDots.append(dot);
    }


    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[current.innerHTML.slice(1) - 1].style.opacity = 1;
    }

    let offset = 0;
    function increment() {
        if(current.innerHTML < total.innerHTML)current.innerHTML = '0' + (+current.innerHTML + 1);
        else current.innerHTML = '01';
        dotsOpacity();
    }
    function decrement() {
        if(current.innerHTML > 1)current.innerHTML = '0' + (current.innerHTML - 1);
        else current.innerHTML = total.innerHTML;
        dotsOpacity();
    }
    function next() {
        if(offset == width.slice(0, width.length - 2) * (offerSlides.length - 1)) offset = 0;
        else offset += +width.slice(0, width.length - 2);
        slidersInner.style.transform = `translateX(-${offset}px)`;
        increment();
        }
    function prev() {
        if(offset == 0) offset += +width.slice(0, width.length - 2) * (offerSlides.length - 1);
        else offset -= width.slice(0, width.length - 2);
        slidersInner.style.transform = `translateX(-${offset}px)`;
        decrement();
        }
    sliderNext.addEventListener('click', next);
    sliderPrev.addEventListener('click', prev);

    dots.forEach(dot => { 
        dot.addEventListener('click', (e) => {
            const valueAttribute = e.target.getAttribute('data-slide-to');
            let index;
            switch(+valueAttribute) {
                case 3: index = 0;
                    break;
                case 4: index = 1;
                    break;
                case 1: index = 2; 
                    break;
                case 2: index = 3;
            }
            offset = width.slice(0, width.length - 2) * index;
            slidersInner.style.transform = `translateX(-${offset}px)`;
            current.innerHTML = '0' + valueAttribute;
            dots.forEach(dot => dot.style.opacity = 0.5);
            dots[valueAttribute - 1].style.opacity = 1;
        });
    });
});