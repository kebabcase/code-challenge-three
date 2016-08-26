(() => {
  'use strict';

  class TopicsController {
    constructor($rootScope, $scope, $timeout, Topic) {
      this.$timeout = $timeout;
      this.Topic = Topic;

      this.topics = [];

      $scope.$watch(() => $rootScope.currentUser, (currentUser) => {
        this.currentUser = currentUser;
      });

      this.findTopics();
    }

    findTopics() {
      const filter = {
        filter: { include: 'person' }
      };

      this.Topic.find(filter, (result) => {
        this.topics = result;
      });
    }

    goToPost(postId) {
      this.$timeout(() => {
        location.hash = `#/post/${postId}`;
      });
    }

    openNewTopicModal() {
      if (!this.newTopicModal) {
        this.newTopicModal = $('.new-topic-modal');
      }

      this.newTopicModal.openModal();
    }
  }

  TopicsController.$inject = ['$rootScope', '$scope', '$timeout', 'Topic'];

  angular.module('webForum')
    .controller('TopicsController', TopicsController);
})();
