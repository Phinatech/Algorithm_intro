const prompt= require("prompt-sync")();

console.log("Welcome to joggerMan App,");
let name = prompt("Please Enter your Name: ");

//console.log("");
console.log(`Good day ${name}, Good to have you back!`);

// console.log("");

while(true){
    let goal = prompt ("Please Enter your set GOAL: ")

    let entry = prompt(
        "Please Press y to continue or R to reset your GOAL, otherwise Press Q to Quit:"
        .toUpperCase()
    );

    if (entry === "Q"){
        console.log(`Wow ... it really saddens my heart to see you go ${name}!`);
        break;
    }else if (entry === "R"){
        console.log(`Wanna reset your GOAL... lets do this!`);
        continue;
    }else if(entry === "Y") {
      while (true) {
        console.log("");
        console.log(`Your set Jogging Goal is ${goal}mins`);
        let start = parseInt(prompt("how do you want to jog for:"));

        if (start >= goal){
            console.log("your start point is impossible....!");
            continue;
          } else if ( goal <= 0){
            console.log(`congratulations...you ahve achieved your GOAL`);
            break;
          }
          goal = goal - start;
          console.log(
            `Awesome Ninja.... you have ${goal}mins left to go`
          );
          break;
      }
    }
}