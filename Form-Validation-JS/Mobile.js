//Mobile Validation

function mymob() {
    var a = document.getElementById("mobile").value;

    if (a == "") {
        document.getElementById("message").innerHTML =
            "Please Enter a Mobile Number";
        return false;
    }

    if (isNaN(a)) {
        document.getElementById("message").innerHTML = "Enter only Numeric Value";
        return false;
    }

    if (a.length < 10) {
        document.getElementById("message").innerHTML =
            "Number Should Not Less Than 10 Digits";
        return false;
    }

    if (a.length > 10) {
        document.getElementById("message").innerHTML =
            "Number Should Not Greater Than 10 Digits";
        return false;
    }

    if (a.charAt(0) != 9 && a.charAt(0) != 8 && a.charAt(0) != 7) {
        document.getElementById("message").innerHTML =
            "Number Should Start With Either 9, 8, or 7";
        return false;
    }
}