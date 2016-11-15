var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


myApp.config(function ($stateProvider) {

    var states = [

        {
            name: 'view',
            url:  '/view',
            //controller: 'dbController',
            //templateUrl: 'public/partials/home.html'
            //component: 'namesComponent',
            templateUrl: 'public/partials/view.html'
            //views: 'results'
        },

        {
            name: 'upload',
            url: '/upload',
            templateUrl: 'public/partials/upload.html',
            component: 'historyComponent'

        },

        {
            name: 'view.cat1',
            url: '/view.cat1',
            templateUrl: 'public/partials/view.cat1.html'
        },

        {
            name: 'view.cat2',
            url: '/view.cat2',
            templateUrl: 'public/partials/view.cat2.html'
        },

        {
            name: 'view.cat3',
            url: '/view.cat3',
            templateUrl: 'public/partials/view.cat3.html'
        }



        /*,

        {
            name: 'home.two',
            url: 'home.two',
            templateUrl: 'home.two.html'

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
        }*/


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

