// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create constant variables (no-reassigning) for password characters-UW
const loweralpha = "abcdefghijklmnopqrstuvwxyz";
const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*+=?/";



// Write password to the #password input

function generatePassword() {
  var passwordLength = prompt('How long do you want the password?')
  if(passwordLength < 8 || passwordLength > 128) {
    alert('Make sure your password is between 8 and 128 characters!')
    generatePassword()
  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
