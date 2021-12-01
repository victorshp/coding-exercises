// Making acessible to any ROT Definition
const ROTVALUE = 13;
const letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function rot13(message){
	let rotResult;
	let rotLetter;
	let rotLetterIndex;
	let originalLetterIndex;
 	message.split('').forEach((letter) => {
		letterIndex = letterList.indexOf(letter.toLowerCase()) + 1;
		rotLetterIndex = (letterIndex > 26 - ROTVALUE) ? letterList.indexOf(ROTVALUE - (26 - letterIndex)) : letterList.indexOf(letterIndex + ROTVALUE);
		rotLetter = letterList[rotLetterIndex];
		rotResult += (letter.toLowerCase() !== letter) ? rotLetter.toUpperCase() : rotLetter
	}); 
	return rotResult
}

console.log("grfg" == rot13("test"));
console.log("Grfg" == rot13("Test"));
