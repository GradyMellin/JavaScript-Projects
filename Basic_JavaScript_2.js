/////// Basic JavaScript 2
// by:Grady Mellin
//

function myfirstFunction() {
    var str = "this text is green!";
    var result = str.fontcolor("red");
    document.getElementById("Green_Text").innerHTML = result;
}

function mysecondFunction() {
    var sentence = "My name is";
    sentence += " WHAT!";
    document.getElementById("Concatenate").innerHTML = sentence;
}