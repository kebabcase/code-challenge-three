(() => {
  'use strict';

  angular.module('webForum.navbar')
    .component('webForumNavbar', {
      controller: 'NavbarController',
      bindings: {
        currentUser: '='
      },
      templateUrl: 'navbar/navbar.tpl.html'
    });
})();
