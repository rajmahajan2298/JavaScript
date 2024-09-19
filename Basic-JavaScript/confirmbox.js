function myFun() {
    var user = confirm("Do you want to visit website");

    if (user == true) {
        window.open("https://www.google.com/");
        return true;
    } else {
        document.write("I dont want to visit");
        return false;
    }
}