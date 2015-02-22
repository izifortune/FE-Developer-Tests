'use strict';

/**
 * @ngdoc service
 * @name cheapFlightFinderApp.airports
 * @description
 * # airports
 * Service in the cheapFlightFinderApp.
 */
angular.module('cheapFlightFinderApp')
  .service('airports', function ($http, $rootScope, $log) {
    function queryCheck(q, el) {
      if (el.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
        return true;
      }
      else if (el.country.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
        return true;
      }
      else {
        return false;
      }
    }

    this.query = function(q) {
      // Should be a server side autocomplete, but anyway i cache the http request
      // return $http.jsonp('https://ryanair-test.herokuapp.com/api/airports?callback=JSON_CALLBACK')
      return $http.jsonp('http://localhost:3000/airports?callback=JSON_CALLBACK', {cache: true})
      // return $http.get('/mocks/airports.json')
      .then(function(data) {
        $rootScope.serverError = false;
        if (typeof q === 'string') {
          var res = data.data.filter(function(el) {
            return queryCheck(q, el);
          });
          console.log(res.length);
          return res;
        }
        else {
          return [];
        }
      }, function() {
        $log.error('airports.js query error', arguments);
        $rootScope.serverError = true;
      });
    };

    /**
     * Return all the airports that matches the iataCodes
     * @param  {[type]} iataCodes [description]
     * @return {[type]}           [description]
     */
    this.queryFromIatas = function(iataCodes, query) {
      // return $http.jsonp('https://ryanair-test.herokuapp.com/api/airports', {cache: true})
      return $http.get('/mocks/airports.json', {cache: true})
      .then(function(data) {
        $rootScope.serverError = false;
        var res = data.data.filter(function(el) {
          return (iataCodes.indexOf(el.iataCode) !== -1 && queryCheck(query, el));
        });
        return res;
      }, function() {
        $log.error('airports.js queryFromIatas error', arguments);
        $rootScope.serverError = true;
      });
    };
  });
