const form = document.getElementById('form');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const messageBox = document.getElementById('messageBox');
const startWithCapital = new RegExp(/[A-Z]/);
const atleastOneSymbol = new RegExp(/[!@#$%^&*()_+]/);
const submitButton = document.getElementById("submitBtn");

passField.addEventListener("keyup", function() {
    
    if(startWithCapital.test(passField.value) === false) {
       messageBox.textContent = 'Password has to start with a capital letter';
    } else if(atleastOneSymbol.test(passField.value) === false) {
        messageBox.textContent = 'Password needs a symbol'
    } else {
        messageBox.textContent = '';
    }
    
});

//TO SIMPLY DEMONSTRATE FORM VALIDATION
//AN ACTUAL GET REQUEST IS NOT MADE 

