(() => {
  'use strict';

  class AppController {
    constructor($rootScope, Person, LoopBackAuth) {
      this.$rootScope = $rootScope;
      this.LoopBackAuth = LoopBackAuth;
      this.currentUser = null;

      $('.button-collapse').sideNav();
      $('.modal-trigger').leanModal();

      Person.getCurrent(this.updateUser.bind(this), this.onError.bind(this));
    }

    updateUser(event, currentUser) {
      this.$rootScope.currentUser = this.currentUser = currentUser;
    }

    onError(error) {
      this.LoopBackAuth.clearStorage();
      this.currentUser = null;
    }
  }

  AppController.$inject = ['$rootScope', 'Person', 'LoopBackAuth'];

  angular.module('webForum')
    .controller('AppController', AppController);
})();
