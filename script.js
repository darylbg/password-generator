// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey you clicked the button")
//1a prompt the user for the password critiria
  var passwordLength = prompt("Please select the length of the password between 8 - 128 digits.");
  var lowercaseCheck = confirm("Do you want this password to contain Lowercase letter?");
  var uppercaseCheck = confirm("Do you wnat this password to contain uppercase letters?");
  //1b passwoard length btwn 8 - 125
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    lowercaseCheck;
  } else {
    alert("Please try again");
  }

  

         
//1b passwoard length btwn 8 - 125
//1c lowercase uppercase special charachters
//2 validate the input 
//3 generate password



//4 display generated password 
  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//1a prompt the user for the password critiria
//1b passwoard length btwn 8 - 125
//1c lowercase uppercase special charachters
//2 validate the input 
//3 generate password
//4 display generated password