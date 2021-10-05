const result = document.querySelector('h1');
const form = document.forms[0];

form.onsubmit = function(e) {
	e.preventDefault();
	result.innerHTML = 'SIN(' + form.elements.degree.value + ') = ' + Math.sin(form.elements.degree.value*Math.PI/180);
}