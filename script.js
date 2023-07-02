
// Assignment Code
var generateBtn = document.querySelector("#generate");
// REMEMBER YOUR SEMICOLONS;;;;;;;;

// prompt for which characters you want

// run the function
// console.log()
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
// if statement for error code
// Add event listener to generate button

function generatePassword() {
  var howMany = window.prompt("How many characters do you want in your password?");
  // console.log(howMany);
  // prompt for how many characters
  if (!howMany) {
    return;
  }
  

  if (howMany < 8 || howMany > 128) {
    window.alert("Please choose a length between 8-128 characters."); {
      return;
    }
  } 
  // need a prompt to stop anything but numbers for the length
  // isNan to stop anything other than numbers not a number
  if (isNaN(howMany)) {
    window.alert("Please input a number.");
    return;
  }
  // add a variable in your confirm statement
  // window.confirM
 
  var doUpper = window.confirm("Do you want UPPER CASE letters in your password?");
  var doLower = window.confirm("Do you want lower case letters in your password?");
  var doSpec = window.confirm("Do you want Special Characters in your password?");
  var doNumb = window.confirm("Do you want numbers in your password?");
  // // run the function
  // var for char
  // what type of char
  // special, number, upper, lower
  // example var upperLetters = ["A", "B", "C"]
  // vars that includes all possible char
  // separate vars for each type, arrays
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
  // console.log(upperCase, lowerCase, numbers, specChar);
  // use answers to make password
  // take all true arrays and concat into new array
  // choose random chars from arr based on user input
   // take all true arrays and concat into new array

  var newPass = [];
  
  if (doSpec) {   
    newPass = specChar.concat(newPass);
  }; 
  if (doNumb) {
    newPass = numbers.concat(newPass);
  };
  if (doUpper) {
    newPass = upperCase.concat(newPass);
  };
  if (doLower) {
    newPass = lowerCase.concat(newPass);
  };
  if (!doSpec && !doNumb && !doUpper && !doLower) {
    window.alert("You must choose at least one type of character to create a password. Please try again.");
      return;
  };
  var newNum = []
  
  for (var i = 0; i < howMany; i++) {
    var rdmNum = newPass[Math.floor(Math.random() * newPass.length)];
    newNum.push(rdmNum)
  }
  // for loop needs to be closed before starting a new string
   // var password = turn array into string .toString()
  
  var password = newNum.join("").toString();
  
  return password;
  
  // console.log(newPass) testing, testing
}
// var push math.random into new array
// need a for loop to choose a random number

// generatePassword()
  

 // return password;
