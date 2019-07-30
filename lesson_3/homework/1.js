/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

	var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
	var currentPosition = 0;
	
	const slider = document.getElementById("slider");

	window.addEventListener("load", function() {
		renderImage(0);
	})

	const buttons = document.querySelectorAll("button");
	const toggleButtons = buttons => buttons.forEach(btn => btn.disabled = !btn.disabled) 

	function disappearPrevAndRenderNext(elem, position) {
		toggleButtons(buttons);
		elem.style.animation = "fadeOut 1.2s ease-in"
		elem.addEventListener("animationend", () => {
			elem.remove();
			renderImage(position);
			toggleButtons(buttons);
		});
	}

	function renderImage(position) {		
		const img = new Image(300, 300);
					img.src = OurSliderImages[position];
					img.style.margin = "25px";
					slider.appendChild(img);
					img.style.animation = "fadeIn 1s ease-out";
	}

	function nextSilde() {
		if (currentPosition < OurSliderImages.length - 1) {
			currentPosition++;
		} 
		else {
			currentPosition = 0;
		}
		const currentSliderImage = slider.querySelector("img");
		disappearPrevAndRenderNext(currentSliderImage, currentPosition, this);
	}
	function prevSilde() {
		if (currentPosition > 0) {
			currentPosition--;
		} 
		else currentPosition = OurSliderImages.length - 1;
		const currentSliderImage = slider.querySelector("img");
		disappearPrevAndRenderNext(currentSliderImage, currentPosition, this)
	}

	document.getElementById("NextSlide").addEventListener("click", nextSilde);
	document.getElementById("PrevSlide").addEventListener("click", prevSilde);
