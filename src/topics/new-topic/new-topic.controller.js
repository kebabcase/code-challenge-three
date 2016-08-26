(() => {
  'use strict';

  class NewTopicController {
    constructor(Topic, Post) {
      this.Topic = Topic;
      this.Post = Post;

      this.topic = this.post = {};
    }

    createNewTopic() {
      this.topic.personId = this.post.personId = this.currentUser.id;

      this.createTopic(this.topic)
        .then(this.afterCreateTopic.bind(this))
        .then(this.findTopics.bind(this));
    }

    createTopic(topic) {
      return this.Topic.create(topic).$promise;
    }

    afterCreateTopic(result) {
      if (!this.newTopicModal) {
        this.newTopicModal = $('.new-topic-modal');
      }

      this.newTopicModal.closeModal();

      this.post.topicId = result.id;

      return this.createPost(this.post);
    }

    createPost(post) {
      return this.Post.create(post).$promise;
    }
  }

  NewTopicController.$inject = ['Topic', 'Post'];

  angular.module('webForum')
    .controller('NewTopicController', NewTopicController);
})();
