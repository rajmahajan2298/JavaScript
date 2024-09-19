//Checkbox Validation

function check() {
    var a = document.form.Subject;

    for (i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            return true;
        }
    }
    document.getElementById("message").innerHTML =
        "Please Select Any CheckBox Button";
    return false;
}