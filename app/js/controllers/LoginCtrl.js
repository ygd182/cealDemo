controllers.controller('LoginCtrl', ['$scope', '$routeParams', 'services', '$localStorage',
  function($scope, $routeParams, services,$localStorage) {

  	function onLoginSuccess(data) {
  		$localStorage.token = data.data.token;
  		//delete $localStorage.token; to logout
  	}

  	function onLoginFailure(err) {
  		console.log(err);
  	}

    function init(){
    	$scope.formData = {username:'', password:''};

		$scope.doSubmit = function doSubmit() {
			services.login($scope.formData).then(onLoginSuccess, onLoginFailure);
		};
    }

    init();
}]);
