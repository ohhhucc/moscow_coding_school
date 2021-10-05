const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');


button.onclick = function() {
	popup.style['display'] = 'flex';
}

closePopup.onclick = function() {
	popup.style['display'] = 'none';
}