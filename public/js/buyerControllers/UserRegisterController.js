/**
 * Created by hmh on 2016/12/22.
 */
var user_register = angular.module('userregCtrl',[]);
user_register.controller('userregCtrl',function($scope,$http,$location) {
    //TODO:添加button点击事件
    console.log("进入user register");

    $scope.register = function(){
        data = {
            "phonenum": $scope.user.phonenum,
            "password": $scope.user.password
        }
        console.log(data)
        $http.post("http://localhost:8080/api/user/register", data).success(function (response){
            console.log(response);
            console.log("enter user register get");
            $location.path("/userLogin");
        });
    };


});