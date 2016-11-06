(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'src/menu-list/components/category-items/category-items.component.template.html',
            bindings: {
                items: '<'
            }
        });

})();