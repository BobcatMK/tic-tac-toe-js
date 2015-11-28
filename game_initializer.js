'use strict';

var ticTacToeKeyPressMapper = {
    55: 0, 56: 1, 57: 2,
    52: 3, 53: 4, 54: 5,
    49: 6, 50: 7, 51: 8,

    113: 0, 119: 1, 101: 2,
    97: 3, 115: 4, 100: 5,
    122: 6, 120: 7, 99: 8
};

var ticTacToeAllowedKeys = Object.keys(ticTacToeKeyPressMapper);

$("[data-action='initOnePlayerGame']").on('click', function(event) {
    event.stopPropagation();
    $('#modalBackground').css('display','none');
    var playerOne = new Player('Player 1', true, true, 'O', 'playerOne', true);
    var playerTwo = new Player('Computer', false, false, 'X', 'playerTwo', false);
    window.gameInstance = new TicTacToe(playerOne, playerTwo, 'AI')
});

$("[data-action='initTwoPlayersGame']").on('click', function(event) {
    event.stopPropagation();
    $('#modalBackground').css('display','none');
    var playerOne = new Player('Player 1', true, true, 'O', 'playerOne', true);
    var playerTwo = new Player('Player 2', false, false, 'X', 'playerTwo', false);
    window.gameInstance = new TicTacToe(playerOne, playerTwo, 'Human')
});

$('#gameFields input').on('click', function(event) {
    event.stopPropagation();
    initializeAction($(event.currentTarget).attr('id'));
});

$(document).on('keypress', function(event) {
    event.stopPropagation();

    // if (!ticTacToeAllowedKeys.includes(parseInt(event.keyCode))) {
    //     console.log('spierdalaj');
    //     return
    // }

    initializeAction(ticTacToeKeyPressMapper[event.keyCode]);
});

function initializeAction(boardFieldId) {
    var clickedFieldId = parseInt(boardFieldId);

    if (!(gameInstance.checkIfBoardFieldIsSet(clickedFieldId))) {
        gameInstance.performAction(clickedFieldId);
    } else {
        return;
    }
};