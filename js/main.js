;(function() {
	"use strict";
	let btn = document.querySelector('.menu-toggle');
	let menu = document.querySelector('.menu');
	btn.addEventListener('click', function (e) {
		menu.classList.toggle('open');
	});
})();
