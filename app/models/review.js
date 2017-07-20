import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  updatedAt: DS.attr('string'), 
  createdAt: DS.attr('string'),
  isPublished: DS.attr('boolean'),
  name: DS.attr('string'),
  mail: DS.attr('string'),
  homepage: DS.attr('string'),
  hostname: DS.attr('string'),
  thread: DS.attr('string'),
  entityType: DS.attr('string'),
  fieldName: DS.attr('string'),
  body: DS.attr('string')
});
