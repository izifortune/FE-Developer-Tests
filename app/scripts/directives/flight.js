'use strict';

/**
 * @ngdoc directive
 * @name cheapFlightFinderApp.directive:flight
 * @description
 * # flight
 */
angular.module('cheapFlightFinderApp')
  .directive('flight', function () {
    return {
      templateUrl: 'views/directives/flight.html',
      restrict: 'E',
      replace: true,
      scope: {
        flight: '='
      }
      // link: function postLink(scope, element, attrs) {
      // }
    };
  });
