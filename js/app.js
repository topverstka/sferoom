document.addEventListener("DOMContentLoaded", function() {
	var d = document;

	if(window.innerWidth > 992){
		//new SmoothScroll(document,50,12);
		new SmoothScroll(document,100,12);
	} else{

		let anchors = document.querySelectorAll('a.achore-link')
		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				var blockID = anchor.getAttribute('href').substr(1);
				if(window.innerWidth < 992 && !this.classList.contains('btn--first-screen__second')){
					d.querySelector('.header__burger').click();
				}
				if(this.classList.contains('btn--first-screen__second')){
					setTimeout(function(){

						d.querySelector('#first-screen').style.opacity = 0;

						setTimeout(function(){
							d.querySelector('#first-screen').style.overflow = 'hidden';
							d.querySelector('#first-screen').style.height = 0;
							setTimeout(function(){
								
								d.querySelector('.presentation').classList.add('active');
								d.querySelector('.presentation').style.opacity = 1;
								window.scrollTo({
									top: -100,
									behavior: "smooth"
								});
							}, 400)
						},800)
					},400)
				}else if(this.classList.contains('home')){
					
						d.querySelector('.presentation').style.opacity = 0;
					
						setTimeout(function(){
							d.querySelector('.presentation').classList.remove('active');
							d.querySelector('#first-screen').style.height = 'auto';
							setTimeout(function(){
								d.querySelector('#first-screen').style.opacity = 1;
								window.scrollTo({
									top: -100,
									behavior: "smooth"
								});
							}, 400)
						},1000)
				}else{
					
						setTimeout(function(){

							d.querySelector('#first-screen').style.opacity = 0;
		
							setTimeout(function(){
								d.querySelector('#first-screen').style.overflow = 'hidden';
								d.querySelector('#first-screen').style.height = 0;
								setTimeout(function(){
									d.querySelector('.presentation').classList.add('active');
									d.querySelector('.presentation').style.opacity = 1;
									var elementPosition = document.getElementById(blockID).offsetTop;
									window.scrollTo({
										top: elementPosition,
										behavior: "smooth"
									});
								}, 400)
							},400)
							
						},100)
				}
				
			})
		}
	}
	

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop
	
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling
		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}



    let anchors = document.querySelectorAll('a.achore-link')
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
		    
			e.preventDefault()
			
			var blockID = anchor.getAttribute('href').substr(1);
			if(window.innerWidth < 992 && !this.classList.contains('btn--first-screen__second')){
				d.querySelector('.header__burger').click();
			}
			
			
			if(this.classList.contains('btn--first-screen__second')){
				setTimeout(function(){

					d.querySelector('#first-screen').style.opacity = 0;

					setTimeout(function(){
						d.querySelector('#first-screen').style.overflow = 'hidden';
						d.querySelector('#first-screen').style.height = 0;
						setTimeout(function(){
							
							d.querySelector('.presentation').classList.add('active');
							d.querySelector('.presentation').style.opacity = 1;
							window.scrollTo({
								top: -100,
								behavior: "smooth"
							});
						}, 400)
					},800)
				},400)
			}else if(this.classList.contains('home')){
				
					d.querySelector('.presentation').style.opacity = 0;
				
					setTimeout(function(){
						d.querySelector('.presentation').classList.remove('active');
						d.querySelector('#first-screen').style.height = 'auto';
						setTimeout(function(){
							d.querySelector('#first-screen').style.opacity = 1;
							window.scrollTo({
								top: -100,
								behavior: "smooth"
							});
						}, 400)
					},1000)
			}else{
				
					setTimeout(function(){

						d.querySelector('#first-screen').style.opacity = 0;
	
						setTimeout(function(){
							d.querySelector('#first-screen').style.overflow = 'hidden';
							d.querySelector('#first-screen').style.height = 0;
							setTimeout(function(){
								d.querySelector('.presentation').classList.add('active');
								d.querySelector('.presentation').style.opacity = 1;
								var elementPosition = document.getElementById(blockID).offsetTop;
								window.scrollTo({
									top: elementPosition,
									behavior: "smooth"
								});
							}, 400)
						},400)
						
					},100)
			}
			
			
                 
			setTimeout(function(){
				pos = document.getElementById(blockID).offsetTop;
				let aItems = document.querySelectorAll('.my-paroller')
				for (let aItem of aItems) {
					aItem.removeAttribute("style");
				}
			},1000);
			   
		})
	}

	function update() {
		moving = true
    
		var delta = (pos - target.scrollTop) / smooth
    
		target.scrollTop += delta
    
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}


	// Открытие мобильного меню
	var menuBurger = d.querySelector('.header__burger');
	menuBurger.addEventListener('click', function(e){
		e.preventDefault();

		if(d.querySelector('.header__burger').classList.contains('active')){
			if(!window.innerWidth > 992){
				d.querySelector('body').classList.remove('stop');
				d.querySelector('.screen-slide').classList.remove('active');
			}
			d.querySelector('.header').classList.remove('header--active');
			d.querySelector('.header__burger').classList.remove('active');
			
		}else{
			if(!window.innerWidth > 992){
				d.querySelector('body').classList.add('stop');
				d.querySelector('.screen-slide').classList.add('active');	
			}
			d.querySelector('.header').classList.add('header--active');
			d.querySelector('.header__burger').classList.add('active');
		}
		
	})


	// Скрытие мобильного меню
	function findCloseBtns(){
		let closeBtns = document.querySelectorAll('.close');
		
		for (let i = 0; i < closeBtns.length; i++) {
			setUpClose(closeBtns[i]);
		}
	}

	function setUpClose(closeBtn) {
		closeBtn.addEventListener('click', function(e){
			e.preventDefault();
			menuBurger.classList.remove('header__burger--active');
			d.querySelector('.header').classList.remove('header--active');
			d.querySelector('body').classList.remove('stop');
			d.querySelector('.modal').classList.remove('modal--active');
			d.querySelector('.modal-window--order').classList.remove('modal-window--active');
			
		})
	}
	findCloseBtns();

	// Поиск кнопок для модалок
	function findBtnModal(){
		let btnsModal = document.querySelectorAll('.btn--modal');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModal(btnsModal[i]);
		}
	}

	function setUpBtnModal(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('body').classList.add('stop');
			d.querySelector('.modal').classList.add('modal--active');
			d.querySelector('.modal-window--order').classList.add('modal-window--active');
		})
	} 
	findBtnModal();

	// let btnsBlog = document.querySelectorAll('.blog__slide a');
	// for (let i = 0; i < btnsBlog.length; i++) {
	// 		setUpBtnBlog(btnsBlog[i]);
	// }
	// function setUpBtnBlog(btnBlog) {
	// 	btnBlog.addEventListener('click', function(e){
	// 		e.preventDefault();
	// 		d.querySelector('body').classList.add('stop');
	// 		let str = ".modal-blog-" + btnBlog.getAttribute('data-link');
	// 		let str2 = ".modal-window--order-blog-" + btnBlog.getAttribute('data-link');
	// 		d.querySelector(str).classList.add('modal--active');
	// 		d.querySelector(str2).classList.add('modal-window--active');
	// 	})
	// } 

	let ov = d.querySelectorAll('.modal-overlay-blog');
	console.log(ov);
	for (let i = 0; i < ov.length; i++) {
		ov[i].addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('body').classList.remove('stop');
			let s1 = '.modal-blog-' + ov[i].getAttribute('data-i');
			let s2 = '.modal-window--order-blog-' + ov[i].getAttribute('data-i');

				d.querySelector(s1).classList.remove('modal--active');
				d.querySelector(s2).classList.remove('modal-window--active');
			
		}); 
	}

	// Скрытие модалки при клике на оверлей
	d.querySelector('.modal-overlay').addEventListener('click', function(e){
		e.preventDefault();
		d.querySelector('body').classList.remove('stop');
		d.querySelector('.modal').classList.remove('modal--active');
		d.querySelector('.modal-window--order').classList.remove('modal-window--active');
	});


	// Sticky header
	var header = d.querySelector('header'),
		scrollPrev = 0

	window.addEventListener('scroll', function() {
		var scrolled = pageYOffset;
        if ( scrolled > 200 ) {
          header.classList.add('header--glued');
        } else {
          header.classList.remove('header--glued');
        }
        scrollPrev = scrolled;	
	});


	// Forms
	function sendFormTo(form) {
		let formData = new FormData(form);
		let xhr = new XMLHttpRequest();
		var th = form;


		// Валидация
		var novalidInputs = th.querySelectorAll('[novalid]');
		for (let i = 0; i < novalidInputs.length; i++) {
			novalidInputs[i].removeAttribute("novalid");
		}

		var novalidInputs = 0;
		for (var key of formData.keys()) {
			if (formData.get(key) == '' || formData.get(key) == null) {
				if (key == 'name') {
					form.querySelector('input[name=' + key + ']').setAttribute("novalid", "true");
					novalidInputs++
				}
				if (key == 'phone') {
					form.querySelector('input[name=' + key + ']').setAttribute("novalid", "true");
					novalidInputs++
				}
			}
		}

		if (novalidInputs > 0) {
			return false;
		}

		xhr.open("POST", "../mail.php");
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					form.reset();
					d.querySelector('body').classList.remove('stop');
					d.querySelector('.modal').classList.remove('modal--active');
					d.querySelector('.modal-window--order').classList.remove('modal-window--active');
				}
			}
		};
		xhr.send(formData);
	}


	document.querySelectorAll('form').forEach(link => {
		link.addEventListener('submit', function (e) {
			e.preventDefault();
			sendFormTo(this);
		});
	});
	


	// Запуск видосов при попадании в зону видимости
	const animVideoItems =  document.querySelectorAll("._animation-video");
	window.addEventListener('scroll', animOnScrollVideo);
	function animOnScrollVideo(){
		for( let i = 0; i < animVideoItems.length; i++){
			const animVideoItem = animVideoItems[i];
			const animVideoItemHeight = animVideoItem.offsetHeight;
			const animVideoItemOffset = offset(animVideoItem).top;
			var animStart = 4;

			let animVideoItemPoint = window.innerHeight - animVideoItemHeight / animStart;
			if(animVideoItemHeight >  window.innerHeight){
				animVideoItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animVideoItemOffset - animVideoItemPoint) && pageYOffset < (animVideoItemOffset + animVideoItemHeight)){
				if(!animVideoItem.classList.contains('_active')){
					animVideoItem.play();
					animVideoItem.classList.add('_active');
				}
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	animOnScrollVideo()






	// Анимация для секции "Продвижение (МАК)"
	let isRezeble = false;
	function openMac() {
		if(!isRezeble){
			var mac;
			if(window.innerWidth > 992){
				mac = d.querySelector('.features__mac-defoult video.video--pc');
			} else{
				mac = d.querySelector('.features__mac-defoult video.video--mob');
			}

			mac.play();
			var mac = d.querySelector('.features__mac-after--switched')
			setTimeout(function(){
				switchMac(mac);
			}, 3000);
		}
		isRezeble = true;
	}

	// Анимация для секции "Упаковка"
	function packagingAnim(){
		let handWithPhone = d.querySelector('#packaging .packaging-phone--mob');
		handWithPhone.style.transform = 'translateY(0%)';

		let handWithPhone2 = d.querySelector('#packaging .packaging-phone--pc');
		handWithPhone2.style.transform = 'translateY(0%)';
	}

	// Анимация для секции "Туринры"
	function tournamentsAnim(){
		let leftObject = document.querySelector('#tournaments .decoration--1'),
			rightObject = document.querySelector('#tournaments .decoration--2');

			if(window.innerWidth > 992){
				leftObject.style.left = '1.3%';
				rightObject.style.right = '-2.2%';
			} else {
				leftObject.style.left = '-47.625vw';
				rightObject.style.right = '-56.125vw';
			}
			
			leftObject.style.opacity = '1';
			rightObject.style.opacity = '1';
	}

	// Анимация для секции "Продажа"
	function salesAnim(){
		let almub1 = document.querySelector('.sales-phone__album--1'),
			almub2 = document.querySelector('.sales-phone__album--2'),
			almub3 = document.querySelector('.sales-phone__album--3'),
			phoneSales = document.querySelector('.sales-phone__background'),
			phonealertSales = document.querySelector('.sales-hero .dynamin-phone__alert');
		
		phoneSales.style.right = 0;

		setTimeout(function(){
			phonealertSales.style.opacity = '1';
			almub1.style.opacity = '1';
		}, 1000)
		
				
		if(window.innerWidth > 992){
			setTimeout(function(){
				almub2.style.transform = 'translateX(-22.8VW)';
				almub2.style.opacity = '1';
				almub2.querySelector('.sales-phone__album-title').style.opacity = '1';
				almub2.querySelector('.sales-phone__albumauthor').style.opacity = '1';

				almub3.style.transform = 'translateX(-38.5VW)';
				almub3.style.opacity = '1';
				almub3.querySelector('.sales-phone__album-title').style.opacity = '1';
				almub3.querySelector('.sales-phone__albumauthor').style.opacity = '1';
			}, 2000)
		}
	}


	// Анимация для заголовков, описаний и кнопок
	function toTopAnim(item){
		item.style.opacity = '1';
		item.style.transform = 'none';
	}

	const animItems =  document.querySelectorAll("._animation-elem");
	if(animItems.length > 0){
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll(startAnimation){
			for( let i = 0; i < animItems.length; i++){
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				var animStart = animItem.getAttribute('data-offset') || 2;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if(animItemHeight >  window.innerHeight){
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){

					// Запуск анимации в секции с турнирами
					// if(animItem.id == 'tournaments'){
					// 	tournamentsAnim();
					// }
					
					// Запуск анимации в секции с продажами
					// if(animItem.id == 'sales'){
					// 	salesAnim();
					// }

					// Запуск анимации в секции с упаковкой
					// if(animItem.id == 'packaging'){
					// 	packagingAnim()
					// }

					// Запуск анимации в секции с продвижением
					if(animItem.id == 'mac-checkpoint'){
						openMac()
					}

					// Запуск анимации для заголовков, описаний и кнопок.
					if(animItem.classList.contains('title') || animItem.classList.contains('subtitle') || animItem.classList.contains('btn')){
						toTopAnim(animItem);
					}
				}
			}
		}
		function offset(el){
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
		animOnScroll();
	}
});