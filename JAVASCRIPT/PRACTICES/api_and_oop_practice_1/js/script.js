/*const APIKey = '03a9d981c47b6e06ce2e9cfc4e60bfcb';
const city = 'Moscow';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' +  APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();


if(xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
}
else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp - 273);
}*/

const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const form = document.forms[0];

form.onsubmit = function(e) {
	e.preventDefault();
	let city = form.elements.city.value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=03a9d981c47b6e06ce2e9cfc4e60bfcb';

	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if(xhr.status != 200) {
		console.log(xhr.status + ' ' + xhr.statusText);
	}
	else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		temp.innerText = 'TEMPERATURE: ' + (DATA.main.temp - 273);
		wind.innerText = 'WIND SPEED: ' + DATA.wind.speed;
	}
}