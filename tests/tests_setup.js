'use strict';

window.describe = function(description, callback) {
    console.log('STARTING TEST: ' + description);
    callback();
}

window.it = function(description, callback) {
    console.log('TEST CASE: ' + description);
    callback();
}

window.test = it;