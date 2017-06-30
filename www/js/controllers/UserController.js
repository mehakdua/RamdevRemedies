 //angular.module('starter')
 
app
.controller("UserController", function($scope, $stateParams,$ionicPopover,UserService, $sce, $rootScope,$localStorage) {
  $ionicPopover.fromTemplateUrl('../templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  function init(){
     $scope.src ="img/img1.jpg";
      $rootScope.showLoader = true;
  /* if( navigator.connection.type == 'none'){
          $scope.user = $localStorage.data;
           UserService.setData($localStorage.data);
          $rootScope.showLoader = false;
          console.log("in");
     }else{*/
       UserService.getFlagApi().then(function(response){
          var flag = response.data.flag;
          if(flag == UserService.getFlag()){
             console.log("flag match");
               $scope.user = $localStorage.data;
               UserService.setData( $localStorage.data);
               $rootScope.showLoader = false;
          }else{
             console.log("api");
                 UserService.getUrl().then(function(response){
                 $scope.user = response.data;
                 $rootScope.showLoader = false;
                 UserService.setData( response.data);
                 UserService.setFlag(flag);
                });
          }
      });
 //  }
     
  }
   $scope.pauseVideo = function() {
    /*var iframes = document.getElementsByTagName("iframe");
        if (iframes != null) {
            for (var i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
            }
        }
*/
        document.getElementById('0').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
    
    }

    $scope.$on('$ionicView.beforeLeave', function(){
        $scope.pauseVideo();
    });

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
  var x ="html\ngg";
 console.log(x);
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
  $scope.$on('$destroy', function() {

    // anything here will be executed when this scope is destroyed.
});
  init();
});
