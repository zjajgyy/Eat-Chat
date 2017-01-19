/**
 * Created by hmh on 2016/12/18.
 */
//seller html angularJS route

var seller = angular.module('seller',['ngRoute','GalleryCtrl','UploadCtrl','regCtrl', 'loginCtrl']);

seller.config(function($routeProvider){

    $routeProvider
        .when('/sellerLogin', {
            templateUrl : 'sellerLogin.html',
            controller : "loginCtrl"
        })
        .when('/sellerRegister', {
            templateUrl : 'sellerRegister.html',
            controller: "regCtrl"
        })
        .when('/sellerCreate', {
            templateUrl : 'sellerProduct.html',
            controller:"UploadCtrl"
        })
        .when('/sellerGallery', {
            templateUrl : 'sellerProductGallery.html',
            controller:"GalleryCtrl"
        })
        .otherwise({redirectTo:'sellerLogin'});
});

//判断用户是否登录，用于订单处理
seller.factory("isLogin",function(){
    var username=null;
    return{username:username};
});