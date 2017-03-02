var repository;
var repositoryInjector;

//Mocks and Test Data
var LawnmowerRepository;
var PhoneCaseRepository;
var TShirtRepository;
var CurrencyRepository;

 var init = {
        setup: function() {
          angular.module('ProductData.Repositories').value('LawnmowerRepository', "LawnmowerRepository");
          angular.module('ProductData.Repositories').value('PhoneCaseRepository', "PhoneCaseRepository");
          angular.module('ProductData.Repositories').value('TShirtRepository', "TShirtRepository");
          angular.module('ProductData.Repositories').value('CurrencyRepository', "CurrencyRepository");
        repositoryInjector = angular.injector(['ng', 'ProductData.Repositories']);
        LawnmowerRepository = repositoryInjector.get('LawnmowerRepository');
        PhoneCaseRepository = repositoryInjector.get('PhoneCaseRepository');
        TShirtRepository = repositoryInjector.get('TShirtRepository');
        CurrencyRepository = repositoryInjector.get('CurrencyRepository');
        }
      };

module('Repository Test', init);

test('Repositories Properly Returned', function(){
      ok(angular.equals(LawnmowerRepository, "LawnmowerRepository"),"LawnmowerRepository is expected");
      ok(angular.equals(PhoneCaseRepository, "PhoneCaseRepository"),"PhoneCaseRepository is expected");
      ok(angular.equals(TShirtRepository, "TShirtRepository"),"TShirtRepository is expected");
      ok(angular.equals(CurrencyRepository, "CurrencyRepository"),"CurrencyRepository is expected");
});      