app.controller('profileCrtl', function ($scope, $http, $timeout, $location, $rootScope, Data) {
    $rootScope.$on("getProfileMethod", function(event, data){
           $scope.getProfile(data);
        });
    /*Data.get('session').then(function (results) {
        if (results.uid) {
            Data.post('userProfile', {
                customer: results.email
            }).then(function (results) {
                $rootScope.profile = results;
                $scope.currentProfile = $rootScope.profile.email;
                if (results.status == "success") {
                    $location.path('userprofile');
                }
            });
        } else {
            $location.path("/home");
        }
    });*/

    $scope.getProfile = function (profile) {
        Data.post('userProfile', {
            customer: profile
        }).then(function (results) {
            $rootScope.profile = results;
            $scope.currentProfile = $rootScope.profile.email;
            if (results.status == "success") {
                $location.path('userprofile');
            }
        });
    }

    $scope.deleteUser = function (uid) {
        Data.post('deleteUser', {customer:uid}).then(function (results) {
            Data.toast(results);
            if (results.status == "info") {
                $scope.logout();
            }
        });
    }
});