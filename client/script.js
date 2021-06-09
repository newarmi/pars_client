let add = `<div class="articul-check__input"><input type="text" id="reqst" placeholder="Запрос"></div>`
document.querySelector('#add').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.input-conteiner').insertAdjacentHTML('beforeend', add);
})
document.querySelector('input[type=submit]').addEventListener('click', function (e) {
	let send = [];
	let resp = []
	e.preventDefault();
	const inputsCont = document.querySelector('.input-conteiner');
	const inputs = inputsCont.querySelectorAll('input');
	inputs.forEach(elem => {
		if (elem.getAttribute('id') == 'articul') {
			send.push(elem.value);
		} else {
			resp.push(elem.value);
		}
	})
	send.push(resp);
	console.log(send);
})