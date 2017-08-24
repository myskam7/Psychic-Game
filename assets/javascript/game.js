
 var Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var Win = 0;
 var Lose = 0;
 var guessesLeft = 5;
 var guessedInputs = []; //Array for capturing users input to display on screen


 document.onkeyup = function(event) {
     var myGuess = event.key; //variable to capute user input
     guessedInputs.push(myGuess); 
     var computerG = Letters[Math.floor(Math.random() * Letters.length)]; // Computer will make a calculated guess


     //If you guess correct, incorrect and if you won the best out of 5 or lost it.
 //If the guesses remaining equals 0, you WON, will add point to 'Won' and game will reset
     if (myGuess === computerG) {
     Win++;
     guessesLeft = 5;
     guessedInputs = [];
     alert('You got it right!')
     }
     //If your does not not match, your number of  guesses  remaining are deducted.
     else {
     guessesLeft--;
     }
     //If the guesses remaining equals 0, you LOSE, will add point to 'Lose' and game will reset
     if (guessesLeft === 0) {
     Lose++;
     guessesLeft = 5;
     guessedInputs = [];
     
     alert("You lost, try again")
 
 // This will show if you WON the best out 5 game
     }
     if(Win == 5 && Lose < Win 
     || 
     Win == 4 && Lose < Win 
     ||
     Win == 3 && Lose < Win){
         Win = 0;
         Lose = 0;
         guessesLeft = 12;
         alert ("You won!")
     }
     

 // This will show if you LOST the best out of 5
     if(Lose == 5 && Win < Lose
     || 
     Lose == 4 && Win < Lose 
     ||
     Lose == 3 && Win < Lose){
         Win = 0;
         Lose = 0;
         guessesLeft = 5;
         alert ("You lost, you kinda suck if you don't try again!")

     }
     


     var html = "<p>You vs the Smartest computer ever (best out of 5):</p>" +
     "<p>Wins: " + Win + "</p>" +
     "<p>Loses: " + Lose + "</p>" +
     "<p>Guesses Remaining: " + guessesLeft + "</p>" +
     "<p>Letter guessed: " + guessedInputs.join(', ') + "</p>" ; //Show guessed     
     
     document.getElementById("results").innerHTML = html;
 }