'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:LostfoundCtrl
 * @description
 * # LostfoundCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('LostfoundCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".btn-group button").click(function(){
    	$(".btn-group button").removeClass("active");
    	$(this).addClass("active");
    });

  });
