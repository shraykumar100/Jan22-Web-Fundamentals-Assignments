var num = Number(prompt("Enter how many 'first' fibonacci numbers you want:"));
var arr = [0, 1];

for (var i = 0; i < (num - 2); i++) {
    var a = arr[i];
    var b = arr[i + 1];
    var c = a + b;
    arr.push(c);
}
alert(`The desired fibonacci series is ${arr}`);