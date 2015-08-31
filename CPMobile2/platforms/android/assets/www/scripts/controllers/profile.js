'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $(".profile-GenderItems li a").click(function(){
	  $(this).parents(".profile-Gender").find('.selection').text($(this).text());
	  $(this).parents(".profile-Gender").find('.selection').val($(this).text());
	});

	$(".profile-TitleItems li a").click(function(){
	  $(this).parents(".profile-Title").find('.selection').text($(this).text());
	  $(this).parents(".profile-Title").find('.selection').val($(this).text());
	});

  });
