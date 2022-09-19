const userInput = document.getElementById("userinput");

let expression = '';


function press(num) {
    expression += num;

    userInput.value = expression

}


function equal() {
    userInput.value = eval(expression)
}

function erase() {

    expression = "";
    userInput.value = expression
}