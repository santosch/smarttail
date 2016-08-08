(function () {

    'use strict';

    function NewTabController($scope, $state, $q) {

        var that = this;

        const {dialog} = require('electron').remote;
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
                dialog.showOpenDialog({
                    title: "Select Logfile",
                    buttonLabel: "Load Logfile",
                    properties: ['openFile', 'showHiddenFiles']
                },
                function (fileName) {
                    that.openFile(fileName);
                }
            );
        };

        /**
         * Loads a file
         * @param path
         */
        this.openFile = function(path) {
            alert(path);
        };


        $scope.test = "test";
    }

    module.exports = NewTabController;

})();
