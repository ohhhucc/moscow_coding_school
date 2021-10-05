const buttons = document.querySelectorAll('button');

for(button of buttons) {
	button.style['background-color'] = 'lightblue';
}

let person = {
	name: 'Igor',
	surname: 'Kasyan',
	student: true
}

for(key in person) {
	console.log(key + ' ' + person[key]);
}