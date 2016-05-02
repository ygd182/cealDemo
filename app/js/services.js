'use strict';

/* Services */

var services = angular.module('services', []);

services.service('services', ['$http',
  function($http) {
    var url = 'http://localhost:3100';
  	var getWells = function () {
  		return $http.get(url + '/wells');
  	};

  	var getWellById = function(id) {
  		return $http.get(url + '/wells/'+ id);
  	};

  	return {
  			 getWells: getWells,
			   getWellById: getWellById
		};
  }]);