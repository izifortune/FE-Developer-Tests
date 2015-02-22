'use strict';

/**
 * @ngdoc overview
 * @name cheapFlightFinderApp
 * @description
 * # cheapFlightFinderApp
 *
 * Main module of the application.
 */
angular
  .module('cheapFlightFinderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    '720kb.datepicker',
    'angular-loading-bar'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
    .state('main', {
      url: '/',
      controller: 'MainCtrl',
      controllerAs: 'main',
      templateUrl: 'views/main.html'
    })
    .state('main.results', {
      url: ':origin/:destination/:startDate/:endDate',
      controller: 'ResultsCtrl',
      controllerAs: 'results',
      templateUrl: 'views/results.html',
      resolve: {
        searchResults: function($stateParams, searchFlights, validIata, validDate) {
          // TODO Check valid IATA origin and destination
          // TODO Check valid date
          if (!validIata($stateParams.origin) && !validIata($stateParams.destination) &&
            !validDate($stateParams.startDate) && !(validDate($stateParams.endDate))) {
            return {};
          }
          else {
            return searchFlights.query($stateParams)
            .then(function(res) {
              return res;
            });
          }
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      console.log(toState);
      $rootScope.currentState = toState.name;
    });
  });
