//alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed) 

// --- Error handling functions ---
function showError(msg, input, errorSpanId) {
    errorSpanId.classList.remove("invisible");
    errorSpanId.classList.remove("message-box-closed"); // show element that was clicked
    errorSpanId.classList.add("visible");

    errorSpanId.innerHTML = `<strong>Error!</strong> ${msg}`;

    input.classList.remove("valid");
    input.classList.add("error");
}

function removeError(input, errorSpanId) {
    errorSpanId.classList.add("invisible");
    errorSpanId.classList.remove("visible");

    input.classList.add("valid");
    input.classList.remove("error");
}

// --- Handle validation ---
function validateInput() {
    checkAllInputs()
    if (document.getElementsByClassName("error").length > 0) {
        return;
    } else {
        document.getElementById("saveButton").href="#"; // send them to desired path..
    }
}

function checkAllInputs() {
    checkName();
    checkAge();
    checkEmail();
    checkPassword();
    checkRepeatPassword();
    checkIdCode();
    checkEvenNumber();
    checkCreditCard();
    checkIsbn();
}

// --- Input check functions ---
function checkName() {
    let input = document.getElementById("txtName");
    let errorSpanId = document.getElementById("txtNameError");

    if (input.value.length == 0) {
        showError("can't be empty", input, errorSpanId);
        //disableSave();
    } else if (hasNumber(input.value)) {
        showError("numbers not allowed", input, errorSpanId);
        //disableSave();
    } else {
        removeError(input, errorSpanId);
        //enableSave();
    }
}

function checkAge() {
    let input = document.getElementById("txtAge");
    let errorSpanId = document.getElementById("txtAgeError");

    if (hasOnlyChar(input.value)) {
        showError("Numbers only", input, errorSpanId);
    } else if (parseInt(input.value) < 18 || parseInt(input.value) > 99) {
        showError("Not an adult", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkEmail() {
    let input = document.getElementById("txtEmail");
    let errorSpanId = document.getElementById("txtEmailError");

    if (input.value.length == 0) {
        showError("can't be empty", input, errorSpanId);
    } else if (!hasEmailSymbol(input.value)) {
        showError("@ missing", input, errorSpanId);
    } else if (!hasDot(input.value)) {
        showError("Domain missing", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkPassword() {
    let input = document.getElementById("txtPassword");
    let errorSpanId = document.getElementById("txtPasswordError");

    if (input.value.length == 0) {
        showError("can't be empty", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkRepeatPassword() {
    let inputCheckLast = document.getElementById("txtPassword");
    let input = document.getElementById("txtRepeatPassword");
    let errorSpanId = document.getElementById("txtRepeatPasswordError");

    if (input.value != inputCheckLast.value) {
        showError("doesn't match", input, errorSpanId);
    } else if (inputCheckLast.value == 0) {
        showError("need both", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkIdCode() {
    let input = document.getElementById("txtIdCode");
    let errorSpanId = document.getElementById("txtIdCodeError");

    if (hasOnlyChar(input.value)) {
        showError("Numbers only", input, errorSpanId);
    } else if (input.value.length == 0) {
        removeError(input, errorSpanId); // nothing inserted
    } else if (input.value.length != 11) {
        showError("has to be 11 numbers", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkEvenNumber() {
    let input = document.getElementById("txtEvenNumber");
    let errorSpanId = document.getElementById("txtEvenNumberError");

    if (hasOnlyChar(input.value)) {
        showError("Numbers only", input, errorSpanId);
    } else if (input.value.length == 0) {
        removeError(input, errorSpanId); // nothing inserted
    } else if (parseInt(input.value) % 2 != 0) {
        showError("Has to be even", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

function checkCreditCard() {
    let input = document.getElementById("txtCreditCard");
    let errorSpanId = document.getElementById("txtCreditCardError");

    if (hasOnlyChar(input.value)) {
        showError("Numbers only", input, errorSpanId);
    } else if (input.value.length == 0) {
        removeError(input, errorSpanId); // nothing inserted
    } else {
        removeError(input, errorSpanId);
    }
}

function checkIsbn() {
    let input = document.getElementById("txtIsbn");
    let errorSpanId = document.getElementById("txtIsbnError");

    if (hasOnlyChar(input.value)) {
        showError("Numbers only", input, errorSpanId);
    } else if (input.value.length == 0) {
        removeError(input, errorSpanId); // nothing inserted
    } else if (input.value.length != 13) {
        showError("has to be 13 numbers", input, errorSpanId);
    } else {
        removeError(input, errorSpanId);
    }
}

// --- helper fuctions ---
function hasNumber(myString) {
    return /\d/.test(myString);
}

function hasOnlyChar(myString) {
    return /[a-zA-Z]/.test(myString);
}

function hasEmailSymbol(myString) {
    return /[@]/.test(myString);
}

function hasDot(myString) {
    return /[.]/.test(myString);
}

// --- click listener ---
function handleErrorClick(sender) {
    sender.classList.add("message-box-closed");
}