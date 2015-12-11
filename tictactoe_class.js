'use strict';

window.TicTacToe = (function() {
    function TicTacToe(playerOneProps, playerTwoProps) {
        extendInstanceWithProperty(this, 'gameFields', Mixin.gameFields());
        
        this.playerOne = new Player({
            name: playerOneProps.name,
            isHuman: playerOneProps.isHuman,
            isTurn: true,
            charUsed: 'O',
            htmlId: 'playerOne',
            startedGame: true,
            gameFields: this.gameFields
        });
        
        this.playerTwo = new Player({
            name: playerTwoProps.name, 
            isHuman: playerTwoProps.isHuman,
            isTurn: false,
            charUsed: 'X',
            htmlId: 'playerTwo',
            startedGame: false,
            gameFields: this.gameFields
        });

        this.winnerChecker = new WinnerChecker(this.playerOne, this.playerTwo, this.gameFields);
        this.scoreBoard = new ScoreBoard(this.playerOne, this.playerTwo, this.gameFields);

        if (!this.playerTwo.isHuman) {
            this.playerTwo.initiateAI(this.gameFields);
        }

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
            if (!this.playerTwo.isHuman) {
                boardFieldClicked = this.gameFields[this.playerTwo.AI.performAction()];
                actingPlayer = this.findActingPlayer();
                idlePlayer = this.findIdlePlayer();

                boardFieldClicked.setChar(actingPlayer.charUsed);
                this.scoreBoard.changeActingPlayer(actingPlayer, idlePlayer);
                // w tym miejscu konieczne bedzie podmienienie acting player i idle player
            }
            //here goes logic responsible for checking if player two is AI and making it's move inside
            //below function. Then in that function it's making call to performAction, but also
            //this method 'performAction' should have knowledge about that AI is making move, and if game continues
            //then it should run AI action again.
            
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
