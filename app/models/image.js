import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  imageFile: DS.belongsTo('file'),
  categoryImageFile: DS.belongsTo('file'),
  owner: DS.belongsTo('user'),
  thumbnail: DS.belongsTo('file'),
});
