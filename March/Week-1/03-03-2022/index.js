var a = prompt("Enter value of a :");
var b = prompt("Enter value of b :");

if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers!!!")
} else {
    a = parseInt(a);
    b = parseInt(b);
    a = a - b;
    b = a + b;
    a = -(a) + b;
    var answer = document.getElementById("ans");
    answer.innerText = (`Answer : The swaped value of a is ${a} and b is ${b}.`);
}