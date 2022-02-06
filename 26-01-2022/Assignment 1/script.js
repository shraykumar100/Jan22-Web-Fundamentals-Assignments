var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var num3 = prompt("Enter third number:");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
var min;
if (num1 < num2) {
    min = num1;
} else {
    min = num2;
}
if (min > num3) {
    min = num3;
}
alert(`The minimum value is ${min}`);