const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

let quest = prompt('Введите цвет:');

Colored.style.backgroundColor = "blue";

Colored.style['background-color'] = quest;