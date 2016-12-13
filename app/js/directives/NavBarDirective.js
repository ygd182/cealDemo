directives.directive('navbardirective', function () {
    return {
        restrict: 'A',
        templateUrl: 'partials/nav-bar-partial.html',
        controller: ['$scope', function($scope) {

          $scope.user = 'pepe';
          $scope.doLogout = function doLogout() {
            delete $localStorage.token;
          };

        }]
    };
});
