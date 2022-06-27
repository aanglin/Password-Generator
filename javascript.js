// User Input Variables
let passwordLength;
let confirmDigits;
let confirmSpecialCharacter;
let confirmLowercase;
let confirmUppercase;
var get = document.querySelector("#generate");

// Alphabets
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numbers
digit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special characters
specialCharacter = ["~", "!", "@", "#", "%", "$", "&", "?"];

// Declare choices to be concatenated via conditions
let choices;

// converts alphabet to uppercase
let toUpper = function (x) {
    return x.toUpperCase();
};

// Uppercase conversion
alphabetUpperCase = alphabet.map(toUpper);

get.addEventListener("click", function () {
    generatedPassword = generatePassword();
    document.getElementById("password").placeholder = generatedPassword;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // Make sure that passwordLength is not empty
    if (!passwordLength) {
        alert("This needs a value");
    } else if (passwordLength < 8 || passwordLength > 128) {
        // Validates user input
        // If Criteria not met, alert message will show
        alert("Criteria not met. Closing Generator");

    } else {
        // Continues once user input is validated
        confirmDigit = confirm("Will your password contain numbers?");
        confirmSpecialCharacter = confirm("Will your password contain special characters?");
        confirmUppercase = confirm("Will your password contain Uppercase letters?");
        confirmLowercase = confirm("Will your password contain Lowercase letters?");

    }

    // Condition where all 4 choices
    // Special Character && UpperCase && LowerCase && Number are False
    if (!confirmSpecialCharacter && !confirmDigit && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must make at least one selection");
        console.log("All Choices are False");
    }
    // Where all 4 choices are true
    else if (confirmSpecialCharacter && confirmDigit && confirmUppercase && confirmLowercase) {
        choices = specialCharacter.concat(digit, alphabet, alphabetUpperCase);
    }
    // Where 3 choices are true
    else if (confirmSpecialCharacter && confirmDigit && confirmUppercase) {
        choices = specialCharacter.concat(digit, alphabetUpperCase);
    }
    else if (confirmSpecialCharacter && confirmDigit && confirmLowercase) {
        choices = specialCharacter.concat(digit, alphabet);
    }
    else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
        choices = specialCharacter.concat(alphabet, alphabetUpperCase);
    }
    else if (confirmDigit && confirmLowercase && confirmUppercase) {
        choices = digit.concat(alphabet, alphabetUpperCase);
    }
    // Where 2 choices are true
    else if (confirmSpecialCharacter && confirmDigit) {
        choices = specialCharacter.concat(digit);

    } else if (confirmSpecialCharacter && confirmLowercase) {
        choices = specialCharacter.concat(alphabet);

    } else if (confirmSpecialCharacter && confirmUppercase) {
        choices = specialCharacter.concat(alphabetUpperCase);
    }
    else if (confirmLowercase && confirmDigit) {
        choices = alphabet.concat(digit);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(alphabetUpperCase);

    } else if (confirmDigit && confirmUppercase) {
        choices = digit.concat(alphabetUpperCase);
    }
    // Where 1 option is true
    else if (confirmSpecialCharacter) {
        choices = specialCharacter;
    }
    else if (confirmDigit) {
        choices = digit;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }

    // password variable is an array placeholder for user generated amount of length
    let password = [];

    // Random variable selection:
    for (let i = 0; i < passwordLength; i++) {
        let getChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(getChoices);
    }

    // Join password array & convert to string
    let generatedPassword = password.join("");
    UserInput(generatedPassword);
    return generatedPassword;
}

// Place password value in textbox
function UserInput(generatedPassword) {
    document.getElementById("password").textContent = generatedPassword;

}