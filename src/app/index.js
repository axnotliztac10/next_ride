'use strict';

angular.module('nextRide', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'main', 'mdDateTime'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'FirstCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
