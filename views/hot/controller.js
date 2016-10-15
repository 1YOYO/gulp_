;
(function(angular) {
    'use strict';
    var app = angular.module("app");
    app.controller('hotController', ['$scope', function($scope) {
        $scope.todoList ={
            name: "YOYO",
            age: "22"
        }
        // 接受广播数据
        // $scope.$on('dataListMf', function(event, data) {
        //     console.log(data);
        //     $scope.dataList = data;
        //     $scope.totalPage = Math.ceil(data.total/pageSize);
        //     $scope.$apply();
        // });

    }]);
})(angular);
