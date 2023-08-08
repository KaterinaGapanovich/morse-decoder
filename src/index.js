const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(words) {

  let myResult = '';

  for (let i = 0; i < words.length; i = i + 10) {

    let decLetter = words.substring(i, i + 10);
    if (decLetter == '**********') { myResult += ' ';
      continue;
    }

    let newCode = '';

    for (let m = 0; m < decLetter.length; m += 2) {

      let itsWord = decLetter.substring(m, m + 2);
      if (itsWord == '10') { newCode += '.';
      } else if (itsWord == '11') { newCode += '-';
      }
    }

    myResult += MORSE_TABLE[newCode];
  }

  return myResult;
}

module.exports = {
  decode
}