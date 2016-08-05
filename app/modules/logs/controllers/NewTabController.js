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
            alert('i\'m a teapot');
        };


        $scope.test = "test";
    }

    module.exports = NewTabController;

})();
