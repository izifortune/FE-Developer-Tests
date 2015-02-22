'use strict';

describe('Service: validIata', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var validIata;
  beforeEach(inject(function (_validIata_) {
    validIata = _validIata_;
  }));

  it('should return true is you pass a string with 3 chars', function () {
    expect(validIata('AAA')).toBe(true);
  });

  it('should return false is you pass a string with 2 chars', function () {
    expect(validIata('AA')).toBe(false);
  });

  it('should return false is you pass a string with 4 chars', function () {
    expect(validIata('AAAA')).toBe(false);
  });

  it('should return false is you pass a number', function () {
    expect(validIata(12312)).toBe(false);
  });

  it('should return false is you pass an object', function () {
    expect(validIata({})).toBe(false);
  });

});
