angular.module('flowlabs.home', [])

.controller('HomeController', function($scope, $location, $http) {
  $scope.email = {};

  $scope.send = function(userEmail){
    $http.post('/contacts', $scope.email)
      .success(function(data) {
        console.log(data);
        $scope.email.push(data);
      })
      .error(function(data, status, headers, config) {
        console.log('Initial send broken');
        console.log(data);
        console.log(status);
      });
  }; 
});