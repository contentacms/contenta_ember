import Ember from 'ember';

export default Ember.Controller.extend({
  recipeSort: ['title:asc'],
  sortedRecipes:Ember.computed.sort('model.recipe', 'recipeSort'),
  firstTenRecipes: Ember.computed.filter('sortedRecipes', function(recipe, index) {
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
    },

    featureRecipes(param) {
      return this.get('store').query('recipe', {
        category: param,
        page: {
          limit: 4
        }
      });
    },

    recipeTags(param) {
      if (param !== '') {
        return this.get('store').query('tag', {
          tags: param,
          page: {
            limit: 12
          }
        });
      } else {
        return this.get('store').query('tag', {
          page: {
            limit: 12,
          }
        });
      }
    },

    recipeThemes(param) {
      if (param !== '') {
        return this.get('store').query('theme', {
          themes: param,
          page: {
            limit: 12
          }
        });
      } else {
        return this.get('store').query('theme', {
          themes: {
            limit: 12,
          }
        });
      }
    }
  }

});