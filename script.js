//when the user opens the page a window opens and asking how long you would like the password to be. It must be between 10 -64
//The user enters the length of the password they want and presses confirm
//The next window opens asking if the users wants to include lower cases yes or no
//If it is less than 10 or more than 64 it return an error and asks the user to re-enter
//The next window opens and asks if the user would like to use Uppercase yes or no
//The next window opens and asks if the users would like to uses numbers
// The next window opens and asks if the user would like to use any special characters
// The responses to the prompts are stored in an object
// The password that meets the requirements is returned





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

let passwordOption=0;
let passwordArray=();

// confirm how long the user would like the password to be

let passwordLength = prompt("Enter your required password length. It must be at least 10 characters but no more than 64");
// if number is 10 or greater and less than 64 store this to be called later when selecting the number of characters required from the password string
// If >64 or <10 ask the user to reenter 
if (passwordLength < 10) {
  prompt("Please enter a number between 10 and 64");
}
if (passwordLength > 64) {
  prompt("Please enter a number between 10 and 64");
}

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

// if no character preferences are given provide an error message and cycle back through the user options
let noPref = console.error("please provide at least one character preference");
if (noPref === (special==false,numbers==false,upperCase==false,lowerCase==false)) {
  
}


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

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

