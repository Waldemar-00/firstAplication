$(document).ready(() => {
    const btn = $('#btn');
    console.log(btn);

    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
    // $('.list-item').hover(function() { //! all elements have class '.list-item'
    // $(this).toggleClass('active');
    // });
    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle',
        }, 2000);
    });
});

