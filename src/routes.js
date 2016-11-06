(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menu-list/templates/home.template.html'
    })
    .state('categoriesList', {
      url: '/categories',
      templateUrl: 'src/menu-list/templates/categories.template.html',
      controller: 'MenuCategoriesController as vm',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categoriesList.categoryItems', {
      url: '/items/{shortName}',
      templateUrl: 'src/menu-list/templates/category-items.template.html',
      controller: "CategoryItemsController as categoryDetail",
      resolve: {
        categoryItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
}

})();
