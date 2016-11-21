console.log("JS file is connected to HTML! Woo!")

//Cards Array
var cards = ["queen","queen","king","king"];

// Cards in Play Array
var cardsInPlay = [];


// Card Board Creation Logic
var createBoard = function () {
	for (var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';

		var gBoard = document.getElementById('game-board');
		gBoard.appendChild(cardElement);
		
		cardElement.setAttribute('data-card', cards[i]);

		// when a card is clicked the function isTwoCards will be executed
    	cardElement.addEventListener('click', isTwoCards)
	}
};


// isMatch Function
var isMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};


// isTwoCards Function
var isTwoCards = function (){
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king'){
  	  this.innerHTML = '<img src="king.jpg" alt="King of the Jungle"/>';
  } else {
  	  this.innerHTML = '<img src="queen.jpg" alt="Queen of the Jungle" />';
  };


  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  }
};


// Create Board Elements Function
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