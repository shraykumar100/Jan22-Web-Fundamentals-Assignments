function fizzBuzz() {
    var inp = prompt("Enter a number :");

    if (isNaN(inp)) {
        document.write("Please enter a valid number!!!");
    }
    else {
        inp = parseInt(inp);
        for (i = 1; i <= inp; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
                document.write("FizzBuzz");
            } else if (i % 3 == 0) {
                document.write("Fizz");
            } else if (i % 5 == 0) {
                document.write("Buzz");
            } else {
                document.write(i);
            }
            document.write("<br />")
        }
    }
}