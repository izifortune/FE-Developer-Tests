'use strict';

/**
 * @ngdoc directive
 * @name cheapFlightFinderApp.directive:ryautocomplete
 * @description
 * Autocomplete directive for origins
 * contains an input form and a dropdown for picking
 */
angular.module('cheapFlightFinderApp')
  .directive('ryautocomplete', function ($timeout, airports, $window, airportsAvailable, $rootScope) {
    return {
      templateUrl: 'views/directives/ryautocomplete.html',
      restrict: 'E',
      transclude: true,
      scope: {
        origin: '=',
      },
      link: function postLink(scope, element) {
        var searchEventTimeout;

        var inputElement = element.find('input');
        var autocompleteList = angular.element(element[0].getElementsByClassName('autocomplete-list'));

        // Get ngModelController from the input
        var ctrl = angular.element(inputElement).data('$ngModelController');

        scope.$watch(function() {
          return ctrl.$viewValue;
        }, function(q) {
          if (searchEventTimeout) {
            $timeout.cancel(searchEventTimeout);
          }
          searchEventTimeout = $timeout(function() {
            if (!q || q.length < 2 || q.name) {
              scope.results = [];
              autocompleteList.addClass('hidden');
              return;
            }
            if (!scope.origin) {
              airports.query(q).then(function(res) {
                $rootScope.serverError = false;
                if (res && res.length) {
                  autocompleteList.removeClass('hidden');
                  console.log(res);
                  scope.results = res.slice(0, 6);

                  angular.element($window).one('click', closeOnClick);
                }
              });
            }
            else {
              airportsAvailable(scope.origin, q).then(function(res) {
                $rootScope.serverError = false;
                if (res && res.length) {
                  autocompleteList.removeClass('hidden');
                  scope.results = res.slice(0,6);
                  angular.element($window).one('click', closeOnClick);
                }
              });
            }
          }, 250);
        });

        // Close the autocomplete on click
        var closeOnClick = function() {
          autocompleteList.addClass('hidden');
          angular.element($window).unbind('click', closeOnClick);
        };

        scope.selectAirport = function(airport){
            console.log(scope.origin);
            ctrl.$setViewValue(airport);
            ctrl.$render();
            autocompleteList.addClass('hidden');
        };

        ctrl.$parsers.push(function(value) {
          console.log('parsers', value);
          // ctrl.$setValidity('noairport', !value.iataCode);
          // ctrl.$validate();
          return value;
        });

        ctrl.$validators.validAirport = function(modelValue) {
          if (modelValue && modelValue.iataCode) {
            return modelValue.iataCode.length === 3;
          }
          else {
            return false;
          }
        };

        ctrl.$formatters.push(function(value) {
          console.log('formatters', value);
          return value;
       });

        ctrl.$render = function() {
            if(!ctrl.$viewValue){
              ctrl.$viewValue = '';
            } else {
                inputElement.val(ctrl.$viewValue.name +' (' + ctrl.$viewValue.iataCode + ')');
            }
        };
      }
    };
  });
