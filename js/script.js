// Variable to hold the password
var allTheOptions = "";

//Generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Array for length of password
var passwordMin = 7;
var passwordMax = 129;

//Password options
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var addSymbols = "!@#$%,^&*()_+"
var password = "";

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
      var symbols = confirm("would you like to include symbols? Click ok for yes or cancel for no");
        if (symbols) {
          allTheOptions += addSymbols;
          alert("Thank you, symbols will be included");
        }
        else{
          alert ("ok, symbols will be excluded");
        }
        return symbols;
    }


// var passwordLength = getCharCount();
var promptLength = getCharCount();
var isLowercase = askUserIfTheyWantLowercase();
var isUppercase = askUserIfTheyWantUppercase ();
var isNumbers = askUserIfTheyWantNumbers ();
var isSymbols = askUserIfTheyWantSymbols ();
var numberConversion = parseInt(promptLength);




  password = "";
  for (var i = 0, n = allTheOptions.length; i < promptLength; i++) {
      password += allTheOptions.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

