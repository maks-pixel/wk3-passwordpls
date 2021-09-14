// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    function generatePassword(){
      var lowerChar = "abcdefghijklmnopqrstuvwxyz";
      var upperChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
      var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
      var numb = "0123456789";
      var password = "";
      var passChar = "";
      //pick number of characters you want the password to be
      var charNumb = window.prompt('Choose the amount of characters you want your password to be. Must be between 8-128 characters');
      if (charNumb >= 8 && charNumb <= 128 ) {
          //pick if you want lowercase yes or no
          var lowerChoice = confirm("Do you want lowercase letters in your password?");
          if (lowerChoice) {
            passChar += lowerChar;
          }
      
          //pick if you want uppercase yes or no
          var upperChoice = confirm("wanna get wild and add uppercase letters in your password?");
          if (upperChoice) {
            passChar += upperChar;
          }
      
          //pick if you want special character yes or no
          var specialChoice = confirm("what about some special characters in your password?");
          if (specialChoice) {
            passChar += specialChar;
          }
        
          //pick if you want number yes or no
          var numbChoice = confirm("Is numbers in your password ok?");
          if (numbChoice) {
            passChar += numb;
          }
      } else {
       //not right entry for character number
       window.alert("Invalid entry. You must enter a number between 8-128 for the amount of characters you want in your password")
       return undefined;
      };
    
      for ( i = 0; i < charNumb; i++){
         password +=
         passChar[Math.floor(Math.random() * passChar.length)];
      }
       return password;
       
    }
   
    passwordText.value = password;
  
  }
  
