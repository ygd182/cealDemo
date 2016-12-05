'use strict';

/* Services */

var services = angular.module('services', []);

services.service('services', ['$http',
  function($http) {
    var apiUrl = 'http://localhost:3100';
    //var apiUrl = 'https://wells.herokuapp.com';
  	var getWells = function getWells() {
  		return $http.get(apiUrl + '/wells');
      //return $http.get('wells/wells.json');
  	};

  	var getWellById = function getWellById(id) {
  		return $http.get(apiUrl + '/wells/'+ id);
      //return $http.get('wells/Pozo1.json');
  	};

    var login = function login(data) {
        return $http.post(apiUrl + '/users/login', data);
    }

  	return {
  			 getWells: getWells,
			   getWellById: getWellById,
         login: login
		};
  }]);