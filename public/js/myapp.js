/**
 * Created by moimartz on 11/7/16.
 */
var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'dbController'
    }).
    when('/upload', {
        templateUrl: 'partials/upload.html',
        controller: 'dbController'
    }).
    when('/other', {
        templateUrl: 'partials/other.html',
        controller: 'dbController'
    }).
    otherwise ({
        redirectTo: '/home'
    });
}]);
