var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var specials = '!@#$%^&*()_+-=,./<>?;:[]{}\|`~';
    var numbers = '0123456789';
    var upLetters = letters.toUpperCase();
    var chooseFrom = '';
    var characters = '';
    var pwGen = '';

    var pwLength = prompt('This password generator makes passwords between 8 and 128 characters. How long would you like your password to be?');

    for (pwLength; pwLength < 8 || pwLength > 128;) {
        alert('Please request a length between 8 and 12 characters.');
        var pwLength = prompt('This password generator makes passwords between 8 and 128 characters. How long would you like your password to be?');
    }

    var isUpperCase = confirm('Would you like to include upper case letters in your password?');
    var isLowerCase = confirm('Would you like to include lower case letters in your password?');
}