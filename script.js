const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// Add numbers
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// Add operators
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// Calculate result
equalButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

// Clear display
clearButton.addEventListener("click", () => {
    display.value = "";
});