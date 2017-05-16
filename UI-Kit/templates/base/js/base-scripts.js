var menu = document.querySelector('.js-dropdown__btn');
var menuList = document.querySelectorAll('.js-menu-list__link');
var paginationLinks1 = document.querySelectorAll('.js-pagination-first');
var paginationLinks2 = document.querySelectorAll('.js-pagination-second');
var tableCheckBoxes = document.querySelectorAll('.js-c-box');
var close = document.querySelectorAll('.js-ic_close');
var circleClose = document.querySelectorAll('.icon_close-circle');

function clear(array) {
	for (var i = 0; i < array.length; i++) {
		array[i].classList.remove('is-active');
	}
}

menu.addEventListener('click', function () {
	if (this.classList.contains('active')) {
		this.classList.remove('active');
	} else {
		this.classList.add('active');
	}
});

menuList.forEach(function (link) {
	link.addEventListener('click', function () {
		clear(menuList);
		this.classList.add('is-active');
	});
});

paginationLinks1.forEach(function (link) {
	link.addEventListener('click', function () {
		clear(paginationLinks1);
		this.classList.add('is-active');
	});
});

paginationLinks2.forEach(function (link) {
	link.addEventListener('click', function () {
		clear(paginationLinks2);
		this.classList.add('is-active');
	});
});

tableCheckBoxes.forEach(function (check) {
	check.addEventListener('click', function () {
		if (this.checked) {
			this.parentNode.parentNode.classList.add('checked');
		} else {
			this.parentNode.parentNode.classList.remove('checked');
		}
	});
});

close.forEach(function (e) {
	e.addEventListener('click', function () {
		this.parentNode.style.display = 'none';
	});
});

circleClose.forEach(function (e) {
	e.addEventListener('click', function () {
		this.parentNode.children[0].value = '';
	});
});