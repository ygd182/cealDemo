'use strict';

directives.directive('cardetailsdirective', function () {
    return {
        restrict: 'A',
        scope:{ carid:'='},
        templateUrl: 'partials/car-detail-partial.html',
        controller: ['$scope', 'services', function($scope, services) {
          function onGetPhoneDetailSuccess(response){
            $scope.car = response.data;
          }

          function onGetPhoneDetailFailure(data, status, headers, config){
              console.log('error');
          }
          services.getCarById($scope.carid).then(onGetPhoneDetailSuccess, onGetPhoneDetailFailure);

        }]
    };
});
