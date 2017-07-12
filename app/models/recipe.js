import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  isPromoted: DS.attr('boolean'),
  isPublished: DS.attr('boolean'),
  path: DS.attr('string'),
  difficulty: DS.attr('string'),
  ingredients: DS.attr('string'),
  instructions: DS.attr('string'),
  internalId: DS.attr(),
  numberOfServices: DS.attr('string'),
  preparationTime: DS.attr('string'),
  totalTime: DS.attr(),  
  category: DS.belongsTo('category'),
  image: DS.belongsTo('file'),
  reviews: DS.hasMany('review'),
  tag: DS.hasMany('tag')
});