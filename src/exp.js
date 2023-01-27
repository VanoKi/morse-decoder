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

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"

const getChars = (char) => {
  let chars = []
  for (let i = 0; i<char.length; i += 10){
    chars.push(char.slice(i, i+10))
    }
    return chars
}

const one_char = (char) => {
  let rs = []
  for (let i = 0; i<char.length; i += 2) {
    switch (char.slice(i, i+2)) {
      case '11':
        rs.push('-')
        break
      case '10':
        rs.push('.')
        break
      case '00':
        rs.push('')
        break
    }
  }
  return rs.join('')
}

const one_word = (word) =>{
  let result = []
  for (i in getChars(word)) {
    result.push(MORSE_TABLE[one_char(getChars(word)[i])])
  }
  return result.join('')
}

let exprList = expr.split('**********')

for (i in exprList){
  console.log(exprList[i])
  console.log(one_word(exprList[i]))
}

//console.log(one_word('00001011110000111111000010111000101110100000111010'))
//console.log(exprList)