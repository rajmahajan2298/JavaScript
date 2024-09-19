//Access DOM By ID

var a = document.getElementById("Raj").innerHTML;
document.write(a);

//Access DOM By ClassName

var b = document.getElementsByClassName("Welcome")[0].innerHTML;
document.write(b);

//Access DOM By TagName

var p = document.getElementsByTagName("p");
document.write(p);

//Access First Element of Any Child

var c = document.querySelector("p").innerHTML;
document.write(c);