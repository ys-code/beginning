// IMPORT THE MODULE
import * as cal from './modules/calculator.js' ;

console.log(cal.add(5,6));
console.log(cal.divide(6,2));
let num1,num2,result;
let sign;

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
do{
     num1=parseFloat(prompt('please enter your 1st number: '));
     num2=parseFloat(prompt('Please enter your 2nd number: '));
}while (isNaN(num1)||isNaN(num2) );
do{
    sign=(prompt('Please assign a operator: add, subtract, multipy, divide:')).toLowerCase();
}while (!( sign ==='add' || sign ==='subtract' || sign ==='multipy' || sign==='divide' ));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch(sign){
    case 'add':
        result=(cal.add(num1,num2));
        alert(`${num1} ${sign} ${num2} is ${result}`);
        break;
    case 'subtract':
        result=(cal.subtract(num1,num2));
        alert(`${num1} ${sign} ${num2} is ${result}`);
        break;
    case 'multipy':
        result=(cal.multipy(num1,num2));
        alert(`${num1} ${sign} ${num2} is ${result}`);
        break;  
    case 'divide':
        result=(cal.divide(num1,num2));
        alert(`${num1} ${sign} ${num2} is ${result}`);
        break;

}
