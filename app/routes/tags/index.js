import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      tags: this.store.query('tag',
        {
          sort: "-name",
        }

        )
    });
  },

  setupController(controller, models) {
    controller.set('tags', models.tags);
  }
});
