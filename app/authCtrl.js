app.controller('authCtrl', function ($scope, $route, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
	$scope.login.email = "samipnepal@gmail.com";
	$scope.login.password = "nepal1";
    $scope.signup = {};
    $rootScope.isAdmin = false;
    $scope.doLogin = function (customer) {
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                if(results.email = 'samipnepal@gmail.com'){
                    $rootScope.isAdmin=true;
                }
                $location.path('home');
            }
        });
    };
    $scope.signup = {email:'samipnepal@gmail.com',password:'prasad',fname:'Yadab',lname:'Nepal',state:'Bagmati',gender:'Male',phone:'8105682996',address:'Thamel, Chhetrapati',city:'Kathmandu'};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('home');
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
});