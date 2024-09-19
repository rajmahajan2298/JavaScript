//Email Validation

function myemail() {
    var a = document.myForm.Email.value;

    if (a.indexOf("@") <= 0) {
        document.getElementById("message").innerHTML = "Invalid @ Position";
        return false;
    }

    if (a.charAt(a.length - 4) != ".") {
        document.getElementById("message").innerHTML = "Invalid . Position";
        return false;
    }

    if (a.charAt(a.length - 3) != ".") {
        document.getElementById("message").innerHTML = "Invalid . Position";
        return false;
    }
}