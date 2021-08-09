/*

    HOISTING
    ' b = undefined                           '
    ' c = undefined                           '
    ' addFontBoldClass =  {                   '
    '        var class_name = "font-bold";    '
    '       return class_name;                '
    '    }                                    '
    '-----------------------------------------'
    Memory Space / Global Space

    ' b = undefined                           '
    ' c = undefined                           '
    ' addFontBoldClass =  {                   '
    '        var class_name = "font-bold";    '
    '       return class_name;                '
    '    }                                    '
    '-----------------------------------------'
    Content Execution Space
    
  var a = document.getElementById('demo').classList; //statement
        
    everything inside a {} is a block

  == will check only the Value of the variable NOT THE DATA TYPE
    number + number = number
    string + string/number/boolean = string
    js programs is collection of statements.

*/

/* 
   INSERT   
   CLEAR
   BACKSPACE   // it will remove the last character from the input  
   in Java/C++ we have substring

   equal
*/

let expression = document.getElementById("result");

function insert(param) {
  expression.value += param;
}

function backspace() {
  expression.value = expression.value.slice(0, -1);
}

function clearInput() {
  expression.value = "";
}

function equal() {
  expression.value = eval(expression.value);
}
