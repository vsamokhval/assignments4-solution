(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menu-list/components/categories/categories.component.template.html',
            bindings: {
                categories: '<'
            }
        });

})();