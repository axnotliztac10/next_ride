'use strict';

angular.module('nextRide')
  .controller('NavbarCtrl', function ($scope, $mdDialog) {
    $scope.showDialog = showDialog;
    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-content>'+
           '    <md-list>'+
           '      <md-item>'+
           '       <div class="social fb" ng-click="fb()">Facebook</div>' +
           '      </md-item>'+
           '      <md-item>'+
           '       <div class="social gplus" ng-click="g()">Google+</div>' +
           '      </md-item>'+
           '    </md-list>'+
           '  </md-content>' +
           '  <div ng-show="never" class="md-actions">' +
           '    <md-button ng-click="closeDialog()">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </div>' +
           '</md-dialog>',
         locals: {},
         controller: DialogController
      });
      function DialogController(scope, $mdDialog, $facebook, $rootScope, GooglePlus, $http, $mdToast) {
        scope.closeDialog = function() {
          $mdDialog.hide();
        }

        scope.$on('fb.auth.authResponseChange', function() {
        	scope.closeDialog();
        });

        scope.fb = function () {
        	$facebook.login().then(function (loginRes) {
        		if (loginRes.status == 'connected') {
        			$facebook.api("/me").then(
				      function(meRes) {
				        $rootScope.user = {
	        				auth_origin_oauth_token: loginRes.authResponse.accessToken,
	        				auth_origin_name: 'facebook',
	        				email: meRes.email,
	        				full_name: meRes.name,
	        				last_name: meRes.last_name,
	        				first_name: meRes.first_name,
	        				mobile_phone_number: '+' + ''
						    };

                $http({
                  url: 'http://shift-passenger-api-dev.appspot.com/signup',
                  headers : {
                    'Content-Type': 'application/json',
                    'API-key': 'dce1f7d8944bbda2eed53a8b96d8fca5a88504e53bd480fe4b55026073fd53e9'
                  },
                  method: 'POST',
                  data: $rootScope.user
                }).success(function (res) {
                  $rootScope.user.authResponse = res;
                  $mdToast.show($mdToast.simple().content('Login successdully'));
                });
				      },
				      function(meError) {
				        alert("Error on login Facebook")
				    });
        		}
        	});
        };

        scope.g = function () {
        	GooglePlus.login().then(function (authResult) {
            console.log(authResult);

            GooglePlus.getUser().then(function (meRes) {
                $rootScope.user = {
                  auth_origin_oauth_token: authResult.access_token,
                  auth_origin_name: 'gplus',
                  email: meRes.email || '',
                  full_name: meRes.name,
                  last_name: meRes.family_name,
                  first_name: meRes.given_name,
                  mobile_phone_number: '+' + ''
                };

                $http({
                  url: 'http://shift-passenger-api-dev.appspot.com/signup',
                  headers : {
                    'Content-Type': 'application/json',
                    'API-key': 'dce1f7d8944bbda2eed53a8b96d8fca5a88504e53bd480fe4b55026073fd53e9'
                  },
                  method: 'POST',
                  data: $rootScope.user
                }).success(function (res) {
                  $rootScope.user.authResponse = res;
                  $mdToast.show($mdToast.simple().content('Login successdully'));
                });
            });
        }, function (err) {
            console.log(err);
        });
        };
      }
  	}
  });
