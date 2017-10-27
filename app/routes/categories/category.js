import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      recipes:  this.store.query('recipe', {
        sort: "-createdAt",
        page: {
          limit: 30,
        }
      }),
    });
  },

  setupController(controller, models) {
    controller.set('category', models.category);
    controller.set('recipes', models.recipes);
  },
});
