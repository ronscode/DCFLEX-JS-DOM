// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

console.log("Make divs blue by click and class")

var button = document.getElementById("myButton");
var theBoxes = document.getElementsByClassName("box");
console.log(theBoxes)

button.addEventListener('click', function () {
  for (var i = 0; i < theBoxes.length; i++) {
    theBoxes[i].style.backgroundColor = "blue";
  }


});