//Radio Button Validation

function myradio() {
    var a = document.form.gender;

    for (i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            return true;
        }
    }
    document.getElementById("message").innerHTML =
        "Please Select Any Radio Button";
    return false;
}