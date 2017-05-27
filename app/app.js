var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ui.bootstrap']);

app.config(['$routeProvider',
  function ($routeProvider) {
			$routeProvider
				.when('/login', {
					title: 'Login',
					templateUrl: 'directives/login/login.html',
					controller: 'authCtrl'
				})
				.when('/signup', {
					title: 'Signup',
					templateUrl: 'directives/signup/signup.html',
					controller: 'authCtrl'
				})
			.when('/listuser', {
				title: 'User List',
				templateUrl: 'directives/listuser/listuser.html',
				controller: 'usersCrtl'
			})
			.when('/userprofile', {
				title: 'User Profile',
				templateUrl: 'directives/userprofile/userprofile.html',
				controller: 'profileCrtl'
			})
				.when('/home', {
					title: 'Home',
					templateUrl: 'directives/homepage/homepage.html',
					role: '0'
				})
				.otherwise({
					redirectTo: '/home'
				});
  }])
	.run(function ($rootScope, $location, Data) {
		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			$rootScope.authenticated = false;
            $rootScope.isAdmin=false;
			Data.get('session').then(function (results) {
				if (results.uid) {
					$rootScope.authenticated = true;
					$rootScope.uid = results.uid;
					$rootScope.fname = results.fname;
					$rootScope.email = results.email;
                    if(results.email=='samipnepal@gmail.com'){
                        $rootScope.isAdmin=true;
                    }
				} else {
					var nextUrl = next.$$route.originalPath;
					if (nextUrl == '/signup' || nextUrl == '/login') {

					} else {
						$location.path("/home");
					}
				}
			});
		});
	});