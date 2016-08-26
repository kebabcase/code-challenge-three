(() => {
  'use strict';

  angular.module('webForum.navbar')
    .component('webForumLoginModal', {
      controller: 'LoginController',
      bindings: {
        login: '&'
      },
      templateUrl: 'navbar/login/login.tpl.html'
    });
})();
