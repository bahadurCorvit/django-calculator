document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let current = "";
    let operator = "";
    let previous = "";

    const updateDisplay = (text) => display.textContent = text;

    const calculate = () => {
        let result = 0;
        let num1 = parseFloat(previous);
        let num2 = parseFloat(current);
        switch(operator) {
            case "+": result = num1 + num2; break;
            case "−": result = num1 - num2; break;
            case "×": result = num1 * num2; break;
            case "÷": result = num2 !== 0 ? num1 / num2 : "Error"; break;
        }
        return result;
    }

    document.querySelectorAll(".num").forEach(btn => {
        btn.addEventListener("click", () => {
            current += btn.textContent;
            updateDisplay(current);
        });
    });

    document.querySelectorAll(".operator").forEach(btn => {
        btn.addEventListener("click", () => {
            if (current === "") return;
            if (previous !== "") {
                previous = calculate();
            } else {
                previous = current;
            }
            current = "";
            operator = btn.textContent;
            updateDisplay(operator);
        });
    });

    document.querySelector(".equals").addEventListener("click", () => {
        if (current === "" || previous === "" || operator === "") return;
        const result = calculate();
        updateDisplay(result);
        current = result;
        previous = "";
        operator = "";
    });

    document.querySelector(".clear").addEventListener("click", () => {
        current = "";
        previous = "";
        operator = "";
        updateDisplay(0);
    });
});
// Footer dynamic year
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Created by Muhammad Fawad`;
});