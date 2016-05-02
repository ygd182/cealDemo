'use strict';

/* App Module */

var wellApp = angular.module('wellApp', [
  'ngRoute',
  //'animations',

  'controllers',
  'directives',
  //'phonecatFilters',
  'services'
]);

wellApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/wells', {
        templateUrl: 'partials/well-list.html',
        controller: 'WellListCtrl'
      }).
      when('/wells/:wellId', {
        templateUrl: 'partials/well-detail.html',
        controller: 'WellDetailCtrl'
      }).
      when('/wells/:wellId1/:wellId2', {
        templateUrl: 'partials/well-detail.html',
        controller: 'WellDetailCtrl'
      }).
      when('/wells/:wellId1/:wellId2/:wellId3', {
        templateUrl: 'partials/well-detail.html',
        controller: 'WellDetailCtrl'
      }).
      otherwise({
        redirectTo: '/wells'
      });
  }]);