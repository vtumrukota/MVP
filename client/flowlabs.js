var flow = angular.module('flowlabs', [
  'ngRoute'
]);

flow.config(function($routeProvider){
  $routeProvider
    .when('/bottle', {
      templateUrl: 'bottle/bottle.html',
    })
    .when('/contact', {
      templateUrl: 'contact/contact.html'
    })
    .when('/team', {
      tempalteUrl: 'team/team.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

flow.controller('NavController', function($scope){
  $scope.message = 'We know the routing is working';
  console.log('Got it working2')
});




