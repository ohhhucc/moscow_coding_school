var a = 'hi';

function myFunc() {
	a = 'hello';
	return a;
}

console.log(a);

function myFunc2() {
	var b = 3;
	console.log(b);
}

myFunc2();

if (true) {
	var c = 5;
	let b = 9;
}

console.log(c);
console.log(b); // ошибка