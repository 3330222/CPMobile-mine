'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('FeedbackCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting Default Values
    $scope.hasFeedback = true;
    $scope.feedbackFormHeader = "My Feedback";
    $scope.subject = "";
    $scope.message = "";

    $(".feedback-Category li a").click(function(){
      $(this).parents(".feedback-Category").find('.selection').text($(this).text());
      $(this).parents(".feedback-Category").find('.selection').val($(this).text());
    });

    $scope.goBack = function() {
      $(".collapse").collapse("hide");
      $scope.hasFeedback = true;
      $scope.feedbackFormHeader = "My Feedback";
      $scope.subject = "";
      $scope.message = "";
    };

    $scope.createNewFeedback = function() {

      $(".feedbaclList-DeleteItem").removeClass("ng-show").addClass("ng-hide");
      $(".feedbaclList-EditItem").removeClass("ng-show").addClass("ng-hide");

      $scope.hasFeedback = false;
      $scope.feedbackFormHeader = "New Feedback";
    };

    $scope.saveFeedback = function(){
      $(".collapse").collapse("hide");
      $scope.hasFeedback = true;
      $scope.feedbackFormHeader = "My Feedback";
      $scope.subject = "";
      $scope.message = "";
    };

    $scope.deleteItem = function(name) {
      $scope.closeOption(name);
    };

    $scope.editItem = function(name) {
      
      $(".feedbaclList-DeleteItem").removeClass("ng-show").addClass("ng-hide");
      $(".feedbaclList-EditItem").removeClass("ng-show").addClass("ng-hide");

      $scope.subject = $("a[name="+ name +"] .feedbaclList-Item h4").text();
      $scope.message = $("a[name="+ name +"] .closableData").text();

      $scope.hasFeedback = false;
      $scope.feedbackFormHeader = "Edit Feedback";
    };    

    $scope.rightSwipe = function(name){
      $scope.openOption(name);
    };

    $scope.leftSwipe = function(name) {
      $scope.closeOption(name);
    };

    $scope.openOption = function(val) {
      $("a[name="+ val +"] .feedbaclList-DeleteItem").removeClass("ng-hide").addClass("ng-show");
      $("a[name="+ val +"] .feedbaclList-EditItem").removeClass("ng-hide").addClass("ng-show");
    };

    $scope.closeOption = function(val) {
      $("a[name="+ val +"] .feedbaclList-DeleteItem").removeClass("ng-show").addClass("ng-hide");
      $("a[name="+ val +"] .feedbaclList-EditItem").removeClass("ng-show").addClass("ng-hide");
    };
    
  });
