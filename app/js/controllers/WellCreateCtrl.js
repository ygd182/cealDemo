controllers.controller('WellCreateCtrl', ['$scope', '$routeParams', 'services',
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
      console.log(location);
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
      $scope.well = {
        "id": "",
        "info": "",
        "address": {
            "x":-36.776098, 
            "y":-59.868441,
            "street": "",
            "number": 0
          },
        "logs": []
      };
      /*var id = $routeParams.wellId;
      services.getWellById(id).then(onGetWellDetailSuccess, onGetWellDetailFailure);*/
    }

    init();
}]);