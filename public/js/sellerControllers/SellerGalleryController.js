/**
 * Created by hmh on 2016/12/16.
 */

var gallery = angular.module('GalleryCtrl',[]);
gallery.controller('GalleryCtrl',function($scope,$http,isLogin,$location) {
    //TODO:添加button点击事件
    console.log("进入gallery");
    //var shopName = "aaa";
    if (isLogin.username!=null){
        console.log("当前用户为："+isLogin.username);
        $http.get("http://localhost:8080/api/seller/products/"+isLogin.username).success(function (response){
            $scope.products = response.products;
            console.log("商品列表长度："+response.products.length)
        });
    }else {
        alert("请先登录！");
        $location.path("/sellerLogin");
    }
});
