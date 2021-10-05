const items = document.getElementsByTagName('li');

console.log(items);

let index = 0;

while(index < items.length) {
	items[index].innerHTML = index + 1;
	index++;
}