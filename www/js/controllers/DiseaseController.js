 //angular.module('starter')
 
app.controller("DiseaseListController", function($scope, $state, $stateParams,UserService) {
  function init(){
    $scope.obj ={searchTxt:''};
  	$scope.diseases =  UserService.getData().diseases;
    console.log($scope.diseases);

  }
  $scope.clearText = function(){
    console.log("clearText");
     $scope.obj.searchTxt ="";
  }
  $scope.goBack = function() {
    $state.go('users');
}
  init();
});
app.controller("DiseaseDetailController", function($scope, $stateParams,UserService) {
  function init(){
    var selectedDisease =  $stateParams.selectedDisease;
    $scope.disease =  UserService.getData().diseases[selectedDisease-1];
  }
  $scope.OtherShare  = function(){
    console.log("share");
     var data = $scope.disease.title+"\n\n";
     if($scope.disease.causes.length > 0){
       data = data + "Cause\n\n"+$scope.disease.causes+"\n\n";
     }
      data = data +"\n";
     if($scope.disease.solutions.length > 0){
       data = data +"Solutions:\n\n"
       for(var i = 0;i< $scope.disease.solutions.length;i++){
          data = data + $scope.disease.solutions[i].detail+"\n\n";
       }
     }
      data = data +"\n";
    if($scope.disease.yoga.length > 0){
       data = data +"Yoga:\n\n"
         data = data + $scope.disease.yoga+"\n\n";
    }
    function htmlToPlaintext(text) {
       return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
    var message = htmlToPlaintext(data);
    window.plugins.socialsharing.shareViaWhatsApp(message, null /* img */, "https://gmail.com" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  };
  init();
});
