/////// JavaScript 1
// by:Grady Mellin
//

function bugSurvay() {
    var BugOutput;
    var Bugs = document.getElementById("bugInput").value;
    var BugString = " are a great bugs!";
    switch(Bugs) {
        case "Ant":
            BugOutput = "Ants" + BugString;
        break;
        case "Spider":
            BugOutput = "Spiders" + BugString;
        break;
        case "Fly":
            BugOutput = "Flies" + BugString;
        break;
        case "Centipede":
            BugOutput = "Centipedes" + BugString;
        break;
        case "Beetle":
            BugOutput = "Beetles" + BugString;
        break;
        case "Ladybug":
            BugOutput = "Ladybugs" + BugString;
        break;
        case "Bee":
            BugOutput = "Bees" + BugString;
        break;
        case "Caterpillar":
            BugOutput = "Caterpillars" + BugString;
        break;
        default:
            BugOutput = "Please choose a bug and enter it exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML= BugOutput;
}

function bugClass(){
    var Bug_Class = document.getElementsByClassName("bug");
    Bug_Class[6].innerHTML= "Praying Mantids are my faverite bugs!";
}

function makeRGPretty(){
var c = document.getElementById("prettyPicture");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(150,150,25,150,150,180);
grd.addColorStop(0,"red");
grd.addColorStop(1,"blue");


// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,300,300);
}

function makeLGPretty(){
    var c = document.getElementById("prettyPicture");
    var ctx = c.getContext("2d");
    
    // Create gradient
    var grd = ctx.createLinearGradient(75,50,300,300);
    grd.addColorStop(0,"green");
    grd.addColorStop(1,"blue");
    
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,300,300);
    }
