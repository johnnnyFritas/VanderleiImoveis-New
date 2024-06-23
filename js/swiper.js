const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const apSlideClick = document.getElementById('apSlideClick');

apSlideClick.addEventListener('click', ()=> {
    const apSlideClickT1 = document.getElementById('apSlideClickT1');

    const aux = apSlideClickT1.getAttribute('alt');

    if(aux === 'AMO') {
        window.location.replace('pages/apartamentos/' + aux + '.html');
    }
});

const ancoraSlide = document.getElementById('ancoraSlide');

ancoraSlide.addEventListener('click', ()=> {
    const apSlideClickT1 = document.getElementById('apSlideClickT1');

    const aux = apSlideClickT1.getAttribute('alt');

    if(aux === 'AMO') {
        ancoraSlide.setAttribute('href', 'pages/apartamentos/' + aux + '.html');
    }
});