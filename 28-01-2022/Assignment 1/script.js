var num = Number(prompt("Enter number to find it's reverse order:"));
var arr = [];
for (var i = num; i >= 0; i--) {
    arr.push(i);
}
alert(`The reverse order of that number is ${arr}`);