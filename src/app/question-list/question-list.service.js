(function (angular) {
	'use strict';
	angular.module('questionList')
		.service('questionListService',['$http',
			function ($http) {
				return {
					fetch: function () {
						return $http.get('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/');
					},
					get: function (id) {
   						return $http.get('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/' + id);
					},
					post: function(data) {
						var req = {
						 method: 'POST',
						 url: 'http://api.baasic.com/beta/mathos-ng/resources/pollquestion/',
						 data: data
						};
						return $http(req);	
					},
					put: function(id, data) {
						var req = {
						 method: 'PUT',
						 url: 'http://api.baasic.com/beta/mathos-ng/resources/pollquestion/' + id,
						 data: data
						};
						return $http(req);
					}
				};
			}]);
})(angular);