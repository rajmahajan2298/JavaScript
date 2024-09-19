//Password Validation

function mypass() {
    var a = document.getElementById("pass").value;
    var b = document.getElementById("password").value;

    if (a == "") {
        document.getElementById("message").innerHTML = "Please Enter a Password";
        return false;
    }

    if (a.length < 5) {
        document.getElementById("message").innerHTML =
            "Password Length Must of Five Digit";
        return false;
    }

    if (a.length > 20) {
        document.getElementById("message").innerHTML =
            "Password Length Must not exceed Twenty Digit";
        return false;
    }

    if (a != b) {
        document.getElementById("messages").innerHTML = "Password Does'nt Match";
        return false;
    } else {
        true;
    }
}