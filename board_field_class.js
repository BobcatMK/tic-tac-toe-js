'use strict';

window.BoardField = (function() {
    var BoardField = function(fieldId) {
        this.isSet = false;
        this.char = '';
        this.fieldId = fieldId;
    };

    BoardField.prototype.setChar = function(char) {
        $('#' + this.fieldId).val(char);
        this.isSet = true;
        this.char = char;
    }

    BoardField.prototype.unsetChar = function() {
        this.isSet = false;
        this.char = '';
    }

    return BoardField;
})();