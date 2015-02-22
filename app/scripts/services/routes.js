'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.routes
 * @description
 * # routes
 * Service in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .service('routes', function ($http, $rootScope, $log) {
    this.query = function(q) {
      if (q && typeof q === 'string' && q.length === 3) {
        // return $http.jsonp('https://ryanair-test.herokuapp.com/api/routes?callback=JSON_CALLBACK', {cache: true})
        return $http.jsonp('http://localhost:3000/routes?callback=JSON_CALLBACK', {cache: true})
        // return $http.get('/mocks/routes.json', {cache: true})
        .then(function(data) {
          $rootScope.serverError = false;
          if (data.data[q] && data.data[q].length) {
            return data.data[q];
          }
          else {
            return [];
          }
        }, function() {
          $log.error('routes.js query error', arguments);
          $rootScope.serverError = true;
        });
      }
      else {
        // throw an error here
        throw new Error('query is not a IATA');
      }
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
