angular.module('flowlabs', ['ngRoute','flowlabs.home'])

.config(function($routeProvider){
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






