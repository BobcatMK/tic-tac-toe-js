'use strict';

window.TicTacToe = (function() {
    function TicTacToe(playerOne, playerTwo, gameType) {
        this.gameFields = [
            new BoardField(0), new BoardField(1), new BoardField(2),
            new BoardField(3), new BoardField(4), new BoardField(5),
            new BoardField(6), new BoardField(7), new BoardField(8)
        ];
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameType = gameType;
        this.winnerChecker = new WinnerChecker(this.playerOne, this.playerTwo, this.gameFields);
        this.scoreBoard = new ScoreBoard(this.playerOne, this.playerTwo, this.gameFields);

        this.scoreBoard.clear();
        this.scoreBoard.init();
    };

    TicTacToe.prototype.performAction = function(clickedFieldId) {
        var boardFieldClicked = this.gameFields[clickedFieldId];
        var actingPlayer = this.findActingPlayer();
        var idlePlayer = this.findIdlePlayer();

        //serve board field clicked both - HTML and JS
        boardFieldClicked.setChar(actingPlayer.charUsed);

        //check for winner
        var resultOfAction = this.winnerChecker.checkForWinner(actingPlayer, clickedFieldId);

        if (resultOfAction === 'continue') {
            this.scoreBoard.changeActingPlayer(actingPlayer, idlePlayer);
        } else if (resultOfAction === 'tie') {
            this.scoreBoard.changeTimesGameTied();
            this.scoreBoard.clear();
            this.scoreBoard.newGame();
        } else {
            this.scoreBoard.changeTimesPlayerWon(resultOfAction);
            this.scoreBoard.clear();
            this.scoreBoard.newGame();
        }
    };

    TicTacToe.prototype.checkIfBoardFieldIsSet = function(clickedFieldId) {
        if (this.gameFields[clickedFieldId].isSet) {
            return true;
        } else {
            return false;
        }
    };

    TicTacToe.prototype.findActingPlayer = function() {
        if (this.playerOne.isTurn) {
            return this.playerOne;
        } else {
            return this.playerTwo;
        }
    };

    TicTacToe.prototype.findIdlePlayer = function() {
        if (!(this.playerOne.isTurn)) {
            return this.playerOne;
        } else {
            return this.playerTwo;
        }
    };

    return TicTacToe;
})();
