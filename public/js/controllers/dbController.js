/**
 * Created by moimartz on 11/8/16.
 */
myApp.controller('dbController',['$scope','$rootScope',
    function($scope, $rootScope) {

var firebase = require("firebase/app");

require("firebase/database");

// Get a reference to the database service
var database = firebase.database();

        var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        starCountRef.on('value', function(snapshot) {
            updateStarCount(postElement, snapshot.val());
        });
}]);