let answer = prompt('Введите имя музыканта:');

answer = answer.toLowerCase();

switch(answer) {
	case 'dr. dre':
		console.log('rap');
	break;
	case 'jimmy hendrix':
		console.log('rock');
	break;
	case 'britney spears':
		console.log('pop');
	break;
	default:
		console.log('no info');
	break;
}