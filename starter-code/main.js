console.log("JS file is connected to HTML! Woo!")

//Create Card Variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


//Compare Queen with King
if (cardTwo === cardFour){
	alert("You found a match!");
}
//Compare Kings
else if (cardThree === cardFour) {
	alert("You found a match!")
}
//Compare Queens
else if (cardTwo === cardOne){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
};