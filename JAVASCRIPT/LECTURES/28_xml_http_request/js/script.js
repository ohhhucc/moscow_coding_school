const APIKey = '03a9d981c47b6e06ce2e9cfc4e60bfcb';
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
}