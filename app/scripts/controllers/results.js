'use strict';

/**
 * @ngdoc function
 * @name cheapFlightFinderApp.controller:ResultsCtrl
 * @description
 * Controller of the cheapFlightFinderApp
 */
angular.module('cheapFlightFinderApp')
  .controller('ResultsCtrl', function (searchResults, $stateParams) {
    this.flights = searchResults.flights;
    this.request = $stateParams;
  });
