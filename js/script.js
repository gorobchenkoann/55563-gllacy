var btn = document.querySelector('.contacts-btn');
var modal = document.querySelector('.modal-feedback');
var close = document.querySelector('.close-btn');
var map = document.querySelector('.map-img');

btn.addEventListener('click', function(e) {
	e.preventDefault();
	modal.style.display = 'flex';
});

close.addEventListener('click', function(e) {
	e.preventDefault();
	modal.style.display = 'none';
});

