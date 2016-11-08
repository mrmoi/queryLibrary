
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'public/partials/home.html',
        controller: 'dbController'
    }).
    when('/upload', {
        templateUrl: 'public/partials/upload.html',
        controller: 'dbController'
    }).
    when('/other', {
        templateUrl: 'public/partials/other.html',
        controller: 'dbController'
    }).
    otherwise ({
        redirectTo: '/home'
    });
}]);
