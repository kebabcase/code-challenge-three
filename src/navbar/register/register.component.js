(() => {
  'use strict';

  angular.module('webForum.navbar')
    .component('webForumRegisterModal', {
      controller: 'RegisterController',
      bindings: {
        login: '&'
      },
      templateUrl: 'navbar/register/register.tpl.html'
    });
})();
