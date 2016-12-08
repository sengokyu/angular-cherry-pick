/**
 * angular-cherrypick filter
 */
'use strict';

(function(angular) {
    function cherryPick(array, expression) {
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var match = true;

            for (var key in expression) {
                var value = expression[key];

                if (typeof item[key] === 'undefined' || item[key] != value) {
                    match = false;
                    break;
                }
            }

            if (match) {
                return item;
            }
        }

        return undefined;
    }



    angular.module('ngCherryPick', []).filter('cherrypick', function() {
        return function(array, expression, propertyKey) {
            var picked = cherryPick(array, expression);

            return picked ? picked[propertyKey] : undefined;
        }
    });


})(window.angular);