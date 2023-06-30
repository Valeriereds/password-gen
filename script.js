
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
  console.log(howMany);
  // prompt for how many characters
  
  if (howMany < 8 || howMany > 128) {
    window.alert("Please choose a length between 8-128 characters."); {
      return;
    }
  } 
  var doUpper = window.confirm("Do you want UPPER CASE letters in your password?");
  var doLower = window.confirm("Do you want lower case letters in your password?");
  var doSpec = window.confirm("Do you want Special Characters in your password?");
  var doNumb = window.confirm("Do you want numbers in your password?");
  
  
  
  // // run the function
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
  console.log(upperCase, lowerCase, numbers, specChar);

  if (specChar && numbers && upperCase && lowerCase) {
    var allConfirm = specialChar.concat(numbers, upperCase, lowerCase);
    } else if (specialChar && numbers && upperCase) {
      var spNumbUp = specialChar.concat(numbers, upperCase);
    } else if (specialChar && numbers) {
      var specNumb = specialChar.concat(numbers);
    } else if (specNum && lowerCase) {
      var spNumLower = specialChar.concat(number, lowerCase); }
      else if (lowerCase && upperCase) {
      var lowerUp = (lowerCase.concat(upperCase))
    }
  console.log (allTrue)
}
  
generatePassword()
  

  
  



  // prompt how many characters
  // var for char
  
  // what type of char
  // special, number, upper, lower
  // window.confirm

  // use answers to make password
  // vars that includes all possible char
  // separate vars for each type, arrays
  // example var upperLetters = ["A", "B", "C"]

  // take all true arrays and concat into new array
  // choose random chars from arr based on user input
  // var push into new array math.random into new array
  // var password = turn array into string .toString()

  // return password;
