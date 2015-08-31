'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:FacilityFormCtrl
 * @description
 * # FacilityFormCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('FacilityFormCtrl', function ($scope,productService,productService2,productService3,$http,$timeout,$location,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.FacilityDescription=productService2.getProduct().description;   
$scope.SessionTime=productService.getProduct();  
var s =productService3.getProduct();
   var x =  s.split("-");
    var d = new Date(x[2],x[0]-1,x[1],0,0,0,0)
    $scope.Date = d       
    console.log(s);
    console.log(d);
    console.log($scope.Date);
    
 var z = productService2.getProduct().id 
 console.log(z);
     
//$scope.submit=function(){
//
//
//$scope.request.Date=$scope.Date;
//$scope.request.FacilityDescription=$scope.FacilityDescription;
//$scope.request.SessionStartTime=$scope.SessionTime.timeFrom.toLocaleString().substring(16,24)	  
//$scope.request.SessionEndTime=$scope.SessionTime.timeTo.toLocaleString().substring(16,24)	 
// $http({
//        method  : 'POST',
//        url     : $rootScope.url+'FacilityBooking/NewFacilityBooking',
//        data    : $.param($scope.request),  // pass in data as strings
//        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
//    })
//        .success(function(data,status, headers, config) {
//     console.log("success")
//     
//     
//     
//    // $('#myModal2').modal('show')
//     
//     
//     
//     //$timeout(function(){$location.path('/facility')}, 2500);
//        })
//       .error(function(data, status, headers, config) {
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.
//     console.log("fail")
//    // $('#myModal1').modal('show')
//    // $timeout(function(){$location.path('/facility')}, 2500);
//    
//  });
//
// $timeout(function(){$location.path('/facility')}, 2500);
//
//
//}

var dataObj = {
                FacilityDescription : $scope.FacilityDescription,
				Date: s,				SessionStartTime:$scope.SessionTime.timeFrom.toLocaleString().substring(16,24),	  
SessionEndTime: $scope.SessionTime.timeTo.toLocaleString().substring(16,24),
    FacilityId: z 
		};
$scope.submit=function(){

        $http.post($rootScope.url+'FacilityBooking/NewFacilityBooking', dataObj).success(function(data,status, headers, config) {
     console.log("success")
      
    // $('#myModal2').modal('show')
     
    $location.path('/facility');
        })
       .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
     console.log("fail")
     $('#myModal1').modal('show')
    // $timeout(function(){$location.path('/facility')}, 2500);
    
  });

//$timeout(function(){$location.path('/facility')}, 2500);

}


  });
