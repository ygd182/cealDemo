controllers.controller('WellListCtrl', ['$scope', 'services','$window', '$timeout' ,
  function($scope, services, $window, $timeout) {
    var mins = 1;
    var intervalTime = 60 * mins * 1000;

    function onGetWellsSuccess(response){
       $scope.wellsList = response.data;
       reloadWells();
    }

    function onGetPhonesFailure(){
       console.log('error');
       reloadWells();
    }


    function progress(){
      console.log($scope.progress);
        if($scope.progress < 100){
            $timeout(function(){
                $scope.progress += 1;
                progress();
            },1000);
        }else {
          $scope.progress = 0;
          services.getWells().then(onGetWellsSuccess, onGetWellsFailure);
        }
    }
    
    function reloadWells(){
      $timeout(function(){
          services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);
      },intervalTime);
    }


    function stringTimeToInt(stringTime) {
        return parseInt(stringTime.replace(/:/g, ''));
    }

    function existsRuleByCheckTime(rules, currentCheckTime) {
        var index = -1;
        index = rules.findIndex(function findByTime(rule) {
            console.log((stringTimeToInt(rule.start) <= currentCheckTime && stringTimeToInt(rule.end) >= currentCheckTime));
            return (stringTimeToInt(rule.start) <= currentCheckTime && stringTimeToInt(rule.end) >= currentCheckTime);
        });
        return (-1!==index);
    }

    var init = function(){
      services.getWells().then(onGetWellsSuccess, onGetPhonesFailure);

      $scope.isActive = function isActive(hour, well) {
        hour = parseInt(hour + '00');
        console.log(hour);

        return existsRuleByCheckTime(well.rules, hour);
      };
    }

    init();
}]);