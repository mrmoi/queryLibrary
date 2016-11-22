/**
 * Created by moimartz on 11/8/16.
 */

myApp.controller('dbController',['$scope','$rootScope','$firebaseArray','FIREBASE_URL',
    function($scope, $rootScope, $firebaseArray, FIREBASE_URL) {

/* Data to store: QueryName, QueryCategory, Query description, Query, Date/Time uploaded */

// Get a reference to the database service - store queries
var queriesRef = new Firebase(FIREBASE_URL + '/queries');
var queriesInfo = $firebaseArray(queriesRef);
$scope.queries = queriesInfo;

// Store categories
var categoriesRef = new Firebase(FIREBASE_URL + '/categories');
var categoriesInfo = $firebaseArray(categoriesRef);
$scope.categories = categoriesInfo;

$scope.addCategory = function () {
   categoriesInfo.$add({
      category: $scope.catField,
      date:     Firebase.ServerValue.TIMESTAMP
   }).then(function () {
      $scope.catField = '';
   });
};

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





