const input = document.querySelector("#password");
const output = document.getElementById("output");

input.addEventListener("input", function() {
    let pass = input.value;

    if (pass.length < 8) {
        output.innerText = "Your password is too short";
        output.style.color = "red";
    } else if (pass.length >= 8 && pass.length <= 16) {
        output.innerText = "Your password is strong";
        output.style.color = "green";
    } else if (pass.length > 16 && pass.length <= 32) {
        output.innerText = "Your password is very strong";
        output.style.color = "green";
    } else {
        output.innerText = "Your password is too long";
        output.style.color = "orange";
    }
});