(() => {
  'use strict';

  class RegisterController {
    constructor($scope, Person) {
      this.Person = Person;
    }

    onSubmit() {
      if (this.register.password !== this.confirm) {
        return Materialize.toast('Passwords do not match', 4000);
      }

      if (!this.registerModal) {
        this.registerModal = $('.register-modal');
      }

      this.Person.create(this.register, () => {
        Materialize.toast('Success!! Logging you in...', 4000);

        this.login({ fields: this.register });

        this.registerModal.closeModal();
      }, () => {
        Materialize.toast('You have already registered.', 4000);
      });
    }
  }

  RegisterController.$inject = ['$scope', 'Person'];

  angular.module('webForum.navbar')
    .controller('RegisterController', RegisterController);
})();
