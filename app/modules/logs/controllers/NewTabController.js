(function () {

    'use strict';

    function NewTabController($scope, $state, $q) {

        this.events = [];

        /**
         * Initializes the new tab page
         */
        this.initialize = function () {
            console.log('test');
        };


        /**
         * opens a file select dialog
         */
        this.selectFile = function() {
            alert('test');
        };


        $scope.test = "test";
    }

    module.exports = NewTabController;

})();
