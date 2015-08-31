'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:FacilityCtrl
 * @description
 * # FacilityCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
	.controller('FacilityCtrl', function ($scope,productService, $rootScope, WebService, $location,$http) {
 //var total=0
 var s = 20;
// $http.get($rootScope.url+'FacilityBooking/FacilityBookingsByUserId').success(function (data, status, headers, config) {
//     
//                total = data.length       
//                     
//        }); 
    
    $scope.go = function(item) {		
           productService.addProduct(item); 
        
          $location.path('/facility_booking_detail')

          
          
    };   
    
    $scope.loadMore = function() {

          $http.get($rootScope.url+"FacilityBooking/FacilityBookingListScroll?startList="+s).success(function (data, status, headers, config) {
     
                $scope.todos = data       
                      
        }); 
        s+=5;
          
//          if(s<total){
//          s+=5;
//             
//          }else{
//          
//          s=s;
//          
//          }
         
  };

    
    

});
