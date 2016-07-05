/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var guesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
  return Math.floor((Math.random() * 100) + 1);
}

var winningNumber = generateWinningNumber();

// Fetch the Players Guess
$(document).ready(function() {
  $('#submit').on('click', playersGuessSubmission);
})

function playersGuessSubmission(event){
  event.preventDefault();
	playersGuess = +$('#guess').val();
  checkGuess();
  $('#guess').val("");
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  var duplicate = false;

  for(var i = 0; i < guesses.length; i++) {
    if(guesses[i] == playersGuess) {
      duplicate = true;
    }
  }

  if (playersGuess === winningNumber) {
    $('.notification').html("<p>You Win!</p>");
  } else if (duplicate == true) {
    $('.notification').html("<p>You've already guessed that.</p>");
  } else {
    $('.notification').html("<p>Try Again</p>");
    guesses.push(playersGuess);
  }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

