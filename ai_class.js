'use strict';

window.AI = (function() {
    function AI(charUsed, gameFields) {
        extendInstanceWithProperty(this, 'gameFields', gameFields);
        extendInstanceWithProperty(this, 'winScenarios', Mixin.winScenarios);
        extendInstanceWithProperty(this. 'charUsed', charUsed);
    };

    AI.prototype.performAction = function() {
        var defendAction = this.checkIfShouldDefend();

        if (typeof defendAction === 'number') {
            return defendAction;
        }
    };

    AI.prototype.checkIfShouldDefend = function() {
        var fieldsCheckedByOpponent = [];
        var fieldsToCheck = [];

        for (var i = 0; i < this.gameFields.length; i++) {
            if (this.gameFields[i].isSet && this.gameFields[i].char !== this.charUsed) {
                fieldsCheckedByOpponent.push(this.gameFields[i].fieldId);
            }
        };

        for (var i = 0; i < this.winScenarios.length; i++) {
            var opponentsFieldsInWinScenario = [];
            var opponentsFieldsNotPresent = [];

            for (var j = 0; j < this.winScenarios[i].length; j++) {
                if (fieldsCheckedByOpponent.includes(this.winScenarios[i][j])) {
                    opponentsFieldsInWinScenario.push(this.winScenarios[i][j]);
                } else {
                    opponentsFieldsNotPresent.push(this.winScenarios[i][j]);
                }
            }

            if (opponentsFieldsInWinScenario.length == 2) {
                fieldsToCheck.push(opponentsFieldsNotPresent[0]);
            }
        };

        if (fieldsToCheck.length > 1) {
            var checkField = fieldsToCheck(getRandomIntInclusive(0, fieldsToCheck.length - 1));
            return checkField;
        } else if (fieldsToCheck.length == 1) {
            return fieldsToCheck[0];
        }

        return null;
    };

    return AI;
})();