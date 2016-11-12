/**
 * Created by miniMoimartz on 11/12/16.
 */
angular.module('myApp').component('historyComponent', {
    template:  '<div class="container-fluid">' +
               '<div class="row">' +
               '<div class="col-md-6 col-md-offset-3">' +
               '<ul class="nav navbar-nav navbar-inverse">' +
               '<li><a ng-click="$ctrl.activateNames()">Names</a></li>' +
               '<li><a ng-href="#" ng-click="$ctrl.activateSports()">Sports</a></li>' +
               //'<li><a>Hobbies</a></li>' +
               //'<li><a>Countries</a></li>' +
               '</ul>' +
               '</div>' +
               '</div>' +


               '<div class="row">' +
               '<div class="col-md-6 col-md-offset-3">' +
               '<div>{{ $ctrl.names }}</div>' +
               '<div> {{ $ctrl.sports }} </div>' +


               '</div>',

    controller: function () {
            this.names = 'Moises';

            this.activateNames = function () {
                this.names = (this.names = 'Moises') ? 'Luis' : 'Moises'
            }


    }
});





