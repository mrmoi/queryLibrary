/**
 * Created by moimartz on 11/8/16.
 */

myApp.controller('dbController',['$scope','$rootScope',
    function($scope, $rootScope) {

// Get a reference to the database service
var database = firebase.database();

        $scope.user = firebase;

        $scope.addUser = function writeUserData(userId, name) {
            firebase.database().ref('users/' + userId).set({
                username: name
                //email: email,
                //profile_picture : imageUrl
            });
        }


}]);