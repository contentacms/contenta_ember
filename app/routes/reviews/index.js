import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      reviews:  this.store.query('review', {
        sort: "-createdAt",
        page: {
          limit: 10,
        },
        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('reviews', models.reviews);
  }
});
