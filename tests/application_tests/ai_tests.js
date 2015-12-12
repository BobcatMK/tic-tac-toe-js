'use strict';

describe('Tests for AI decision making', {}, function() {
    describe('testing AI defense capability', {
        before: function() {
            testScope.data = {};
            testScope.data.gameFields = testData.gameFields();
            testScope.data.
        }
    }, function() {
        // data basic setting
        var data = {};
        data.gameFields = testData.gameFields();
        data.aiPlayer = testData.aiPlayer(data.gameFields);

        // stubs
        $ = function() {
            return {
                val: function() {
                    return true
                }
            };
        }

        test('AI is defending itself in case when opponent has one way of winning', function() {
            // data preparation
            data.gameFields[0].setChar('O');
            data.gameFields[4].setChar('O');
            
            assert(data.aiPlayer.AI.performAction()).equals(8);
        });

        // test('AI is defending itself is case when opponent has multiple ways of winning', function() {
        //     assert(data.aiPlayer.AI.performAction())
        // });
    });
});
