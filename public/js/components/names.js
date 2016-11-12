/**
 * Created by miniMoimartz on 11/12/16.
 */
/*angular.module('myApp').component('home', {

    template: '<h3>{{$ctrl.greeting}} Names</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

    controller: function () {
        this.greeting = 'home';

        this.toggleGreeting = function () {
            this.greeting = (this.greeting == 'names') ? 'whats up' : 'names'
        }
    }
});*/


angular.module('myApp').component('namesComponent', {
/*    template:  '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

    controller: function() {
        this.greeting = 'Hello';

        this.toggleGreeting = function() {
            this.greeting = (this.greeting == 'Hello') ? 'Whats up' : 'Hello'
        }
    }*/

    templateUrl: 'public/partials/cat1.html'
});