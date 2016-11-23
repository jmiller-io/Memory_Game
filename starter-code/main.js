// Create, Shuffle and Populate Cards Array
var cards = ["queen","queen","king","king"];
var cards = shuffle(cards);

// Create CardsinPlay Array
var cardsInPlay = [];

// Game Score Keeping
score = 0;
var scoreElement = document.createElement('div');
scoreElement.innerHTML = score;
scoreElement.setAttribute('Id', 'currentScore');
var gameScore = document.getElementById('game-score');
gameScore.appendChild(scoreElement);

// Add Score Function
var addScore = function (tally) {
  var cScore = document.getElementById('currentScore');
  score += tally;
  cScore.innerHTML = score;

};

// Function for Shuffling cards using the Fisher-Yates method
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Game Board Creation Function
var createBoard = function () {
	for (var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';

		// Adds the Card Elements to the Game Board
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
    setTimeout(function() {
     alert("You found a match!")
     }, 450);
    addScore(1);
	} else {
		setTimeout(function() {
     alert("Sorry, try again.");
     }, 450);
	};


// Reset Game Board Function
setTimeout(function() {
  resetGboard()
  },1500);
	
};

//Reset Game Board Function
var resetGboard = function () {
  var toClear = document.querySelectorAll('.card');
  for (var i = 0; i < toClear.length; i ++) {
    toClear[i].innerHTML = '';  
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
  };
};


// Creates the Game Board
createBoard(cards);
