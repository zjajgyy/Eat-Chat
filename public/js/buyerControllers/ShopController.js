/**
 * Created by hmh on 2016/12/19.
 */
var gallery = angular.module('GalleryCtrl',[]);
gallery.controller('GalleryCtrl',function($scope,$http,cartList) {
    //TODO:添加button点击事件
    console.log("进入shop页面");

    $http.get("http://localhost:8080/api/products").success(function (response) {
        $scope.products = response.products;
    });
});