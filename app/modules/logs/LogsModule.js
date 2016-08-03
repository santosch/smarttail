(function(angular) {

  'use strict';

  function LogsModule(config) {

    var moduleConfig = config;

    angular.module('electron-app')
      .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state(`${moduleConfig.state}`, {
            url: '/logs',
            views: {
              'module': {
                templateUrl: `${moduleConfig.path}/logs.html`
              },
              'header@app': {
                template: `${moduleConfig.label}`
              }
            }
          })
          .state(`${moduleConfig.state}.view`, {
            url: '/view',
            views: {
              'content': {
                templateUrl: `${moduleConfig.path}/views/logs.view.html`,
                controller: 'LogsViewController as ctl'
              }
            }
          });
      });

    var LogsViewController = require('./controllers/LogsViewController');
    angular.module('electron-app').controller('LogsViewController', ['$scope', '$state', '$q', LogsViewController]);
  }

  module.exports = LogsModule;

})(global.angular);
