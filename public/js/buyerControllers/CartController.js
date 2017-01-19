/**
 * Created by hmh on 2016/12/17.
 */
var cart = angular.module('CartCtrl',[]);

cart.controller('CartCtrl',function($scope,$http,cartList,isLogin) {
    //将订单存到数据库
    console.log("进入cartCtrl");
    $scope.productList = cartList.products;

    $scope.checkout = function () {
        var username = isLogin.username;
        console.log("当前用户为："+username);
        if (cartList.products.length!=0){
            angular.forEach(cartList.products,function (pro, index) {
                console.log("商品名称："+pro.name + pro.quantity);
            });
        }
        if (username!=null){
            if ($scope.productList.length >0){
                $http.post("http://localhost:8080/api/order/",{username:username,products:$scope.productList}).success(function (response){
                    console.log("存储order username= "+username+"products:"+$scope.productList);
                });
            }else{
                alert("您的购物车没有商品！")
            }
        }else {
            alert("请先登录系统！")
        }


    }
});
