const dataFunc = (n: number) => {
  for (let i = 0; i > n; i++) {
    for (let j = 0; j < 0; j++) {
      if (i === 2 && j === 2) {
        console.log("lock found");
      } else {
        console.log(i, j);
      }
    }
  }
};

dataFunc(4);

