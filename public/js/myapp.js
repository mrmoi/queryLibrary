
var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');

myApp.config(function ($stateProvider) {
    var homeState = {
            name: 'home',
            url:  '/home',
            //template: '<h3>hello world!</h3>'
            templateUrl: 'public/partials/home.html'
    }

    var uploadState = {
            name: 'upload',
            url:  '/upload',
            //template: '<h3>Its the UI-Router hello world app!</h3>'
            templateUrl: 'public/partials/upload.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(uploadState);

});


/*
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl:'public/partials/home.html',
            controller: 'dbController'
        })
        .state('upload', {
            url:'/upload',
            templateUrl:'public/partials/upload.html',
            controller:'dbController'
        })
}])
*/
/*
myApp.config(['$stateProvider', function($routeProvider) {
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

*/