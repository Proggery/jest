const match = require("nodemon/lib/monitor/match");

const osszeadas = (a, b) => {
  return a + b;
};

const kivonas = (a, b) => {
  return a - b;
};

const nulla = (a) => {
  if (a === 0) {
    return a;
  }
};

const ekezetesKarakter = (text) => {
  let textArray = [];
  let newText = "";
  let newTextObj = [];
  let counterArray = [];
  let szam = 4;

  for (let i = 0; i < text.length; i++) {
    textArray.push(text[i]);
  }

  for (let i = 0; i < textArray.length; i++) {
    let char = textArray[i];
    let newChar = "";
    let counter = 0;

    if (
      char === "á" ||
      char === "é" ||
      char === "í" ||
      char === "ó" ||
      char === "ö" ||
      char === "ő" ||
      char === "ú" ||
      char === "ü" ||
      char === "ű"
    ) {
      counter++;
      szam = counter;
      counterArray.push(szam);
    }

    newChar = char.replace("á", "a");
    char = newChar;
    newChar = char.replace("é", "e");
    char = newChar;
    newChar = char.replace("í", "i");
    char = newChar;
    newChar = char.replace("ú", "u");
    char = newChar;
    newChar = char.replace("ü", "u");
    char = newChar;
    newChar = char.replace("ű", "u");
    char = newChar;
    newChar = char.replace("ó", "o");
    char = newChar;
    newChar = char.replace("ö", "o");
    char = newChar;
    newChar = char.replace("ő", "o");
    char = newChar;

    newText = newText.concat(char);

    newTextObj.push({ index: counterArray.length, newText });
  }

  return newTextObj[newTextObj.length - 1];

  // return newTextObj;
};

// ekezetesKarakter("sőr");

// console.log(ekezetesKarakter("sőr"));

module.exports = { osszeadas, kivonas, nulla, ekezetesKarakter };
