'use strict';

angular.module('nextRide')
  .controller('FirstCtrl', function ($scope, $location) {
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
      return true;
    }

    $scope.$watchCollection('booking', function (val) {
      if (validateBooking(val)) {
        $location.path('/second');
      }
    });
  });
