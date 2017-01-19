/**
 * Created by hmh on 2016/12/17.
 */
var cart = angular.module('CartCtrl',[]);

cart.controller('CartCtrl',function($scope,$http,cartList) {
    //将订单存到数据库
    console.log("进入cartCtrl");
    $scope.productList = cartList.products;
    $scope.checkout = function (products) {
        $http.post("http://localhost:8080/api/order/",{products:$scope.productList}).success(function (response){
            console.log("存储order = "+$scope.productList);
        });
    }
});
