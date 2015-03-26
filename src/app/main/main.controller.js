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
    var validateBooking = function (booking) {
      if (Object.keys(booking).length > 5) {
        $rootScope.booking = booking;
        return true;
      }
      return false;
    }

    $scope.$watchCollection('booking', function (val) {
      if (validateBooking(val)) {
        $location.path('/main/second');
      }
    });
  });

  angular.module('nextRide')
  .controller('SecondCtrl', function ($scope, $location, $rootScope) {
    $scope.booking = $rootScope.booking;
  });
