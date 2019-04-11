"use strict"
//Task 1
function isNumberInRange(number){
    if (number > 0 && number < 10){
        return true;
    }else {
        return false;
    }
}

console.log(isNumberInRange(5));

//Task 2

function isEven(even){
    if (even % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

console.log(isEven(12));

//Task 3

var value = +prompt('value?', '');
switch (value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;    
}

//Task 4

function min(a, b){
    if (a < b) {
        return a;
    }else {
        return b;
    }
}

console.log (min(-1, 5))
