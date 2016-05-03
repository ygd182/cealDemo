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
      var var_location = new google.maps.LatLng(45.430817,12.331516);

      var var_mapoptions = {
      center: var_location,
      zoom: 14
      };

      var var_marker = new google.maps.Marker({
      position: var_location,
        map: var_map,
      title:"Venice"});

      var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

      var_marker.setMap(var_map); 

    }
    function init(){
      var id = $routeParams.wellId;
      services.getWellById(id).then(onGetWellDetailSuccess, onGetWellDetailFailure);
    }
    init();
}]);