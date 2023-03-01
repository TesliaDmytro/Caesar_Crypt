'use strict';

document.addEventListener('DOMContentLoaded', function(){

	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	function CaesarCrypt(){
		event.preventDefault();

		let wordArr = this.word.value.toLowerCase().split('').filter(el => el != ' '), 
			step = +this.step.value,
			result,
			cryptIndex = [];
			
		if (/^[a-zA-Z\s]+$/.test(this.word.value)){
			wordArr.forEach((el, i) => {
				if (this.classList.contains('encryptForm')){
					let newIndex = alphabet.indexOf(el) + step + i;
					newIndex < 26 
					? cryptIndex.push(alphabet[newIndex]) 
					: cryptIndex.push(alphabet[newIndex - 26]);
				} else {
					let newIndex = alphabet.indexOf(el) - step - i;
					newIndex < 0 
					? cryptIndex.push(alphabet[newIndex + 26])
					: cryptIndex.push(alphabet[newIndex]);
				}
				result = cryptIndex.join('');
			})
			this.result.classList.remove('red') 
		} else {
			result = 'A-Z a-z only!';
			this.result.classList.add('red')
		}
		this.result.value = result;
	}
	document.forms.encryptForm.addEventListener('submit', CaesarCrypt);
	document.forms.decryptForm.addEventListener('submit', CaesarCrypt);
});
