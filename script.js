// Assignment Code

// setting available password letters/charachters/numbers into arrays 
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharachters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "@", "[", "]",];
var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// selects the element in the index.html file with the id of "generate"
var generateBtn = document.querySelector("#generate");

// function to generate the password based on user selected criteria
function generatePassword() {
// prompt the user to input password length
  var passwordLength = prompt("Please enter a number between 8 and 128 characters that you want for the length of your password.");

// validates the input password length value 
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    var lowercaseCheck = confirm("Do you want this password to contain lowercase letters?");
  } else {
    alert("You did not enter a valid length, please re-read the instructions and try again");
  }
// asks the user to select charachter type options to be included in the password 
  if ((lowercaseCheck == true) || (lowercaseCheck == false)) {
    var uppercaseCheck = confirm("Do you want this password to contain uppercase letters?");
  } 

  if ((uppercaseCheck == true) || (uppercaseCheck == false)) {
    var specialCharachterCheck = confirm("Do you want this password to contain special charachters?");
  } 

  if ((specialCharachterCheck == true) || (specialCharachterCheck == false)) {
    var numeralCheck = confirm("Do you want this password to contain numbers?");
  }
// if the user selects no charachter types for their password, they are alerted to try again
  if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == false)) {
    alert("You must select at least one option, please try again");
  }
// if statements check which charachter types the user selects to include in their password (this if statement's comments apply to the below if statements that have only one charachter type selected)
if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == true)) {
// sets an empty array for the new password charachters to be pushed to
    var array = [];
// if one charachter type is selected, this for loop iterates over that array randomly selecting charachters to the length the user set
    for (i = 0; i < passwordLength; i++) {
      var randomIndex = numerals[Math.floor(Math.random()*numerals.length)];
// each charachter is pushed to the empty array when the for loop randomly selects it
      array.push(randomIndex);
  }  
} else if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == true) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = specialCharachters[Math.floor(Math.random() * specialCharachters.length)];
    array.push(randomIndex1);
  } 
} else if ((lowercaseCheck == true) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    array.push(randomIndex1);
  } 
} else if ((lowercaseCheck == false) && (uppercaseCheck == true) && (specialCharachterCheck == false) && (numeralCheck == false)) {
  var array = [];
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    array.push(randomIndex1);
  } 
} 
// 2 or more charachter types are selected (comments for this if statement apply to all below if statements where the user selects for 2 or more charachter types in their password)
  else if ((lowercaseCheck == true) && (uppercaseCheck == true) && (specialCharachterCheck == false) && (numeralCheck == false)) {
// a new array is created of the selected charachter type arrays merged into one
  var lowerUpperMerge = [].concat(lowercaseLetters, uppercaseLetters);
// an empty array is set
  var array = [];
// for loop iterates over the new array of merged charachter type arrays
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerUpperMerge[Math.floor(Math.random() * lowerUpperMerge.length)];
// each charachter is pushed to the empty array when the for loop randomly selects it
    array.push(randomIndex1);
  }
} else if  ((lowercaseCheck == true) && (uppercaseCheck == false) && (specialCharachterCheck == true) && (numeralCheck == false)) {
  var lowerSpecialMerge = [].concat(lowercaseLetters, specialCharachters);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerSpecialMerge[Math.floor(Math.random() * lowerSpecialMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == true) && (uppercaseCheck == false) && (specialCharachterCheck == false) && (numeralCheck == true)) {
  var lowerNumeralsMerge = [].concat(lowercaseLetters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerNumeralsMerge[Math.floor(Math.random() * lowerNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == false) && (uppercaseCheck == true) && (specialCharachterCheck == true) && (numeralCheck == false)) {
  var upperSpecialMerge = [].concat(uppercaseLetters, specialCharachters);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = upperSpecialMerge[Math.floor(Math.random() * upperSpecialMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == false) && (uppercaseCheck == true) && (specialCharachterCheck == false) && (numeralCheck == true)) {
  var upperNumeralsMerge = [].concat(uppercaseLetters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = upperNumeralsMerge[Math.floor(Math.random() * upperNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == false) && (uppercaseCheck == false) && (specialCharachterCheck == true) && (numeralCheck == true)) {
  var specialNumeralsMerge = [].concat(specialCharachters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = specialNumeralsMerge[Math.floor(Math.random() * specialNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == true) && (uppercaseCheck == true) && (specialCharachterCheck == true) && (numeralCheck == false)) {
  var lowerUpperSpecialMerge = [].concat(lowercaseLetters, uppercaseLetters, specialCharachters);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerUpperSpecialMerge[Math.floor(Math.random() * lowerUpperSpecialMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == true) && (uppercaseCheck == true) && (specialCharachterCheck == false) && (numeralCheck == true)) {
  var lowerUpperNumeralsMerge = [].concat(lowercaseLetters, uppercaseLetters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerUpperNumeralsMerge[Math.floor(Math.random() * lowerUpperNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == true) && (uppercaseCheck == false) && (specialCharachterCheck == true) && (numeralCheck == true)) {
  var lowerSpecialNumeralsMerge = [].concat(lowercaseLetters, specialCharachters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerSpecialNumeralsMerge[Math.floor(Math.random() * lowerSpecialNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == false) && (uppercaseCheck == true) && (specialCharachterCheck == true) && (numeralCheck == true)) {
  var upperSpecialNumeralsMerge = [].concat(uppercaseLetters, specialCharachters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = upperSpecialNumeralsMerge[Math.floor(Math.random() * upperSpecialNumeralsMerge.length)];
    array.push(randomIndex1);
  }
} else if ((lowercaseCheck == true) && (uppercaseCheck == true) && (specialCharachterCheck == true) && (numeralCheck == true)) {
  var lowerUpperSpecialNumeralsMerge = [].concat(lowercaseLetters, uppercaseLetters, specialCharachters, numerals);
  var array = [];
  
  for (i = 0; i < passwordLength; i++) {
    var randomIndex1 = lowerUpperSpecialNumeralsMerge[Math.floor(Math.random() * lowerUpperSpecialNumeralsMerge.length)];
    array.push(randomIndex1);
  }
}
// returns array of randomly selected charachters
  return array.join("");
}

// writes the randomly generated password into the index.html in the element with an id of "password"
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

// in the future i would like to add a test after each if statement 
// that merges multiple charachter arrays, as the random for loop may 
// not select at least one charachter type.