// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCha =["!","@","#","$","%","%","^","&","*","(",")","-","_","=","+"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
// Write password to the #password input

var howLong =  Math.floor(Math.Random * pwdLength) + 1;

function writePassword() {
  var pwdLength = window.prompt("How many long do you want your password (between 8-128 characters)");
  window.confirm("Special Characters?");
  window.confirm("Numbers?");
  window.confirm("Upper Case?");
  window.confirm("Lower Case?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
