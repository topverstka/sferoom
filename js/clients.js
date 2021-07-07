var d = document;




		function currentHero(){
						let heroSlide =  d.querySelector('#clients .slider-item.active'),
							heroName = heroSlide.getAttribute('data-name'),
							heroText = heroSlide.getAttribute('data-text'),
							heroLink = heroSlide.getAttribute('data-link'),
							antatation = d.querySelector('.slider-object-antatation');
						
						antatation.querySelector('.slider-object-titile').style.opacity = '0'
						antatation.querySelector('.slider-object-text').style.opacity = '0'
		
						antatation.querySelector('.slider-object-titile').innerHTML = heroName;
						antatation.querySelector('.slider-object-text').innerHTML = heroText;
						antatation.querySelector('.slider-object-link').setAttribute('href', heroLink);
		
						setTimeout(function(){
							antatation.querySelector('.slider-object-titile').style.opacity = '1'
							antatation.querySelector('.slider-object-text').style.opacity = '1'
						}, 300)
					}
			
					let position = 0;
			
					var slidesToShow = 1
					
					var slidesToScroll = 1;
					var container = d.querySelector('#clients .slider-container');
					var track = d.querySelector('#clients .slider-track');
					var btnPrev = d.querySelector('#clients .slider-nav-prev');
					var btnNext = d.querySelector('#clients .slider-nav-next');
					var items = d.querySelectorAll('#clients .slider-item')
					var itemsCount = items.length;
					var itemWidth = container.clientWidth / slidesToShow;
					var movePosition = slidesToScroll * itemWidth;
			
					let startWidth = itemWidth;
			
					for(let i = 0; i < itemsCount; i++){
						let startWidthChislo = i*startWidth
						items[i].style.minWidth = `${itemWidth}px`
					}
			
					items[0].classList.add('active')
					if(document.body.clientWidth >= 992){
						//items[0].nextElementSibling.style.transform = `translateX(${position-400}px)`;
						items[0].style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (280*100/1920) )}vw)`; // Основной слайд
						items[0].nextElementSibling.style.transform =  `translateX(-${parseFloat((position*100/window.innerWidth) + (1000*100/1920) )}vw)`; // Обесцвеченный слайд
					} else {
						items[0].nextElementSibling.style.transform =  `translateX(-${parseFloat((position*100/window.innerWidth) + (1000*100/1920) )}vw)`; // Обесцвеченный слайд
					}
					
					currentHero();
					
			
					btnNext.addEventListener('click', function(){
						var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
						position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		
						setPosition();
						
						
					
						let = activeElem = d.querySelector('#clients .slider-item.active'),
								nextElem = d.querySelector('#clients .slider-item.active+.slider-item');
			
						activeElem.classList.remove('active');
						nextElem.classList.add('active');
						
						
						if(nextElem.nextElementSibling != null){
							activeElem.classList.add('after');
							if(document.body.clientWidth >= 992){
								nextElem.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (280*100/1920) )}vw)`; // Основной слайд
								nextElem.nextElementSibling.style.transform = `translateX(${parseFloat((position*100/window.innerWidth) - (1000*100/1920) )}vw)`;// Обесцвеченый слайд
								activeElem.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (1377*100/1920) )}vw)`; // Предидущий слайд
							}else{
								// Мобилка
								nextElem.nextElementSibling.style.transform =  `translateX(${parseFloat((position*100/window.innerWidth) - (1000*100/1920) )}vw)`; // Обесцвеченный слайд
							}
							nextElem.nextElementSibling.classList.remove('last-active')
						}else{
							nextElem.classList.add('last-active');
							if(document.body.clientWidth >= 992){
								nextElem.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (280*100/1920) )}vw)`;
								activeElem.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (1377*100/1920) )}vw)`; // Предидущий слайд
							}else{
								console.log(parseFloat( (position*100/window.innerWidth) + (4900*100/1920) ));
							}
							activeElem.classList.add('after');
						}
						
						checkBtns();
						currentHero();
					});
			
					btnPrev.addEventListener('click', function(){
						var itemsLeft = Math.abs(position) / itemWidth;
						position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
						setPosition();
						checkBtns();
			
						let = activeElem = d.querySelector('#clients .slider-item.active'),
							  prevElem = activeElem.previousElementSibling;
			
						activeElem.classList.remove('active');
						if(document.body.clientWidth >= 992){
							//activeElem.style.transform = `translateX(${position-400}px)`;
							prevElem.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (280*100/1920) )}vw)`; // Основной слайд
							activeElem.style.transform = `translateX(${parseFloat((position*100/window.innerWidth) - (1000*100/1920) )}vw)`; // Обесцвеченный слайд
							if(prevElem.previousElementSibling != null){
								prevElem.previousElementSibling.style.transform = `translateX(${parseFloat( (position*100/window.innerWidth) + (1377*100/1920) )}vw)`; // Предидущий слайд
							}
						}else{
							activeElem.style.transform =  `translateX(${parseFloat( (position*100/window.innerWidth) - (1000*100/1920) )}vw)`; // Обесцвеченный слайд
						}
						prevElem.classList.add('active');
						prevElem.classList.remove('after');
						currentHero();
					});
			
					var setPosition = () => {
						items.forEach((item) => {
							item.style.transform = `translateX(${position}px)`;
							console.log(item)
						});
					}
		
					var checkBtns = (elem) => {
						if(position === 0){
							btnPrev.classList.add('finish');
						}else{
							btnPrev.classList.remove('finish');
						}
						if(position <= -(itemsCount - slidesToShow) * itemWidth){
							btnNext.classList.add('finish');
						}else{
							btnNext.classList.remove('finish');
						}
					}
					checkBtns();



// Свайпы


document.querySelector('.clients-hero .slider-container').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.clients-hero .slider-container').addEventListener('touchmove', handleTouchMove, false);


var xDown = null;
var yDown = null;

const logBlock = document.querySelector('.log-block');

 
function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
 
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return false;
    }
 
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
 
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
 
    if ( Math.abs( xDiff ) >  Math.abs( yDiff ) ) {/* отлавливаем разницу в движении */
        if ( xDiff < 0 ) {
            if(!btnPrev.classList.contains('finish')){
                btnPrev.click()
            }
        
        
        } else {
            if(!btnNext.classList.contains('finish')){
                btnNext.click()
            }
            
        }
    } 
    /* свайп был, обнуляем координаты */
    xDown = null;
    yDown = null;
};