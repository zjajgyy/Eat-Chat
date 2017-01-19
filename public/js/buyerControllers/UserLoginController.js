/**
 * Created by hmh on 2016/12/22.
 */
var user_login = angular.module('userloginCtrl',[]);
user_login.controller('userloginCtrl',function($scope,$http,$location,isLogin) {
    //TODO:添加button点击事件
    console.log("进入user login");
    $scope.login = function(){
        data = {
            "phonenum": $scope.user.phonenum,
            "password": $scope.user.password,
        }
        console.log(data)
        $http.post("http://localhost:8080/api/user/login", data).success(function (response){
            if (!response.error){
                console.log("enter user login get");
                // $scope.showform = false;
                // $scope.showdiv = false;
                // $scope.hidediv = false;angu
                //window.location.href("http://localhost:8080/");
                isLogin.username =$scope.user.phonenum;
                console.log("用户已登录："+isLogin.username);
                $location.path("/");
            }else{
                $location.path("/userLogin");
            }

        });
    };

});