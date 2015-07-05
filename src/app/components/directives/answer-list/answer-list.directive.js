(function (angular) {
	'use strict';
	angular.module('questionList')
		.directive('answerList', [
			function () {
				return {
	                restrict: "EA",
	                replace: true,
					scope: {
	                    selectedItem: '=',
	                    selectedItemClick: '&',
	                    winner: '='
	                },
					templateUrl: 'app/components/directives/answer-list/answer-list.html' 	                
				}
			 }]);
})(angular);