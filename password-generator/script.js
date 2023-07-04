var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var specials = '!@#$%^&*()_+-=,./<>?;:[]{}\|`~';
    var numbers = '0123456789';
    var upLetters = letters.toUpperCase();
    var chooseFrom = '';
    var characters = '';
    var pwGen = '';

    var pwLength = prompt('This password generator makes passwords between 8 and 128 characters. How long would you like your password to be?');

    for (pwLength; pwLength < 8 || pwLength > 128;) {
        alert('Please request a length between 8 and 128 characters.');
        var pwLength = prompt('This password generator makes passwords between 8 and 128 characters. How long would you like your password to be?');
    }

    var hasUpperCase = false;
    var hasLowerCase = false;
    var hasNumber = false;
    var hasSpecial = false;
    

    var isUpperCase = confirm('Would you like to include upper case letters in your password?');
    var isLowerCase = confirm('Would you like to include lower case letters in your password?');
    var isNumber = confirm('Would you like to include numbers in your password?');
    var isSpecial = confirm('Would you like to include special characters in your password?');

    if (isUpperCase) {
        chooseFrom = chooseFrom.concat(upLetters);
        hasUpperCase = true;
    }
    if (isLowerCase) {
        chooseFrom = chooseFrom.concat(letters);
        hasLowerCase = true;
    }
    if (isSpecial) {
        chooseFrom = chooseFrom.concat(specials);
        hasSpecial = true;
    }
    if (isNumber) {
        chooseFrom = chooseFrom.concat(numbers);
        hasNumber = true;
    }
    
    if (!isUpperCase && !isLowerCase && !isNumber && !isSpecial) {
        alert('My brother in Christ... you have requested a password that has no letters, numbers, or special characters... such a password exists not for me, as I cannot scan your face or thumbprint. Please, request a password of letters, numbers, or special characters, or you will find no assistance from me.')
    }

    for (var i = 0; i < pwLength; i++) {
        var random = Math.floor(Math.random() * chooseFrom.length);
        var characters = chooseFrom.charAt(random);
        pwGen = pwGen.concat(characters);
        console.log(pwGen);
    }
    if (!hasUpperCase) {
        var randomIndex = Math.floor(Math.random() * upLetters.length);
        var upperChar = upLetters.charAt(randomIndex);
        pwGen = pwGen.concat(upperChar);
    }
    if (!hasLowerCase) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        var lowerChar = letters.charAt(randomIndex);
        pwGen = pwGen.concat(lowerChar);
    }
    if (!hasNumber) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        var numberChar = numbers.charAt(randomIndex);
        pwGen = pwGen.concat(numberChar);
    }
    if (!hasSpecial) {
        var randomIndex = Math.floor(Math.random() * specials.length);
        var specialChar = specials.charAt(randomIndex);
        pwGen = pwGen.concat(specialChar);
    }    

    return pwGen;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);