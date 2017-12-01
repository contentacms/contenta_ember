import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      tag: this.store.findRecord('tag', params.tag_id),
      recipes:  this.store.query('recipe', {
        sort: "-createdAt",
        page: {
          limit: 30,
        }
      }),
    });
  },

  setupController(controller, models) {
    controller.set('tag', models.tag);
    controller.set('recipes', models.recipes);
  },
});
