/**
 * Created by moimartz on 11/8/16.
 */

myApp.controller('dbController',['$scope','$rootScope','$firebaseArray','FIREBASE_URL',
    function($scope, $rootScope, $firebaseArray, FIREBASE_URL) {

// Get a reference to the database service
var nameRef = new Firebase(FIREBASE_URL + '/name');
var nameInfo = $firebaseArray(nameRef);
$scope.names = nameInfo;

$scope.addName = function() {
   nameInfo.$add({
      name: $scope.nameField,
      date: Firebase.ServerValue.TIMESTAMP
   }).then(function () {
      $scope.nameField = '';
   });
};

}]);