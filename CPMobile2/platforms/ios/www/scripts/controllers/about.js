'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('AboutCtrl', function ($scope,productService,$http,$location,$timeout,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.product = productService.getProduct();

    var loopnum ; //this is for image number 
    $http.get($rootScope.url+'ServiceRequest/GetRequestsById?id='+$scope.product.id).success(function (data) {       
         $scope.todos = data
         loopnum = $scope.todos.serviceRequestAttachment.length;     
       
       if(loopnum==1){    
       
        $scope.imgSrc1 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[0];

           $scope.val1 = true;
           $scope.val2 = false;
           $scope.val3 = false;
            
       }else if(loopnum==2){
       
       
        $scope.imgSrc1 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[0];
       $scope.imgSrc2 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[1];
     
           $scope.val1 = true;
           $scope.val2 = true;
           $scope.val3 = false;
       
       }else if(loopnum==3){    
       
      $scope.imgSrc1 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[0];
           
       $scope.imgSrc2 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[1];
       $scope.imgSrc3 = $rootScope.url+'ServiceRequest/OpenImageOnBrowser?imageName='+$scope.todos.serviceRequestAttachment[2];


           $scope.val1 = true;
           $scope.val2 = true;
           $scope.val3 = true;    
       
       };
       
       
    }).error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
        location.path('/about')
        
        
  });
      
  });
