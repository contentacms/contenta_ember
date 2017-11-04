import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        latestRecipes(param) {
            return this.get('store').query('recipe', {
                sort: "-updatedAt",
                sortAscending: false,
                category: param,
                page: {
                    limit: 4
                }
            });
        },

      filterByCategory(param) {
        if (param !== '') {
          return this.get('store').query('recipe', {
            filter: {
              'category.name': { value: param}
            },
            page: {
              limit: 4
            }
          });
        }
      }
    }

});
