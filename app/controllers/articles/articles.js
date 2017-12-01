import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByCategory(param) {
      if (param !== '') {
        return this.get('store').query('recipe', {
          filter: {
            'category.name': { value: param}
          },
        });
      } else {
        return this.get('store').findAll('recipe');
      }
    }
  }

});



