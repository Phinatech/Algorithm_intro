// //linear search

// let arrData: number [] = [1,2,3,4,5,6,7];

// const findData = (arr: number[], value: number) => {
// if (arr.indexOf(value) > -1){
//     console.log("found")
// } else {
//     console.log("not found")
// }

// };

// let dataX: number[] = [2, 7, 3, 5, 9];

// findData(dataX, 3);

//Binary search

const binary = (arr: number[], value: number) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (value !== arr[mid]) {
    if (value > arr[mid]) {
      end = mid + 1;
    } else {
      start = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
};

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
