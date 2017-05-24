app.controller('authCtrl', function ($scope, $route, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
	$scope.login.email = "samipnepal@gmail.com";
	$scope.login.password = "prasad";
    $scope.signup = {};
    $scope.doLogin = function (customer) {
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
	$scope.getProfile = function () {
		Data.get('session').then(function (results) {
			if(results) {
				Data.post('userProfile', {
					customer: results
				}).then(function (results) {
				    console.log(results);
                    $rootScope.profile = results;
					if (results.status == "success") {
						$location.path('userprofile');
					}
				});
			}
		});
    };
});