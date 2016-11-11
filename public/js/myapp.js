
var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');

myApp.config(function ($stateProvider) {
    var homeState = {
            name: 'home',
            url:  '/home',
            controller: 'dbController',
            templateUrl: 'public/partials/home.html'
    }

    var uploadState = {
            name: 'upload',
            url:  '/upload',
            controller: 'dbController',
            templateUrl: 'public/partials/upload.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(uploadState);

});

