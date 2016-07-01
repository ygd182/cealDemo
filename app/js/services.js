'use strict';

/* Services */

var services = angular.module('services', []);

services.service('services', ['$http',
  function($http) {
    //var url = 'http://localhost:3100';
    var url = 'http://wells.herokuapp.com';
  	var getWells = function () {
  		return $http.get(url + '/wells');
      //return $http.get('wells/wells.json');
  	};

  	var getWellById = function(id) {
  		return $http.get(url + '/wells/'+ id);
      //return $http.get('wells/Pozo1.json');
  	};

  	return {
  			 getWells: getWells,
			   getWellById: getWellById
		};
  }]);