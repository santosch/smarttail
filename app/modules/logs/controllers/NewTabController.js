(function () {

    'use strict';

    function NewTabController($scope, $state, $q, PouchDBService) {

        var that = this;
        var db;

        const {dialog} = require('electron').remote;
        this.events = [];

        $scope.latestFiles = [];

        /**
         * Initializes the new tab page
         */
        this.initialize = function () {
            // Initialize Database
            PouchDBService.initialize('latestFiles').then((pouchdb) => {
                db = pouchdb;
                loadLatestFiles();
            });
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
                    that.openFile(fileName[0]);
                }
            );
        };

        /**
         * Loads a file
         * @param path
         */
        this.openFile = function(path) {
            db.put({
                _id: Date.now() + path,
                path: path,
                time: Date.now()
            }).then(function (result) {
                loadLatestFiles();
            })
            .catch(function (error) {
                console.log(error);
            });
            alert(path);
        };

        /**
         *
         */
        var loadLatestFiles = function() {
            // fetch all latest Files
            db.allDocs({
                include_docs: true,
                limit: 10,
                descending: true
            }).then(function (result) {
                $scope.$apply(function () {
                    $scope.latestFiles = result.rows;
                });
            }).catch(function (error) {
                console.log(error);
            });
        };


        $scope.test = "test";
    }

    module.exports = NewTabController;

})();
