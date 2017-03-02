//Mocks and Test Data;
var currencyServiceData = "mock Service Data";
var productListServiceData = "mock Product List";
function mockCurrencyService ()
{
    this.CurrencyData = currencyServiceData;
}
function mockProductListService()
{
    this.ProductList = productListServiceData;
}


var controllerInjector = angular.injector(['ng', 'ProductData.Controllers']);

 var init = {
        setup: function() {
          this.$scope = controllerInjector.get('$rootScope').$new();
          var $controller = controllerInjector.get('$controller');
          $controller('MainController', {
              $scope: this.$scope,
              ProductConsolidationService: new mockProductListService(),
              CurrencyService:new mockCurrencyService()
          });
        }
      };

module('Controller Tests', init);

test('$scope properly populated', function(){
        
        ok(angular.equals(this.$scope.ProductList, productListServiceData),"ProductList properly populated" );
        ok(angular.equals(this.$scope.Currencies,currencyServiceData),"CurrencyData properly populated" );
      });            
