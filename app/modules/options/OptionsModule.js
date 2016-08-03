(function(angular) {

  'use strict';

  function OptionsModule(config) {

    var moduleConfig = config;

    angular.module('electron-app')
      .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state(`${moduleConfig.state}`, {
            url: '/options',
            views: {
              'module': {
                templateUrl: `${moduleConfig.path}/options.html`
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
                templateUrl: `${moduleConfig.path}/views/options.view.html`,
                controller: 'OptionsViewController as ctl'
              }
            }
          });
      });

    var OptionsViewController = require('./controllers/OptionsViewController');
    angular.module('electron-app').controller('OptionsViewController', ['$scope', '$state', '$q', OptionsViewController]);
  }

  module.exports = OptionsModule;

})(global.angular);
