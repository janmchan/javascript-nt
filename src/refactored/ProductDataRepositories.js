var repositoriesModule = angular.module('ProductData.Repositories', []);

repositoriesModule.value("LawnmowerRepository", new LawnmowerRepository());
repositoriesModule.value("PhoneCaseRepository", new PhoneCaseRepository());
repositoriesModule.value("TShirtRepository", new TShirtRepository());
repositoriesModule.value("CurrencyRepository", new CurrencyRepository());
