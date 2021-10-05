let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
];

const values = document.querySelectorAll('h2');
const divs = document.querySelectorAll('div');

for(var i = 0; i < values.length; i++) {
  values[i].innerHTML = crypto[i].price;
  divs[i].style['width'] = 100*crypto[i].price/1400 + '%';
}