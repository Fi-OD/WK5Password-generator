
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



