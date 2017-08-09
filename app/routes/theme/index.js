import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      themes: this.store.findAll('theme')
    });
  },

  setupController(controller, models) {
    controller.set('themes', models.themes);
  }
});
