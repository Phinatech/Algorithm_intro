const prompt  = require("prompt-sync")();
let classD = []
// let name = prompt('Please enter yoyr name: ')
// let age = prompt('Please enter yoyr age: ')
// let sub = prompt('Enter subject: ')
// let score = prompt('enter score: ')
// classD.push({`${name}`});

for (let i = 0; i <2; i++) {

    let name = prompt('Please enter yoyr name: ')
    let email = prompt('Please enter your email: ')
    let phone_number = prompt('Please enter your Guidian Phone number: ')
    let age = prompt('Please enter yoyr age: ')
    let sub = prompt('Enter core Subjects: ')
    let gender = prompt('Male or Female: ')
    classD.push({name: `${name}`,age: `${age}`, sub : `${sub}`, email: `${email}`, phone_number: `${phone_number}`, gender: `${gender}`})

}

console.log(classD);