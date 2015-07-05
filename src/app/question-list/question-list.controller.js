angular.module('questionList')
	.controller('MainController', ['$scope',
		function($scope){
			$scope.questions={
				question:'This is the question for voters!',
				answers:[{answer:'Yes',count:0},
					{answer:'No',count:0}],
			};
			$scope.winner=" ";
			$scope.vote = function (answer){
				$scope.temp=answer;
				for(var i in $scope.questions.answers)
					if ($scope.questions.answers[i]==answer)
						$scope.questions.answers[i].count+=1;
				
				$scope.win();
			};
			$scope.win=function(){
				$scope.temp=$scope.questions.answers[0];
				for (var i in $scope.questions.answers)
				{
					if($scope.questions.answers[i].count>$scope.temp.count)
						$scope.winner=$scope.questions.answers[i].answer;
					else if ($scope.questions.answers[i].count==$scope.temp.count)
					    $scope.winner="Tie";
					else $scope.winner=$scope.temp.answer;
				};
			}
			
		}]);