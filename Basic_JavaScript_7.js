/////// Basic JavaScript 7
// by:Grady Mellin
//

var x = 10;

function example_Global() {
    document.write(x);
}

function example_Local() {
    var y= 15
    document.write(x+y)
}

function example_Local_error() {
    document.write(x);
    console.log(x);
}

example_Global();
document.write('<br/>');
example_Local();
document.write('<br/>');
example_Local_error();
document.write('<br/><br/>');

function getDate() {
    if (new Date().getHours() < 7) {
        document.getElementById("greeting").innerHTML = "Time to get up!"
        }
    else if (new Date().getHours() < 22) {
        document.getElementById("greeting").innerHTML = "How are you today?"
        }   
    else {
        document.getElementById("greeting").innerHTML = "Go to bed!"
    }
}

function getDays() {
    if (new Date().getMonth() == 3 || 5 || 8 || 10) {
        document.getElementById("dim").innerHTML = "There are 30 days in this month."
        }
    else if (new Date().getMonth() == 2) {
        document.getElementById("dim").innerHTML = "There are either 28 or 29 days in this month."
        }   
    else {
        document.getElementById("dim").innerHTML = "There are 31 days in this month."
    }
}

function snowsport() {
    var a = document.getElementById("snow").value;
    if (a == "ski") {
        document.write("skiing is cool but you should try snowboarding!");
    }
    else if (a == "snowboard") {
        document.write("Nice! Snowboarding is great!");
    }
    else {
        document.write("Lame! You should try snowboarding!")
    }
}

function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning.";
      }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening.";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}



