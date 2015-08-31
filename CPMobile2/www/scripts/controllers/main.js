'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  	.controller('MainCtrl',  function ($rootScope, $scope, MainService, $location,$http) {

	    $rootScope.isLoginPage = false;
	    $scope.mainPageIcons = MainService.getInitialData();

        $rootScope.logout = function(){

        $http.get($rootScope.url+'Logout/UserLogout').success(function (data) {
       
        $location.path("/login")                    
      
        
	});  
        
        
        }

});
