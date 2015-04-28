var flow = angular.module('flowlabs', [
  'ngRoute'
]);

flow.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/bottle', {
      templateUrl: 'bottle/bottle.html'
    })
    .when('/contact', {
      templateUrl: 'contact/contact.html'
    })
    .when('/team', {
      templateUrl: 'team/team.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// flow.controller('NavController', function($scope){
//   $scope.message = 'We know the routing is working';
//   console.log('Got it working2')
// });




