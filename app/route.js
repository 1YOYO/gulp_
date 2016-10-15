/*
* @Author: 虚竹
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   YOYO
* @Last Modified time: 2016-10-15 09:34:46
*/

;(function(angular) {
	'use strict';
	var app = angular.module("app");
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('', {
			templateUrl: '',
			controller: ''
		}).otherwise({
			redirectTo: ''
		});
	}]);
})(angular);