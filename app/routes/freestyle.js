import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      recipes:  this.store.findAll('recipe'),
    });
  },

  setupController(controller, models) {
    controller.set('categories', models.categories);
    controller.set('recipes', models.recipes);
  }

});