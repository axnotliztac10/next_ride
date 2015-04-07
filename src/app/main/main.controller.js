'use strict';

angular.module('nextRide')
  .controller('FirstCtrl', function ($scope, $location, $rootScope) {
    $scope.cars = [
                {
                  title:'ECONOMY',
                  img:'assets/images/step1/car_Image_1.png',
                  price:80,
                  id:1
                },
                {
                  title: 'BUSINESS',
                  img:'assets/images/step1/car_Image_2.png',
                  price: 90,
                  id:2
                },
                {
                  title: '1ST CLASS',
                  img: 'assets/images/step1/car_Image_3.png',
                  price: 105,
                  id:3
                }
              ];

    $scope.go = function () {
      $rootScope.booking = $scope.booking;
      $location.path('/main/second');
    }

    $scope.onSave = function ($value) {
      $scope.datepicker = false;
      if ($value == -1) return;
      $scope.booking.date = $value
    }

  });

  angular.module('nextRide')
  .controller('SecondCtrl', function ($scope, $location, $rootScope) {
    $scope.booking = $rootScope.booking;

    $scope.next = function () {
      $location.path('/main/third');
    }

  });

  angular.module('nextRide')
  .controller('ThirdCtrl', function ($scope, $location, $rootScope) {
    $scope.booking = $rootScope.booking;
  });
  