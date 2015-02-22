'use strict';

describe('Directive: dateValidation', function () {

  // load the directive's module
  beforeEach(module('cheapFlightFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should raise error if no ng-model provided', inject(function ($compile) {
    element = angular.element('<input date-validation>');
    expect(function() {
      element = $compile(element)(scope);
    }).toThrow();
  }));

  it('should be valid model if theres no data', inject(function($compile) {
    element = angular.element('<form name="form"><input name="start" date-validation ng-model="date"></form>');
    element = $compile(element)(scope);
    expect(scope.form.$valid).toBe(true);
  }));

  it('should be invalid model if ng-model its not a Date', inject(function($compile) {
    element = angular.element('<form name="form"><input name="start" date-validation ng-model="date"></form>');
    element = $compile(element)(scope);
    scope.date = 'asd';
    scope.$digest();
    expect(scope.form.$valid).toBe(false);
  }));

  it('should be invalid model if ng-model its not a Date', inject(function($compile) {
    element = angular.element('<form name="form"><input name="start" date-validation ng-model="date"></form>');
    element = $compile(element)(scope);
    scope.date = '2015-02-22';
    scope.$digest();
    expect(scope.form.$valid).toBe(true);
  }));
});
