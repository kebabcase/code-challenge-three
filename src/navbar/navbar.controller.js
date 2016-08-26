(() => {
  'use strict';

  class NavbarController {
    constructor(Person, LoopBackAuth) {
      this.Person = Person;
      this.LoopBackAuth = LoopBackAuth;
      this.logo = 'Web Forum';
    }

    login(fields) {
      this.Person.login(fields, (response) => {
        this.LoopBackAuth.currentUserId = response.userId;
        this.LoopBackAuth.accessTokenId = response.id;
        this.LoopBackAuth.save();

        this.currentUser = response.user;
      });
    }

    logout() {
      this.Person.logout(() => {
        this.currentUser = null;
      }, () => {
        this.LoopBackAuth.clearStorage();
        this.currentUser = null;
      });
    }

    openLoginModal() {
      if (!this.loginModal) {
        this.loginModal = $('.login-modal');
      }

      this.hideButtonCollapse();
      this.loginModal.openModal();
    }

    openRegisterModal() {
      if (!this.registerModal) {
        this.registerModal = $('.register-modal');
      }

      this.hideButtonCollapse();
      this.registerModal.openModal();
    }

    hideButtonCollapse() {
      if (!this.buttonCollapse) {
        this.buttonCollapse = $('.button-collapse');
      }

      this.buttonCollapse.sideNav('hide');
    }
  }

  NavbarController.$inject = ['Person', 'LoopBackAuth'];

  angular.module('webForum.navbar')
    .controller('NavbarController', NavbarController);
})();
