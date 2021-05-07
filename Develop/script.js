// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create constant variables (no-reassigning) for password characters-UW
const loweralpha = "abcdefghijklmnopqrstuvwxyz";
const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*+=?/";
var results = '';


// Write password to the #password input

function generatePassword() {
  var passwordLength = prompt('How long do you want the password?')
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Make sure your password is between 8 and 128 characters!')
    generatePassword()
  }
  var passwordLowercase = confirm('Do you want lowercase characters?')
  if (passwordLowercase) {
    results = results + loweralpha
  }
  var passwordUppercase = confirm('Do you want uppercase characters?')
  if (passwordUppercase) {
    results = results + upperalpha
  }
  var passwordNumbers = confirm('Do you want numbers?')
  if (passwordNumbers) {
    results = results + numbers
  }
  var passwordSymbols = confirm('Do you want symbols?')
  if (passwordSymbols) {
    results = results + symbols
  }
  var password = '';
  for(var i = 1; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * results.length);
    password = password + results[randomNumber]
  }
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
