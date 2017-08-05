import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      articles:  this.store.query('article', {
        sort: "-createdAt",
        page: {
          limit: 10,
        },
        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('articles', models.articles);
  }

});
