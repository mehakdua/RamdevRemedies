 //angular.module('starter')
 
app.controller("RemdeyListController", function($scope, $stateParams,UserService) {
  function init(){
    console.log(UserService.getData());
  	$scope.remedies =  UserService.getData().remedies;
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
