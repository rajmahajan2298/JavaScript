var sentence = document.getElementById("sent").value;
var letter = document.getElementById("letter").value;
var index = sentence.indexOf(letter);

function myfun() {

    if (index === -1) {
        document.write("The letter does not exist in sentence");
    } else {
        document.write(sentence.substring(index + 1));
    }
}