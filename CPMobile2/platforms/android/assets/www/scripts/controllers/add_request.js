'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AddRequestCtrl
 * @description
 * # AddRequestCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('AddRequestCtrl', function ($scope,$http,$location,$cordovaCamera,$timeout,$rootScope) {
var selectedItem;
$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
$scope.val=false; 
   $http.get($rootScope.url+'ServiceRequestType/GetServiceRequestType').success(function (data) {
     
   $scope.todos = data
    
	});

    
$scope.submit=function(){
      
$scope.val=true;
$scope.request.ImagesData1=$scope.imagedata1
$scope.request.ImagesData2=$scope.imagedata2
$scope.request.ImagesData3=$scope.imagedata3

        $http({
        method  : 'POST',
        url     : $rootScope.url+'ServiceRequest/NewServiceRequest',
        data    : $.param($scope.request),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function(data, status, headers, config) {
            
        $timeout(function(){$location.path('/request')}, 1000); 
        })
        .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
     
     $('#myModal4').modal('show')
    
    
  });   


}
//$scope.submit=function(){console.log("dddd")};
$scope.import=function(){
    var options= {    
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
 //   sourceType: Camera.PictureSourceType.CAMERA,
      targetWidth:320,
      targetHeight:320      
    };
    
    $cordovaCamera.getPicture(options).then(function(imageData) {
   
    if($scope.imgURI1==null)
    {
        $scope.imgURI1= "data:image/jpeg;base64,"+imageData;
        $scope.imagedata1=imageData
    }else if($scope.imgURI2==null)
    {$scope.imgURI2= "data:image/jpeg;base64,"+imageData;                                $scope.imagedata2=imageData
    }else if($scope.imgURI3==null)
    {$scope.imgURI3= "data:image/jpeg;base64,"+imageData;                                $scope.imagedata3=imageData
    }; 
    }, function(err) {
      // error
    });

}

$scope.camera=function(){


    var options= {    
      destinationType: Camera.DestinationType.DATA_URL,
    //  sourceType: //Camera.PictureSourceType.PHOTOLIBRARY,
    sourceType: Camera.PictureSourceType.CAMERA,
      targetWidth:320,
      targetHeight:320 ,    
    correctOrientation:true
    };
    
    $cordovaCamera.getPicture(options).then(function(imageData) {
 
    if($scope.imgURI1==null)
    {$scope.imgURI1= "data:image/jpeg;base64,"+imageData;
     $scope.imagedata1=imageData
    }else if($scope.imgURI1!=null&&$scope.imgURI2==null&&$scope.imgURI3==null)   {$scope.imgURI2= "data:image/jpeg;base64,"+imageData;                                $scope.imagedata2=imageData                                                                                }else if($scope.imgURI1!=null&&$scope.imgURI2!=null&&$scope.imgURI3==null)
    {$scope.imgURI3= "data:image/jpeg;base64,"+imageData;                                $scope.imagedata3=imageData};        
    }, function(err) {
      // error
    }         
    );
}
  });


