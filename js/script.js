var btn = document.querySelector('.contacts-btn');
var modal = document.querySelector('.modal-feedback');
var form = document.querySelector('.feedback-form');
var close = document.querySelector('.close-btn');
var formname = modal.querySelector("[name=feedback-name]");
var email = modal.querySelector("[name=feedback-email]");
var comment = modal.querySelector("[name=feedback-comment]");
var storage = localStorage.getItem("formname");

btn.addEventListener('click', function(e) {
	e.preventDefault();
	modal.style.display = 'flex';
	if (storage) {
		formname.value = storage;
		email.focus();
	}
	else {
		formname.focus();
	}
});

close.addEventListener('click', function(e) {
	e.preventDefault();
	modal.style.display = 'none';
	form.classList.remove('modal-error');
});

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (!formname.value || email.value || comment.value) {
		e.preventDefault();
		form.classList.remove('modal-error');
		modal.offsetWidth = modal.offsetWidth;
		form.classList.add('modal-error');		
	}
	else {
		localStorage.setItem("formname", formname.value);
	}
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
		if (modal.style.display == 'flex') {
		modal.style.display = 'none';
		form.classList.remove('modal-error');
		}
    }
  });


