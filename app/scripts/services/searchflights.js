'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.searchFlights
 * @description
 * # searchFlights
 * Service in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .service('searchFlights', function ($http, $log) {
    this.query = function(params) {
      return $http.jsonp('http://localhost:3000/cheap-flights/' +
        params.origin + '/' + params.destination + '/' + params.startDate + '/' +
        params.endDate + '/500?callback=JSON_CALLBACK')
      .then(function(data) {
        if (data.data && data.data.flights) {
          angular.forEach(data.data.flights, function(el) {
            if (el.outbound && el.outbound.price) {
              el.outbound.price.value = parseFloat(el.outbound.price.value);
            }
          });
        }
        return data.data;
      }, function() {
        $log.error('searchFlights.js error: ', arguments);
        return {};
      });
    };
  });
