'use strict';

window.WinnerChecker = (function() {
    function WinnerChecker(playerOne, playerTwo, gameFields) {
        extendInstanceWithProperty(this, 'winScenarios', Mixin.winScenarios)
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameFields = gameFields;
    };

    WinnerChecker.prototype.checkForWinner = function(actingPlayer, clickedFieldId) {
        var character = actingPlayer.charUsed;
        var clickedBoardField = this.gameFields[clickedFieldId];

        if (this.searchForPatternMatched(actingPlayer, clickedFieldId)) {
            return actingPlayer;
        } else if (this.searchForTie()) {
            return 'tie';
        } else {
            return 'continue';
        }
    };

    WinnerChecker.prototype.searchForPatternMatched = function(actingPlayer, clickedFieldId) {
        for (var i = 0; i < this.winScenarios.length; i++) {
            if (this.winScenarios[i].includes(clickedFieldId)) {
                for (var j = 0; j < this.winScenarios[i].length; j++) {
                    var boardField = this.gameFields[this.winScenarios[i][j]];
                    if (boardField.isSet && boardField.char === actingPlayer.charUsed) {
                        if (j === 2) {
                            return true;
                        }
                    } else {
                        break;
                    }
                }
            }
        }

        return false;
    };

    WinnerChecker.prototype.searchForTie = function() {
        for (var i = 0; i < this.gameFields.length; i++) {
            if (this.gameFields[i].isSet === false) {
                return false;
            }
        }

        return true;
    };

    return WinnerChecker;
})();