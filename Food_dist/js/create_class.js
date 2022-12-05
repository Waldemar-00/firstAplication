window.addEventListener('DOMContentLoaded', () => {
    class createMenuItem {
    constructor(srcImg, altImg, h3Text, blockDescription, price, currency, parentSelector, ...classes) {
        this.srcImg = srcImg;
        this.altImg = altImg;
        this.h3Text = h3Text;
        this.blockDescription = blockDescription;
        this.price = price;
        this.currency = currency;
        this.currencyExchange();
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }
    currencyExchange() {
        this.price = this.price * this.currency;
    }
    render(){
        const div = document.createElement('div');
        if(this.classes.length === 0)div.classList.add('menu__item');
        else this.classes.forEach(el => div.classList.add(el));
        div.innerHTML = 
        `<img src=${this.srcImg} alt=${this.altImg}>
        <h3 class="menu__item-subtitle">${this.h3Text}</h3>
        <div class="menu__item-descr">${this.blockDescription}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
    this.parent.append(div);
        
    }

}
const getResource = async (url) => {
    const rezsult = await fetch(url);
    if(!rezsult.ok) {
        throw new Error(`Could not fetch ${url}, status: ${rezsult.status}`);
    }
    return await rezsult.json();
};
getResource('http://localhost:3000/menu').then(response => {
    response.forEach(({img, altImg, title, descr, price}) => {
            new createMenuItem(img, altImg, title, descr, price, 27, '.menu .container', 'menu__item', 'text__color').render();
    });
    });
// new createMenuItem(
    // 'img/tabs/vegy.jpg',
    // 'vegy', 
    // 'Меню "Фитнес"',
    // // ' Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    // 9,
    // 27, 
    // '.menu .container',
    // 'menu__item',
    //  ).render(); //! create object, еру method will work, and all will delete from memory!!!
// 
// new createMenuItem(
    // "img/tabs/elite.jpg",
    // "elite", 
    // 'Меню "Премиум"',
    // // 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    // 12,
    // 27, 
    // '.menu .container',
    // 'menu__item', 
    // ).render(); //! create object, еру method will work, and all will delete from memory!!!
// 
// new createMenuItem(
    // "img/tabs/post.jpg",
    // "post", 
    // 'Меню "Постное"',
    // // ' Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    // 7,
    // 27, 
    // '.menu .container',
    // 'menu__item',
    // 'text__color',//? for test
    // ).render(); //! create object, еру method will work, and all will delete from memory!!!
});