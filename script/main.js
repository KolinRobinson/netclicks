
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});

document.body.addEventListener('click', (e) => {
	if (!e.target.closest('.left-menu')){
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}
});

leftMenu.addEventListener('click', e => {
	const target = e.target;
	const dropdown = target.closest('.dropdown');
	if (dropdown){
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hamburger.classList.add('open');
	}
});

const cartImg = document.querySelectorAll('.tv-card__img');

for (let i = 0; i < cartImg.length; i++) {
	let srcImg = cartImg[i].src;
	let defaultImg = 'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg';
	cartImg[i].addEventListener('mouseover', function (e) {
		if (e.target.dataset.backdrop != e.target.src && e.target.dataset.backdrop != ''){
			e.target.src = e.target.dataset.backdrop;
		} else {
			e.target.src = defaultImg;
		}
	});
	cartImg[i].addEventListener('mouseout', function (e) {
		e.target.src = srcImg;
	});
}