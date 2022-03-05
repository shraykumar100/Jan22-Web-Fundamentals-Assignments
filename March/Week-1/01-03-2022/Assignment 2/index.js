function sum() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var result = document.getElementById("op")
    var op = parseInt((num1.value)) + parseInt((num2.value));
    result.innerText = op;
}