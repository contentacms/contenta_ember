import Ember from 'ember';

export default Ember.Controller.extend({

  // provides variables for the application.hbs to use for conditional components and layout
  isIndexRoute: Ember.computed.equal('currentRouteName', 'index'),
  isRecipesRoute: Ember.computed.equal('currentRouteName', 'recipes.index'),
  isRecipeRoute: Ember.computed.equal('currentRouteName', 'recipes.recipe'),
  isFeaturesRoute: Ember.computed.equal('currentRouteName', 'articles.index'),
  isFeatureRoute: Ember.computed.equal('currentRouteName', 'articles.article'),
  isContactRoute: Ember.computed.equal('currentRouteName', 'contact'),
  isFreestyleRoute: Ember.computed.equal('currentRouteName', 'freestyle'),
  isLoginRoute: Ember.computed.equal('currentRouteName', 'login'),
  // A nicer way would be to have an array where I can list multiple routes
  // And see if it is currentRouteName
  // like:
  //isOneOfRoute: ['login', 'notfound', 'freestyle'].forEach(function(item) {
  //    console.log(item);
  //}),

  actions: {

    filterByPromoted(param){
      if (param !== '') {
        return this.get('store').query('recipe', {
          page: {
            limit: 3,
          }
        });
      } else {
        return this.get('store').query('recipe', {
          page: {
            limit: 3,
          }
        });
      }
    },

    getThemeOne(){
      //   Dinners to impress: Filter by category 'Main Dessert': "&filter[category.name][value]=Main course"
      return this.get('store').query('recipe', {
        filter: {
          'category.name': {value: 'Main course'},
          'difficulty': {value: 'hard'}
        },
        page: {
          limit: 1
        }
      });
    },

    getThemeTwo(){
        //   Learn to cook: "&filter[difficulty][value]=easy"
        return this.get('store').query('recipe', {
          filter: {
            'difficulty': { value: 'easy'}
          },
          page: {
            limit: 1
          }
        });
    },

    getThemeThree(){
      //   Baked up: "&filter[category.name][value]=Desert"
      return this.get('store').query('recipe', {
        filter: {
          'category.name': { value: 'Salad'}
        },
        page: {
          limit: 1
        }
      });
    },

    getThemeFour() {
//   Quick and easy: "&filter[totalTime][condition][path]=totalTime&filter[totalTime][condition][value]=20&filter[totalTime][condition][operator]=<
      return this.get('store').query('recipe', {
        filter: {
          'category.name': { value: 'Snack'},
          'preparationTime': { value: '10'},
          'totalTime': { value: '10'},
          'difficulty': { value: 'easy'},
        },
        page: {
          limit: 1
        }
      });
    },

    featureRecipes(param) {
      return this.get('store').query('recipe', {
        sort: "-updatedAt",
        sortAscending: false,
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
    }

  }

});
