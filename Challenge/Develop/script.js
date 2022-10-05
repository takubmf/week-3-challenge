//Homework post tutor and final answer
//Responds to the click of the button
document.querySelector('button').addEventListener('click', init);

//Makes a function asking for user input 
function init() {
  var pwdLength = prompt("How long do you want your password (between 8-128 characters)");
//if password length comes back negative ends the cycle
  if(!pwdLength) return;
//ensures proper length requirements 
  if(pwdLength<8) {
    alert('Too Short!');
    return init();
  };
  
  if(pwdLength>128){
    alert("Too Long!");
    return init();
  };
  // asks yes/no for password criteria
  var num = confirm("Numbers?");
  var lower = confirm("Lower Case?");
  var upper = confirm("Upper Case?");
  var special = confirm("Special Characters?");
  var alpha = "abcdefghijklmnopqrstuvwxyz";

  // empty string to add values too
  var temp = '';
  var password = '';
//conditionals to load temp with characters decided by user
  if (lower) temp += alpha;
  if (num) temp += '1234567890';
  if (special) temp += '!@#$%^&*()-_=+';
  
  if (upper) temp += alpha.toUpperCase();
//for loop putting it all together.

  for (let i = 0; i < pwdLength; i++) {
    password += temp[Math.floor(Math.random() * temp.length)]
  };
  //displays password in textarea for user to see
  document.querySelector("textarea").innerText = password;

};

