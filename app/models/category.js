import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  path: DS.attr('string'),
  weight: DS.attr(),
  recipe: DS.hasMany('recipe'),
  category_image: DS.belongsTo('image')
});
