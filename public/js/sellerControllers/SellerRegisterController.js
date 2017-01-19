/**
 * Created by hmh on 2016/12/18.
 */

var seller_register = angular.module('regCtrl',[]);
seller_register.controller('regCtrl',function($scope,$http,$location) {
    //TODO:添加button点击事件
    console.log("进入seller register");
    $scope.register = function () {
        data = {
            "shopname": $scope.th.seller.name,
            "phonenum": $scope.th.seller.phone,
            "password": $scope.th.seller.password,
            "city": $scope.th.seller.city,
            "postcode": $scope.th.seller.postcode,
            "shippingaddress": $scope.th.seller.address
        }
        console.log(data)
        $http.post("http://localhost:8080/api/seller/register", data).success(function (response){
            console.log("enter seller register get");
            $location.path("/sellerLogin");
        });
    };
});