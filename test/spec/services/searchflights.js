'use strict';

describe('Service: searchFlights', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var searchFlights;
  beforeEach(inject(function (_searchFlights_) {
    searchFlights = _searchFlights_;
  }));

  it('should do something', function () {
    expect(!!searchFlights).toBe(true);
  });

});
