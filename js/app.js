//1. Verbal questions

// What is the difference between a parameter and an argument?
// A. A parameter is a variable withing a method definition
//an arguement is the actual value that is passed when calling the function.

//Within a function, what is the difference between return and console.log?
// While console.log will not affect a function, return is a 
//call to pass a value back based on the function. 

//What are the implications of the ability of a function to return a value?
// For a function to retun a vale, a specific parameter(s) are called upon 
// by the statements made within the function. 

//2. Palindrome again.

// const checkPalindrom = (str) => {
//     let str2 = str.split('').reverse().join('');   }
//   checkPalindrom("capital letters")
//const checkPalindrome = (word) => {
//     if (firstLetter !== lastLetter) {
//         return false;
//     }
//     if (characters.length < 2) {
//         return true;
//     }
//  checkPalindrome(characters.join(''));
// }
// console.log(checkPalindrome('capital letters'));


//3.Digit Sum
const sumDigits = (num1, num2)=> {
        console.log(num1 + num2);
    }
    sumDigits(4, 2);
    
//4. Pythagoras
const calculateSide = (sideA, sideB) => {
console.log("C is equal to " + ((sideA **2) + (sideB **2)));

}
calculateSide(2, 5);
calculateSide(4, 2);

//5. Sum Array
var sumArray = [1, 2, 3, 1, 4]
for (var i = 0, sum = 0; i < sumArray.length; sum += sumArray[i++]);
console.log(sum); 