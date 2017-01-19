/**
 * Created by hmh on 2016/12/22.
 */
var seller_login = angular.module('loginCtrl',[]);
seller_login.controller('loginCtrl',function($scope,$http,$location,isLogin) {
    //TODO:添加button点击事件
    console.log("进入seller login");
    $scope.login = function(){
        data = {
            "phonenum": $scope.seller.phonenum,
            "password": $scope.seller.password,
        }
        console.log(data)
        $http.post("http://localhost:8080/api/seller/login", data).success(function (response){
            if (!response.error){
                console.log("enter user login get");
                // $scope.showform = false;
                // $scope.showdiv = false;
                // $scope.hidediv = false;angu
                //window.location.href("http://localhost:8080/");
                isLogin.username =$scope.seller.phonenum;
                console.log("用户已登录："+isLogin.username);
                $location.path("/sellerCreate");
            }else{
                $location.path("/sellerLogin");
            }
        });
    };

});