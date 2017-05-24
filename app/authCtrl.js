app.controller('authCtrl', function ($scope, $route, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
	$scope.login.email = "samipnepal@gmail.com";
	$scope.login.password = "prasad";
    $scope.signup = {};
	$scope.login.profile = {};
	var result = {};
    $scope.doLogin = function (customer) {
		console.log(customer);
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('home');
            }
        });
    };
    $scope.signup = {email:'',password:'',name:'',phone:'',address:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('home');
			$route.reload();
        });
    }
	$scope.profile = {email:'',password:'',name:'',phone:'',address:''};
	$scope.getProfile = function () {
		Data.get('session').then(function (results) {
			if(results) {
				Data.post('userProfile', {
					customer: results
				}).then(function (results) {
					//Data.toast(results);
					$scope.login.profile = results;
					console.log(profile);
					if (results.status == "success") {
						$location.path('userprofile');
					}	
				});
			}
		});
    };
	/*$scope.listUser = function () {
		Data.getAll('listUser').then(function (results) {
			Data.toast(results);
			 if (results.status == "success") {
                $location.path('listuser');
            }
		})
	}*/
});