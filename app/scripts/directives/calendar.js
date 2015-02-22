'use strict';

/**
 * @ngdoc directive
 * @name cheapFlightFinderApp.directive:calendar
 * @description
 * A calendar wrapper for pickadate.js
 */
angular.module('cheapFlightFinderApp')
  .directive('calendar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
    };
  });
