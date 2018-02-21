'use strict';

$http({
  method: 'GET',
  url: 'localhost:8080/getComPorts'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });