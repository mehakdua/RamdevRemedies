 //angular.module('starter')
 
app
.controller("UserController", function($scope, $stateParams,$ionicPopover,UserService, $sce) {
  $ionicPopover.fromTemplateUrl('../templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  function init(){
    UserService.getUrl().then(function(response){
     $scope.user = response.data;
     $scope.src ="img/img1.jpg";
     console.log(  $scope.user);
      console.log( UserService.getData(0));
    });
   //$scope.user = UserService.getData(0);
  }
   $scope.trustSrc = function(src) {
    var url = src.replace("watch?v=", "v/");
    return $sce.trustAsResourceUrl(url);
  }
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
  init();
});
