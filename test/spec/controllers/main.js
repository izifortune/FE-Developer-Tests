'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cheapFlightFinderApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $state) {
    MainCtrl = $controller('MainCtrl', {
      $state: $state
    });
  }));

  it('should have a search method', function () {
    expect(MainCtrl.search).toBeDefined();
  });

  it('should hold the today value for datepicker', function () {
    expect(MainCtrl.today).toEqual(new Date());
  });
});
