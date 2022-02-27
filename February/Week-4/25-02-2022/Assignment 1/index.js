var input = prompt("Enter a number or string to check whether it is palindrome or not");
var reverse_string = "";
var char;
if (input == "") {
    document.write("Enter valid input");
}
else {
    for (i = input.length; i >= 0; i--) {
        char = input.charAt(i);
        reverse_string = reverse_string + char;
    }
    if (input == reverse_string) {
        document.write("The given string is palindrome");
    }
    else {
        document.write("The given string is not palindrome");
    }
}