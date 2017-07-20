import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('recipe', params.recipe_id),
    });
  },

  setupController(controller, models) {
    controller.set('recipe', models.recipe);
  },
});
