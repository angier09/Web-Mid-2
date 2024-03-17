$(document).ready(function() {
    var playerScore = 0;
    var computerScore = 0;

    function computerChoice() {
        var choices = ['rock', 'paper', 'scissors'];
        var random = Math.floor(Math.random() * 3);
        return choices[random];
    }

    function determineWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a draw!";
        }

        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore++;
            $('#playerScore').text(playerScore);
            return "Hurray!!! You win!";
        } else {
            computerScore++;
            $('#computerScore').text(computerScore);
            return "Oppps!!!! You lose!";
        }
    }

    $('button').click(function() {
        var playerSelection = this.id;
        var computerSelection = computerChoice();
        var result = determineWinner(playerSelection, computerSelection);

        $('#playerChoice').text(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        $('#computerChoice').text(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        $('#result').text(result);
    });
});
