 //angular.module('starter')
 
app.controller("UserDetailController", function($scope, $stateParams,detail,UserService) {
  function init(){
  	$scope.category  = $stateParams.category;
       $scope.obj ={searchTxt:''};
    // UserService.getUrl().then(function(response){
     $scope.user = UserService.getData();
     $scope.src ="img/img1.jpg";
     console.log(  $scope.user);
      console.log( UserService.getData(0));
  //  });
  }
  $scope.clearText = function(){
    console.log("clearText");
     $scope.obj.searchTxt ="";
  }
  init();
});
