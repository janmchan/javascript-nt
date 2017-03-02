var service, serviceInjector, prdServiceInjector,ProductConsolidationService,productDataService;

//Mocks and Test Data

var mockCurrencyValue = "A";
var mockLawnmowerValue = "B";
var mockPhoneCaseValue = "C";
var mockTShirtValue = "D";
var mockProductValue = ["A","B","C"];

function MockCurrencyRepository() {
  this.getAll = function() {
    return mockCurrencyValue;
  }
}
function MockLawnmowerRepository() {
  this.getAll = function() {
    return mockLawnmowerValue;
  }
}
function MockPhoneCaseRepository() {
  this.getAll = function() {
    return mockPhoneCaseValue;
  }
}
function MockTShirtRepository() {
  this.getAll = function() {
    return mockTShirtValue;
  }
}


angular.module('ProductData.Repositories').value('CurrencyRepository', new MockCurrencyRepository());
angular.module('ProductData.Repositories').value('LawnmowerRepository', new MockLawnmowerRepository());
angular.module('ProductData.Repositories').value('PhoneCaseRepository', new MockPhoneCaseRepository());
angular.module('ProductData.Repositories').value('TShirtRepository', new MockTShirtRepository());

 var init = {
        setup: function() {
        serviceInjector = angular.injector(['ng', 'ProductData.Services', 'ProductData.Repositories']);

        currencyService = serviceInjector.get('CurrencyService');
        productDataService = serviceInjector.get('ProductDataService');

        
        }
      };

module('Service Test', init);

test('CurrencyData Properly Returned', function(){
      ok(angular.equals(currencyService.CurrencyData, mockCurrencyValue),"CurrencyData is expected");
});      
test('ProductDataService Properly Returned', function(){
      ok(angular.equals(productDataService.LawnmowerData, mockLawnmowerValue),"LawnmowerData is expected");
      ok(angular.equals(productDataService.PhoneCaseData, mockPhoneCaseValue),"PhoneCaseData is expected");
      ok(angular.equals(productDataService.TshirtData, mockTShirtValue),"TShirtData is expected");
});      


function MockProductService () {
  this.LawnmowerData = [mockLawnmowerValue];
  this.PhoneCaseData = [mockPhoneCaseValue];
  this.TshirtData = [mockTShirtValue];
}

var initPart2 = {
  setup: function (){
        angular.module('ProductData.Services').service('ProductDataService', MockProductService);
        prdServiceInjector = angular.injector(['ng', 'ProductData.Services', 'ProductData.Repositories']);
        ProductConsolidationService = prdServiceInjector.get('ProductConsolidationService');
        
  }
};
module('Service Test Consolidated', initPart2);
test('ProduceConsolidation Properly Returned', function(){
      ok(angular.equals(ProductConsolidationService.ProductList, [mockLawnmowerValue,mockPhoneCaseValue,mockTShirtValue]),"ProductList is expected");
});      
