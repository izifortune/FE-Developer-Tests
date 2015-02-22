'use strict';

describe('Service: routes', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var routes;
  beforeEach(inject(function (_routes_) {
    routes = _routes_;
  }));

  it('should return the routes for a given IATA', function() {

  });

  it('should return empty if the IATA submitted is not valid', function() {

  });

  it('should return empty if the IATA got no routes', function() {

  });
});
