'use strict';

describe('Service: validIata', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var validIata;
  beforeEach(inject(function (_validIata_) {
    validIata = _validIata_;
  }));

  it('should do something', function () {
    expect(!!validIata).toBe(true);
  });

});
