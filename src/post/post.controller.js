(() => {
  'use strict';

  class PostController {
    constructor($routeParams, Topic) {
      this.Topic = Topic;
      this.topic = null;

      this.getTopicPosts($routeParams.id);
    }

    getTopicPosts(id) {
      const filter = {
        id,
        filter: {
          include: { posts: 'person' }
        }
      };

      this.Topic.findById(filter).$promise.then((results) => {
        this.topic = results;
      });
    }
  }

  PostController.$inject = ['$routeParams', 'Topic'];

  angular.module('webForum')
    .controller('PostController', PostController);
})();
