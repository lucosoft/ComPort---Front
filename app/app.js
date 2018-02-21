'use strict';

// Define the `comportApp` module
var comportApp = angular.module('comportApp', []);

// Define the `comportListController` controller on the `comportApp` module
comportApp.controller('comportListController', function comportListController($scope, $http) {
	// Simple GET request example:

$scope.comports = [];
$scope.comports = null;
/*  $scope.comports = [
    {
      name: 'COM1'
    }, {
      name: 'COM2'
    }, {
      name: 'COM3'
    }
  ];
*/

  $http({
  method: 'GET',
    url: 'http://localhost:8080/getComPort'
}).then(function successCallback(response) {
  $scope.comports = response.data;
  }, function errorCallback(response) {
    alert('Error');
  });



});
