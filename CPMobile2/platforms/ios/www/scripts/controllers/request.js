'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:RequestCtrl
 * @description
 * # RequestCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('RequestCtrl', function ($scope,$http,$location,productService,$rootScope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //var total=0
    var s = 20;//first load 20 data
    $scope.status = { 
      "type": "select", 
      "name": "Service",
      "value": "All", 
      "values": [ "All", "Pending", "Acknowledged","Completed","Rejected"]};
    
//     $http.get($rootScope.url+'ServiceRequest/GetAllRequestsByUserId').success(function (data, status, headers, config) {
//     
//               total = data.length    
//              
//	})
//          .error(function(data, status, headers, config) {
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.  
//         $location.path('/request')
//  });  
    
$scope.go = function(item) {		
      productService.addProduct(item);
	  $location.path('/about')

  
};
    
$scope.loadMore = function() {

          $http.get($rootScope.url+"ServiceRequest/ServiceRequestListScroll?startList="+s).success(function (data, status, headers, config) {
     
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
    
$scope.search2 = function(){
	  
    if($scope.status.value!="All"){
        
	  var url =$rootScope.url+'ServiceRequest/GetRequestsByStatus?statusDisplayName='+$scope.status.value

	  $http.get(url).success(function (data, status, headers, config) {               
      $scope.todos = data
      
	}).error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.  
         $location.path('/request')
  });}else{
          
    $http.get($rootScope.url+"ServiceRequest/ServiceRequestListScroll?startList="+s).success(function (data, status, headers, config) {
        
     $scope.todos = data
     
	});
         
      
    }
   };

  });
