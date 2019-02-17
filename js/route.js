/*
Ben Williams-Van Zant
citpt-175-60
sales app
*/
app.config(function($routeProvider){
    $routeProvider
        //tell route to load the home template on load and when url is directed to a /
        .when('/',{
            templateUrl: 'templates/home.html',
            controller: 'salesCtrl'
        })
        //tell route to direct to the add template when url has /add
        .when('/add',{
            templateUrl: 'templates/add.html',
            controller: 'salesCtrl'
        })
        //tell route to direct to the list template when url has /list
        .when('/list',{
            templateUrl: 'templates/list.html',
            controller: 'salesCtrl'
        })
        //tell route to direct to the products template when url has /products
        .when('/products',{
            templateUrl: 'templates/products.html',
            controller: 'salesCtrl'
        })
        //tell route to direct to the products_add template when url has /products_add
        .when('/product_add',{
            templateUrl: 'templates/product_add.html',
            controller: 'salesCtrl'
        })
        //tell route if any weird url call is cast go to home template
        .otherwise({
            templateUrl: 'templates/home.html',
            controller: 'salesCtrl'
        });
});
