import Ember from 'ember';

export default Ember.Controller.extend({
      recipeSort: ['title:asc'],
      sortedRecipes: Ember.computed.sort('model.recipe', 'recipeSort'),
      firstTenRecipes: Ember.computed.filter('sortedRecipes', function (recipe, index) {
        return (index < 10);
      }),
      actions: {
        filterByPromoted(param) {
          if (param !== '') {
            return this.get('store').query('recipe', {

              page: {
                limit: 3,
              }

            });
            //    return Ember.Controller.firstTenRecipes;
            //    return this.get('store').findAll('recipe');
          } else {
            return this.get('store').query('recipe', {

              page: {
                limit: 3,
              }

            });
          }
        }

      }
    });