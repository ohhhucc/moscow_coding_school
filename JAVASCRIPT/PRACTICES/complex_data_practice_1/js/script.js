function randSquare(num) {
	let rand = Math.floor(Math.random()*(9 - 1) + 1);
	num = num**rand;
	console.log(rand)
	console.log(Math.abs(num));
}

