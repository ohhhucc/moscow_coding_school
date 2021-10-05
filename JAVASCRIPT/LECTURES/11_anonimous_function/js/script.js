let myFunc = function(element, color) {
	element.style['background-color'] = color;
}

const header = document.querySelector('h1');
const p = document.querySelector('p');

myFunc(header, 'blue');
myFunc(p, 'red');
