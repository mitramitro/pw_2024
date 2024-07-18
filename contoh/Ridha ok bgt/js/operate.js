function menuToggle() {
	const mobileMenu = document.querySelector('.navigation');
	mobileMenu.classList.toggle('open');
}

const popupPopup = document.querySelectorAll('[data-modal]');

popupPopup.forEach(function(trigger) {
	trigger.addEventListener('click', function(event) {
		event.preventDefault();
		const popup = document.getElementById(trigger.dataset.modal);
		popup.classList.add('open');
		const exitExit = popup.querySelectorAll('.popupbox-exit');
		exitExit.forEach(function(exit) {
			exit.addEventListener('click', function(event) {
				event.preventDefault();
				popup.classList.remove('open');
			});
		});
	});
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blogSlides");
  var dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(function() {
	plusSlides(1);
}, 5000);