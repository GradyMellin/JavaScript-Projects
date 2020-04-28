/////// Basic JavaScript 8
// by:Grady Mellin
//

function sliceMethod() {
    var sentence = "All work no play makes Grady a sad boy!";
    var section = sentence.slice(9,39);
    document.getElementById("Slice").innerHTML = section;
}

function upperCase() {
    var sentence = "All work no play makes Grady a sad boy!";
    var SENTENCE = sentence.toUpperCase();
    document.getElementById("Upper").innerHTML = SENTENCE;
}

function search() {
    var sentence = "All work no play makes Grady a sad boy!";
    var position = sentence.search("Grady");
    document.getElementById("Search").innerHTML = position;
}

function stringMethod() {
    var X = 3242;
    document.getElementById("N_to_S").innerHTML= X.toString();
}

function percisionMethod() {
    var X = Math.PI;
    document.getElementById("Percision").innerHTML= X.toPrecision(10);
}

function fixedMethod() {
    var X = Math.PI;
    document.getElementById("Fixed").innerHTML= X.toFixed(10);
}

function valueMethod() {
    var X = "All work no play makes Grady a sad boy!";
    document.getElementById("valueOf").innerHTML= X.valueOf(10);
}
function concatMethod() {
    var X = "All work no play";
    var Y = " makes Grady a sad boy!"
    document.getElementById("concatinate").innerHTML= X.concat(Y);
}