/////// Basic JavaScript 3
// by:Grady Mellin
//

function add(x,y){
    var sum = parseInt(x)+parseInt(y);
    document.getElementById("bMath").innerHTML = sum;
    
}
function subtract(x,y){
    var difference = x-y;
    document.getElementById("bMath").innerHTML = difference;
    
}
function multiply(x,y){
    var product = x*y;
    document.getElementById("bMath").innerHTML = product;
    
}

function divide(x,y){
    var quotient = x/y;
    document.getElementById("bMath").innerHTML = quotient;
}

function modulus(x,y){
    var remainder = x%y;
    document.getElementById("bMath").innerHTML = remainder;
}

function negation(a){
    var neg = -a;
    document.getElementById("uMath").innerHTML = neg;
}

function increment(a){
    var incre = ++a;
    document.getElementById("uMath").innerHTML = incre;
}

function decrement(a){
    var decre = --a;
    document.getElementById("uMath").innerHTML = decre;
}

function random(a){
    var ran = Math.random()*a;
    document.getElementById("uMath").innerHTML = ran;
}

function absolute(a) {
    var abs = Math.abs(a);
    document.getElementById("uMath").innerHTML = abs;
}
function randint(a){
    var ran = Math.random()*a;
    var ranint = Math.round(ran);
    document.getElementById("uMath").innerHTML = ranint;
}

function power(x,y){
    var pow = Math.pow(x,y);
    document.getElementById("bMath").innerHTML = pow
}


