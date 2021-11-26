function switchMac(mac){
    var d = document;

    mac.setAttribute('src','./img/front-page/features/mac1.png');
    mac.classList.add('features__mac-after--active')
    var allMacControllers = d.querySelectorAll('.features__elem');
    
    // for (let i = 0; i < allMacControllers.length; i++) {
    //     allMacControllers[i].addEventListener('mousemove', function(){
    //         var newSrc = this.getAttribute('data-image');
    //         newSrc = './img/front-page/features/mac'+newSrc+'.jpeg'
    //         mac.setAttribute('src', newSrc);
    //     })
    // }
} 



var swiper = new Swiper('.blog-swiper-container', {
slidesPerView: 1,
spaceBetween: 10,
loop: true,
// init: false,
pagination: {
el: '.blog-swiper-pagination',
clickable: true,
},
navigation: {
    nextEl: '.blog-swiper-next',
    prevEl: '.blog-swiper-prev',
},
breakpoints: {
    992: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
}
});