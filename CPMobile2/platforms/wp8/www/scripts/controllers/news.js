'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('NewsCtrl', function ($scope,$http,$location,productService,$rootScope ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
//    var total=0 
    var s = 20;  //first loading num
//    $http.get($rootScope.url+ 'Announcement/GetAllAnnouncementsByStatus').success(function (data) { 
//      total = data.length
//        
//	});  
    
$scope.go = function(item){
 productService.addProduct(item);
 $location.path('/newsdetail')
};  
    
   
$scope.loadMore = function() {

     $http.get($rootScope.url+"Announcement/AnnouncementListScroll?startList="+s).success(function (data, status, headers, config) {
                $scope.todos = data                     
        });  
     s+=5;
//          if(s<total){//every time load 5 more data
//          s+=5;
//            
//          }else{
//          
//          s=s;
//          
//          }
         
  };
       
  });
