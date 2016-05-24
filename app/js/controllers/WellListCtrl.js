controllers.controller('WellListCtrl', ['$scope', 'services','$window' ,
  function($scope, services, $window) {
    function onGetWellsSuccess(response){
       $scope.wellsList = response.data;
    }

    function onGetPhonesFailure(){
       console.log('error');
    }

    function createUrlParams (carIdArray) {
      var carParams= '';
      for (var i =0; i < carIdArray.length ; i++) {
        carParams= carParams +'/'+ carIdArray[i];
      }
      return carParams;
    }


    var init = function(){
      $scope.seletedArray = [];

      services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);
      
    }

    init();
}]);