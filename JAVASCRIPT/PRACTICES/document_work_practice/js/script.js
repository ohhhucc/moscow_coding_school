const body = document.querySelector('body');
const page = document.querySelector('.page');
const name = document.querySelector('.name');
const img = document.querySelector('img');
const bio = document.querySelector('p');

body.style['background-color'] = "#696969";
page.style['color'] = "ghostwhite";

name.innerText = "DJ Rashad";

img.setAttribute('src', 'http://s3.amazonaws.com/quietus_production/images/articles/12158/DJ_Rashad_1367483646.jpg');

bio.className += ' animated';