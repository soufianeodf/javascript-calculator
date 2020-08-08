let operand1 = "";
let operand2 = "";
let operation = "";
let result = "";

init();

function init() {
    document.querySelector(".main-container").addEventListener("click", function(event) {
      calculationLogic(event);
    }); 
}

function calculationLogic(event) {
    if(+event.target.innerText >= 0 && +event.target.innerText <= 9 && event.target.className !== "input-style" && event.target.className !== "items") {
        switch(operation) {
            case "":
                operand1 = operand1.concat(event.target.innerText);
                document.getElementsByClassName('input-style')[0].innerText = operand1;
                break;
            case "÷":
            case "×":
            case "-":
            case "+":
                operand2 = operand2.concat(event.target.innerText);
                document.getElementsByClassName('input-style')[0].innerText = operand2;  
                break;
            default:
                break;
        } 
    }else if(["÷", "×", "-", "+"].includes(event.target.innerText)) {
        if(operand1 !== "" && operand2 !== "") {
        operand1 = makeOperation(+operand1, +operand2, operation);
        operand2 = "";
        }
        operation = event.target.innerText;
        document.getElementsByClassName('input-style')[0].innerText = "0";
    }else if(event.target.innerText === "=") {
        if (operand1 !== "" && operand2 !== "" && operation !== "") {
            result = makeOperation(+operand1, +operand2, operation);
            document.getElementsByClassName('input-style')[0].innerText = result;  
        }
    }else if(event.target.innerText === "C") {
        clear();
    }else if(event.target.innerText === "←") {
        deleteLastChar();
    }
}

let makeOperation = (a, b, operation) => {
    switch (operation) {
        case "÷":
            return a/b;
        case "×":
            return a*b;
        case "-":
            return a-b;
        case "+":
            return a+b;
        default:
            return "";
    }
}

let clear = () => {
    operand1 = "";
    operand2 = "";
    operation = "";
    result = "";
    document.getElementsByClassName('input-style')[0].innerText = "0";  
}

let deleteLastChar = () => {
    if(operand2 !== "") {
        operand2 = operand2.slice(0, -1);
        operand2 = operand2.length === 0 ? "0" : operand2;
        document.getElementsByClassName('input-style')[0].innerText = operand2;
    }else {
        operand1 = operand1.slice(0, -1);
        operand1 = operand1.length === 0 ? "0" : operand1;
        document.getElementsByClassName('input-style')[0].innerText = operand1;
    }
}