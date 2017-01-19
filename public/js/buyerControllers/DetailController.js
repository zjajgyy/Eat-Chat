/**
 * Created by hmh on 2016/12/16.
 */
var detail = angular.module('DetailCtrl',[]);

detail.controller('DetailCtrl',function($scope,$http,$routeParams) {

    name = $routeParams.product_name;
    console.log("进入detail  name ="+name);
    $http.get("http://localhost:8080/api/products/"+name).success(function (response){
        product = response.product;
        console.log("product name = " + name + "======product length = "+product.length );
        $scope.description = product[0].detail;
        $scope.name = product[0].name;
        $scope.saveUrl = product[0].saveUrl
    });


});