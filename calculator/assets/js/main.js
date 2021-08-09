let expression = document.getElementById("result");   // asign value of input field to a variable 

function insert(param) {                              // create function to input a number in the input field
  expression.value += param;
}

function backspace() {                                // create function to delete the last character in the input field
  expression.value = expression.value.slice(0, -1);
}

function clearInput() {                               // create a function to clear the input field
  expression.value = "";
}

function equal() {                                    // create a function to evaluate the epression in the input field
  expression.value = eval(expression.value);
}
