'use strict';

/**
 * @ngdoc directive
 * @name cheapFlightFinderApp.directive:dateValidation
 * @description
 * # dateValidation
 */
angular.module('cheapFlightFinderApp')
  .directive('dateValidation', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        ngModel.$setPristine();
        ngModel.$setTouched();
        ngModel.$validators.validDate = function(modelValue) {
          if (modelValue === '') {
            return true;
          }
          else if (!Date.parse(modelValue)) {
            return false;
          }
          else {
            return true;
          }
          // else if (attrs.start) {
          //   var start = Date.parse(attrs.start);
          //   var end = Date.parse(modelValue);
          //   return start > end;
          // }
          // else if (attrs.start) {
          //   var start = Date.parse(attrs.start);
          //   var end = Date.parse(modelValue);
          //   return start > end;
          // }
        };
      }
    };
  });
