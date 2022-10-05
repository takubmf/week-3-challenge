//Code Pre-tutor
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var pwdLength = window.prompt("How long do you want your password (between 8-128 characters)");
var special = window.confirm("Special Characters?");
var num = window.confirm("Numbers?");
var upper = window.confirm("Upper Case?");
var pwdLen = Math.floor(Math.Random * pwdLength);

if (special){
  special = specialChar;
};

if (num){
  num = numbers;
};

if (upper){
  upper = uppAlph;
};


if (special == true){
  console.log("well looky here")
};

var options = {
  alpha: alpha,
  pwdLength: pwdLength,
  special: special,
  number: number,
  upper: upper,  

};
console.log(options.special);
function writePassword() {

  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  for (var i=0; i <= pwdLength; i++){
    pwdLength
  }

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
