const input = document.querySelector("#password");
const output = document.getElementById("output");

function checkPasswordStrength(password) {
    if (password.length < 8) {
        return { message: "Your password is too short", color: "red" };
    } else if (password.length > 32) {
        return { message: "Your password is too long", color: "orange" };
    } else {
        const strength = validatePassword(password);
        return { message: strength.message, color: strength.color };
    }
}

function validatePassword(password) {
    if (password.search(/[a-z]/) === -1) {
        return { message: "Password is missing a lowercase letter", color: "red" };
    } else if (password.search(/[A-Z]/) === -1) {
        return { message: "Password is missing an uppercase letter", color: "red" };
    } else if (password.search(/[0-9]/) === -1) {
        return { message: "Password is missing a number", color: "red" };
    } else if (password.search(/[@/#/$/%]/) === -1) {
        return { message: "Password is missing a special character", color: "red" };
    } else if (password.length >= 8 && password.length <= 16) {
        return { message: "Your password is strong", color: "green" };
    } else if (password.length > 16 && password.length <= 32) {
        return { message: "Your password is very strong", color: "green" };
    }
}

input.addEventListener("input", function() {
    const password = input.value;
    const strength = checkPasswordStrength(password);

    output.innerText = strength.message;
    output.style.color = strength.color;
});
