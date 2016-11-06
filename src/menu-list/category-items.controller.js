(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryItemsController', CategoryItemsController);


    CategoryItemsController.$inject = ['categoryItems'];
    function CategoryItemsController(categoryItems) {
        var vm = this;
        vm.categoryItems = categoryItems;
    }

})();