'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AdsCtrl
 * @description
 * # AdsCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('AdsCtrl', ['$scope', '$rootScope', function ($scope, $rootscope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /***** Update Ads Category Dropdown *****/
    $(".ads-CategoryItems li a").click(function(){
      var selectedItem = $(this).text();
      $(".ads-Category").find('.selection').text(selectedItem).val(selectedItem);
  	});

    /***** Import Image *****/
    $scope.importImage = function(){
      
      $rootscope.cameraOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

      navigator.camera.getPicture(
        function(imgData){
          $scope.populateImage(imgData);
      }, function(errMessage){
          alert("Error in Capturing Img. " + errMessage);
      }, $rootscope.cameraOptions);

    }

    /***** Capture Image *****/
    $scope.captureImage = function(){
      
      $rootscope.cameraOptions.sourceType = Camera.PictureSourceType.CAMERA;

      navigator.camera.getPicture(
        function(imageURI){
          $scope.populateImage(imgData);
      }, function(errMessage){
          alert("Error in Capturing Img. " + errMessage);
      }, $rootscope.cameraOptions);

    }

    /***** Populate Image *****/
    $scope.populateImage = function(currImageData){
      $(".ads-PhotoImgsContent").append($("<img class = 'ads-photoImg' src = '" + currImageData + "'>"));
      $scope.$apply();
    }

  }]);
