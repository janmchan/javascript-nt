var controllerModule = angular.module('ProductData.Controllers', []);

controllerModule.controller("MainController", function($scope, ProductConsolidationService,CurrencyService)
{
    $scope.ProductList = ProductConsolidationService.ProductList;
    $scope.Currencies = CurrencyService.CurrencyData;
});
