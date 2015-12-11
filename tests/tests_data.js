'use strict';

window.testData = {};

testData.winScenarios = Mixin.winScenarios;

testData.gameFields = function() {
    new BoardField(0), new BoardField(1), new BoardField(2),
    new BoardField(3), new BoardField(4), new BoardField(5),
    new BoardField(6), new BoardField(7), new BoardField(8)
};

testData.aiPlayer = function(gameFields) {
    new Player({
        name: 'Player Two',
        isHuman: false,
        isTurn: false,
        charUsed: 'X',
        htmlId: 'playerTwo',
        startedGame: false,
        gameFields: gameFields
    });
};
