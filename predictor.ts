// console.time("Time started: ");
import prompt from "prompt-sync";

import { serialize } from "v8";

// const fruity = (n: string[]) => {
//   let served: string[] = [];

//   for (let i = 0; i < 3; i++) {
//     let value = Math.floor(Math.random() * n.length);
//     served.push(n[value]);
//   }
//   // console.log(served);

//   const legend = prompt("");
//   console.log("");
//   //Inputing 3 different kind of fruits that the computer will pick
//   let ask1 = legend("Input a fruit you think the computer will serve: ");
//   console.log("");
//   let ask2 = legend("Input another fruit: ");
//   console.log("");
//   let ask3 = legend("Input the last fruit: ");
//   console.log("");

//   //checking for different fruits
//   let checkFirstFruit: boolean = served.includes(ask1);

//   let checkSecondFruit: boolean = served.includes(ask2);

//   let checkThirdFruit: boolean = served.includes(ask3);

//   if (checkFirstFruit && checkSecondFruit && checkThirdFruit) {
//     console.log(
//       `You predicted all 3 fruits correctl.\nThe computer served ${served.map(
//         (el) => {
//           return el;
//         }
//       )}`
//     );
//     //checking if only one is correct
//   } else if (checkFirstFruit && !checkSecondFruit && !checkThirdFruit) {
//     console.log(
//       `You have gotten only one answer correctly!\nThe computer served ${served.map(
//         (el) => {
//           return el;
//         }
//       )}`
//     ); //you can add served.map
//   } else if (!checkFirstFruit && checkSecondFruit && !checkThirdFruit) {
//     console.log(
//       `You have gotten only one answer correctly!\nThe computer served ${served.map(
//         (el) => {
//           return el;
//         }
//       )}`
//     );
//   } else if (!checkFirstFruit && !checkSecondFruit && checkThirdFruit) {
//     console.log("You have gotten only one answer correctly!");
//     //checking if two are correct
//   } else if (checkFirstFruit && checkSecondFruit && !checkThirdFruit) {
//     console.log("You have gotten only one answer correctly!");
//   } else if (checkFirstFruit && !checkSecondFruit && checkThirdFruit) {
//     console.log("You have gotten only one answer correctly!");
//   } else if (!checkFirstFruit && checkSecondFruit && checkThirdFruit) {
//     console.log("You have gotten only one answer correctly!");
//   } else if (!checkFirstFruit && !checkSecondFruit && !checkThirdFruit) {
//     console.log("Oops!! You have gotten all wrongly!");
//   }
// };
// fruity(["Apple", "Pawpaw", "Orange", "Grape", "Banana", "Pine-apple"]);

// console.timeLog("Time started: ");

// import prompt from "prompt-sync"
// let promptValue = prompt()
// const judith = (arrBasket: string[]) => {
// let served: string [] = [];
// let predict: string [] = [];

// for(let i = 1;i <=3; i++){
//   let value:number = Math.floor(Math.random() * arrBasket.length);
//   served.push(arrBasket[value])
// }

// for(let i = 1;i <=3; i++){
//   let value: string = promptValue(` The ${i} prediction is: `)
//   predict.push(arrBasket[value]);
// }

// // console.log(served, predict)

// }

// let arrBasket: string [] = ["banana",]

// //second question.the time complexity is 0(n) because of the data set
// const findDate = (arr: number[],value: number) => {
//   arr.findIndex((el => (el === ?)))
// }

const Moji = (x: string[]) => {
  console.log("Pick from this Basket: ", x);
  const promptValue = prompt("");
  let served: string[] = [];
  let predict: string[] = [];

  for (let i = 1; i <= 3; i++) {
    let value: number = Math.floor(Math.random() * x.length);
    served.push(x[value]);
  }

  for (let i = 1; i <= 3; i++) {
    let value: string = promptValue(`The ${i} Prediction is: `);
    predict.push(value);
  }

  console.log(served, predict);
  let arr: boolean[] = [];

  served.forEach((el) => {
    predict.forEach((props) => {
      arr.push(el === props);
    });
  });

  console.log("");
  console.log(arr);
  console.log("");

  let res = arr.filter((el) => el === true).length;

  console.log(res);
  console.log("");

  if (res >= 2) {
    console.log("Well Done...!");
  } else {
    console.log("Try Again");
  }
};

let barBasket: string[] = ["Pawpaw", "Apple", "Orange", "Pineapple", "Banana"];

// Moji(barBasket);

// console.log(barBasket.every((el) => el === "barBasket"));
// console.log(barBasket.findIndex((el) => el === "Mango"));

const findData = (arr: number[], value: number) => {
  arr.findIndex((el) => el === value);
};

let dataX: number[] = [2, 7, 3, 5, 9];

findData(dataX, 3);
