
//index html angularJS route
var eatApp = angular.module('eatApp',['ngRoute','GalleryCtrl','DetailCtrl','CartCtrl']);

eatApp.config(function($routeProvider){
    
    $routeProvider
        .when('/cake_gallery', {
            templateUrl : 'gallery.html',
            controller:"GalleryCtrl"
        })
        .when('/detail/:product_name', {
            templateUrl : 'detail.html',
            /*url:'/detail/product_name',*/
            controller:'DetailCtrl'
        })
        .when('/service', {
            templateUrl : 'bestSales.html',
        })
        .when('/contact', {
            templateUrl : 'contact.html',
        })
        .otherwise({redirectTo:'cake_gallery'});
});


/*
//user html angularJS route
var user = angular.module('user',['ngRoute']);

user.config(function($routeProvider){
    
    $routeProvider
        .when('/userLogin', {
            templateUrl : 'userLogin.html',
        })
        .when('/userRegister', {
            templateUrl : 'userRegister.html',
        })
        .otherwise({redirectTo:'userLogin'});
});

//seller html angularJS route
var user = angular.module('seller',['ngRoute']);

user.config(function($routeProvider){
    
    $routeProvider
        .when('/sellerLogin', {
            templateUrl : 'sellerLogin.html',
        })
        .when('/sellerUpdate', {
            templateUrl : 'sellerUpdate.html',
        })
        .otherwise({redirectTo:'sellerLogin'});
});
*/


eatApp.factory("cartList",function(){
    var products = new Array();
    return{products:products};
 });