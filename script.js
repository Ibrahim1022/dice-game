let currentScore = 0;
let activePlayer = 0;
let scores = [0,0]

document.querySelector(".btn.btn--roll").addEventListener("click", function() {
    let dice = Math.floor(Math.random() * 6) + 1; // random dice number from 1 - 6
    console.log(dice);
    document.querySelector(".dice").src = `dice-${dice}.png`;

    // Check if dice is 1
    if (dice === 1) {
        // Switch player
        console.log("Switch player");

        // Reset current score for the active player
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).innerText = currentScore;

        // Switch active player
        activePlayer = activePlayer === 0 ? 1 : 0;

        // Toggle the active class between the two players
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
        
    } else {
        // Add dice value to the current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).innerText = currentScore;
    }
});

// Hold Button
document.querySelector(".btn.btn--hold").addEventListener("click", function() {
    // Add functionality for hold button
   //scores[activePlayer] = scores[activePlayer] + currentScore
   //document.querySelector(`#score-- ${activePlayer}`).innerText = scores[activePlayer]

   document.querySelector(".btn.btn--hold").addEventListener("click", function() {
    // Add current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).innerText = scores[activePlayer];

    // Reset current score for the active player
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).innerText = currentScore;

    // Check if the player won the game (let's assume winning score is 100)
    if (scores[activePlayer] >= 10) {
        document.querySelector(`#name--${activePlayer}`).innerText = 'Winner!';
        document.querySelector(`player--${activePlayer}`).classList.add("player-- winner")

    } else { 
        // Switch to the next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        
        // Toggle the active class between the players
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
    }
});

});

// New Game Button
document.querySelector(".btn.btn--new").addEventListener("click", function() {
    // Add functionality for new game button
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    gamePlaying = true; // Reset the game state to true
    document.querySelector("#score--0").innerText = 0;
    document.querySelector("#score--1").innerText = 0;
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector("#name--0").innerText = "Player 1";
    document.querySelector("#name--1").innerText = "Player 2";

    document.querySelector(".btn.btn--roll").disabled = false;
    document.querySelector(".btn.btn--hold").disabled = false;
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".dice").style.display = 'block'; // Show dice again
    
   
});
