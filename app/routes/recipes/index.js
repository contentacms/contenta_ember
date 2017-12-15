import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      tags: this.store.findAll('tag'),
      categories: this.store.findAll('category'),
      recipes:  this.store.findAll('recipe')
    });
  },

  setupController(controller, models) {
    controller.set('tags', models.tags);
    controller.set('categories', models.categories);
    controller.set('recipes', models.recipes);
  }
});
