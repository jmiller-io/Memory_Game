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
else {
	alert("Sorry, try again.");
};

//Compare Kings
if (cardFour === cardThree){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
};

// Compare Queens
if (cardTwo === cardOne){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
};