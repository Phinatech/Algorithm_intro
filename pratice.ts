const checker = (letter: string) => {
  letter = letter.toLowerCase();
  let letterWord: string[] = letter.split("");
  let code = "adcgfet".split("");
  let betaCode: string[] = [];

  letterWord.forEach((el) => {
    if (code.indexOf(el) > -1) {
      betaCode.push(el);
    }
  });
  console.log(betaCode);

  let res1 = betaCode.join("");
  let res2 = betaCode.reverse().join("");

  console.log(res1, res2);

  if (res1 === res2) {
    return true;
  } else {
    return false;
  }
};

// console.log(checker("ada"));
