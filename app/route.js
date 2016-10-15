

;(function(angular) {
	'use strict';
	var app = angular.module("app");
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/hot', {
			templateUrl: '../views/hot/view.html',
			controller: 'hotController'
		}).otherwise({
			redirectTo: '/'
		});
	}]);
})(angular);