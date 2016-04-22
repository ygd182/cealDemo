'use strict';

/* Services */

var services = angular.module('services', []);

services.service('services', ['$http',
  function($http) {
  	var getCars = function () {
  		return $http.get('cars/cars.json');
  	};

  	var getCarById = function(id) {
  		return $http.get('cars/'+id+'.json');
  	};

  	return {
  			 getCars: getCars,
			   getCarById: getCarById
		};
  }]);