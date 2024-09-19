//User Name Validation

function myfun() {
    var correct_way = /^[A-Z a-z]+$/;
    var a = document.getElementById("User_Name").value;

    if (a == "") {
        document.getElementById("message").innerHTML = "Please Fill User Name";
        return false;
    }

    if (a.length < 3) {
        document.getElementById("message").innerHTML =
            "User Name Must be of 3 Letter";
        return false;
    }

    if (a.length > 20) {
        document.getElementById("message").innerHTML =
            "User Name Must be less than 20 Letter";
        return false;
    }

    if (a.match(correct_way)) {
        true;
    } else {
        document.getElementById("message").innerHTML = "Invalid Data Enter";
        return false;
    }
}