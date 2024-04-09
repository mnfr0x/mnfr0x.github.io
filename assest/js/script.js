window.onload = function() {
	var log = document.querySelector('.log');
	var content = document.querySelector('.main');

	log.addEventListener('animationend', function() {
		content.style.display = 'block';
	});
};