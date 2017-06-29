 //angular.module('starter')
 
app.controller("RemdeyListController", function($scope, $stateParams,UserService) {
  function init(){
     $scope.obj ={searchTxt:''};
    console.log(UserService.getData());
  	$scope.remedies =  UserService.getData().remedies;
  }
  $scope.clearText = function(){
    console.log("clearText");
     $scope.obj.searchTxt ="";
  }
  init();
});
app.controller("RemdeyDetailController", function($scope, $stateParams,UserService) {
  function init(){
    var selectedRemedy =  $stateParams.selectedRemedy;
    $scope.remedy =  UserService.getData().remedies[selectedRemedy-1];
  }
  init();
});
