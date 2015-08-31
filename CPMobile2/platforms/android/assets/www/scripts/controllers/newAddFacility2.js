'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('newAddFacility2Ctrl', function ($scope,productService,$http,$location,$timeout,$rootScope,productService2,productService3) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
    $scope.timemills = productService2.getProduct();
    
    $scope.product = productService.getProduct();
    
    /*-------------------------------------*/
    
    
    
/*-------------------------------------*/

     var dateObj = new Date();
    $scope.currMonth = dateObj.getFullYear() + "-" + (dateObj.getMonth()+1)  
    $scope.currDate = (dateObj.getMonth()+1)+"-"+dateObj.getDate()+"-"+dateObj.getFullYear()
   
  $(".responsive-calendar").responsiveCalendar({
          time: $scope.currMonth,
          
          onDayClick: function(currDate1) {
              
            // Do something... 
       
       /*------------------------*/
        $scope.currDate= currDate1
       
       var z=currDate1.split('-');                 
           
       var dateClick = new Date(z[2],z[0]-1,z[1])
     
                    
       var dateNow = new Date();
        dateNow.setHours(0,0,0,0); 
      
      /*------------------------*/  
          var s =  dateClick.getTime()-dateNow.getTime()
         
         /*------------------------*/         
             
        if(s<=$scope.timemills && s>=0){
                                 
      $http.get($rootScope.url+'FacilityBooking/FacilityBookingCondition?facilityDescription='+$scope.product.description+'&date='+ $scope.currDate+'&facilityId='+$scope.product.id).success(function (data) {
    
     var s = data;
        
   
     if(s==1){
     
     
     $http.get($rootScope.url+'FacilityBooking/GetFacilityAvSession?FacilityDescription='+$scope.product.description+'&date='+$scope.currDate+'&facilityId='+$scope.product.id).success(function (data) {
     
   $scope.data1 = data
   for(var i=0;i<$scope.data1.length;i++){ 
       
       var s1= $scope.data1[i].timeFrom.substring(0, 2)
       var s2= $scope.data1[i].timeFrom.substring(3, 5)
       var s3= $scope.data1[i].timeFrom.substring(6, 8)
       var s4= $scope.data1[i].timeTo.substring(0, 2)
       var s5= $scope.data1[i].timeTo.substring(3, 5)
       var s6= $scope.data1[i].timeTo.substring(6, 8)
       var s = new Date(1995, 11, 17,s1, s2,s3);
       var e = new Date(1996,11,17,s4,s5,s6);
        $scope.data1[i].timeFrom = s;
        $scope.data1[i].timeTo =e;
   
   }
    
	});
     
     
     
     
     
     
     
     }else{
     
     $('#myModal1').modal('show')
     
     }
    
	}); 
              
              
        }else{
        
         $('#myModal2').modal('show')
        
        
        }
              
              
              
              

              
          }   
    });
    
/*-------------------------------------*/
      $scope.go=function(item){

productService.addProduct(item);
   
productService2.addProduct($scope.product)
productService3.addProduct($scope.currDate)
   
 if(item.active){
  $location.path("/facility_form")} else{
  $location.path("/new_Add_Facility2")
  }

      
  }  
    
       });