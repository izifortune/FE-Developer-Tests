'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.validDate
 * @description
 * # validDate
 * Factory in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .factory('validDate', function () {
    return function(date) {
      return Date.parse(date);
    };
  });
