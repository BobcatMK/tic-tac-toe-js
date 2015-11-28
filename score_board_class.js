'use strict';

window.ScoreBoard = (function() {
    function ScoreBoard(playerOne, playerTwo, gameFields) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameFields = gameFields;
        this.timesGameTied = 0;
    };

    ScoreBoard.prototype.init = function() {
        $("#playerOneName").text(this.playerOne.name + ":");
        $("#playerOneScore").text(" " + this.playerOne.timesWon);
        $("#playerTwoName").text(this.playerTwo.name + ":");
        $("#playerTwoScore").text(" " + this.playerTwo.timesWon);
        $("#numberOfTies").text(this.timesGameTied);

        //set is-turn in HTML
        $('#playerTwo .arrow-indicator').hide();

        //set players char used
        $('#playerOne .char-used').text(this.playerOne.charUsed);
        $('#playerTwo .char-used').text(this.playerTwo.charUsed);
    }; 

    ScoreBoard.prototype.changeActingPlayer = function(actingPlayer, idlePlayer) {
        $('#'+actingPlayer.htmlId+' .arrow-indicator').hide();
        $('#'+idlePlayer.htmlId+' .arrow-indicator').show();
        actingPlayer.isTurn = false;
        idlePlayer.isTurn = true;
    };

    ScoreBoard.prototype.changeTimesGameTied = function() {
        $("#numberOfTies").text(++this.timesGameTied);
    };

    ScoreBoard.prototype.clear = function() {
        $('#gameFields input').each(function() {
            $(this).val("");
        });

        this.gameFields.forEach(function(boardField) {
            boardField.unsetChar();
        });
    };

    ScoreBoard.prototype.newGame = function() {
        this.playerOne.changeStartedGame();
        this.playerTwo.changeStartedGame();

        if (this.playerOne.startedGame) {
            $('#'+this.playerOne.htmlId+' .arrow-indicator').show();    
            $('#'+this.playerTwo.htmlId+' .arrow-indicator').hide();
        } else {
            $('#'+this.playerTwo.htmlId+' .arrow-indicator').show();    
            $('#'+this.playerOne.htmlId+' .arrow-indicator').hide();
        }
    };

    ScoreBoard.prototype.changeTimesPlayerWon = function(playerWhoWon) {
        playerWhoWon.incrementTimesWon();
        $('#' + playerWhoWon.htmlId + 'Score').text(playerWhoWon.timesWon);
    };

    return ScoreBoard;
})();