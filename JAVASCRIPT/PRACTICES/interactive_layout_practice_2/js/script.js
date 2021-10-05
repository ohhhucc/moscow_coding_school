const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));

let computer = Math.floor(Math.random() * 3);

if (player == rock && computer == scissors || player == scissors && computer == paper || player == paper && computer == rock) {
	console.log('player win');
}

else if (player == scissors && computer == rock || player == paper && computer == scissors || player == rock && computer == paper) {
	console.log('computer win');
}

else if (player == computer) {
	console.log('draw');
}
else {
	console.log('введите число от 0 до 2');
}