'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:FacilityBookingDetailCtrl
 * @description
 * # FacilityBookingDetailCtrl
 * Controller of the testApp
 */
angular.module('condoPortalAppApp')
  .controller('FacilityBookingDetailCtrl', function ($scope,productService,$http,$location,$window,$rootScope,$timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $scope.product = productService.getProduct();
    $scope.val = true
    $scope.val2 = true

   $http.get($rootScope.url+'FacilityBooking/GetFacilityBookingById?Id='+$scope.product.id).success(function (data) {
     
                $scope.todos = data           
                
                var s = $scope.todos.facilityStatusDescription//cancel or not
                var z = $scope.todos.disallowCancel //how many hours before session start that i can make a cancel
                var zz = z*3.6e+6// in millisecond
               
                var w = $scope.todos.facilityTypeSessionStartTime//get session start time
                var d = new Date();//get now time
                var m = d.getTime();//now time to millisecond
                var x = d.getTime()+zz//now time plus how many hours before session start that i can make a cancel in millisecond
                var yy = new Date(w)//get session start time to date
                var y = yy.getTime();//get session start time to millisecond
                
                
                if(s =="CANCELLED")
                {
                $scope.val = false
                $scope.val2 = false          
                }else if(m>=y)//past successed booking
                {$scope.val = false
                $scope.val2 = false
                }else if(x>=y)//can not cancel if within disallow cancel
                {  $scope.val = false;$scope.val2 = true
                }else//else can make a cancel
                {
                $scope.val = true
                $scope.val2 = false      
                }
                    
                var q  = $scope.todos.facilityDescription
                if(q.indexOf("Tennis") > -1){
                $scope.todos.paymentMode = "Free"              
                }
	}); 
    
    
    $scope.show = function(){
    
        $('#myModal1').modal('show')
    }
    
    $scope.cancel = function(){
    
    $('#myModal1').modal('hide')
    
    
    $http.get($rootScope.url+'FacilityBooking/FacilityBookingCancel?id='+$scope.todos.id).success(function (data) {
                 
     $timeout(function(){$location.path('/facility')}, 500); 
	}); 
    
    
    }
    
  });
