'use strict';

describe('Service: validDate', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var validDate;
  beforeEach(inject(function (_validDate_) {
    validDate = _validDate_;
  }));

  it('should do something', function () {
    expect(!!validDate).toBe(true);
  });

});
