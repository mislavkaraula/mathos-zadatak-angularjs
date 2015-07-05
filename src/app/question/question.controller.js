(function (angular) {
	'use strict';
	angular.module('questionList')
		.controller('QuestionController', ['$scope', '$routeParams', 'questionListService',
			function ($scope, $routeParams, questionListService) {
				$scope.selectedItem = [];
				$scope.winner = " ";

				$scope.vote = function(id) {
					for(var i in $scope.selectedItem.answers)
					 	if ($scope.selectedItem.answers[i].id===id) {
					 		$scope.selectedItem.answers[i].count+=1;
					 	};
						
					$scope.temp = $scope.selectedItem.answers[0]; 
					for(var i in $scope.selectedItem.answers) { 
					  if ($scope.selectedItem.answers[i].count>$scope.temp.count) { 
					    $scope.temp = $scope.selectedItem.answers[i]; 
						$scope.winner = $scope.selectedItem.answers[i].answer; 
					  } 
					  else if ($scope.selectedItem.answers[i].count === $scope.temp.count) 
					    $scope.winner = "Tie"; else $scope.winner = $scope.temp.answer; }
					
				};
				
				function fetch() {
					questionListService.get($routeParams.id).success(function(data) {
						$scope.selectedItem = data;		
					});
				};
				fetch();
			 }]);
})(angular);