(() => {
  'use strict';

  angular.module('webForum')
    .component('webForumTopicCard', {
      controller: () => {
        return this;
      },
      bindings: {
        topic: '<'
      },
      template: `<div class="card grey lighten-5">
        <div class="card-content grey-text text-darken-3">
          <div class="valign-wrapper">
            <div class="col s12 valign no-padding">
              <div class="col l4 m6 s12 truncate">
                {{ $ctrl.topic.title }}
              </div>
              <div class="col l3 m3 s6 truncate">
                {{ $ctrl.topic.person.fullname }}
              </div>
              <div class="col l2 truncate hide-on-med-and-down">
                Accusantium
              </div>
              <div class="col m3 s6 truncate">
                Oct 12th, 2015 @ 9:00pm
              </div>
            </div>
          </div>
        </div>
      </div>`
    });
})();
