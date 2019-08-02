//// ASSESSMENT 1: INTRO TO JAVASCRIPT
//// Coding practical questions

//// ---------------------------------------------
//// Consider this variable:

//var mantra = "Be the dev"

//// 1a. Write the code that returns 'B' from mantra.
//console.log(mantra[0])
//// 1b. Write the code that determines if there is an 'x' in mantra.
// let checkLetter = (str, char) => {
//     if(str.indexOf(char)>0){
//         console.log(`There is a ${char} in "${str}"`)
//     } else {
//         console.log(`${char} is not in "${str}"`)
//     }
// }
//// calling function with 'x'
// checkLetter(mantra, 'x')
//// 1c. Write the code that determines if there is a 'v' in mantra.
// let checkLetter = (str, char) => {
//     if(str.indexOf(char)>0){
//         console.log(`There is a ${char} in "${str}"`)
//     } else {
//         console.log(`${char} is not in "${str}"`)
//     }
// }
//// calling funtions with 'v'
// checkLetter(mantra, 'v')
//// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.
// let checkLetter = (str, char) => {
//     if(str.indexOf(char)>0){
//         console.log(`There is a ${char} in "${str}"`)
//     } else {
//         console.log(`${char} is not in "${str}"`)
//     }
// }

//// ---------------------------------------------------
//// Consider the following variables:

// var myDog = "Snoopy"
// var myCat = "Garfield"

// // 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
// let checkWord = (str1, str2) => {
//     return (str1.length>str2.length ? `${str1} is longer than ${str2}`:`${str2} is longer than ${str1}`)
// }
// console.log(checkWord(myDog, myCat))
// // 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
// let makeFunc = (str1, str2) => {
//     let arr = []
//     arr.push(str1, str2)
//     return arr
// }
// console.log(makeFunc(myDog, myCat))
// // 2c. Stretch: Write a function that returns the two variables in all lowercase letters.
// let makeLowerCase = (str1, str2) => {
//     return `${str1.toLowerCase()}\n${str2.toLowerCase()}`
// }
// console.log(makeLowerCase(myDog, myCat))
//// -----------------------------------------------
//// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
for(let i = 0; i<myMessage.length; i++){
    console.log(myMessage[i])
}

// 4b. Stretch: Write the code that logs each letter of the message using a while loop.
var i = 0
while(i<myMessage.length){
    console.log(myMessage[i])
    i++
}
// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().
myMessage.split('').forEach(x=>console.log(x))

//// ----------------------------------------------
//// Consider the following variable:

// var testString = "thisisateststring"

// // 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
// let remVowels = (str) => {
//     return str.replace(/[aeiou]/g, '')
// }
// console.log(remVowels(testString))

// // 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
// let remVowel = (str) => {
//     if(typeOf str !== "string"){
//         return "This is not a string"
//     } else {
//     return str.replace(/[aeiou]/g, '')
//     }
// }
// console.log(remVowels(testString))

// // ----------------------------------------------
// // Consider the following variable:

// var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// // 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
// let ifCat = (listOfToonimals) => {
//     let arr = []
//     listOfToonimals.forEach(function (toonimal){
//         if(toonimal.animal=="cat"){
//             arr.push(toonimal)
//         }
//     })
    
//     return arr
// }
// console.log(ifCat(toonimals))
// //6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
// let ifNotCat = (listOfToonimals) => {
//     let arr = []
//     listOfToonimals.forEach(function (toonimal){
//         if(toonimal.animal!="cat"){
//             arr.push(toonimal.name)
//         }
//     })
    
//     return arr
// }
// console.log(ifNotCat(toonimals))
// //6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
// let getToonimalData = (listOfToonimals) => {
//     listOfToonimals.forEach(function (toonimal){
//         console.log(`${toonimal.name} is a ${toonimal.animal}`)
//     })
// }
// getToonimalData(toonimals)