/////// Basic JavaScript 4
// by:Grady Mellin
//

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Name:"Joe",
        Color:"Yellow",
        Breed:"Labrador",
        Age:6,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}