const button = document.querySelector('button');
const p = document.querySelector('p');

let state = 'none';

button.addEventListener('click', function() {
	if(state == 'none') {
		p.style['display'] = 'block';
		state = 'block';
	}
	else {
		p.style['display'] = 'none';
		state = 'none';
	}
})