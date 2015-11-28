'use strict';

window.Player = (function() {
    function Player(name, isTurn, isHuman, charUsed, htmlId, startedGame) {
        this.name = name;
        this.isTurn = isTurn;
        this.isHuman = isHuman;
        this.timesWon = 0;
        this.charUsed = charUsed;
        this.htmlId = htmlId;
        this.startedGame = startedGame;
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

    return Player;
})();