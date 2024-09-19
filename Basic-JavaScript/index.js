function myfun() {
    var choice = document.getElementById("choices").value;

    switch (choice) {
        case "add":
            var a = 10;
            var b = 20;
            var sum = a + b;
            document.write("Add of two num is " + sum);
            break;

        case "sub":
            var a = 10;
            var b = 20;
            var sub = a - b;
            document.write("Sub of two num is " + sub);
            break;

        case "mul":
            var a = 10;
            var b = 20;
            var mul = a * b;
            document.write("Mul of two num is " + mul);
            break;

        case "div":
            var a = 10;
            var b = 20;
            var div = a / b;
            document.write("Div of two num is " + div);
            break;

        default:
            alert("Not a Valid Input");
    }
}