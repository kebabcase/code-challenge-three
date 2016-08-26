(() => {
  'use strict';

  angular.module('webForum', [
    'ngAnimate',
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'lbServices',
    'angular-redactor',
    'webForum.navbar'
  ]);

  angular.module('webForum')
    .config(['$routeProvider', ($routeProvider) => {
      $routeProvider
        .when('/topics', {
          templateUrl: 'topics/topics.tpl.html',
          controller: 'TopicsController'
        })
        .when('/post/:id', {
          templateUrl: 'post/post.tpl.html',
          controller: 'PostController'
        });

      $routeProvider
        .otherwise({
          redirectTo: '/topics'
        });
    }]);
})();
