angular.module('condoPortalAppApp')
  .service('WebService', ['$http', function ($http){

      this.getService = function (url, successCallback, failCallback){

        $http.get(url).
          success(function(data, status, headers, config) {
            successCallback(data);
          }).
          error(function(data, status, headers, config) {
            failCallback(data);
        });

      };

      this.deleteService = function (url, successCallback, failCallback){

        $http.delete(url).
          success(function(data, status, headers, config) {
            successCallback(data);
          }).
          error(function(data, status, headers, config) {
            failCallback(data);
        });

      };

  }]
);