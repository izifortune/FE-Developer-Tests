'use strict';

describe('Directive: dateValidation', function () {

  // load the directive's module
  beforeEach(module('cheapFlightFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-validation></date-validation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dateValidation directive');
  }));
});
