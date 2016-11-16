/**
 * Created by moimartz on 11/8/16.
 */

myApp.controller('dbController',['$scope','$rootScope','$firebaseArray','FIREBASE_URL',
    function($scope, $rootScope, $firebaseArray, FIREBASE_URL) {

/* Data to store: QueryName, QueryCategory, Query description, Query, Date/Time uploaded */

// Get a reference to the database service
var queriesRef = new Firebase(FIREBASE_URL + '/queries');
var queriesInfo = $firebaseArray(queriesRef);
$scope.queries = queriesInfo;


$scope.addQuery = function() {
   queriesInfo.$add({
      name:          $scope.nameField,
      category:      $scope.categoryField,
      description:   $scope.descriptionField,
      query:         $scope.queryField,
      date: Firebase.ServerValue.TIMESTAMP
   }).then(function () {
      $scope.nameField = '';
      $scope.categoryField = '';
      $scope.descriptionField = '';
      $scope.queryField = '';

   });
};


}]);





