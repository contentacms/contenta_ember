import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      theme: this.store.findRecord('theme', params.theme_id),
    });
  },

  setupController(controller, models) {
    controller.set('theme', models.theme);
  },
});
