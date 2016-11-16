var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


myApp.config(function ($stateProvider) {

    var states = [

        {
            name: 'view',
            url:  '/view',
            templateUrl: 'public/partials/view.html'
        },

        {
            name: 'upload',
            url: '/upload',
            component: 'historyComponent',
            templateUrl: 'public/partials/upload.html'
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

    ]

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

});

