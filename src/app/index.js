'use strict';

angular.module('nextRide', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'main', 'mdDateTime'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'app/main/main.html',
			abstract: true
		})
		.state('main.first', {
			url: '/first',
			templateUrl: 'app/main/first.html',
			controller: 'FirstCtrl'
		})
		.state('main.second', {
			url: '/second',
			templateUrl: 'app/main/second.html',
			controller: 'SecondCtrl'
		});;

    $urlRouterProvider.otherwise('/main/first');
  })
;
