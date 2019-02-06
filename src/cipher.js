window.cipher = {


encode (num,text){
	let wordCipher = [];

	for (let i = 0; i < text.length; i++) {
		let code = text.charCodeAt(i);
		//console.log(code);
		let codeCiphered = ((code - 65 + num) % 26 + 65);
		console.log(codeCiphered);
		wordCipher.push(String.fromCharCode(codeCiphered));

	}
  let result = wordCipher.join('');
	return result;
},

decode (num,text)  {
	let wordDeciphered = [];

	for (let i = 0; i < text.length; i++) {
		let code = text.charCodeAt(i);
		let codeDeciphered = ((code + 65 - num) % 26 + 65);
		wordDeciphered.push(String.fromCharCode(codeDeciphered));
	}
	let result = wordDeciphered.join('');
	return result;
}
};
