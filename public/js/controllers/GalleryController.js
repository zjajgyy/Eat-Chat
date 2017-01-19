/**
 * Created by hmh on 2016/12/16.
 */

var gallery = angular.module('GalleryCtrl',[]);
gallery.controller('GalleryCtrl',function($scope,$http,cartList) {
    //TODO:添加button点击事件
    console.log("进入gallery");

    $http.get("http://localhost:8080/api/products").success(function (response){
        $scope.products = response.products;
    });

    $scope.addToCart = function (product) {
        alert("选择的商品是：" + product.name);
        //TODO:把用户选中的商品插入数据
        cartList.products.push(product);
        console.log("购物车数量="+cartList.products.length);
        //$http.post()
    };

});
