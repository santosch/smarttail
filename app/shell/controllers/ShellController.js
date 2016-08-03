(function(angular) {

  'use strict';

  function ShellController($scope, $log, $q, $mdSidenav, $mdToast, modulesProvider) {

    var app = require('electron').remote.app;
    var appCfg = app.sysConfig();

    this.appName = `${appCfg.app.name} v${appCfg.app.version}`;
    this.modules = [];
    this.isBusy = false;
    this.statusMessage = '';
    this.isDirty = false;
    this.fabOpen = false;

    $scope.setBusy = (msg) => {
      $q.when(true).then(() => {
        this.isBusy = true;
        this.statusMessage = msg;
        this.isDirty = false;
      });
    };

    $scope.setReady = (dirty) => {
      $q.when(true).then(() => {
        this.isBusy = false;
        this.statusMessage = '';
        this.isDirty = dirty;
      });
    };

    $scope.notify = (title, message) => {

      $mdToast.show({
        template: `<md-toast><span flex>${message}</span></md-toast>`,
        position: 'bottom right',
        hideDelay: 2000
      });
    };

    this.initialize = function() {
      this.modules = modulesProvider.modules;
    };

    this.toggleFullscreen = function() {
      app.toggleFullscreen();
    };

    this.platform = function() {
      return appCfg.platform;
    };

    this.minimizeApp = function() {
      app.minimizeAppToSysTray();
    };

    this.closeApp = function() {
      app.close();
    };

    this.sendEvent = (event, arg) => {
      $q.when(true).then(() => {
        $scope.$broadcast(event, arg);
      });
    };

    this.toggleSidebar = function() {
      var pending = $q.when(true);
      pending.then(() => {
        $mdSidenav('sidebar').toggle();
      });
    };
  }

  module.exports = ShellController;

})(global.angular);
