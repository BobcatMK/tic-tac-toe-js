'use strict';

window.describe = function(description, hooks, callback) {
    console.log('STARTING TEST: ' + description);
    if (hooks.before) {
        hooks.before();
    }
    callback();
    if (hooks.after) {
        hooks.after();
    }
}

window.it = function(description, callback) {
    console.log('TEST CASE: ' + description);
    callback();
}

window.test = it;

window.Equals = (function() {
    var Equals = function(testSubject) {
        this.testSubject = testSubject;
    }

    Equals.prototype.equals = function(equalityValue) {
        if (this.testSubject === equalityValue) {
            console.log('%cTest passed: subject\'s value is ' + this.testSubject + ' and it\'s equal to ' + equalityValue, 'color: green');
        } else {
            console.log('%cTest failed: subject should be equal ' + equalityValue + ' but it\'s equal to ' + this.testSubject, 'color: red')
        }


        return null;
    }

    return Equals;
})()

window.assert = function(testSubject) {
    return new Equals(testSubject);
}
