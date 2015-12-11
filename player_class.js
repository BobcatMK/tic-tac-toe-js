'use strict';

window.Player = (function() {
    function Player(properties) {
        this.name = properties.name;
        this.isTurn = properties.isTurn;
        this.isHuman = properties.isHuman;
        this.timesWon = 0;
        this.charUsed = properties.charUsed;
        this.htmlId = properties.htmlId;
        this.startedGame = properties.startedGame;
        this.gameFields = properties.gameFields;
    }

    Player.prototype.incrementTimesWon = function() {
        ++this.timesWon;
    };

    Player.prototype.changeStartedGame = function() {
        if (this.startedGame) {
            this.startedGame = false;
            this.isTurn = false;
        } else {
            this.startedGame = true;
            this.isTurn = true;
        }
    };

    Player.prototype.initiateAI = function() {
        if (!this.isHuman) {
            this.AI = new AI(this.charUsed, this.gameFields);
        }
    };

    return Player;
})();