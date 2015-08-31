'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:NewsdetailCtrl
 * @description
 * # NewsdetailCtrl
 * Controller of the testApp
 */
angular.module('condoPortalAppApp')
  .controller('NewsdetailCtrl', function ($scope,$http,productService,$location,$window,$rootScope) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.product = productService.getProduct();
    
    $http.get($rootScope.url+'Announcement/GetAnnouncementById?id='+$scope.product.id ).success(function (data) {
               $scope.todos = data             
	});
    
    
    /*this is the code if you want to download the attachment to sdcard*/
//    $scope.download=function(){       
//          
//         var url0='http://192.168.201.87:9000/api/announcement/DownloadPDF?files='+$scope.todos.files
//         var url=encodeURI(url0);
//         var targetPath = 'file:///storage/sdcard0/pdf/'+ $scope.todos.files;
//         var trustHosts = true
//         var options = {};
//   
//    $cordovaFileTransfer.download(url, targetPath, options,trustHosts)
//      .then(function(result) {
//        
//       console.log("success");
//       $window.alert("Download success!");
//      }, function(err) {
//        
//       console.log("err");
//       $window.alert("Error! Try again");
//       $location.path('/news');
//       
//      });
//         
//     };
    
    
    /*this is the code that online open using google drive*/
    /*note that since the real pdf is not published on the internet, so here I use a fake one to demonstrate*/
    /*for futher modification, once you get the url of the pdf in json obj, just copy and replace the http://www.i-drain.net/userfiles/file/einbauanleitung_iboard.pdf*/
    $scope.window = function(){
    var ref = window.open('http://docs.google.com/viewer?url=http://www.i-drain.net/userfiles/file/einbauanleitung_iboard.pdf', '_blank  ','location=yes'); 
    };
});
