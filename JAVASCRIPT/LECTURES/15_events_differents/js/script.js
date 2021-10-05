window.addEventListener('load', function() {
	const button = document.querySelector('.button');
	const ball = document.querySelector('.ball');
	const showP = document.querySelector('.show p');

	button.addEventListener('click', ()=> {
		ball.style['animation-play-state'] = 'running';
	})

	window.onscroll = () => {
		if(scrollY >= 1000) {
			showP.style['opacity'] = 1;
		}
		else {
			showP.style['opacity'] = 0.5;
		}
	}
})