var allTheOptions = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Array for length of password

var passwordMin = 7;
var passwordMax = 128;

lowerLetters = "abcdefghijklmnopqrstuvwxyz",
upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numeric = "123456789",
addSymbols = "!@#$%,^&*()_+",
password = "";

function generatePassword() {
var getCharCount = function() {
  while(true) {
    promptLengthText = prompt("How long would you like your password to be? Pick a number between 8 and 128"); 
      //converts text to number
      var passLength = Number(promptLengthText);
        if (passLength > passwordMin && passLength < passwordMax) {
          alert("you have selected " + passLength + " characters");
          return passLength;
        }  
        if (passLength <= passwordMin) {
          alert("your value is too low");
        }
        else {
          alert("your value is too high");
        }
      }//end loop
    }

  var askUserIfTheyWantLowercase = function() {
    var lowercase = confirm("Would you like to include lower case letter? Click ok for yes or cancel for no.");
      if (lowercase) {
        allTheOptions += lowerLetters;
        alert("Thank you, lowercase letters will be included.");
      }
      else {
       alert ("ok, lowercase letters will be excluded");
      }
      return lowercase;
    }

    var askUserIfTheyWantUppercase = function () {
      var uppercase = confirm("Would you like to include upper case letter? Click ok for yes or cancel for no.");
        if (uppercase) {
          allTheOptions += upperLetters;
          alert("Thank you, uppercase letters will be included");
        }
        else{
          alert ("Ok, uppercase letters will be excluded");
        }
        return uppercase;
    }

    var askUserIfTheyWantNumbers = function () {
      var numbers = confirm("would you like to include numbers? Click ok for yes or cancel for no.");
      if (numbers) {
        allTheOptions += numeric;
        alert("Thank you, numbers will be included.");
      }
      else{
        alert ("Ok, numbers will be excluded.");
      }
      return numbers;
    }

    var askUserIfTheyWantSymbols = function () {
      var addSymbols = confirm("would you like to include symbols? Click ok for yes or cancel for no");
        if (addSymbols) {
          allTheOptions += addSymbols;
          alert("Thank you, symbols will be included");
        }
        else{
          alert ("ok, symbols will be excluded");
        }
        return addSymbols;
    }


// var passwordLength = getCharCount();
var promptLength = getCharCount();
var isLowercase = askUserIfTheyWantLowercase();
var isUppercase = askUserIfTheyWantUppercase ();
var isNumbers = askUserIfTheyWantNumbers ();
var isSymbols = askUserIfTheyWantSymbols ();
var numberConversion = parseInt(promptLength);


console.log(promptLength);
console.log(isLowercase);
console.log (isUppercase);
console.log (isNumbers);
console.log (isSymbols);
console.log (allTheOptions);
console.log (numberConversion);

  password = "";
  //Using for loop, first we sets 2 variables i and n
  //Next we define the condition of the loop which is i needs to be less than promptLength
  // Then i value increases everytim the loop has been executed
  for (var i = 0, n = allTheOptions.length; i < promptLength; i++) {
    //This line below get random letters from the letters string and add to the password string
    //As long as it meets the loop conditions, so because i < promptlength, it would keep adding more letters at that point
      password += allTheOptions.charAt(Math.floor(Math.random() * n));
  }
  return password;
}
//This is to test in your console, it should show the password
console.log(generatePassword());


// for (var i = 0, a = allTheOptions.length; i < passwordLength; i++) {
//   password += allTheOptions.charAt(Math.floor(Math.random() * a));
  // var j = i % 4;
    // if (isLowercase){
    //   password += lowerLetters.charAt(Math.floor(Math.random() * a));
    // }
    // else if (isUppercase){
    //   password += upperLetters.charAt(Math.floor(Math.random() * b));
    // }
    // else if (isNumbers){
    //   password += numeric.charAt(Math.floor(Math.random() * c));
    // }
    // else if (isSymbols){
    //   password += symbols.charAt(Math.floor(Math.random() * d));
    // }
        

  
  //This is to test in your console, it should show the password


// new long string that adds strings together, a new array 
