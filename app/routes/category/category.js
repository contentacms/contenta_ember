import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
    });
  },

  setupController(controller, models) {
    controller.set('category', models.category);
  },
});
