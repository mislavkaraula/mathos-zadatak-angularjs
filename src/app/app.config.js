angular.module('questionList')
		.config(['$routeProvider',
			function ($routeProvider) {
			 
			$routeProvider
				.when('/', { 
					templateUrl: 'app/question-list/question-list.html', 
					title: 'Question List',
					controller: 'MainController',
					controllerAs: 'main' 
				})
				.when('/question/:id', { 
					templateUrl: 'app/question/question.html', 
					title: 'Question', 
					controller: 'QuestionController'
				})				
				.otherwise({ redirectTo: '/' });
			
		}]);