
var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


angular.module('myApp').component('names', {

    template: '<h3>{{$ctrl.greeting}} Names</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

    controller: function () {
        this.greeting = 'names';

        this.toggleGreeting = function () {
            this.greeting = (this.greeting == 'names') ? 'whats up' : 'names'
        }
    }
});


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

    var names = {
        name: 'names',
        url:  '/names',
        //controller: 'dbController',
        //templateUrl: 'public/partials/upload.html'
        component: 'names'
    }
/*
    var namesState = {
        name: 'names',
        url:  '/home',
        //controller: 'dbController',
        //templateUrl: 'public/partials/upload.html'
        template: '<h2>This is names state</h2>'
    }

    var sportsState = {
        name: 'sports',
        url:  '/home',
        //controller: 'dbController',
        //templateUrl: 'public/partials/upload.html'
        template: '<h2>This is sports state</h2>'
    }
*/
    $stateProvider.state(homeState);
    $stateProvider.state(uploadState);
    //$stateProvider.state(namesState);
    //$stateProvider.state(sportsState);





});

