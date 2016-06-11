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
      var mins = 1;
      var intervalTime = 60 * mins * 1000;
      $scope.seletedArray = [];
      services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);

      setInterval(function runInterval(){ 
        services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);
      }, intervalTime);
      
    }

    init();
}]);