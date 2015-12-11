'use strict';

window.Mixin = {
    ticTacToeKeyPressMapper: {
        55: 0, 56: 1, 57: 2,
        52: 3, 53: 4, 54: 5,
        49: 6, 50: 7, 51: 8,

        113: 0, 119: 1, 101: 2,
        97: 3, 115: 4, 100: 5,
        122: 6, 120: 7, 99: 8
    },
    winScenarios: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    gameFields: function() {
        [
            new BoardField(0), new BoardField(1), new BoardField(2),
            new BoardField(3), new BoardField(4), new BoardField(5),
            new BoardField(6), new BoardField(7), new BoardField(8)
        ]   
    }
};

window.extendInstanceWithMixin = function(destinationInstance, mixin) {
    for (propertyName in mixin) {
        if (!destinationInstance.hasOwnProperty(propertyName))
            destinationInstance[propertyName] = mixin[propertyName];
        else
            throw new Error('Sorry instance already has this property');
    }
};

window.extendInstanceWithProperty = function(destinationInstance, propertyName, propertyValue) {
    if (!destinationInstance.hasOwnProperty(propertyName))
        destinationInstance[propertyName] = propertyValue;
    else
        throw new Error('Sorry instance already has this property');
};

window.getRandomIntInclusive = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}