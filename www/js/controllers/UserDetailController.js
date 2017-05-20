 //angular.module('starter')
 
app.controller("UserDetailController", function($scope, $stateParams,detail,UserService) {
  function init(){
  	$scope.category  = $stateParams.category;
     UserService.getUrl().then(function(response){
     $scope.user = response.data;
     $scope.src ="img/img1.jpg";
     console.log(  $scope.user);
      console.log( UserService.getData(0));
    });
  }
  init();
});
