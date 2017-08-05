import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('article', params.article_id),
    });
  },

  setupController(controller, models) {
    controller.set('article', models.article);
  },
});
