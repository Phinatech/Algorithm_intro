const data = (n: number) => {
  for (let i = 0; i < n; i++) {
    if (i === 5) {
      console.log("found");
    }
    console.log(i);
  }
};

// data(10);

import fs from "fs";
import path from "path";

fs.readdir(path.join(__dirname, "images"), (err, data) => {
  if (err) {
    console.log(err);
  }
  data.forEach((el) => {
    if (el === "fedEx.png") {
      console.log("found");
    } else {
      console.log(el);
    }
  });
});

//looking for a cordinate of x and y.this is called the FIZZBUZZ Alogorithim.it defines two point where the algorithim meet.

const pointed = (n: number) => {
  Stophere: for (let x = 0; x <= n; x++) {
    for (let y = n; y >= 0; y--) {
      if (x === 2 && y == 3) {
        console.log("found");
        continue Stophere;
      } else {
        console.log(x, y);
      }
    }
  }
};
pointed(6);

//finding the multiple and its divisible by 3.
//if its disvisble by 3 fizz and if its divisible by 5 let is show buzz,and if its divisible by both let it show FIZZBUZZ

const point = (n: number) => {
  let result: number;
  Space: for (let x = 0; x <= n; x++) {
    for (let y = n; y >= 0; y--) {
      result = x * y;
      console.log(`the multiple btw ${x} and ${y} is: ${result}`);

      if (result % 3 === 0 && result % 5 === 0) {
        console.log("FIZZBUZ");
      } else if (result % 3 === 0) {
        console.log("FIZZ");
      } else if (result % 5 === 0) {
        console.log("BUZZ");
      }
    }
  }
};
point(3);

//An aray that contain a basket of fruits

// let basket: string[] = [
//   "Apple",
//   "Pawpaw",
//   "Orange",
//   "Grape",
//   "Banana",
//   "Pine-apple",
// ];
// //to serve in a tray
// let serve: string[] = [];

// // let value: number = Math.floor(Math.random() * basket.length);
// // console.log(basket[value]);
// //to pick randomly
// for (let i = 1; i <= 3; i++) {
//   let value: number = Math.floor(Math.random() * basket.length);
//   serve.push(basket[value]);
// }
// console.log(serve)
