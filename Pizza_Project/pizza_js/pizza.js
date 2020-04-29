
function getReceipt() {
    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }else if(selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }else if(selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }else if(selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }else if(selectedSize === "Gargantuan Pizza") {
        sizeTotal = 500;
    }
    console.log(selectedSize);
    runningTotal = sizeTotal;
    console.log(selectedSize+ " =$"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping (runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var topTotal = 0;
    var selectedTop = [];
    var topArray = document.getElementsByClassName("topping");
    for (var j = 0; j< topArray.length; j++){
        if (topArray[j].checked){
            selectedTop.push(topArray[j].value);
            
            console.log("selected topping item: ("+ topArray[j].value+ ")");
            text1 = text1+topArray[j].value+ "<br>";
        }
    }
    var topCount = selectedTop.length;
    console.log(topCount);
    if (topCount > 1){
        topTotal = (topCount - 1);
    } else {
        topTotal = 0;
    }
    runningTotal = (runningTotal + topTotal)
    console.log(topArray);
    console.log("Total selected topping items: "+topCount);
    console.log(topCount+" toppings - 1 free topping = "+"$"+ topTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+ "$"+runningTotal+".00");
    document.getElementById("showText").innerHTML= text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+ runningTotal+".00"+"</strong></h3>";
};