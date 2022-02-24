(() => {
  angular.module('fj.app', []);

  angular
    .module('fj.app')
    .controller('mainController', _mainController);

  _mainController.$inject = [];
  function _mainController() {
    const main = this;
    main.firstName = 'Fast';
  }
})();
