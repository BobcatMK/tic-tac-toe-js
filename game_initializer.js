'use strict';

$("[data-action='initOnePlayerGame']").on('click', function(event) {
    event.stopPropagation();
    $('#modalBackground').css('display','none');
    window.gameInstance = new TicTacToe({name: 'Player 1', isHuman: true}, {name: 'Computer', isHuman: false});
});

$("[data-action='initTwoPlayersGame']").on('click', function(event) {
    event.stopPropagation();
    $('#modalBackground').css('display','none');
    window.gameInstance = new TicTacToe({name: 'Player 1', isHuman: true}, {name: 'Player 2', isHuman: true});
});

$('#gameFields input').on('click', function(event) {
    event.stopPropagation();
    initializeAction($(event.currentTarget).attr('id'));
});

$(document).on('keypress', function(event) {
    event.stopPropagation();
    if (!(Mixin.ticTacToeKeyPressMapper.includesKey(event.keyCode))) {
        return;
    }

    initializeAction(Mixin.ticTacToeKeyPressMapper[event.keyCode]);
});

function initializeAction(boardFieldId) {
    var clickedFieldId = parseInt(boardFieldId);

    if (!(gameInstance.checkIfBoardFieldIsSet(clickedFieldId))) {
        gameInstance.performAction(clickedFieldId);
    } else {
        return;
    }
};