// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','backand','ngStorage','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function(BackandProvider,$stateProvider, $urlRouterProvider,$sceDelegateProvider) {
        BackandProvider.setAppName('babaapp');
        BackandProvider.setSignUpToken('6fffd7d4-845e-4b15-b7ab-82e65d217bd5');
        BackandProvider.setAnonymousToken('cf630399-c47b-49aa-a741-ce3539775c9f');
        $stateProvider
            .state('shareIt', {
                url: '/shareIt',
                templateUrl: 'templates/shareIt.html'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'templates/users.html',
                controller: 'UserController'
            })
            .state('user-detail', {
              url: '/user-detail/:category',
              templateUrl: 'templates/userdetail.html',
              controller: 'UserDetailController',
              resolve: {
                  detail: function($stateParams){
                      console.log($stateParams.category);
                     return $stateParams.category;
                  }
              }
            })
            .state('remedy-list', {
              url: '/remedy-list',
              templateUrl: 'templates/remedyList.html',
              controller: 'RemdeyListController'
            })
            .state('remedy-detail', {
              url: '/remedy-detail/:selectedRemedy',
              templateUrl: 'templates/remedyDetail.html',
              controller: 'RemdeyDetailController',
              resolve: {
                  detail: function($stateParams){
                      console.log($stateParams.selectedRemedy);
                     return $stateParams.selectedRemedy;
                  }
              }
            })
            .state('disease-list', {
              url: '/disease-list',
              templateUrl: 'templates/diseaseList.html',
              controller: 'DiseaseListController'
            })
            .state('disease-detail', {
              url: '/disease-detail/:selectedDisease',
              templateUrl: 'templates/diseaseDetail.html',
              controller: 'DiseaseDetailController',
              resolve: {
                  detail: function($stateParams){
                      console.log($stateParams.selectedDisease);
                     return $stateParams.selectedDisease;
                  }
              }
            })
            
        $urlRouterProvider.otherwise('/users');
        $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
    });