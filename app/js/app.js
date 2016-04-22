'use strict';

/* App Module */

var carApp = angular.module('carApp', [
  'ngRoute',
  //'animations',

  'controllers',
  'directives',
  //'phonecatFilters',
  'services'
]);

carApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/wells', {
        templateUrl: 'partials/car-list.html',
        controller: 'WellListCtrl'
      }).
      when('/wells/:wellId', {
        templateUrl: 'partials/car-detail.html',
        controller: 'WellDetailCtrl'
      }).
      when('/wells/:wellId1/:wellId2', {
        templateUrl: 'partials/car-detail.html',
        controller: 'WellDetailCtrl'
      }).
      when('/wells/:wellId1/:wellId2/:wellId3', {
        templateUrl: 'partials/car-detail.html',
        controller: 'WellDetailCtrl'
      }).
      otherwise({
        redirectTo: '/wells'
      });
  }]);