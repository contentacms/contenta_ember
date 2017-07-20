import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  isPromoted: DS.attr('boolean'),
  isPublished: DS.attr('boolean'),
  path: DS.attr('string'),
  body: DS.attr('string')
});
