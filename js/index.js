/*
Ben Williams-Van Zant
citpt-175-60
sales app
*/
let app = angular.module("salesQuarter", ['firebase','ngRoute']);
app.controller("salesCtrl", function($scope, SalesList,ProductsList,$location) {
  //variables to hold the lists of products and salesman
  $scope.saleslist= SalesList.get(); 
  $scope.product= ProductsList.get();
  //objects to hold the salesman and product data
  $scope.newSalesman = {};
  $scope.newProduct = {};
  //function call that calls a function to add to and update the salesman list
  $scope.addSalesman = function() {
    SalesList.add($scope.newSalesman);
    $scope.salesList= SalesList.get();
    $location.path('/');
  };
  /*
  $scope.delete =function(id){
    SalesList.remove(id);
    $scope.salesList= SalesList.get();
  }
  */
 //function that sums up the values in each quarter
  $scope.qtotal = function() {
    var qt1 = 0;
    var qt2 = 0;
    var qt3 = 0;
    var qt4 = 0;
    angular.forEach(SalesList.get(), function(key, value) {
      qt1+= key.Q1;
      qt2+= key.Q2;
      qt3+= key.Q3;
      qt4+= key.Q4;
    });
    //have to return an array to return multiple values effeciently
    return[qt1,qt2,qt3,qt4];
  };
  //function call that calls a function to add to and update the products list
  $scope.addProduct = function() {
    ProductsList.add($scope.newProduct);
    $scope.ProductsList= ProductsList.get();
    $location.path('/');
  };
  /*
  $scope.product_delete =function(id){
    ProductsList.remove(id);
    $scope.ProductsList= ProductsList.get();
  }
  */
 //function that sums up the total of the products cost
  $scope.pricetotal = function() {
    var price = 0;
    var quantity = 0;
    var total = 0;
    angular.forEach(ProductsList.get(), function(key, value) {
      price= key.itemPrice;
      quantity = key.itemQuantity;
      //append to total here or value will be incorrect (scope)
      total += price * quantity;
    });
    return total;
  };
  //function that finds out how many items are in products list by quantity
  $scope.quantitytotal = function() {
    var quantity = 0;
    angular.forEach(ProductsList.get(), function(key, value) {
      quantity += key.itemQuantity;
    });
    return quantity;
  };
});