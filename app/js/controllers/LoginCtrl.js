controllers.controller('LoginCtrl', ['$scope', '$routeParams', 'services',
  function($scope, $routeParams, services) {

  	function onLoginSuccess(data) {
  		console.log(data);
  	}

  	function onLoginFailure(err) {
  		console.log(err);
  	}

    function init(){
    	$scope.formData = {username:'', password:''};

		$scope.doSubmit = function doSubmit() {
			console.log('submit');
			services.login($scope.formData).then(onLoginSuccess, onLoginFailure);
		};
    }

    init();
}]);
