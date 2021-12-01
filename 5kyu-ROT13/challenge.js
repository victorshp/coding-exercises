// Making acessible to any ROT Definition
const ROTVALUE = 13;
const letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function rot13(message){
	let rotResult = '';
	let rotLetter;
	let rotLetterAlphabetPos;
	let originalLetterAlphabetPos;
 	message.split('').forEach((char) => {
    if (letterList.includes(char.toLowerCase())) {
      originalLetterAlphabetPos = letterList.indexOf(char.toLowerCase()) + 1;
      rotLetterAlphabetPos = (originalLetterAlphabetPos > 26 - ROTVALUE) ? ROTVALUE - (26 - originalLetterAlphabetPos) : originalLetterAlphabetPos + ROTVALUE;
      rotLetter = letterList[rotLetterAlphabetPos - 1];
      rotResult += (char.toLowerCase() !== char) ? rotLetter.toUpperCase() : rotLetter
    } else {
      rotResult += char
    }
	}); 
	return rotResult
}

console.log("grfg" == rot13("test"));
console.log("Grfg" == rot13("Test"));
