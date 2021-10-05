class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Привет, ' + this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Привет, ' + this.name + '! Ты зарегестрирована!';
	}
}

const Man = new User ('Имя', 'Почта', 'Пароль');

console.log(Man);

console.log(Man.sayHi());

const Girl = new Female ('Имя', 'Почта', 'Пароль');

console.log(Girl);

console.log(Girl.sayHi());