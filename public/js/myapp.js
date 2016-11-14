var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


myApp.config(function ($stateProvider) {

    var states = [

        {
            name: 'home',
            url:  '/home',
            controller: 'dbController',
            //templateUrl: 'public/partials/home.html'
            component: 'namesComponent',
            templateUrl: 'public/partials/home.html'
            //views: 'results'
        },

        {
            name: 'upload',
            url:  '/upload',
            controller: 'dbController',
            templateUrl: 'public/partials/upload.html'
        },

        {
            name: 'about',
            url: '/about',
            controller: 'dbController',
            templateUrl: 'public/partials/about.html'
        },

        {
            name: 'history',
            url:  '/history',
            controller: 'dbController',
            //templateUrl: 'public/partials/home.html'
            component: 'historyComponent',
            templateUrl: 'public/partials/history.html'
        }


    ]

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

  /*
    var homeState = {
            name: 'home',
            url:  '/home',
            //controller: 'dbController',
            //templateUrl: 'public/partials/home.html'
            component: 'home'
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

    $stateProvider.state(homeState);
    $stateProvider.state(uploadState);
    //$stateProvider.state(namesState);
    //$stateProvider.state(sportsState);

*/



});

