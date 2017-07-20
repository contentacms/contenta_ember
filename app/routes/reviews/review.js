import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      review: this.store.findRecord('review', params.review_id),
    });
  },

  setupController(controller, models) {
    controller.set('review', models.review);
  },
});
