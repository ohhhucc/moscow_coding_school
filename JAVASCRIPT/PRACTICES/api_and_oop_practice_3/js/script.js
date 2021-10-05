window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.forms[0];
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=03a9d981c47b6e06ce2e9cfc4e60bfcb'

	class Person {

		constructor(name) {

			this.name = name;
			this.happiness = 0;

		}
		hasCat() {

			return this.happiness++;

		}
		hasRest() {

			return this.happiness++;

		}
		hasMoney() {

			return this.happiness++;

		}
		isSunny() {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			xhr.send();

			if(xhr.status != 200) {
				console.log(xhr.status + ' ' + xhr.statusText);
			}
			else {
				let DATA = JSON.parse(xhr.responseText);
				if(DATA.main.temp - 273 > 15) {
					return this.happiness++;
				}
				else {
					return this.happiness;
				}
			}
		}
	}

	form.onsubmit = function(e) {

		e.preventDefault();

		let name = form.elements.name.value;
		let catValue = form.elements['cat'].value;
		let restValue = form.elements['rest'].value;
		let moneyValue = form.elements['money'].value;
		let newPerson = new Person(name);

		let personName = document.querySelector('.personName');
		let icon = document.querySelector('.icon');

		if(catValue == "yes") {

			newPerson.hasCat();

		}
		if(restValue == "yes") {

			newPerson.hasRest();

		}
		if(moneyValue == "yes") {

			newPerson.hasMoney();

		}

		newPerson.isSunny();

		personName.innerText = name;

		if(newPerson.happiness == 4) {
			icon.innerHTML = '<img src="img/smiling.png">';
		}
		else if(newPerson.happiness == 3 || newPerson.happiness == 2) {
			icon.innerHTML = '<img src="img/neutral.png">';
		}
		else {
			icon.innerHTML = '<img src="img/frowning.png">';
		}

	}
});

