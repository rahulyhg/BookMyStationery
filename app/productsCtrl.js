app.filter('productsFilter', function($rootScope) {
    return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        return [];
    }
});
app.controller('productsCtrl', function($scope, $timeout, $route, $rootScope, $routeParams, $location, $http, Data) {

    $scope.products = [
        {title:'Pen',image:'http://images.gawker.com/fnqwrgha8gnlft2c3sve/c_scale,fl_progressive,q_80,w_800.jpg', price:'$649.99' },
        {title:'Pencil',image:'http://www.bdart.ca/uploads/1/9/0/8/19082247/s783577103658538032_p135_i1_w600.jpeg', price:'$749.99'},
        {title:'Marker',image:'https://cdn.shopify.com/s/files/1/0192/3860/products/K-70_NewSingleBlk_Lo.jpg', price:'$449.99'},
        {title:'Marker',image:'https://cdn.shopify.com/s/files/1/0192/3860/products/K-70_NewSingleBlk_Lo.jpg', price:'$449.99'},
        {title:'Pencil',image:'http://www.bdart.ca/uploads/1/9/0/8/19082247/s783577103658538032_p135_i1_w600.jpeg', price:'$749.99'},
        {title:'Pen',image:'http://images.gawker.com/fnqwrgha8gnlft2c3sve/c_scale,fl_progressive,q_80,w_800.jpg', price:'$649.99' },
        {title:'Marker',image:'https://cdn.shopify.com/s/files/1/0192/3860/products/K-70_NewSingleBlk_Lo.jpg', price:'$449.99'}
    ];

    $scope.currentPage = 1; //current page
    $scope.entryLimit = 6; //max no of items to display in a page
    $scope.filteredItems = $scope.products.length; //Initially for no filter
    $scope.totalItems = $scope.products.length;
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.filter = function() {
        $timeout(function() {
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});