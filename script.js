
// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to generate random password
function generatePassword() {
  // Prompt user for password length
  let length = prompt("Enter your password length (8-128 characters):");

  // Validate password length
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters.");
    
    return "";
  }

// ask the user about what character preference for their password including, upper & lower case, numbers and special character
  let includeLowercase = confirm("Do you want to include lowercase characters?");
  let includeUppercase = confirm("Do you want to include uppercase characters?");
  let includeNumeric = confirm("Do you want to include numeric characters?");
  let includeSpecial = confirm("Do you want to include special characters? ($@%&*)");

  // Warning at least one character type has to be selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Warning: Please ensure you select at least one character.");
    
    return "";
  }

  //console.log(lowerCasedCharacters)
  //console.log(upperCasedCharacters)
  //console.log(numericCharacters)
  //console.log(specialCharacters)

  // Build character set based on user selections
  let passwordOption = [];
if (includeLowercase) passwordOption.push(...lowerCasedCharacters);
if (includeUppercase) passwordOption.push(...upperCasedCharacters);
if (includeNumeric) passwordOption.push(...numericCharacters);
if (includeSpecial) passwordOption.push(...specialCharacters);

  // Generate random password
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordOption.length);
    //console.log(passwordOption)
    //console.log(passwordOption[randomIndex])
    password += passwordOption[randomIndex];
  }

  console.log(password)
  // Return generated password
  return password;
  
}

// Function to handle button click event
function handleClick() {
  let password = generatePassword();
  if (password) {
  // text sent to text box
  let passwordText = document.querySelector('#password');
  // assign that value to password 
  passwordText.value = password;
  }
}

// Add click event listener to button
let generateButton = document.getElementById("generate");
generateButton.addEventListener("click", handleClick);





/*



let passwordOption=0
let passwordArray= [];

// confirm how long the user would like the password to be

let passwordLength = prompt("Enter your required password length. It must be at least 10 characters but no more than 64");
// if number is 10 or greater and less than 64 store this to be called later when selecting the number of characters required from the password string
// If >64 or <10 ask the user to reenter 
if (passwordLength < 10 ) {
  prompt("Please enter a number between 10 and 64");
}
else if (passwordLength > 64) {
  prompt("Please enter a number between 10 and 64");
}

console.log(passwordLength)

// ask the user about what character preference for their password including, upper & lower case, numbers and special character

// ask the user about their preference for lower case letters in their password
// store the result in an object
let lowerCase = confirm("would you like to include Lowercase characters");
//add the results/concat to the password string
if (lowerCase===true) {
  passwordArray = passwordArray.concat(lowerCasedCharacters);
};


// ask the user about their preference for upper case letter in their password
// store the result in an object
let upperCase = confirm("would you like to include Uppercase ");
// add the results/concat to the password array
if (upperCase===true) {
  passwordArray = passwordArray.concat(upperCasedCharacters);
};

// ask the user about their preference for numbers in their password
// store the result in an object
let numbers = confirm("Would you like to include numbers in your password");
// add the results/concat to the password array
if (numbers===true) {
  passwordArray = passwordArray.concat(numericCharacters);
};

// ask the user about their preference for special characters in their password
// store the result in an object
let special = confirm ("would you like to include special characters");
// add the results/concat to the password array
if (special===true) {
  passwordArray = passwordArray.concat(specialCharacters);
};

console.log (passwordArray);
console.log(numbers);
console.log(upperCase);
console.log(lowerCase);
console.log(special);

// if no character preferences are given provide an error message and cycle back through the user options
let noPref = []
if (noPref === (special===false && numbers===false && upperCase===false && lowerCase===false)) {

  console.log("please provide at least one character preference")
  
}



getPasswordOptions()
// Function to prompt user for password options
function getPasswordOptions() {
  return passwordArray

}

// Function for getting a random element from an array use return.math floor
// At random select an item from the password array and this to the password
// this should be in a for loop and should run until the password length and password options are met
function getRandom(arr) {
  passwordOption=Math.floor(math.random()*passwordArray.length)
}
console.log(passwordOption)

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



*/