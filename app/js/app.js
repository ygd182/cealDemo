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
    when('/createwell', {
        templateUrl: 'partials/well-form.html',
        controller: 'WellCreateCtrl'
      }).
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
    when('/wells', {
        templateUrl: 'partials/well-list.html',
        controller: 'WellListCtrl'
      }).
    when('/#', {
        templateUrl: 'partials/well-list.html',
        controller: 'WellListCtrl'
      }).
    when('/wells/:wellId', {
        templateUrl: 'partials/well-detail.html',
        controller: 'WellDetailCtrl'  
      }).
    otherwise({
        redirectTo: '/wells'
      });
  }]);