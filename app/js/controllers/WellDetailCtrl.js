controllers.controller('WellDetailCtrl', ['$scope', '$routeParams', 'services',
  function($scope, $routeParams, services) {

    function onGetWellDetailSuccess(response){
      $scope.well = response.data;
      init_map();
    }

    function onGetWellDetailFailure(data, status, headers, config){
        console.log('error');
    }

    function init_map() {
      var location = new google.maps.LatLng($scope.well.address.x, $scope.well.address.y);
      var var_mapoptions = {
          center: location,
          zoom: 17
        };

      var var_marker = new google.maps.Marker({
        position: location,
        map: var_map,
        title:"Direccion"
      });

      var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);

      var_marker.setMap(var_map); 
    }

    function init(){
      var id = $routeParams.wellId;
      services.getWellById(id).then(onGetWellDetailSuccess, onGetWellDetailFailure);
    }

    init();
}]);