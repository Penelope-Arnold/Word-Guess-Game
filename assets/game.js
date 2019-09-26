//VARIABLES
var letters = ["a","b","c","d","e","f"];

var guessedLetters = [];

var randomLetter = null

var attempts = 10

var win = 0

var losses = 0

var updateAttempts = function(){
    document.querySelector("#remainingguess").innerHTML = attempts;
}

var chooseRandom = function(){
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);
};

var updateGuessed = function(){
    document.querySelector("#guessed").innerHTML = guessedLetters.join(", ")
    console.log(guessedLetters);
};

updateAttempts();

var reset = function(){
    attempts = 10;
    guessedLetters = [];
    chooseRandom();
    updateAttempts();
    updateGuessed();
}

chooseRandom();
updateGuessed();

document.onkeydown = function(event){
    attempts--;
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(letter);
    updateAttempts();
    updateGuessed();

    if(letter === randomLetter){
        win++;
        document.querySelector("#wins").innerHTML = win
        
        reset();
    }


    if(attempts === 0){
        losses++;
        document.querySelector("#losses").innerHTML = losses

        reset();
    }

}





