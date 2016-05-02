controllers.controller('WellDetailCtrl', ['$scope', '$routeParams', 'services',
  function($scope, $routeParams, services) {

    function onGetWellDetailSuccess(response){
      $scope.well = response.data;
    }

    function onGetWellDetailFailure(data, status, headers, config){
        console.log('error');
    }
    function init(){
      var id = $routeParams.wellId;
      services.getWellById(id).then(onGetWellDetailSuccess, onGetWellDetailFailure);
    }
    init();
}]);