
;(function(angular) {
	'use strict';
	var app = angular.module("app", ['ngRoute']);

	app.controller('appController', ['$scope', function($scope){
		$scope.appdata={
			name: "apppages"
		}
	}]);
})(angular);
