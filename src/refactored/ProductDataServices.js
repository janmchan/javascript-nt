var servicesModule = angular.module('ProductData.Services', []);

servicesModule.service('ProductConsolidationService',function(ProductDataService)
{
    var ProductList = [];

    function populateProduct(products){
            products.forEach(function(item) {
                ProductList.push(item);
            })
    }
    populateProduct(ProductDataService.LawnmowerData);
    populateProduct(ProductDataService.PhoneCaseData);
    populateProduct(ProductDataService.TshirtData);

    this.ProductList = ProductList;
});


servicesModule.service('ProductDataService',function(LawnmowerRepository,PhoneCaseRepository, TShirtRepository)
{
    this.LawnmowerData = LawnmowerRepository.getAll();
    this.PhoneCaseData = PhoneCaseRepository.getAll();
    this.TshirtData = TShirtRepository.getAll();
});

servicesModule.service('CurrencyService',function(CurrencyRepository)
{
    this.CurrencyData = CurrencyRepository.getAll();
});