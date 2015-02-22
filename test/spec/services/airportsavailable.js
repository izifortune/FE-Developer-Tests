'use strict';

describe('Service: airportsAvailable', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var airportsAvailable;
  beforeEach(inject(function (_airportsAvailable_) {
    airportsAvailable = _airportsAvailable_;
  }));

  it('should do something', function () {
    expect(!!airportsAvailable).toBe(true);
  });

});
