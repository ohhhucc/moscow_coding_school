let person = {
	name : 'Игорь',
	surname : 'Касьян',
	age : 20,
	student : true,
	sayHello : function() {
		return 'Hello, ' + this.name;
	}
}

console.log(person.age);
console.log(person.sayHello());

person.canCode = true;

console.log(person);

person.age = 19;

console.log(person);

console.log(person['surname']);