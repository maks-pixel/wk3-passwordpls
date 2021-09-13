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

//pick number of characters you want the password to be
var charNumb = window.prompt('Choose the amount of characters you want your password to be. Must be between 8-128 characters');
if (charNumb < 8 || charNumb > 128) {

  window.alert("Invalid entry. You must enter a number between 8-128 for the amount of characters you want in your password")

};

//pick if you want lowercase yes or no


//pick if you want upper case yes or no


//pick if you want numbers yes or no


//pick if you want special characters


//if you didnt pick one you get angry message big no no


//password gets generated based on input


