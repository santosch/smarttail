(function() {

  module.exports = {
    defaultModule: 'logs',
    modules: {
      logs: {
        path: 'modules/logs',
        name: 'LogsModule',
        url: '/app/logs/view',
        state: 'app.logs',
        label: 'Logs',
        icon: 'receipt'
      },
      options: {
        path: 'modules/options',
        name: 'OptionsModule',
        url: '/app/options/view',
        state: 'app.options',
        label: 'Options',
        icon: 'settings'
      }
    }
  };

})();
