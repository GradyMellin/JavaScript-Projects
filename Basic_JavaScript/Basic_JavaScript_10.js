/////// Basic JavaScript 10
// by:Grady Mellin
//

function countToTen() {
    var Digit = "";
    var X = 1;
    while (X <11) {
        Digit += X;
        X++;
    }
    Digit = Digit.toString();
    document.getElementById("count_to_ten").innerHTML =Digit+"<br>"+Digit.length;
}

var LaCroix = ["Pure", "Cran-Raspberry", "Pamplemousse", "Lemon", "Orange", "Lime", "Coconut", "Berry", "Apricot",
"Passionfruit", "Tangerine", "Peach-Pear", "Mango", "Key-Lime", "Hibiscus", "LimonCello", "Pasteque"];
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < LaCroix.length; Y++) {
        Content += LaCroix[Y] + "<br>";
    }
    document.getElementById("list_of_lacroix").innerHTML = Content;
} 

function catPics() {
    var catPicture = [];
    catPicture[0] = "sleeping"
    catPicture[1] = "playing";
    catPicture[2] = "eating";
    catPicture[3] = "pooping";
    document.getElementById("cat").innerHTML = "In this cat picture, the cat is " + catPicture[2] +".";
}

function constantFunction() {
    const Musical_Insturment = {type:"Octobass", brand:"Jean-Baptiste Vuillaume", color:"brown"};
    Musical_Insturment.color = "black";
    Musical_Insturment.price = "$60000";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Insturment.type +" was " + Musical_Insturment.price;
}

var X = 10;
document.write(X);
{
    let X = 2;
    document.write(X);
}
document.write(X);

function nFunction(){
var N = nameFunction(document.getElementById('name').value);
    function nameFunction(Name){
        return Name;
        }
        document.write(N);
    }

function carFunction(){
    let car = {
        make: 'Toyota ',
        model: 'Tacoma ',
        year: '2015 ',
        color: 'grey ',
        description: function() {
            return "This truck is a " + this.year + this.color + this.make + this.model;
            }
    };
    document.getElementById("carObject").innerHTML = car.description();
}

function breakStatment(){
    var text = " ";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("breakLoop").innerHTML = text;
}

function continueStatment(){
    var text = " ";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("continueLoop").innerHTML = text;
}



