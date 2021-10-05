let haveEnough = () => {

	let totalCash = prompt('Введите сумму наличных:');

	let watchesCount = parseInt(prompt('Введите количество золотых часов:'));
	let earringsCount = parseInt(prompt('Введите количество сережек:'));

	let unitCost = parseInt(prompt('Введите стоимость одного украшения:'));

	let watchesSum = unitCost * watchesCount;
	let earringsSum = unitCost * earringsCount;

	console.log(totalCash + " >= " + watchesSum + " + " + earringsSum + " ?");

	(parseInt(totalCash) >= watchesSum + earringsSum) ? console.log('Enough $$$') : console.log('Not enough $$$');

}



