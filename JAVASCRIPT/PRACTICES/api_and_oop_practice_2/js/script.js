class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		return 'Now the ' + this.name + ' is full! Purrrrrr';
	}
}

class angryTiger extends Tiger {
	throwDart() {
		return 'It seems that the ' + this.name + ' is angry, let him sleep! ZzZzzZzZz';
	}
}

const batya = new angryTiger('batya');

console.log(batya.feedCat());

console.log(batya.throwDart());

