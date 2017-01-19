/**
 * Created by hmh on 2016/12/18.
 */
/**
 * Created by hmh on 2016/12/16.
 */

var uploadCtrl = angular.module('UploadCtrl',['ngFileUpload']);
uploadCtrl.controller('UploadCtrl',function($scope,$http,Upload,$location,isLogin) {
    //TODO:添加button点击事件
    console.log("进入upload");
    $scope.uploadProduct = function() {
        if ($scope.file)
            $scope.upload($scope.file);
        /*var username = "hmh";
        var name = $scope.product_name;
        var price = $scope.product_price;
        var detail = $scope.product_detail;
        console.log("name:"+name+"--price:"+price+"--filename:"+$scope.file.name);
        $http.post("http://localhost:8080/api/seller/uploadProduct",
            {username: username,name:name,price:price,detail:detail,saveUrl:$scope.file.name})
            .success(function (response){
            console.log("uploadProduct"+$scope.name);
            $location.path("/sellerGallery");
        });*/
    };
    $scope.upload = function (file) {
        var shop = isLogin.username;
        var name = $scope.product_name;
        var price = $scope.product_price;
        var detail = $scope.product_detail;
        var saveUrl = file.name;
        console.log("name:"+name+"--price:"+price+"--filename:"+saveUrl);
        if (shop!=null){
            Upload.upload({
                url: 'http://localhost:8080/api/seller/products',
                data: {shop: shop,name:name,price:price,detail:detail,saveUrl:saveUrl}
                /* file: $scope.file*/
            }).then(function (resp) {
                console.log('Success '  + 'uploaded. Response: ' + resp.data);
                $location.path("/sellerGallery");
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        }else {
            alert("请先登录！");
            $location.path("/sellerLogin");
        }

    }
});
