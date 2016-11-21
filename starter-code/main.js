// Create and Populate Cards Array
var cards = ["queen","queen","king","king"];

// Create CardsinPlay Array
var cardsInPlay = [];


// Game Board Creation Function
var createBoard = function () {
	for (var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';

		var gBoard = document.getElementById('game-board');
		gBoard.appendChild(cardElement);

		// Set cardElement attribute to card value 
		cardElement.setAttribute('data-card', cards[i]);

		// Add Card Click Event Listener
    	cardElement.addEventListener('click', isTwoCards)
	}
};


// Logic for Determining Card Value Match
var isMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};


// Determines When Two Cards are Clicked On and "flips" the Card by Assiging an img
var isTwoCards = function (){
  // Adds card to cardsInPlay array
  cardsInPlay.push(this.getAttribute('data-card'));

  // Assigns img based on data-card attribute
  if (this.getAttribute('data-card') === 'king'){
  	  this.innerHTML = '<img src="king.jpg" alt="King of the Jungle"/>';
  } else {
  	  this.innerHTML = '<img src="queen.jpg" alt="Queen of the Jungle" />';
  };

  // Determines when two cards have been clicked, compares them and clears the cardsInPlay array
  if (cardsInPlay.length === 2) {
	 isMatch(cardsInPlay);
	 cardsInPlay = [];
  }
};


// Creates the Game Board
createBoard(cards);






/* Unused Code built from previous lessons
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


//Create Card Variables
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

*/