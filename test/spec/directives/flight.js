'use strict';

describe('Directive: flight', function () {

  // load the directive's module
  beforeEach(module('cheapFlightFinderApp'));
  beforeEach(module('views/directives/flight.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should replace the element tag', inject(function ($compile) {
    element = angular.element('<flight data-flight="testing"></flight>');
    element = $compile(element)(scope);
    expect(element).toBe('');
  }));
});
