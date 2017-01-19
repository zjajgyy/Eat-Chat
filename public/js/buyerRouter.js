
//index html angularJS route
var eatApp = angular.module('eatApp',['ngRoute','GalleryCtrl','DetailCtrl','CartCtrl','userregCtrl', 'userloginCtrl']);

eatApp.config(function($routeProvider){
    
    $routeProvider
        .when('/cake_gallery', {
            templateUrl : 'gallery.html',
            controller:"GalleryCtrl"
        })
        .when('/detail/:product_name', {
            templateUrl : 'detail.html',
            url:'/detail/',
            controller:'DetailCtrl'
        })
        .when('/service', {
            templateUrl : 'bestSales.html',
        })
        .when('/contact', {
            templateUrl : 'contact.html',
        })
        .when('/userLogin', {
            templateUrl : 'userLogin.html',
            controller : "userloginCtrl"
        })
        .when('/userRegister', {
            templateUrl : 'userRegister.html',
            controller : "userregCtrl"
        })
        .otherwise({redirectTo:'cake_gallery'});
});
//添加到购物车时共享数据
eatApp.factory("cartList",function(){
    var products = new Array();
    return{products:products};
});
//判断用户是否登录，用于订单处理
eatApp.factory("isLogin",function(){
    var username=null;
    return{username:username};
});


