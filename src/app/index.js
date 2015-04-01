'use strict';

angular.module('nextRide', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'main', 'mdDateTime', 'ngFacebook', 'googleplus'])
  .config(function ($stateProvider, $urlRouterProvider, $facebookProvider, GooglePlusProvider) {
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
		})
		.state('main.third', {
			url: '/third',
			templateUrl: 'app/main/third.html',
			controller: 'ThirdCtrl'
		});
	
	$facebookProvider.setAppId(649096295216181);
	$facebookProvider.setPermissions('email');

	GooglePlusProvider.init({
        clientId: '644096460143-5evkaal3iej4kkp3pq36hisfngjb10s0.apps.googleusercontent.com',
        apiKey: 'AIzaSyCC5Zs_D1q-RJy3I8hbDk6xxDuNlHZQS_s'
     });

    $urlRouterProvider.otherwise('/main/first');
  }).run(function () {
  	
  })
;
