function solve() {
	let textAreas = Array.from(document.getElementsByTagName('textarea')); // 0 === sent message , 1 === received message
	let buttons = Array.from(document.getElementsByTagName('button'));     // 0 === sent message , 1 === received message

	buttons[0].addEventListener('click', encodeAndSend);
	buttons[1].addEventListener('click', decodeAndRead);

	function encodeAndSend() {
		let sentMessage = textAreas[0].value.split('');
		let encodedMessage = [];

		sentMessage.forEach(c => {
			let ascii = c.charCodeAt(0) + 1;
			encodedMessage.push(String.fromCharCode(ascii));
		});

		textAreas[1].value = encodedMessage.join("");
		textAreas[0].value = "";
	}

	function decodeAndRead() {

		let receivedMsg = textAreas[1].value.split('');
		let decodedMsg = [];

		receivedMsg.forEach(c => {
			let ascii = c.charCodeAt(0) - 1;
			decodedMsg.push(String.fromCharCode(ascii));
		});

		textAreas[1].value = decodedMsg.join("");
	}
}