angular.module('condoPortalAppApp')
  .service('MainService', function (){
      var JSONObj = [
        [
          {
            "icon" : "icon-ads",
            "label" : "Classified Ads",
            "view" : "ads"
          },
          {
            "icon" : "icon-contacts",
            "label" : "Useful Contacts",
            "view" : "contacts"
          },
          {
            "icon" : "icon-facility",
            "label" : "Facility Booking",
            "view" : "facility"
          }
        ],
        [
          {
            "icon" : "icon-feedback",
            "label" : "Feedback",
            "view" : "feedback"
          },
          {
            "icon" : "icon-help",
            "label" : "Help",
            "view" : "help"
          },
          {
            "icon" : "icon-lostfound",
            "label" : "Lost & Found",
            "view" : "lostfound"
          }
        ],
        [
          {
            "icon" : "icon-news",
            "label" : "News & Notices",
            "view" : "news"
          },
          {
            "icon" : "icon-profile",
            "label" : "My Profile",
            "view" : "profile"
          },
          {
            "icon" : "icon-request",
            "label" : "Service Request",
            "view" : "request"
          }
        ]
      ];

      this.getInitialData = function (){
        return JSONObj;
      };
  })
  .service('productService', function() {
  var product;

  var addProduct = function(newObj) {
      product = newObj;
  }

  var getProduct = function(){
      return product;
  }

  return {
    addProduct: addProduct,
    getProduct: getProduct
  }    

})
  .service('productService2', function() {
  var product;

  var addProduct = function(newObj) {
      product = newObj;
  }

  var getProduct = function(){
      return product;
  }

  return {
    addProduct: addProduct,
    getProduct: getProduct
  }    

})
  .service('productService3', function() {
  var product;

  var addProduct = function(newObj) {
      product = newObj;
  }

  var getProduct = function(){
      return product;
  }

  return {
    addProduct: addProduct,
    getProduct: getProduct
  }    

})
  .filter("nl2br", function($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
})
  .run(function($rootScope) {
    //$rootScope.url = 'http://192.168.201.87:9000/api/';
    $rootScope.url = 'http://10.10.3.108:9000/api/';
    
});