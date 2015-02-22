'use strict';

describe('Service: airports', function () {

  // load the service's module
  beforeEach(module('cheapFlightFinderApp'));

  // instantiate service
  var airports;
  beforeEach(inject(function (_airports_, $httpBackend) {
    airports = _airports_;
    $httpBackend.whenGET('/^\/mocks\//').passThrough();
  }));

  it('should return all the airports if no input provided', function(done) {
    airports.query().then(function(data) {
      expect(data).toBeDefined();
      expect(data[0].name).toBe('Aarhus');
      done();
    });
  });

  it('should filter airpots basend on name', function(done) {
    airports.query('Aarhus').then(function(data) {
      expect(data.length).toBe(1);
      expect(data[0].name).toBe('Aarhus');
      done();
    });
  });

  it('should filter airports basend on country', function(done) {
    airports.query('Morocco').then(function(data) {
      expect(data.length).toBeGreatherThan(0);
      expect(data[0].country.name).toBe('Morocco');
      done();
    });
  });

  it('should return airports based on their iataCode', function() {

  });
});
