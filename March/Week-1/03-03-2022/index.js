var a = parseInt(prompt("Enter value of a :"));
var b = parseInt(prompt("Enter value of b :"));

a = a - b;
b = a + b;
a = -(a) + b;
var answer = document.getElementById("ans");
answer.innerText = (`Answer : The swaped value of a is ${a} and b is ${b}.`);