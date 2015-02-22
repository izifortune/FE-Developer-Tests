'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('cheapFlightFinderApp'));

  var ResultsCtrl, st;

  var searchResults = {
    flights: []
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $stateParams) {
    st = $stateParams;
    ResultsCtrl = $controller('ResultsCtrl', {$stateParams: $stateParams, searchResults: searchResults});
  }));

  it('Should have the flights from the search', function () {
    expect(ResultsCtrl.flights).toEqual(searchResults.flights);
  });

  it('Should have the stateParams as request', function () {
    expect(ResultsCtrl.request).toEqual(st);
  });
});
