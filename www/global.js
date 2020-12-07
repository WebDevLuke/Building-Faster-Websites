/*
----------------------------
Header
----------------------------
*/

const header = document.querySelector('.header');
const hamburger = header.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
	header.classList.toggle('is-active');
});

/*
----------------------------
Scroll To Functionality
----------------------------
*/

// Gets distance of element from top of page
window.fromTop = function (elem) {
    let top = 0;
    do {
        top += elem.offsetTop || 0;
        elem = elem.offsetParent;
    }
    while(elem);
    return top;
};

// Scrolls to element
scrollToFunc = function (target, offset) {
	console.log(fromTop(target) + offset)
	window.scrollTo({
		top: fromTop(target) + offset, 
		behavior: 'smooth'
	});
};

const elems = document.querySelectorAll('[data-scroll]');
for(let i = 0; i < elems.length; i++) {
	elems[i].style.cursor = 'pointer';
	elems[i].addEventListener('click', function(e) {
		e.preventDefault();
		scrollToFunc(
			document.querySelector('.' + this.dataset.scroll),
			parseInt(this.dataset.scrollOffset || 0)
		)
	})
}