import Ember from 'ember';

export default Ember.Controller.extend({
    recipeSort: ['title:asc'],
    sortedRecipes:Ember.computed.sort('model.recipe', 'recipeSort'),
    firstTenRecipes: Ember.computed.filter('sortedRecipes', function(recipe, index) {
        return (index < 10);
    }),

    actions: {
        filterByCategory(param) {
            if (param !== '') {
               return this.get('store').query('recipe', {
                   filter: {
                       'category.name': { value: param}
                   },
                   page: {
                       limit: 4,
                   }
               });
            //    return Ember.Controller.firstTenRecipes;
            //    return this.get('store').findAll('recipe');
            } else {
                return this.get('store').query('recipe', {
                    filter: {
                        'category.name': { value: param}
                    },
                    page: {
                        limit: 4,
                    }
                });
            }
        }
    }
});
