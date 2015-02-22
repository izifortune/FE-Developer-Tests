'use strict';

describe('Service: validDate', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var validDate;
  beforeEach(inject(function (_validDate_) {
    validDate = _validDate_;
  }));

  it('should return false if input is random string', function () {
    expect(validDate('asdadsdas')).toBeNaN();
  });

  it('should return true if input can be parse as date', function () {
    expect(new Date(validDate('2015-02-22'))).toEqual(new Date('2015-02-22'));
  });

});
