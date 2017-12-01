import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByTag(param) {
      if (param !== '') {
        return this.get('store').query('recipe', {
          filter: {
            'tags.name': { value: param }
          }
        });
      } else {
        return this.get('store').findAll('recipe');
      }
    }
  }

});