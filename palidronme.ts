const checkPlain = (word: string) => {
  word = word.toLowerCase();
  let newWord: string[] = word.split("");
  let alpha = "adcdefghijklmnopqrstuvwxyz".split("");
  let beta: string[] = [];

  newWord.forEach((el) => {
    if (alpha.indexOf(el) > -1) {
      beta.push(el);
    }
  });
  console.log(beta);

  let result2 = beta.join("");
  let result = beta.reverse().join("");
  //   console.log(result, result2);

  if (result2 === result) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkPlain("Hannah"));

const reserver = (x: number[]) => {
  //   for (let i = 0; i < x.length; i++) {
  //     let rev = x[i];
  //     x[i] = x[x.length - 1 - i];
  //     x[x.length - 1 - i] = rev;

  //     return x;
  //   }
  let arr: number[] = x;
  console.log(arr.length);

  for (let i = 0; i < x.length; i++) {
    let rev = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = rev;
  }
  return arr;

  //   for (let i in x) {
  //     let rev = x[i];
  //     x[i] = x[x.length - 1 - Number(i)];
  //     x[x.length - 1] = rev;

  //     return x;
  //   }
};
const rev = (x: number[]) => {
  let arr: number[] = x;
  for (let i = 0; i < arr.length; i++) {
    let rev = arr[i];
    // console.log(rev);
    arr[i] = arr[arr.length - 1 - i];

    // console.log(arr[arr.length - 1 - 4]);
    console.log(arr[arr.length - 1 - i], arr.length - 1 - i);
    console.log(arr[2]);

    // arr[arr.length - 1 - i] = rev;
  }
  return arr;
};
console.log(rev([1, 2, 3, 4, 9, 7]));

// console.log(reserver([1, 2, 3, 4, 8, 9, 7]));
