/////// Basic JavaScript 6
// by:Grady Mellin
//

function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Halk", 2019, "Red")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction() {
    document.getElementById("Keys_and_Constructors").innerHTML = "Erik drives a " + 
    Erik.Vehicle_Color +"-colored "+ Erik.Vehicle_Model + " Made in "+ Erik.Vehicle_Year;
}
function Fruit(Name, Shape, Color, Texture){
    this.Fruit_Name = Name;
    this.Fruit_Shape = Shape;
    this.Fruit_Color = Color;
    this.Fruit_Texture = Texture;
    }


var Apple = new Fruit("Apple", "Round", "Red", "Firm")
var Kiwi = new Fruit("Kiwi", "Ovoid","Green", "Squishy")

function fruitFunction() {
    document.getElementById("New_and_This").innerHTML = Kiwi.Fruit_Name + "'s are very cool fruit and are very " + Kiwi.Fruit_Color + " and "
+ Kiwi.Fruit_Texture;
}
//var in = "this is a test for in"
//document.write(in);

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var Starting_point = 0;
        function Plus_one() {Starting_point += 1 ;}
        Plus_one();
        return Starting_point;
    }
}
