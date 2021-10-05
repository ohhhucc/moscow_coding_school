const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = () => {
	lorems.forEach(function(lorem) {
		lorem.style['font-size'] = '30px';
	})
}