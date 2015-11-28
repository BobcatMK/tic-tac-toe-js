'use strict';

Array.prototype.includes = function(valueToLookFor) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === valueToLookFor) {
            return true;
        }
    }

    return false;
};

Object.prototype.includesKey = function(keyToLookFor) {
    var objectKeys = Object.keys(this), includes;

    for (var i = 0; i < objectKeys.length; i++) {
        if (objectKeys[i] === keyToLookFor.toString()) {
            return true;
        }
    }

    return false;
}