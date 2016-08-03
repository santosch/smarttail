(function() {

  module.exports = {
    defaultModule: 'options',
    modules: {
      logs: {
        path: 'modules/logs',
        name: 'LogsModule',
        url: '/app/logs/view',
        state: 'app.logs',
        label: 'Logs',
        tooltip: '',
        icon: 'receipt'
      },
      options: {
        path: 'modules/options',
        name: 'OptionsModule',
        url: '/app/options/view',
        state: 'app.options',
        label: 'Options',
        tooltip: '',
        icon: 'settings'
      }
    }
  };

})();
