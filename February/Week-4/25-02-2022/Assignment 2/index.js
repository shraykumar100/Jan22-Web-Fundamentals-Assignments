var string1 = prompt("Enter first string");
var string2 = prompt("Enter second string");
if (string1.length != string2.length) {
    document.write("Please enter the string of same length")
}
else {
    var arr1 = [];
    var arr2 = [];
    var sortstring1;
    var sortstring2;
    arr1 = string1.split("");
    arr1.sort();
    sortstring1 = arr1.join("");
    arr2 = string2.split("");
    sortarr2 = arr2.sort();
    sortstring2 = sortarr2.join("");

    if (sortstring1 == sortstring2) {
        document.write("This is an anagram");
    }
    else {
        document.write("This is not an anagram");
    }
}
