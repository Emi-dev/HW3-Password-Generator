// declar a variable to contain the password.
var pw;

// declare a variable to contain the password length.
var pwLength;

// declare variables to contain the all character options.
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericChars = "0123456789";
var lowercaseChars = "abcdefghiklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";

// variable to contain if special characters are included in the password.
var isSpecialChars;
// variable to contain if numeric characters are included in the password.
var isNumericChars;
// variable to contain if lowercase characters are included in the password.
var isLowercaseChars;
// variable to contain if uppercase characters are included in the password.
var isUppercaseChars;

function generatePW() {
    // set/reset pw empty everytime the function is called (everytime "Generate Password" button is clicked).
    pw = "";

    // User prompts //
    // keep prompting until the user enter the appropriate password length.
    do {
        // parse the string entered and assign the variable pwLength with the returned integer.
        pwLength =  parseInt(prompt("Enter the length of password (between 8 and 128)."));
        // check if the user entered numeric character(number). NaN should be returned when non numeric characters are given.
        if (isNaN(pwLength)) {
            alert("Please enter a number!");
            pwLength = 0;
        }
    } while (pwLength < 8 || pwLength > 128);

    // keep prompting until the user chooses at least one character type.
    do {
        isSpecialChars = confirm("Would you like to include special characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isNumericChars = confirm("Would you like to include numeric characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isLowercaseChars = confirm("Would you like to include lowercase characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isUppercaseChars = confirm("Would you like to include uppercase characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");

        // variable to contain if the user included at least one character type.
        var isValid = isSpecialChars || isNumericChars || isLowercaseChars || isUppercaseChars;
        if (!isValid) {
            alert("!!!ERROR!!! \nYou must including at least one character type: \n\u2022 Special Characters \n\u2022 Numeric Characters \n\u2022 Lowercase Characters \n\u2022 Uppercase Characters")
        }
    } while (!isValid);

    // add all the specified types of characters into the "pw" string.
    if (isSpecialChars) {
        pw += specialChars;
    }

    if (isNumericChars) {
        pw += numericChars;
    }

    if (isLowercaseChars) {
        pw += lowercaseChars;
    }

    if (isUppercaseChars) {
        pw += uppercaseChars;
    }
 
    // reassign pw with the returned value of getRandomChars. 
    pw = getRandomChars(pw, pwLength);

    // displaying the gerenated password on the page.
    document.getElementById("generatedPW").innerText = pw;
}

// randomly pick the specified number(length) of characters from the characters in "password" and return the new password.
function getRandomChars(password, length) {
    do {
        var newPassword = [];
        for (let i = 0; i < length; i++) {
            // get random index of the "password".
            let randIndex = Math.floor(Math.random() * password.length);
            newPassword.push(password[randIndex]);
        }
    } while (!pwChecker(newPassword));  // check if at least one of each specified character type is included.

    // get rid or "," between characters using join() method.
    return newPassword.join("");
}

// check if the password meets all the criteria (if at least one from each selected character type is included).
function pwChecker(password) {
    // declare variables to contain the checkpoints (initially set true);
    var checkSpecial = true;
    var checkNumeric = true;
    var checkLowercase = true;
    var checkUppercase = true;

    if (isSpecialChars) {
        // reassign checkSpecial to false.
        checkSpecial = false;
        for (let i = 0; i < pwLength; i++) {
            if (specialChars.indexOf(password[i]) !== -1) {
                // if a special character is found in the password, reassign chekSpecial to true;
                checkSpecial = true;
                break;
            }
        }
    }

    if (isNumericChars) {
        // reassign checkNumeric to false.
        checkNumeric = false;
        for (let i = 0; i < pwLength; i++) {
            if (numericChars.indexOf(password[i]) !== -1) {
                // if a numeric character is found in the password, reassign chekNumeric to true;
                checkNumeric = true;
                break;
            }
        }
    }

    if (isLowercaseChars) {
        // reassign checkLowercase to false.
        checkLowercase = false;
        for (let i = 0; i < pwLength; i++) {
            if (lowercaseChars.indexOf(password[i]) !== -1) {
                // if a lowercase character is found in the password, reassign chekLowercase to true;
                checkLowercase = true;
                break;
            }
        }
    }

    if (isUppercaseChars) {
        // reassign checkUppercase to false.
        checkUppercase = false;
        for (let i = 0; i < pwLength; i++) {
            if (uppercaseChars.indexOf(password[i]) !== -1) {
                // if a Uppercase character is found in the password, reassign chekUppercase to true;
                checkUppercase = true;
                break;
            }
        }
    }
    // return if the password meets all the criteria.
    return checkSpecial && checkNumeric && checkLowercase && checkUppercase;
}

// copy the password displayed to the clipboard.
function copyClipboard() {
    var copyText = document.getElementById("generatedPW");
    navigator.clipboard.writeText(copyText.innerText);
}