const banner_ul = document.querySelector('.banner ul');
const banners = banner_ul.children;
const btns = document.querySelector('.btns');
const pop = document.querySelector('.pop');
const opens = banner_ul.querySelectorAll('a');
const close = pop.querySelector('.close');
const [prev, next] = btns.children;
let num = 0;

init();
prev.addEventListener('click', movePrev);
next.addEventListener('click', moveNext);
opens.forEach((open) => open.addEventListener('click', (e) => openPop(e)));
close.addEventListener('click', closePop);

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

function openPop(e) {
	e.preventDefault();
	const txt = e.currentTarget.closest('li').querySelector('h2').innerText;
	pop.querySelector('h2').innerText = txt;
	pop.classList.add('on');
	e.currentTarget.classList.add('off');
	btns.classList.add('off');
}

function closePop() {
	pop.classList.remove('on');
	btns.classList.remove('off');
	banner_ul.querySelector('li.on a').classList.remove('off');
}
