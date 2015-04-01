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
      function DialogController(scope, $mdDialog, $facebook, $rootScope, GooglePlus) {
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
				      	console.log(meRes);
				        $rootScope.user = {
	        				auth_origin_oauth_token: loginRes.authResponse.accessToken,
	        				auth_origin_name: 'facebook',
	        				email: meRes.email,
	        				full_name: meRes.name,
	        				last_name: meRes.last_name,
	        				first_name: meRes.first_name,
	        				mobile_phone_number: '+' + ''
						};
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

            GooglePlus.getUser().then(function (user) {
                console.log(user);
            });
        }, function (err) {
            console.log(err);
        });
        };
      }
  	}
  });
