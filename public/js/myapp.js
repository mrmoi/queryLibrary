var myApp = angular.module('myApp', ['ui.router','firebase'])
    .constant('FIREBASE_URL', 'https://myqueries-3aa66.firebaseio.com/');


myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('view');

    var states = [

        {
            name: 'view',
            url:  '/view',
            templateUrl: 'public/partials/view.html',
            controller: 'dbController'
        },

        {
            name: 'upload',
            url: '/upload',
            templateUrl: 'public/partials/upload.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat1',
            url: '/view.cat1',
            templateUrl: 'public/partials/view.cat1.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat2',
            url: '/view.cat2',
            templateUrl: 'public/partials/view.cat2.html',
            controller: 'dbController'
        },

        {
            name: 'view.cat3',
            url: '/view.cat3',
            templateUrl: 'public/partials/view.cat3.html',
            controller: 'dbController'
        }

    ]

    states.forEach(function (state) {
        $stateProvider.state(state);
    });


    /* FILTER FUNCTION */
    myApp.filter('searchFor', function(){

        return function(arr, searchString){
            if(!searchString){
                return arr;

            }
            var result = [];
            searchString = searchString.toLowerCase();

            angular.forEach(arr, function(item){
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    result.push(item);
                }
            });

            return result;
        };

    });

});

