//VARIABLES
var letters = ["a","b","c","d","e","f"];
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
var win = 0
var losses = 0
var attempts = 10
var guessedLetters = [];

//generates random letter from the "letters" array using math.floor and math.random
function guess () {
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log(randomLetter);
}


// capturing user input: 
document.onekeyup = funtion (event); {
    var playerGuess = event.key;
//correct guesses: if 
    if (playerGuess === randomLetter){
        win++;
        attempts = 10
        guessedLetters = [];
    }
}
    //incorrect guesses: if 
  guess();  
    if (playerGuess !== randomLetter){
        attetmpts--; 
    }
    //running out of guesses, empties guessedLetters and resets attempts
    if (attempts == 0);{
        losses ++;
        guessedLetters = [];
        attempts = 10
    }
    //output of incorrect guesses 
    if (guessedLetters.indexOf(playerGuess) >=0);{
    
     } else {
         guessedLetters.push(playerGuess);
         document.getElementById("alreadyguessed").innerHTML = guessedLetters;
         console.log(guessedLetters);
        }
    
        
//Display: push to inner html


    