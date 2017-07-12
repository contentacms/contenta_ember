import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    return Ember.String.dasherize(key);
  },
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }
});
