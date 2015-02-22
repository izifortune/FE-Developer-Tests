'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.airportsAvailable
 * @description
 * # airportsAvailable
 * Factory in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .factory('airportsAvailable', function (airports, routes) {
    return function(originAirport, query) {
      if (!originAirport || !originAirport.iataCode) {
        // Error here
        console.log('error');
      }
      return routes.query(originAirport.iataCode)
      .then(function(iatas) {
        console.log('origin airport', iatas);
        return airports.queryFromIatas(iatas, query);
      })
      .then(function(airportList) {
        console.log('airport list' ,airportList);
          return airportList;
      });
    };
  });
