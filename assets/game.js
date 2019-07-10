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
  
    //incorrect guesses: if 
  guess();  
  document.onkeyup = function (event) {
    var playerGuess = event.key;
    console.log(playerGuess);
    if (playerGuess !== randomLetter){
        attempts--; 
        console.log(attempts);
        //document.querySelector("#remainingguess").innerHTML = attempts
        //document.getElementById("remainingguess").innerHTML = attempts
        guessedLetters.push(playerGuess);
        console.log(guessedLetters);
        console.log("not equal");
        if (attempts == 0){
            losses++;
        }
    } else if(playerGuess === randomLetter) {
        console.log("equal");
        win++
        console.log(win);
    //call reset function    
    }

    //reset function: empty guessed letters array, reset attempts to 10, new random letter, clear/reset html

    //running out of guesses, empties guessedLetters and resets attempts
    // // if (attempts == 0);{
    //     losses ++;
    //     guessedLetters = [];
    //     attempts = 10
   // }
    //output of incorrect guesses 
    // if (guessedLetters.indexOf(playerGuess) >=0);{
    //      document.getElementById("alreadyguessed").innerHTML = guessedLetters;
    //      console.log(guessedLetters);
        }
    // }
//Display: push to inner HTML 
