angular.module('questionList')
	.controller('MainController', ['$scope', 'questionListService',
		function($scope, questionListService){
			$scope.view=false;
			$scope.questions=[];
			$scope.selectedItem=[];
			
//		   $scope.vote = function (answer){
// 				$scope.temp=answer;
// 				for(var i in $scope.questions.answers)
// 					if ($scope.questions.answers[i]==answer)
// 						$scope.questions.answers[i].count+=1;
				
// 				$scope.win();
// 			};
// 			$scope.win=function(){
// 				$scope.temp=$scope.questions.answers[0];
// 				for (var i in $scope.questions.answers)
// 				{
// 					if($scope.questions.answers[i].count>$scope.temp.count)
// 						$scope.winner=$scope.questions.answers[i].answer;
// 					else if ($scope.questions.answers[i].count==$scope.temp.count)
// 					    $scope.winner="Tie";
// 					else $scope.winner=$scope.temp.answer;
// 				};
// 			}
			$scope.close = function () {
      			this.view=false;
      			$scope.selectedItem=[];
      		};

			$scope.select = function(question) {
				this.view=true;
				$scope.selectedItem=question;
			};

			function fetch(){
				questionListService.fetch().success(function (data) {
					$scope.questions = data.item;
				});
			};
			fetch();			
		}]);