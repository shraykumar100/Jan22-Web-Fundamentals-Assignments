function checkPassMatch() {
    var createPass = document.getElementById("crpass");
    var reEnterPass = document.getElementById("repass");
    if ((createPass.value !== reEnterPass.value)) {
        createPass.value = ""
        createPass.placeholder = "Password missmatch!"
        createPass.style.color = "red";
        reEnterPass.placeholder = "Password missmatch!";
        reEnterPass.style.color = "red";
        reEnterPass.value = ""
    }
}

