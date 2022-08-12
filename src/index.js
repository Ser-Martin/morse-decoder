const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let str = expr.slice(i, 10 + i);

    if (str === `**********`) {
      result += " ";
      continue;
    }

    str = str.slice(str.indexOf("1"));

    let arrOfTwo = [];

    for (let i = 0; i < str.length; i += 2) {
      arrOfTwo.push(str.slice(i, i + 2));
    }
    arrOfTwo.forEach((e, index, arr) => {
      if (e === "10") arr[index] = ".";
      if (e === "11") arr[index] = "-";
    });

    str = arrOfTwo.join("");

    result += MORSE_TABLE[str];
  }
  return result;
}

module.exports = {
  decode,
};
