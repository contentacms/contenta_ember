import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  isPromoted: DS.attr('boolean'),
  isPublished: DS.attr('boolean'),
  path: DS.attr('string'),
  difficulty: DS.attr('string'),
  ingredients: DS.attr(),
  instructions: DS.attr('string'),
  internalId: DS.attr(),
  numberOfServices: DS.attr('string'),
  preparationTime: DS.attr('string'),
  totalTime: DS.attr(),
  reviews: DS.hasMany('review'),
  tags: DS.hasMany('tag'),
  texts: DS.attr('string'),
  // recipe category
  category: DS.belongsTo('category'),
  category_name: DS.belongsTo('category'),
  // recipe image
  image: DS.belongsTo('image'),
  // category image
  category_image: DS.belongsTo('image')
});
