app.controller('profileCrtl', function ($scope, $http, $timeout, $location, $rootScope, Data) {
    Data.get('session').then(function (results) {
        if (results) {
            Data.post('userProfile', {
                customer: results
            }).then(function (results) {
                $rootScope.profile = results;
                if (results.status == "success") {
                    $location.path('userprofile');
                }
            });
        }
    });
});