const banner_ul = document.querySelector('.banner ul');
const banners = banner_ul.children;
const btns = document.querySelector('.btns');
const [prev, next] = btns.children;
let num = 0;

init();
prev.addEventListener('click', movePrev);
next.addEventListener('click', moveNext);

function init() {
	for (let i = 0; i < 3; i++) banner_ul.prepend(banner_ul.lastElementChild);
}

function activation() {
	for (const el of banners) el.classList.remove('on');
	banners[3].classList.add('on');
}

function movePrev() {
	banner_ul.prepend(banner_ul.lastElementChild);
	activation();
}

function moveNext() {
	banner_ul.append(banner_ul.firstElementChild);
	activation();
}
