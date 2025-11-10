document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operation = document.getElementById("operation");
    const resultBox = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form from reloading page

        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        const op = operation.value;

        let result;

        if (isNaN(n1) || isNaN(n2)) {
            result = "❌ Please enter valid numbers";
        } else {
            switch (op) {
                case "add":
                    result = n1 + n2;
                    break;
                case "subtract":
                    result = n1 - n2;
                    break;
                case "multiply":
                    result = n1 * n2;
                    break;
                case "divide":
                    result = n2 !== 0 ? n1 / n2 : "⚠️ Division by zero not allowed";
                    break;
                default:
                    result = "Unknown operation";
            }
        }

        resultBox.innerHTML = `<h2>Result: ${result}</h2>`;
    });
});
