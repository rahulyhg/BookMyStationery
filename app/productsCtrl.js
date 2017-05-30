app.controller('productsCtrl', function($scope, $route, $rootScope, $routeParams, $location, $http, Data) {

    $scope.products = [
        {title:'Pen',image:'http://images.gawker.com/fnqwrgha8gnlft2c3sve/c_scale,fl_progressive,q_80,w_800.jpg', price:'$649.99' },
        {title:'Pencil',image:'http://www.bdart.ca/uploads/1/9/0/8/19082247/s783577103658538032_p135_i1_w600.jpeg', price:'$749.99'},
        {title:'Marker',image:'https://cdn.shopify.com/s/files/1/0192/3860/products/K-70_NewSingleBlk_Lo.jpg', price:'$449.99'},
        {title:'Marker',image:'https://cdn.shopify.com/s/files/1/0192/3860/products/K-70_NewSingleBlk_Lo.jpg', price:'$449.99'},
        {title:'Pencil',image:'http://www.bdart.ca/uploads/1/9/0/8/19082247/s783577103658538032_p135_i1_w600.jpeg', price:'$749.99'},
        {title:'Pen',image:'http://images.gawker.com/fnqwrgha8gnlft2c3sve/c_scale,fl_progressive,q_80,w_800.jpg', price:'$649.99' }
    ];

});