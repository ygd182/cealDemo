'use strict';

directives.directive('welldetailsdirective', function () {
    return {
        restrict: 'A',
        scope:{ wellid:'='},
        templateUrl: 'partials/well-detail-partial.html',
        controller: ['$scope', 'services', function($scope, services) {
          function onGetWellDetailSuccess(response){
            $scope.well = response.data;
          }

          function onGetWellDetailFailure(data, status, headers, config){
              console.log('error');
          }
          services.getWellById($scope.wellid).then(onGetWellDetailSuccess, onGetWellDetailFailure);

        }]
    };
});
