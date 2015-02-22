'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.validIata
 * @description
 * # validIata
 * Factory in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .factory('validIata', function () {
    return function(iata) {
      if (typeof iata !== 'string' || iata.length !== 3) {
        return false;
      }
      else {
        return true;
      }
    };
  });
