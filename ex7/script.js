// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var theSection = document.getElementById("section");

var header = document.getElementById("section-header")
console.log("the header is " + header)

header.addEventListener('click', function () {
  console.log("The header was clicked")
  if (theSection.style.display !== "none") {
    theSection.style.display = "none"
  } else {
    theSection.style.display = ""
  }


})