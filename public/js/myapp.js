var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('view');

    var states = [

        {
            name: 'view',
            url:  '/view',
            templateUrl: 'partials/view.html',
            controller: 'dbController'
        },

        {
            name: 'upload',
            url: '/upload',
            templateUrl: 'partials/upload.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat1',
            url: '/view.cat1',
            templateUrl: 'partials/view.cat1.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat2',
            url: '/view.cat2',
            templateUrl: 'partials/view.cat2.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat3',
            url: '/view.cat3',
            templateUrl: 'partials/view.cat3.html',
            controller: 'dbController'
        }

    ]

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

});

