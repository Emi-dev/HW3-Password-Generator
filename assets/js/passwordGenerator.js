// declar a variable to contain the password.
var pw;

// declare a variable to contain the password length.
var pwLength;

// declare variables to contain the all character options.
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericChars = "0123456789";
var lowercaseChars = "abcdefghiklmnopqrstuvwxyz";
var UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";

function generatePW() {
    // set/reset pw empty everytime the function is called (everytime "Generate Password" button is clicked).
    pw = "";
    
    // variable to contain if special characters are included in the password.
    var isSpecialChars;
    // variable to contain if numerical characters are included in the password.
    var isNumericChars;
    // variable to contain if lowercase characters are included in the password.
    var isLowercaseChars;
    // variable to contain if uppercase characters are included in the password.
    var isUppercaseChars;

    // User prompts //
    // keep prompting until the user enter the appropriate password length.
    do {
        pwLength =  prompt("Enter the length of password (between 8 and 128).");
    } while (pwLength < 8 || pwLength > 128);

    // keep prompting until the user choose at least one character type.
    do {
        isSpecialChars = confirm("Would you like to include special characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isNumericChars = confirm("Would you like to include numeric characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isLowercaseChars = confirm("Would you like to include lowercase characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");
        isUppercaseChars = confirm("Would you like to include uppercase characters in your password? \nPress \"OK\" for Yes, \"Cancel\" for No.");

        // variable to contain if the user included at least one character type.
        var isValid = isSpecialChars || isNumericChars || isLowercaseChars || isUppercaseChars;
        if (!isValid) {
            alert("!!!ERROR!!! \nYou must including at least one character type: \n\u2022 Special Characters \n\u2022 Numerical Characters \n\u2022 Lowercase Characters \n\u2022 Uppercase Characters")
        }
    } while (!isValid);

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
        pw += UppercaseChars;
    }
 
    // shuffle and create password based on the specified criteria, and reassign pw with the returned value. 
    pw = shuffle(pw, pwLength);

    // displaying the gerenated password on the page.
    document.getElementById("generatedPW").innerHTML = pw;
}

// shuffle the "password" and create the string(password) with the "length" given.
function shuffle(password, length) {
    var newPassword = [];
    for (var i = 0; i < length; i++) {
        var randIndex = Math.floor(Math.random() * password.length);

        newPassword.push(password[randIndex]);
    }

    // get rid or "," between characters using join() method.
    return newPassword.join("");
}

function copyClipboard() {

}