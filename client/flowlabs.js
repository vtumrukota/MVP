var flow = angular.module('flowlabs', [
  'ngRoute'
  // 'flowlabs.home'
]);

flow.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
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
      redirectTo: '/home'
    });
});

// flow.controller('NavController', function($scope){
//   $scope.message = 'We know the routing is working';
//   console.log('Got it working2')
// });




