'use strict';

describe('Directive: ryautocomplete', function () {

  // load the directive's module
  beforeEach(module('views/directives/ryautocomplete.html'));
  beforeEach(module('cheapFlightFinderApp'));

  var element,
    scope;


  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should keep the input inside (transclusion)', inject(function ($compile) {
    element = angular.element('<ryautocomplete><input ng-model="testing"></ryautocomplete>');
    element = $compile(element)(scope);
    expect(element.find('input')[0]).toBeDefined();
  }));
});
