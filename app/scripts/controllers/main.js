'use strict';

/**
 * @ngdoc function
 * @name cheapFlightFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheapFlightFinderApp
 */
angular.module('cheapFlightFinderApp')
  .controller('MainCtrl', function ($state) {

    this.today = new Date();

    this.submitted = false;

    this.search = function(valid) {
      this.submitted = true;
      if (valid) {
        $state.go('main.results', {
          startDate: this.startDate,
          endDate: this.endDate,
          origin: this.origin.iataCode,
          destination: this.destination.iataCode
        });
      }
      // else {
      //   $state.go('main.results', {
      //     startDate: 'asdasd',
      //     endDate: 'asdasd',
      //     origin: 'asdasdsa',
      //     destination: 'asdsadasd'
      //   });
      // }
    };
  });
