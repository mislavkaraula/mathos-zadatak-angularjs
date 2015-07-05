(function (angular) {
	'use strict';
	angular.module('questionList').filter('isWinner', function() {
    return function(input) {
	  if (input==' ') return ''
	  else if (input=='Tie') return "It's a tie!"
	  else return input + ' is the winner!';    
    };
  });
})(angular);