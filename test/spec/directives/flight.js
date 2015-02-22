'use strict';

describe('Directive: flight', function () {

  // load the directive's module
  beforeEach(module('cheapFlightFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flight></flight>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flight directive');
  }));
});
