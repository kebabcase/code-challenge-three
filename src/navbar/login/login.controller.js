(() => {
  'use strict';

  class LoginController {
    constructor($scope, Person, LoopBackAuth) {
      this.$scope = $scope;
      this.Person = Person;
      this.LoopBackAuth = LoopBackAuth;
    }

    onSubmit() {
      if (!this.loginModal) {
        this.loginModal = $('.login-modal');
      }

      this.login({ fields: this.login });
      this.loginModal.closeModal();
    }
  }

  LoginController.$inject = ['$scope', 'Person', 'LoopBackAuth'];

  angular.module('webForum.navbar')
    .controller('LoginController', LoginController);
})();
