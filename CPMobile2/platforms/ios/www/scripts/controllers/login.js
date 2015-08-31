'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the condoPortalAppApp
 */

angular.module('condoPortalAppApp')
  .controller('LoginCtrl', function ($scope,$http,$location,$timeout,$rootScope) {

    $rootScope.isLoginPage = true;
    $rootScope.imgSrc = null;

 $scope.find = function(){
    $http.get($rootScope.url+'Property/GetPropertyDescription').success(function (data) {
     
   $scope.todos = data
    
	});
                         }

    function onDeviceReady(){
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

    // View Actions
    
    
var selectedItem 
  
    
 $scope.change=function(s){
 
selectedItem = s;
$(".addFacility-Facility").find('.selection').text(selectedItem).val(selectedItem);
    $scope.selectedItem =s;    
}  
    
      


    $scope.login = function () {
       
      if ($scope.request.UniqueName.length > 0 && $scope.request.Password.length > 0) {

         $scope.request.PropertyDescription =  $scope.selectedItem
         
         $http({
        method  : 'POST',
        url     : $rootScope.url+'Login/UserLogin',
        data    : $.param($scope.request),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function(data, status, headers, config) {
             
             
             
           $rootScope.imgSrc = $rootScope.url+'Property/GetPropertyImage' 
          
            $location.path('/main')
        })
        .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
     console.log("fail")
     //console.log(data);
     $('#myModal1').modal('show')
     
    
  });   
         
      }else{
        $(".modal-content").removeClass("panel-danger").addClass("panel-warning");
        $scope.errorMessage = "Please keyin both User ID & Password.";
        $("#loginModal").modal("show");
      }

    }

  });
