const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
        let result = '';
        for (let i = 0; i < expr.length; i = i + 10) {
          let decodedLetter = expr.substring(i, i + 10);
          if (decodedLetter == '**********') {
            result += ' ';
            continue;
          }
          let code = '';
          for (let m = 0; m < decodedLetter.length; m +=2) {
            let word = decodedLetter.substring(m, m + 2);
            if (word == '10') {
              code += '.';
            } else if (word == '11') {
              code += '-';
            }
          }
          result += MORSE_TABLE[code];
        }
        return result;
      
}

module.exports = {
    decode
}