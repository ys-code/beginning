//Practice with Functions
//1.
function halfNumber(num1){
    return num1/2;
}
let Number1=5;
let result1=halfNumber(Number1);
window.console.log("Half of "+ Number1 + ' is '+ result1);

//2.
function squareNumber(num1){
    return (num1*num1);
}
let Number2=3;
let result2=squareNumber(Number2);
window.console.log("The result of squaring the number  "+ Number2 + ' is '+ result2);

//3.
function percentOf(num1,num2){
    return((num1/num2)*100);
}
let Number3=2;
let Number4=4;
let result3=percentOf(Number3,Number4)
    window.console.log(Number3+' is '+ result3 + '%  of '+Number4);

//4.
function findModulus(num1,num2){
    return(10%4);
}
let Number5=4;
let Number6=10;
let result4=findModulus(Number3,Number4)
    window.console.log(result4 + ' is the modulus of '+ Number5 + ' and ' + Number6 );
