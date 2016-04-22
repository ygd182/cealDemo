controllers.controller('WellListCtrl', ['$scope', 'services','$window' ,
  function($scope, services, $window) {
    function onGetPhonesSuccess(response){
       $scope.carsList = response.data;
       for (var i = $scope.carsList.length - 1; i >= 0; i--) {
         $scope.seletedArray.push(false);
       };
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

      services.getCars().then(onGetPhonesSuccess, onGetPhonesFailure);

      $scope.compareCars = function compareCars (){
        var carIdArray = [];
        for (var i =0; i < $scope.seletedArray.length ; i++) {
           if($scope.seletedArray[i]){
            carIdArray.push ( $scope.carsList[i].id);
           }
         }
         if(carIdArray.length > 1 && carIdArray.length < 4){
            var compareURLParams = createUrlParams (carIdArray);
            $window.location.href = '/app/#/cars' + compareURLParams;
         }else{
          if(carIdArray.length < 1){
            alert('You need to select at least 2 cars to compare');
          }else{
            alert('You have selected more than 3 cars to compare');
          }
         }
      };
    }

    init();
}]);