import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByPromoted(param) {
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
          'category.name': {value: 'Main course'}
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

    getThemeFour()
    {
//   Quick and easy: "&filter[totalTime][condition][path]=totalTime&filter[totalTime][condition][value]=20&filter[totalTime][condition][operator]=<
      return this.get('store').query('recipe', {
        filter: {
          'category.name': { value: 'Snack'}
        },
        page: {
          limit: 1
        }
      });
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
  }
});
