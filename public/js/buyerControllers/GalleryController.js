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
        console.log("选择的商品是：" + product.name);
       if (cartList.products.length!=0){
           console.log("测试"+cartList.products.length);
           var isContinue = true;
           angular.forEach(cartList.products,function (pro) {
               console.log("商品名称："+pro.name + product.name);
                   if (pro.name == product.name){
                       console.log("商品已存在，数量加1");
                       pro.quantity+=1;
                       console.log("商品数量:"+pro.quantity);
                       isContinue = false;
                   }
           });
           if (isContinue){
               console.log("添加新的商品");
               product.quantity = 1;
               cartList.products.push(product);
               isContinue = false;
           }
       }else{
           product.quantity = 1;
           cartList.products.push(product);
       }
        console.log("购物车数量="+cartList.products.length);

    };

});
