const p = document.querySelector('p');
let insert = null;

for(let i = 1; i < 100000; i++) {
	if(i % 6 == 0) {
		insert = insert + i + ', ';
	}
}

p.innerHTML = insert;