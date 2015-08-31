'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('newAddFacility1Ctrl', function ($scope,productService,$http,$location,$timeout,$rootScope,productService2) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
    
    
    
   $http.get($rootScope.url+'Facility/GetAllFacility').success(function (data) {
     
   $scope.todos = data
    
	}); 
    
    
    
    $scope.go=function(item){
        
        
         $http.get($rootScope.url+'Facility/GetLimitTimeByFacility?id='+item.id+'&facilityDescription='+item.description).success(function (data) {

   
    productService2.addProduct(data);

   
    productService.addProduct(item);
   
    $location.path('/new_Add_Facility2');
	}); 
        
    
    }
    
    
    
      });