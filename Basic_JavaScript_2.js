/////// Basic JavaScript 2
// by:Grady Mellin
//

function myfirstFunction() {
    var str = "this text is green!";
    var result = str.fontcolor("red");
    document.getElementById("Green_Text").innerHTML = result;
}

function mysecondFunction() {
    var sentence = "My name is ";
    sentence += "(WHAT?)".fontcolor("red");
    document.getElementById("Concatenate").innerHTML = sentence;
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("dragtarget").innerHTML = "YAY!";
  }
