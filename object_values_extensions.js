'use strict';

Array.prototype.includes = function(valueToLookFor) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === valueToLookFor) {
            return true;
        }
    }

    return false;
};
