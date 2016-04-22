controllers.controller('WellDetailCtrl', ['$scope', '$routeParams', 'services',
  function($scope, $routeParams, services) {


    function init(){
      $scope.carIdArray = [];
      for (var property in $routeParams) {
          if ($routeParams.hasOwnProperty(property)) {

              $scope.carIdArray.push($routeParams[property])
          }
      }
    }
    init();
}]);