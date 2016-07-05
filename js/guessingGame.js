/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var guesses = [];

$('#canvas').hide();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
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
  var amount;
  if(playersGuess > winningNumber) {
    amount = Math.ceil((playersGuess/winningNumber)/10)*10;
    return "Too high! You are less than " + amount + " off.";
  } else {
    amount = Math.ceil((playersGuess/winningNumber)/10)*10;
    return "Too low! You are less than " + amount + " off.";
  }
}

// Check if the Player's Guess is the winning number

function checkGuess(){
  var duplicate = false;

  for(var i = 0; i < guesses.length; i++) {
    if(guesses[i] == playersGuess) {
      duplicate = true;
    }
  }

  if (playersGuess === winningNumber) {
    $('.notification').html("<h1 class=\"animated tada win\"><strong>YOU WIN!</strong></h1>");
    $('#canvas').show();
    endGame();
  } else if (duplicate == true) {
    $('.notification').html("<p>You've already guessed that.</p>");
  } else if (guesses.length == 4) {
    $('.notification').html("<h1 class=\"animated wobble lose\"><strong>YOU LOSE</strong></h1>");
    $('.tries').html(0);
    endGame();
  } else {
    $('.notification').html(lowerOrHigher());
    guesses.push(playersGuess);
    $('.tries').html(5-guesses.length);
  }
}

// Create a provide hint button that provides additional clues to the "Player"
$(document).ready(function() {
  $('#hint').on('click', provideHint);
})

function provideHint(event) {
  event.preventDefault();
  var high = Math.ceil(winningNumber/10)*10;
  var low = Math.floor(winningNumber/10)*10;
  $('.hint-text').html("<h7>The number is between " + low + " and " + high + ".</h7>");
}

// Allow the "Player" to Play Again

$(document).ready(function() {
  $('#play-again').on('click', playAgain);
});

function playAgain(event) {
  winningNumber = generateWinningNumber();
  guesses = [];
  $('.notification').html("");
  $('.hint-text').html("");
  $('.face').html("");
  $('.tries').html(5);
  $('#canvas').hide();
}

function endGame() {
  //guess, hint, submit
  $('#your-guess').hide();
  $('#guess').hide();
  $('#hint').hide();
  $('#submit').hide();
}

/* **** Event Listeners/Handlers ****  */
