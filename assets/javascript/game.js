// var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var tries;


var counter = 0;



var correctGuess = false;
var randomNumber = Math.floor(Math.random () * 10) + 1;
var guess = prompt ('Guess a number between 1 and 10?');
if( parseInt(guess) === randomNumber ) {
    alert( "You guessed correct!");

}else if (parseInt(guess)< randomNumber || parseInt(guess) > randomNumber) {
    var guessMore = prompt("Try again")
    if (parseInt(guessMore) === randomNumber){
        correctGuess =  true;
    } 
}
if (correctGuess) {
    alert("You guessed correct");
}else {
    alert("Sorry, that's wrong. it was" + randomNumber )
}
 
function clearFields() {
    
    randomNumber = Math.floor(Math.random () * 10) + 1;
     
    correctGuess = false;

    guess = prompt ('Guess a number between 1 and 10?');


    return false;
}




