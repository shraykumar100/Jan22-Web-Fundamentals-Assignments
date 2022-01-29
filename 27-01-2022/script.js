let arr = [];
let max = 0;
let inputNum = Number(prompt("Enter how many numbers you want to give me."));
for (let i = 0; i < inputNum; i++) {
    var numbers = Number(prompt("Enter a number:"));
    arr.push(numbers);
}
console.log(`Your new array is [${arr}]`);

for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j];
    }
}
alert(`The largest number in array is ${max}`);