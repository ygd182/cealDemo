controllers.controller('WellListCtrl', ['$scope', 'services','$window', '$timeout' ,
  function($scope, services, $window, $timeout) {
    function onGetWellsSuccess(response){
       $scope.wellsList = response.data;
       $scope.progress = -2;
       progress();
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

    function progress(){
      console.log($scope.progress);
        if($scope.progress < 100){
            $timeout(function(){
                $scope.progress += 1;
                progress();
            },200);
        }else {
          $scope.progress = 0;
          services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);
        }
    }


    var init = function(){
      var mins = 1;
      var intervalTime = 60 * mins * 1000;

      $scope.seletedArray = [];
      services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);
      $scope.progress = 0;
      
    }

    init();
}]);