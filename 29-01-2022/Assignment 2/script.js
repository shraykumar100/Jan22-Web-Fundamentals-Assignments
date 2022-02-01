var number = Number(prompt("Enter a positive number: "));
var isPrime = true;

if (isNaN(number)) {
    alert(`Please enter a valid number!`);
} else if (number == 1) {
    alert("1 is neither prime nor composite number.");
} else if (number > 1) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number} is a prime number`);
    } else {
        alert(`${number} is a not prime number`);
    }
} else {
    alert("The number is not a prime number.");
}