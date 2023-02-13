// Assignment Code
var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var specialCharachters = ["!", "#", "$", "%", "&", "(",")", "*", "+"];
var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9];



var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey you clicked the button")
//1a prompt the user for the password critiria
  var passwordLength = prompt("Please select the length of the password between 8 - 128 digits.");
  console.log(passwordLength);

  //1b passwoard length btwn 8 - 125
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    var lowercaseCheck = confirm("Do you want this password to contain Lowercase letter?");
  } else {
    alert("Please try again");
  }

  if ((lowercaseCheck == true) || (lowercaseCheck == false)) {
    var uppercaseCheck = confirm("Do you wnat this password to contain uppercase letters?");
  } 

  if ((uppercaseCheck == true) || (uppercaseCheck == false)) {
    var specialCharachterCheck = confirm("Do you want this password to contain special charachters?");
  } 

  if ((specialCharachterCheck == true) || (specialCharachterCheck == false)) {
    var numeralCheck = confirm("Do you want this password to contain numbers?");
  }

  if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == false)) {
    alert("You must select at least one option please try again");
  }


  
// function getRandomEl(array1) {
//   var array = [];
//   for (i = 0; i < passwordLength; i++) {
//     var randomIndex = array1[Math.floor(Math.random()*array1.length)];
//     array.push(randomIndex);
//     console.log(randomIndex);
//     console.log(array);
//   } 
// }


if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == true)) {
   var array = [];
   for (i = 0; i < passwordLength; i++) {
     var randomIndex = numerals[Math.floor(Math.random()*numerals.length)];
     array.push(randomIndex);
     console.log(randomIndex);
     console.log(array);
   } 
  
}

if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == true) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = specialCharachters[Math.floor(Math.random() * specialCharachters.length)];
    array.push(randomIndex1);
    console.log(randomIndex1);
    console.log(array);
  } 
}

if ((lowercaseCheck == true) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowercaseletters[Math.floor(Math.random() * lowercaseletters.length)];
    array.push(randomIndex1);
    console.log(randomIndex1);
    console.log(array);
  } 
}  

if ((lowercaseCheck == false) && (uppercaseCheck == true) && (specialCharachterCheck == false) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    array.push(randomIndex1);
    console.log(randomIndex1);
    console.log(array);
  } 
  
}
         
//1b passwoard length btwn 8 - 125
//1c lowercase uppercase special charachters
//2 validate the input 
//3 generate password
//4 display generated password 
  return array.join("");
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